<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\MenuList;
use App\Models\User;
use App\Models\UserRoles;

class MenuController extends Controller
{
    public function getMenu(Request $request)
    {
        $email = $request->email;
        $user_role = $request->user_role;
        $user_role_res = UserRoles::where('key', '=', $user_role)->first();

        $email_res = User::where('email', '=', $email)->get();

        if (sizeof($email_res) > 0 && $email_res[0]->user_role_id == $user_role_res->id) {
            return $this->getMenuData($user_role_res->id);
        } else {
        }
        return $email_res;
    }

    public function getMenuData($user_role_id)
    {
        $menu = Menu::where('user_role_id', '=', $user_role_id)
            ->where('parentMenu', '=', 0)
            ->orderBy("order", "ASC")->get();
        foreach ($menu as $key => $value) {
            $menulist = MenuList::find($value->menu_list_id);
            $menu[$key]->link = $menulist->link;
            $menu[$key]->icon = $menulist->icon;
            $menu[$key]->label = $menulist->label;

            $sub_menu = Menu::where('user_role_id', '=', $user_role_id)
                ->where('parentMenu', '=', $value->id)
                ->orderBy("order", "ASC")->get();
            $sub_menu_count = $sub_menu != null ? $sub_menu->count() : 0;
            $menu[$key]->sub_menu = [];

            if ($sub_menu_count > 0) {
                foreach ($sub_menu as $sub_menu_key => $sub_menu_value) {
                    $submenu_list = MenuList::find($sub_menu_value->menu_list_id);
                    $sub_menu[$sub_menu_key]->link = $submenu_list->link;
                    $sub_menu[$sub_menu_key]->icon = $submenu_list->icon;
                    $sub_menu[$sub_menu_key]->label = $submenu_list->label;
                }
                $menu[$key]->sub_menu = $sub_menu;
            }
        }
        return response()->json(['data' => $menu]);
    }
}

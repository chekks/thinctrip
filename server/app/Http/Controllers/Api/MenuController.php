<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\MenuList;

class MenuController extends Controller
{
    public function getMenu($user_role)
    {
        $menu = Menu::get();
        foreach ($menu as $key => $value) {
            $menulist = MenuList::find($value->menu_list_id);
            $menu[$key]->link = $menulist->link;
            $menu[$key]->icon = $menulist->icon;
            $menu[$key]->label = $menulist->label;
        }
        return response()->json(['data' => $menu]);
    }
}

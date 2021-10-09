<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Menu;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //ADMIN
        Menu::create([
            'menu_list_id' => 1,
            'order' => 1,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 2,
            'order' => 2,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 3,
            'order' => 3,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 4,
            'order' => 4,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 5,
            'order' => 5,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 6,
            'order' => 6,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 7,
            'order' => 7,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 8,
            'order' => 8,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 9,
            'order' => 9,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 10,
            'order' => 10,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 11,
            'order' => 11,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 12,
            'order' => 12,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 13,
            'order' => 13,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 14,
            'order' => 14,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 15,
            'order' => 15,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 16,
            'order' => 16,
            'parentMenu' => 0,
            'usertype_id' => 1,
            'is_deleted' => 0
        ]);

        //CONTRIBUTOR

        //dashboard
        Menu::create([
            'menu_list_id' => 1,
            'order' => 1,
            'parentMenu' => 0,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        //profile
        Menu::create([
            'menu_list_id' => 20,
            'order' => 2,
            'parentMenu' => 0,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        //tour package
        // id 19
        Menu::create([
            'menu_list_id' => 10,
            'order' => 3,
            'parentMenu' => 0,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        //start of tour package sub menu
        Menu::create([
            'menu_list_id' => 27,
            'order' => 1,
            'parentMenu' => 19,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 28,
            'order' => 2,
            'parentMenu' => 19,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 29,
            'order' => 3,
            'parentMenu' => 19,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 30,
            'order' => 4,
            'parentMenu' => 19,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 31,
            'order' => 5,
            'parentMenu' => 19,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);



        //trips
        Menu::create([
            'menu_list_id' => 32,
            'order' => 4,
            'parentMenu' => 0,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 2,
            'order' => 5,
            'parentMenu' => 0,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 17,
            'order' => 6,
            'parentMenu' => 0,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);


        Menu::create([
            'menu_list_id' => 18,
            'order' => 7,
            'parentMenu' => 0,
            'usertype_id' => 2,
            'is_deleted' => 0
        ]);

        //VENDOR

        Menu::create([
            'menu_list_id' => 1,
            'order' => 1,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 19,
            'order' => 2,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 20,
            'order' => 3,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 2,
            'order' => 4,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 21,
            'order' => 5,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 6,
            'order' => 6,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 22,
            'order' => 7,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 23,
            'order' => 8,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 24,
            'order' => 9,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);


        Menu::create([
            'menu_list_id' => 25,
            'order' => 10,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);

        Menu::create([
            'menu_list_id' => 26,
            'order' => 11,
            'parentMenu' => 0,
            'usertype_id' => 3,
            'is_deleted' => 0
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserRoles;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserRoles::create([
            'key' => 'admin',
            'label' => 'User',
            'is_deleted' => 0
        ]);

        UserRoles::create([
            'key' => 'contributor',
            'label' => 'Contributor',
            'is_deleted' => 0
        ]);

        UserRoles::create([
            'key' => 'vendor',
            'label' => 'Vendor',
            'is_deleted' => 0
        ]);
    }
}

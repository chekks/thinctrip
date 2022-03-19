<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Destination;

class DestinationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Destination::create([
            'id' => 1,
            'name' => 'Baguio',
            'key' => 'baguio',
            'description' => "There is more to Baguio City than being just the Summer Capital of the Philippines. If not, then why do you think thousands of tourists endure the long hours of trip every summer or holiday only to step foot on the land of the well-known ‘City of Pines?’ Still wondering? Then, here are just some answers to your “Whys?”",
            'is_deleted' => 0,
        ]);

        Destination::create([
            'id' => 2,
            'name' => 'Siargao',
            'key' => 'siargao',
            'description' => "There is more to Baguio City than being just the Summer Capital of the Philippines. If not, then why do you think thousands of tourists endure the long hours of trip every summer or holiday only to step foot on the land of the well-known ‘City of Pines?’ Still wondering? Then, here are just some answers to your “Whys?”",
            'is_deleted' => 0,
        ]);

        Destination::create([
            'id' => 3,
            'name' => 'Manila',
            'key' => 'manila',
            'description' => "There is more to Baguio City than being just the Summer Capital of the Philippines. If not, then why do you think thousands of tourists endure the long hours of trip every summer or holiday only to step foot on the land of the well-known ‘City of Pines?’ Still wondering? Then, here are just some answers to your “Whys?”",
            'is_deleted' => 0,
        ]);
    }
}

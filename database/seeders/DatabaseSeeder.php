<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ticket;
use App\Models\Sale;
use App\Models\Game;
use App\Models\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();

        $this->call(GameSeeder::class);

        Ticket::factory(10)->create();

        Sale::factory(10)->create();
    }
}

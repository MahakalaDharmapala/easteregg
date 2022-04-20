<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Ticket;
use App\Models\User;

class SaleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()

    {

        return [

            'user_id' => User::inRandomOrder()->first()->id,

            'ticket_id' => Ticket::inRandomOrder()->first()->id,

            'quantity' => $this->faker->numberBetween(0,30),

            'mount' => $this->faker->numberBetween(299,1200),

            'created_at' => now(),

            'updated_at' => null

        ];

    }


}

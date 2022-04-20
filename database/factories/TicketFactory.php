<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Game;

class TicketFactory extends Factory
{
/**

     * Define the model's default state.

     *

     * @return array

     */

    public function definition()

    {

        return [

            'game_id' => Game::inRandomOrder()->first()->id,

            'date_purchase' =>$this->faker->dateTimeBetween('-2 weeks',now()),

            'batch' =>'50',

            'created_at'=>now(),

            'updated_at'=>null

        ];

    }
}

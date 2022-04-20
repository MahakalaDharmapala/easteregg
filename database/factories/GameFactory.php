<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()

    {

        return [

            'title' => $this->faker->name(), //DA UN NOMBRE DE PERSONA, EN ESTE CASO SOLO PARA TEST

            'platform' => $this->faker->company(), //NOMBRE DE UNA COMPAÑÍA

            'classification' => $this->faker->randomElement(['E','E+12','T','M','M+21','R']),

            'developer' => $this->faker->company(),

            'releaseDay' => $this->faker->dateTimeBetween('-5 years', now()), //Con fecha de 5 años para acá

            'sinopsis' => $this->faker->text(),  
            'genre' => $this->faker->randomElement([

                'Tipo Souls',

                'Plataforma',

                'RPG',

                'Accion',

                'Estrategia',

                'Simulacion',

                'Arcade',

                'Metroidvania']),

            'image' => $this->faker->imageUrl(640, 480, 'Game', true, null, false),

            'created_at' => now(),

            'updated_at' => null,

        ];

    }       
}

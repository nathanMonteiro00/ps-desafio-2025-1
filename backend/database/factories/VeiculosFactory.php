<?php

namespace Database\Factories;

use App\Models\Categorias;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Veiculos>
 */
class VeiculosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome' => $this->faker->name(),
            'marca' => $this->faker->word(),
            'ano_fabricacao' => $this->faker->year(),
            'img' => 'https://picsum.photos/'.rand(150, 300), 
            'categoria_id' => Categorias::inRandomOrder()->first()->id,
            'qtd_estoque' => $this->faker->randomNumber(2),
        ];
    }
}

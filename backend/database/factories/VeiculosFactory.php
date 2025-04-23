<?php

namespace Database\Factories;

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
            'img' => $this->faker->imageUrl(),
            'categoria_id' => $this->faker->numberBetween(1, 5),
            'qtd_estoque' => $this->faker->randomNumber(2),
        ];
    }
}

<?php

namespace Tests\Feature;

use Database\Seeders\FlowerSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FlowerApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_returns_all_flowers(): void
    {
        $this->seed(FlowerSeeder::class);

        $this->getJson('/api/flowers')
            ->assertOk()
            ->assertJsonCount(12)
            ->assertJsonFragment(['name' => 'Rose'])
            ->assertJsonFragment(['scientificName' => 'Rosa']);
    }

    public function test_it_returns_a_single_flower(): void
    {
        $this->seed(FlowerSeeder::class);

        $this->getJson('/api/flowers/1')
            ->assertOk()
            ->assertJsonFragment([
                'id' => 1,
                'name' => 'Rose',
            ]);
    }
}

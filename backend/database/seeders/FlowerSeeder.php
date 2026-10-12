<?php

namespace Database\Seeders;

use App\Models\Flower;
use Illuminate\Database\Seeder;

class FlowerSeeder extends Seeder
{
    public function run(): void
    {
        $flowers = [
            [
                'name' => 'Rose',
                'scientific_name' => 'Rosa',
                'category' => 'Flowering',
                'definition' => 'A rose is a flowering plant known for its beautiful petals and pleasant fragrance. It has been a symbol of love, beauty, and passion for centuries.',
                'care' => 'Give roses plenty of sunlight, water them regularly, and use well-drained soil.',
                'image' => 'images/rose.jpg',
            ],
            [
                'name' => 'Sunflower',
                'scientific_name' => 'Helianthus annuus',
                'category' => 'Flowering',
                'definition' => 'A sunflower is a tall flowering plant recognized by its large yellow flower head.',
                'care' => 'Place sunflowers in full sunlight and water them regularly, especially when the soil is dry.',
                'image' => 'images/sunflower.jpg',
            ],
            [
                'name' => 'Lotus',
                'scientific_name' => 'Nelumbo nucifera',
                'category' => 'Aquatic',
                'definition' => 'The lotus is an aquatic flowering plant that commonly grows in ponds and calm water.',
                'care' => 'Lotus plants need plenty of sunlight and should be grown in water with nutrient-rich soil.',
                'image' => 'images/lotus.jpg',
            ],
            [
                'name' => 'Tulip',
                'scientific_name' => 'Tulipa',
                'category' => 'Flowering',
                'definition' => 'A tulip is a spring-blooming flower known for its cup-shaped petals and many colors.',
                'care' => 'Grow tulips in well-drained soil and provide them with plenty of sunlight.',
                'image' => 'images/tulip.jpg',
            ],
            [
                'name' => 'Hibiscus',
                'scientific_name' => 'Hibiscus rosa-sinensis',
                'category' => 'Flowering',
                'definition' => 'Hibiscus is a tropical flowering plant with large colorful flowers.',
                'care' => 'Hibiscus grows well in sunlight and needs regular watering and well-drained soil.',
                'image' => 'images/hibiscus.jpg',
            ],
            [
                'name' => 'Lavender',
                'scientific_name' => 'Lavandula',
                'category' => 'Herb',
                'definition' => 'Lavender is an aromatic flowering herb commonly recognized for its purple flowers.',
                'care' => 'Lavender prefers plenty of sunlight and well-drained soil. Avoid excessive watering.',
                'image' => 'images/lavender.jpg',
            ],
            [
                'name' => 'Hydrangea',
                'scientific_name' => 'Hydrangea',
                'category' => 'Flowering',
                'definition' => 'Hydrangea is a flowering plant known for its large clusters of colorful flowers, commonly appearing in blue, pink, purple, or white.',
                'care' => 'Keep hydrangeas in moist, well-drained soil and provide them with morning sunlight.',
                'image' => 'images/hydrangea.jpg',
            ],
            [
                'name' => 'Lily',
                'scientific_name' => 'Lilium',
                'category' => 'Flowering',
                'definition' => 'Lily is a flowering plant known for its elegant trumpet-shaped flowers and pleasant fragrance.',
                'care' => 'Lilies grow well in sunlight with well-drained soil and regular watering.',
                'image' => 'images/lily.jpg',
            ],
            [
                'name' => 'Peony',
                'scientific_name' => 'Paeonia',
                'category' => 'Flowering',
                'definition' => 'Peony is a flowering plant with large, soft petals and is commonly grown as an ornamental garden flower.',
                'care' => 'Plant peonies in well-drained soil and give them plenty of sunlight and moderate watering.',
                'image' => 'images/peony.jpg',
            ],
            [
                'name' => 'Dandelion',
                'scientific_name' => 'Taraxacum officinale',
                'category' => 'Flowering',
                'definition' => 'Dandelion is a small flowering plant recognized by its bright yellow flower and round seed head.',
                'care' => 'Dandelions can grow in sunlight or partial shade and need moderate watering.',
                'image' => 'images/dandelion.jpg',
            ],
            [
                'name' => 'Gerbera',
                'scientific_name' => 'Gerbera jamesonii',
                'category' => 'Flowering',
                'definition' => 'Gerbera is a colorful flowering plant known for its large daisy-like flowers.',
                'care' => 'Give gerberas plenty of sunlight, good air circulation, and well-drained soil.',
                'image' => 'images/gerbera.jpg',
            ],
            [
                'name' => 'Snapdragon',
                'scientific_name' => 'Antirrhinum majus',
                'category' => 'Flowering',
                'definition' => 'Snapdragon is a flowering plant known for its colorful flowers that resemble a dragon\'s mouth.',
                'care' => 'Snapdragons grow best with sunlight, regular watering, and well-drained soil.',
                'image' => 'images/snapdragon.jpg',
            ],
        ];

        foreach ($flowers as $flower) {
            Flower::query()->updateOrCreate(
                ['name' => $flower['name']],
                $flower
            );
        }
    }
}

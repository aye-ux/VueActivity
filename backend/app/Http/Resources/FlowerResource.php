<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FlowerResource extends JsonResource
{
    /**
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'scientificName' => $this->scientific_name,
            'category' => $this->category,
            'definition' => $this->definition,
            'care' => $this->care,
            'image' => $this->image,
        ];
    }
}

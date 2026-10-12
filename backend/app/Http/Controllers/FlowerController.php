<?php

namespace App\Http\Controllers;

use App\Http\Resources\FlowerResource;
use App\Models\Flower;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class FlowerController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return FlowerResource::collection(
            Flower::query()->orderBy('id')->get()
        );
    }

    public function show(Flower $flower): FlowerResource
    {
        return new FlowerResource($flower);
    }
}

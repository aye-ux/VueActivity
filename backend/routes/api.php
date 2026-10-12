<?php

use App\Http\Controllers\FlowerController;
use Illuminate\Support\Facades\Route;

Route::get('/flowers', [FlowerController::class, 'index']);
Route::get('/flowers/{flower}', [FlowerController::class, 'show']);

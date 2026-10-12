<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flower extends Model
{
    /**
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'scientific_name',
        'category',
        'definition',
        'care',
        'image',
    ];
}

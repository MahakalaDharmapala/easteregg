<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'plataform',
        'classification',
        'developer',
        'releaseDay',
        'sinopsis',
        //'image',
    ];

    //Relación uno a muchos
    public function shows(){
        return $this->hasMany('App\Models\Tickets');
    }
}

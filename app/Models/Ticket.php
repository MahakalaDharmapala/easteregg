<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;


    protected $fillable = [
        'game_id',
        'date_purchase',
        'batch'
    ];


public function game(){
    return $this->belongsTo('App\Models\Game');
}

public function sale(){
    return $this->hasMany('App\Models\Sale');
}
}


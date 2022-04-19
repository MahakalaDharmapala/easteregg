<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    use HasFactory;

    protected $fillaber=[
        'name',
        'lastName',
        "semester",
        'email',
        'control', 
        'program_id'
    ];
    public function program()
    {
        return $this->belongsTo(Program::class);
    }
}
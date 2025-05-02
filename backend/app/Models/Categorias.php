<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorias extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'categorias';
    public $timestamps = false;

    protected $fillable = [
        'nome'
    ];

    public function veiculos(){
        return $this->hasMany(Veiculos::class, 'categoria_id', 'id');
    }
    
}

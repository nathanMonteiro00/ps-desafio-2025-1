<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Veiculos extends Model
{
    use HasFactory;

    protected $table = 'veiculos';
    public $timestamps = false;

    protected $fillable = [
        'nome',
        'marca',
        'ano_fabricacao',
        'img',
        'categoria_id',
        'qtd_estoque'
    ];
}

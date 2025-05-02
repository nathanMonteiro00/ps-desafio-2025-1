<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
use Throwable;

class Veiculos extends Model
{
    use HasFactory, HasUuids;

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

    public function categorias(){
        return $this->belongsTo(Categorias::class, 'categoria_id', 'id');
    }

    protected static function booted()
    {
        self::deleted(function (Veiculos $veiculo) {
            try {
                $image_name = explode('veiculos/', $veiculo['img']);
                Storage::disk('public')->delete('veiculos/'.$image_name[1]);
            } catch (Throwable) {
            }
        });
    }
}

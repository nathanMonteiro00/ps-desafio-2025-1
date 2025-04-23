<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VeiculosResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
          'id'=>$this->id,
          'nome'=>$this->nome,
          'marca'=>$this->marca,
          'ano_fabricacao'=>$this->ano_fabricacao,
          'img'=>$this->img,
          'categoria_id'=>$this->categoria_id,
          'qtd_estoque'=>$this->qtd_estoque
        ];
    }
}

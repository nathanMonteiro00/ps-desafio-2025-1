<?php

namespace App\Http\Controllers;

use App\Models\Veiculos;
use Illuminate\Http\Request;
use App\Http\Requests\VeiculosRequest;
use App\Http\Resources\VeiculosResource;
use App\Http\Requests\ComprarVeiculoRequest;

class VeiculosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $veiculos = Veiculos::all();
        return VeiculosResource::collection($veiculos);

    }

    public function comprar(ComprarVeiculoRequest $request, Veiculos $veiculo){

        $validated = $request->validated();
        $qtd = $validated['quantidade'];

        if ($qtd > $veiculo->qtd_estoque){
            return response()->json(['message' => 'Não há produtos suficientes.'], 422);
        }

        // adicionar lógica de disponibilidade de veículo
        
        $veiculo->qtd_estoque -= $qtd;
        $veiculo->save();

        return new VeiculosResource($veiculo);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VeiculosRequest $request)
    {
        $veiculo = Veiculos::create($request->validated());
        return new VeiculosResource($veiculo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(VeiculosRequest $request, Veiculos $veiculo)
    {
        $veiculo->update($request->validated());

        return new VeiculosResource($veiculo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Veiculos $veiculo)
    {
        $veiculo->delete();
        return response(null, 204);
    }
}

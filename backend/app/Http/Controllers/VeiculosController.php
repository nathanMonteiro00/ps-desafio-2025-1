<?php

namespace App\Http\Controllers;

use App\Http\Requests\VeiculosRequest;
use App\Models\Veiculos;
use Illuminate\Http\Request;
use App\Http\Resources\VeiculosResource;

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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

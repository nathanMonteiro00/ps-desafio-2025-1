<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\Veiculos;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\VeiculosResource;
use App\Http\Requests\StoreVeiculosRequest;
use App\Http\Requests\ComprarVeiculoRequest;
use App\Http\Requests\UpdateVeiculosRequest;
use Symfony\Component\HttpFoundation\Response;

class VeiculosController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    protected $veiculo;

    public function __construct(Veiculos $veiculo)
    {
        $this->veiculo = $veiculo;
    }

    public function index(): JsonResponse
    {
        $veiculos = $this->veiculo->with('categorias')->get();

        return response()->json($veiculos, Response::HTTP_OK); 

    }

    public function comprar(ComprarVeiculoRequest $request, $id){

        $veiculo = $this->veiculo->findOrFail($id);

        $validated = $request->validated();
        $qtd = $validated['quantidade'];

        if ($qtd > $veiculo->qtd_estoque){
            return response()->json(['message' => 'Não há veículos suficientes.'], 422);
        }

        $veiculo->qtd_estoque -= $qtd;
        $veiculo->save();

        return new VeiculosResource($veiculo);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVeiculosRequest $request): JsonResponse
    {

        $data = $request->validated();

        if ($request->hasFile('img')){

            $path = $request->file('img')->store('veiculos', 'public');
            $data['img'] = url('storage/'.$path);

        }

        $veiculo = $this->veiculo->create($data);

        $id = $veiculo->id;
        $veiculo_infos = $this->veiculo->with('categorias')->findOrFail($id);

        // return new VeiculosResource($veiculo_infos);
        return response()->json($veiculo_infos, Response::HTTP_CREATED);
    }

    public function show($id): JsonResponse
    {
        $veiculo = $this->veiculo->with('categorias')->findOrFail($id);

        return response()->json($veiculo, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVeiculosRequest $request, $id): JsonResponse
    {
        $veiculo = $this->veiculo->with('categorias')->findOrFail($id);

        $data = $request->validated();

        if($request->hasFile('img')){
            try{

                $nome_imagem = explode('veiculos/', $veiculo['img']);
                Storage::disk('public')->delete('veiculos/'.$nome_imagem[1]);

            }catch(Throwable){
            }finally{
                $path = $request->file('img')->store('veiculos', 'public');
                $data['img'] = url('storage/'.$path);
            }
        }

        $veiculo->update($data);

        return response()->json($veiculo, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $veiculo = $this->veiculo->findOrFail($id);
        $veiculo->delete();
        return response()->json(['message' => 'veiculo deletado com sucesso']);
    }
}

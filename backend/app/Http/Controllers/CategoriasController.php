<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoriasRequest;
use App\Http\Requests\StoreCategoriasRequest;
use App\Http\Requests\UpdateCategoriasRequest;
use App\Models\Categorias;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;

class CategoriasController extends Controller
{

    protected $categoria;

    public function __construct(Categorias $categoria)
    {
        $this->categoria = $categoria;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $categorias = $this->categoria->with('veiculos')->get();

        return response()->json($categorias, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoriasRequest $request): JsonResponse
    {
        $categoria = $this->categoria->create($request->validated());

        return response()->json($categoria, Response::HTTP_CREATED);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoriasRequest $request, $id)
    {
        $categoria = $this->categoria->findOrFail($id);

        $categoria->update($request->validated());

        return response()->json($categoria, Response::HTTP_OK);
    }

    public function show($id): JsonResponse
    {
        $categoria = $this->categoria->findOrFail($id);

        return response()->json($categoria, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categoria = $this->categoria->findOrFail($id);

        if ($categoria->veiculos()->count() > 0) {
            return response()->json([
                'message' => 'Não é possível deletar a categoria. Existem veículos associados a ela.'
            ], 400);
        }

        $categoria->delete();

        return response()->json([
            'message' => 'Categoria deletada com sucesso.',
        Response::HTTP_OK]);
    }

}

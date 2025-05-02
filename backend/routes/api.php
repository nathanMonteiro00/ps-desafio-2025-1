<?php

use App\Http\Controllers\CategoriasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VeiculosController;
use Symfony\Component\HttpFoundation\Response;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json(Auth::user(), Response::HTTP_OK);
    });
});

Route::middleware(['auth:sanctum', 'can:admin'])->group(function () {
    Route::apiResource('/users', UserController::class);
});

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

// Rotas Veiculos
Route::apiResource('veiculos', VeiculosController::class)->except(['create', 'edit']);

Route::patch('/veiculos/{veiculo}/comprar', [VeiculosController::class, 'comprar']);

// Rotas Categorias
Route::apiResource('categorias', CategoriasController::class)->except(['create', 'edit']);

require __DIR__.'/auth.php';



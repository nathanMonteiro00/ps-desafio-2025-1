<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVeiculosRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nome' => ['required','min:2'],
            'marca'=> ['required'],
            'ano_fabricacao'=> ['required','digits:4'],
            'img'=> ['nullable','file'],
            'categoria_id'=> ['required', 'exists:categorias,id'],
            'qtd_estoque'=> ['required','integer','min:1'],
        ];
    }

    public function messages(): array
    {
        return [
            'nome.min' => 'O nome do veículo deve ter no mínimo 3 letras.',
            'ano_fabricacao.digits' => 'Forneça um ano de fabricação válido.',
            'categoria_id.exists' => 'Esta categoria não está cadastrada no sistema.',
            'qtd_estoque.min' => 'É necessário uma quantidade mínima de 1 veículo para cadastrá-lo no sistema.'
        ];
    }
}

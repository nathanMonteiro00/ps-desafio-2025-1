'use client'

import { Button } from '@/components/button'
import {
  FormFieldsGroup,
  FormField,
  ImageForm,
  handleImageChange,
} from '@/components/dashboard/form'
import { DialogFooter } from '@/components/dialog'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { cn } from '@/lib/utils'
import { api, ResponseErrorType } from '@/services/api'
import { categoryType } from '@/types/category'
import { vehicleType } from '@/types/vehicle'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/select'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'

interface FormFieldsVehicleProps {
  vehicle?: vehicleType | null
  readOnly?: boolean
  error?: ResponseErrorType | null
}

export default function FormFieldsVehicle({
  vehicle,
  readOnly,
  error,
}: FormFieldsVehicleProps) {
  const { pending } = useFormStatus()
  const [updateImage, setUpdateImage] = useState<string | undefined>()
  const [categories, setCategories] = useState<categoryType[]>()

  const requestData = async () => {
    try {
      const response = await api('GET', '/categorias')
      if (response.error){
        console.log('Não foi possível carregar as categorias')
      } else {
        setCategories(response.response as categoryType[])
      }
    } catch (error) {
      console.log('Erro ao carregar categorias')
    }
  }

  useEffect(() => {
    requestData()
  }, [])

  return (
    <>
      <FormFieldsGroup>
        {vehicle &&
          <Input defaultValue={vehicle.id} type="text" name="id" hidden />}

        <FormField>
            <Label htmlFor="nome" required={!vehicle}>
              Nome
            </Label>
            <Input
              name="nome"
              id="nome"
              placeholder="Insira o nome do veículo"
              defaultValue={vehicle?.nome}
              disabled={pending}
              readOnly={readOnly}
              error={error?.errors?.nome}
            />
      
        </FormField>
        <FormField>
            <Label htmlFor="marca" required={!vehicle}>
              Marca
            </Label>
            <Input
              name="marca"
              id="marca"
              placeholder="Insira a marca do veículo"
              defaultValue={vehicle?.marca}
              disabled={pending}
              readOnly={readOnly}
              error={error?.errors?.marca}
            />
        </FormField>
        <FormField>
            <Label htmlFor="ano_fabricacao" required={!vehicle}>
              Ano de fabricação
            </Label>
            <Input
              name="ano_fabricacao"
              id="ano_fabricacao"
              placeholder="Insira o ano de fabricação do veículo"
              defaultValue={vehicle?.ano_fabricacao}
              disabled={pending}
              readOnly={readOnly}
              error={error?.errors?.ano_fabricacao}
            />
        </FormField>
        <FormField>
            <Label htmlFor="img" hidden={readOnly && !vehicle?.img}>
              Imagem
            </Label>
            <Input
              type="file"
              name="img"
              id="img"
              accept="image/*"
              disabled={pending}
              hidden={readOnly}
              onChange={(e) => handleImageChange(e, setUpdateImage)}
              error={error?.errors?.img}
            />
            <ImageForm
              className="aspect-square size-40"
              src={updateImage || vehicle?.img}
          />
        </FormField>
        <FormField>
          <Select
            disabled={pending || readOnly}
            name="categoria_id"
            defaultValue={vehicle?.categorias.id}
          >
            <Label>Categoria</Label>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent id="categoria_id">
              <SelectGroup id="categoria_id">
                {categories?.map((category: categoryType, index: number) => (
                  <SelectItem value={category.id} key={index}>
                    {category.nome}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
          {error?.errors?.categoria_id && (
            <p className='text-destructive text-xs mt-2'>
              {error?.errors?.categoria_id}
            </p>
          )}
        <FormField>
            <Label htmlFor="qtd_estoque" required={!vehicle}>
              Quantidade
            </Label>
            <Input
              name="qtd_estoque"
              id="qtd_estoque"
              placeholder="Insira a quantidade a ser adicionada"
              defaultValue={vehicle?.qtd_estoque}
              disabled={pending}
              readOnly={readOnly}
              error={error?.errors?.qtd_estoque}
            />
      </FormField>
      </FormFieldsGroup>
      <DialogFooter className={cn({ hidden: readOnly })}>
        <Button type="submit" pending={pending}>
          Salvar
        </Button>
      </DialogFooter>
    </>
  )
}

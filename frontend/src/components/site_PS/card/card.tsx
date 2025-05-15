'use client'

import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'
import { useState } from 'react'
import { comprar } from '@/actions/vehicle'
import { toast } from '@/components/use-toast'


interface vehicleProps{
    vehicle: vehicleType
}

export default function Card({vehicle}: vehicleProps){

      const [estoque, setEstoque] = useState(vehicle.qtd_estoque)

      const submit = async () => {
    
        const { error } = await JSON.parse(await comprar(vehicle.id, 1))
    
        if (error) {
          toast({
            title: 'O estoque para este veículo está esgotado!',
          })
        } else {
          toast({
            title: 'Veículo adquirido com sucesso!',
          })
          setEstoque(estoque - 1)
        }
      }

    return (
        <div className={style.card}>
            <img 
                src={vehicle.img} alt='imagem veículo' className={style.card_img}
            />
            <div className={style.card_body}>
                <h2 className={style.card_nome}>{vehicle.nome}</h2>
                <p className={style.card_marca}>{vehicle.marca}</p>
                <p className={style.card_categoria}>{vehicle.categorias.nome}</p>
                <p className={style.card_qtd}>Quantidade em estoque: {estoque}</p>
                <button onClick={() => submit()} className={style.card_buy_button}>Comprar</button>
            </div>
        </div>
    )
}
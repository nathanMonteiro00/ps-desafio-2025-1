'use client'

import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'
import { Modal } from '../Modal'
import { useState } from 'react'

interface vehicleProps{
    vehicle: vehicleType
}

export default function Card({vehicle}: vehicleProps){

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={style.card}>
            <img 
                src={vehicle.img} alt='imagem veículo' className={style.card_img}
            />
            <div className={style.card_body}>
                <h2 className={style.card_name}>{vehicle.nome}</h2>
                <p className={style.card_marca}>{vehicle.marca}</p>
                <p className={style.card_categoria}>{vehicle.categorias.nome}</p>
                <button onClick = {() => setOpen(!open)} className={style.buy_button}>Mostrar detalhes</button>
            </div>

            <Modal 
                isOpen={open} 
                setOpen={() => {}} 
                nome={vehicle.nome} 
                marca={vehicle.marca} 
                categoria={vehicle.categorias.nome} 
                ano={vehicle.ano_fabricacao}
                quantidade={vehicle.qtd_estoque}
            />
        </div>
    )
}
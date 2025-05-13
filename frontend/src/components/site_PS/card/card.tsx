'use client'

import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'

interface vehicleProps{
    vehicle: vehicleType
}

export default function Card({vehicle}: vehicleProps){
    return (
        <div className={style.card}>
            <img 
                src={vehicle.img} alt='imagem veículo' className={style.card_img}
            />
            <div className={style.card_body}>
                <h2 className={style.card_name}>{vehicle.nome}</h2>
                <p className={style.card_marca}>{vehicle.marca}</p>
                <p className={style.card_categoria}>{vehicle.categorias.nome}</p>
                <button className={style.buy_button}>Mostrar detalhes</button>
            </div>
        </div>
    )
}
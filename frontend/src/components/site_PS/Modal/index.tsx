import style from './style.module.css'
import { vehicleType } from "@/types/vehicle"

interface IModal{
    isOpen: boolean
    setOpen:  (isOpen: boolean) => void
    nome: string
    marca: string
    ano: number
    quantidade: number
    categoria: string
}

export function Modal( {isOpen, setOpen, nome, marca, quantidade, categoria, ano}: IModal ){
    if(isOpen){
        return (
            <div className={style.background}>
                <div className={style.infos}>
                    <h2>Modelo: {nome}</h2>
                    <p>Marca: {marca}</p>
                    <p>Ano de fabricação: {ano}</p>
                    <p>Categoria: {categoria}</p>
                    <p>Quantidade disponível: {quantidade}</p>
                    <div className={style.button}>
                        <button className={style.comprar}>Comprar</button>
                        <button className={style.voltar} onClick={() => setOpen(false)}>Voltar</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
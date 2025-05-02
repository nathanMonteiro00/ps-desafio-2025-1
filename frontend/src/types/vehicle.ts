
import { categoryType } from "./category"

export type vehicleType = {

  id: string
  nome: string
  marca: string
  ano_fabricacao: number
  img: string
  categoria_id: categoryType
  qtd_estoque: number

}

'use client'

import { vehicleType } from "@/types/vehicle"
import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { useToast } from "@/components/use-toast"
import style from './style.module.css'
import Card from "@/components/site_PS/card/card"
import Navbar from "@/components/site_PS/navbar/navbar"
import Footer from "@/components/site_PS/footer/footer"
import Slider from "@/components/site_PS/slider/slider"

export default function Home() {
  const [vehicles, setVehicles] = useState<vehicleType[] | undefined>()
  const [marcas, setMarcas] = useState<string[]>([])
  const [categorias, setCategorias] = useState<string[]>([])

  const { toast } = useToast()
  const [busca, setBusca] = useState<string>("")

  const [filtros, setFiltros] = useState({
    marca: "",
    categoria: "",
  })

  useEffect(() => {
    const requestData = async () => {
      const { response } = await api<vehicleType[]>('GET', `/veiculos`)

      if (response) {
        setVehicles(response)

        const marcasUnicas = Array.from(new Set(response.map(veiculo => veiculo.marca)))
        const categoriasUnicas = Array.from(new Set(response.map(veiculo => veiculo.categorias.nome)))

        setMarcas(marcasUnicas)
        setCategorias(categoriasUnicas)
      } else {
        toast({
          title: "Veículos não encontrados.",
        })
      }
    }
    requestData()
  }, [toast])

  const veiculosFiltrados = vehicles?.filter((veiculo) => {
    const buscaLower = busca.toLowerCase()

    const condBusca =
      veiculo.nome.toLowerCase().includes(buscaLower) ||
      veiculo.marca.toLowerCase().includes(buscaLower) ||
      veiculo.categorias.nome.toLowerCase().includes(buscaLower)

    const condMarca = filtros.marca ? veiculo.marca === filtros.marca : true
    const condCategoria = filtros.categoria ? veiculo.categorias.nome === filtros.categoria : true
    const condEstoque = veiculo.qtd_estoque > 0

    return condBusca && condMarca && condCategoria && condEstoque
  })

  return (
    <>
      <div className={style.page}>
        <Navbar logo="./images/logo.png" />
        <Slider />
        <div className={style.titulo}>
          Conheça os nossos veículos!
        </div>

        <div className={style.filtros}>
          <input
            type="text"
            placeholder="O que você procura?"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <select
            value={filtros.marca}
            onChange={(e) => setFiltros({ ...filtros, marca: e.target.value })}
          >
            <option value="">Marcas</option>
            {marcas.map((marca, index) => (
              <option key={index} value={marca}>
                {marca}
              </option>
            ))}
          </select>

          <select
            value={filtros.categoria}
            onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}
          >
            <option value="">Categorias</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        <div className={style.wrapper}>
          {veiculosFiltrados?.map((vehicle: vehicleType, index: number) => (
            <Card vehicle={vehicle} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

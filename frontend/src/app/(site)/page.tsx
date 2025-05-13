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
   const {toast} = useToast()

   useEffect ( () => {
      const requestData = async() => {
        const {response} = await api<vehicleType[]>('GET', `/veiculos`)

        if (response){
         setVehicles(response)
        }else{
         toast({
            title: "Veículos não encontrados.",
         })
        }
      }
      requestData()
   }, [toast])


  return ( <>
    	
   <div className={style.page}>
      <Navbar logo="./images/logo.png"/>
      <Slider></Slider>
      <div className={style.infos}>
         Conheça os nossos veículos!
      </div>
      <div className={style.wrapper}>
         {vehicles?.map((vehicle: vehicleType, index: number) => (
            <Card vehicle={vehicle} key={index}/>
         ))}
      </div>
   </div>
   <Footer></Footer>
  
  </> )
}

'use client'

import style from "./style.module.css"
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className={style.footer}>

            <p className={style.address_title}>
                Endereço
            </p>
            <div className={style.address}>

                <span className={style.street}>
                    <FaMapPin></FaMapPin> Rua nao sei o que la das quantas
                </span>

                <span className={style.avenue}>
                    <FaHouseChimneyWindow /> Avenida Othovarino Duarte Santos, número 78
                </span>

                <span className={style.phone}>
                    <FaPhone></FaPhone> Telefone: (33) 99877-2344
                </span>
            </div>

            <div className={style.teste}>
                Mais uma div
            </div>

            <div className={style.social_media}>
                <a href="https://www.instagram.com/adaptiempresajr/" target="blank_" className={style.social_link} id="instagram"> <FaInstagram className={style.icon}></FaInstagram>
                </a> 
                <a href="https://github.com/nathanMonteiro00" target="blank_" className={style.social_link} id="GitHub"><FaGithub className={style.icon}></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/nathan-monteiro-b016692a0/" target="blan_" className={style.social_link} id="Linkedin"><FaLinkedin className={style.icon}></FaLinkedin>
                </a>
            </div>                              

        </footer>
    )
}                                                                   
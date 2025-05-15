'use client'

import style from "./style.module.css"
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.address}>
                    <p className={style.address_title}>Endereço e contato</p>
                    <span className={style.street}>
                        <FaMapPin /> Rua  Dementira da Silva
                    </span>
                    <span className={style.avenue}>
                        <FaHouseChimneyWindow /> Avenida Othovarino Duarte Santos, número 01
                    </span>
                    <span className={style.phone}>
                        <FaPhone /> Telefone: (27) 99888-1234
                    </span>
                </div>
                <div className={style.copyright}>
                    <p>© {new Date().getFullYear()} Adapti Veículos. Todos os direitos reservados.</p>
                </div>
                <div className={style.social_media}>
                    <a href="https://www.instagram.com/adaptiempresajr/" target="_blank" className={style.social_link}><FaInstagram className={style.icon} /></a>
                    <a href="https://github.com/nathanMonteiro00" target="_blank" className={style.social_link}><FaGithub className={style.icon} /></a>
                    <a href="https://www.linkedin.com/in/nathan-monteiro-b016692a0/" target="_blank" className={style.social_link}><FaLinkedin className={style.icon} /></a>
                </div>
            </div>
        </footer>
    );
}

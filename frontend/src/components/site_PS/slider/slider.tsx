import style from './style.module.css'
import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'

import {register} from 'swiper/element/bundle'

register();

function App(){
    return (
        <div className={style.container}>
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                loop={true}
                autoplay={{ delay: 3000 }}
                speed={1000}
                >
                <SwiperSlide>
                    <img className={style.image} src="/images/moto5.jpg" alt="Moto esportiva" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className={`${style.image} ${style.truckImage}`} src="/images/truckcopiatexto.jpg" alt="Caminhão" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className={style.image} src="/images/famillia.jpg" alt="Carro" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default App




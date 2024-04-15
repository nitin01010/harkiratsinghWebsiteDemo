"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as modules from 'swiper/modules';
// import './styles.css';

const Swipper = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (swiper, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            centeredSlides={ true }
            autoplay={ {
                delay: 2500,
                disableOnInteraction: false,
            } }
            pagination={ {
                clickable: true,
            } }
            navigation={ true }
            modules={ [modules.Autoplay, modules.Pagination, modules.Navigation] }
            onAutoplayTimeLeft={ onAutoplayTimeLeft }
            // style={ { width: "800px", height: "400px" } }
            className="mySwiper w-[330px] h-[180px]   md:h-[230px] lg:w-[600px] lg:h-[300px] "
        >
            {/* Add images as Swiper slides */ }
            <SwiperSlide >
                <img src="/imgcourse1.jpeg" alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/imgcourse1.jpeg" alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/imgcourse1.jpeg" alt="Image 3" />
            </SwiperSlide>

            {/* Autoplay progress */ }
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 " ref={ progressCircle }>
                    {/* <circle cx="24" cy="24" r="20"></circle> */ }
                </svg>
                <span ref={ progressContent }></span>
            </div>
        </Swiper>
    )
}

export default Swipper;

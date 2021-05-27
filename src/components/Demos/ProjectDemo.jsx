import React from 'react'
import './ProjectDemo.css'
import Shoe from './ShoeProject/3DShoe'
import VideoProject from './VideoProjects/VideoProjects'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const ProjectDemo = props => {

    return  (
        <div className="project-demos-main-style">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                allowTouchMove={false}
            >
                <SwiperSlide >
                    <div className="shoeWrapper">
                        <Shoe />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <VideoProject/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProjectDemo
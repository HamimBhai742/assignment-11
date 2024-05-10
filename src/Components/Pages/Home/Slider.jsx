import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../../assets/img (1).jpg';
import img2 from '../../../assets/img (2).jpg';
import img3 from '../../../assets/img (8).jpg';
import img4 from '../../../assets/img (10).jpg';
import img5 from '../../../assets/img (11).jpg';
import img from '../../../assets/img.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img className='w-full h-[550px]' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[550px]' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[550px]' src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[550px]' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[550px]' src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[550px]' src={img5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
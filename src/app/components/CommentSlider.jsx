'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Swipper() {
    return (
    <Swiper
      spaceBetween={30} // Space between slides
      slidesPerView={3} // Number of slides visible at a time
      loop={true}       // Enable infinite loop
      autoplay={{
        delay: 3000,    // Delay between slides in milliseconds
        disableOnInteraction: true, // Autoplay continues after user interaction
      }}
      pagination={{ clickable: true }} // Enable pagination dots
    //   navigation={true} // Enable navigation arrows
      modules={[Autoplay, Navigation, Pagination]} // Load required modules
    >
        <SwiperSlide>
            <div>
                <img src="/images/image4.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="/images/image4.png" alt="" />
            </div>
        </SwiperSlide>
    </Swiper>
  );
}

export default Swipper;

// importing every-Fuckin-where
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';
import img1 from "../../../files/Images/swiper1.jpg";
import img2 from "../../../files/Images/swiper2.jpg";
import img3 from "../../../files/Images/swiper3.jpg";
import img4 from "../../../files/Images/swiper4.jpg";
import img5 from "../../../files/Images/swiper5.jpg";
// use this shit
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
/* ----------------------------------------------------------------------------------- */
// Starting function SwipeerApp
export const SwiperApp = () => {
  const [thumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);

// get potos from API
/*
  const slides = [];
  for (let i = 0; i < 20; i += 1) {
    slides.push(

      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>

    );
  }
*/

  return (
    <>
    <div className="row">
        <div className="col col-sm-12">
            <h3>Trending</h3>
        </div>
    </div>

    <div className="col col-sm-12 mg-0 p-0">
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={6}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {/* {slides} */}
            <SwiperSlide className='swiperimg' tag="li"><img src={img1} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img2} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img3} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img4} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img5} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img1} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img2} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img3} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img4} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
            <SwiperSlide className='swiperimg' tag="li"><img src={img5} style={{ listStyle: 'none' }} alt=""/></SwiperSlide> 
       
      </Swiper>
      </div>

    </>
  );
}

export default SwiperApp;

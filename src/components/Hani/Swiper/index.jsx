// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// start my imports
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// end my imports

import img1 from "../../../files/Images/swiper1.jpg";
import img2 from "../../../files/Images/swiper2.jpg";
import img3 from "../../../files/Images/swiper3.jpg";
import img4 from "../../../files/Images/swiper4.jpg";
import img5 from "../../../files/Images/swiper5.jpg";
import img6 from "../../../files/Images/swiper6.jpg";
import img7 from "../../../files/Images/swiper7.jpg";
import img8 from "../../../files/Images/swiper8.jpg";
import img9 from "../../../files/Images/swiper9.jpg";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const App = () => {
  return (
    <>
    <div className="container-fluid" style={{margin:'50px auto',background: '#191b1b' }}>
    <h3 style={{ color: "white",margin:'10px' }}>Trending Videos</h3>
    <Swiper
        slidesPerView={6}
        spaceBetween={5}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

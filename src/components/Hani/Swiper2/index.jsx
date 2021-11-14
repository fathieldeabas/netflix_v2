import React from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';

import "./styles.css";
import img1 from "../../../files/Images/swiper1.jpg";
import img2 from "../../../files/Images/swiper2.jpg";
import img3 from "../../../files/Images/swiper3.jpg";
import img4 from "../../../files/Images/swiper4.jpg";
import img5 from "../../../files/Images/swiper5.jpg";

export const SwiperApp2 = () => {
  return (
    <>
      <Carousel show={4} slide={3} swiping={true} rightArrow={true}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </Carousel>
    </>
  );
};

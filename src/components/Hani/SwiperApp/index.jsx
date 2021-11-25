import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";

import { CardPhoto } from '../CardPhoto/index';
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

export const SwiperApp = () => {
  return (
    <>
    <div className="container-fluid" style={{margin:'50px auto',background: '#191b1b' }}>
    <h3 style={{ color: "white",margin:'10px' }}>Trending Videos</h3>
    <Swiper
        breakpoints={{
          0: {
            width: 0,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 4,
          },
        }}
        spaceBetween={5} slidesPerGroup={3}
        loop={true} loopFillGroupWithBlank={true} 
        pagination={{clickable: true,}}
        navigation={true} className="mySwiper"
      >
        <SwiperSlide>
          <CardPhoto src={img1} />
        </SwiperSlide>

        <SwiperSlide>
          <CardPhoto src={img2} />
        </SwiperSlide>

        <SwiperSlide>
          <CardPhoto src={img3} />
        </SwiperSlide>

        <SwiperSlide>
          <CardPhoto src={img4} />
        </SwiperSlide>

        <SwiperSlide>
          <CardPhoto src={img5} />
        </SwiperSlide>

        <SwiperSlide>
          <CardPhoto src={img6} />
        </SwiperSlide>

        <SwiperSlide>
          <CardPhoto src={img7} />
        </SwiperSlide>

        <SwiperSlide>
          <CardPhoto src={img8} />
        </SwiperSlide>

        <SwiperSlide>
          <CardPhoto src={img9} />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  )}

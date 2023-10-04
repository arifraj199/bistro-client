import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={65}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper my-16"
    >
      <SwiperSlide>
        <img src={slider1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white font-semibold">
          Salads
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white font-semibold">
          Pizzas
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white font-semibold">
          Soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-20 text-white font-semibold">
          Desserts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="" />
        <h3 className="text-3xl uppercase text-center  text-white font-semibold">
          Fruits
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;

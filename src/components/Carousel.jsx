import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Carousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="car-container">
      <Swiper
        className="carousel"
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide>
            <div className="cara-book-container"></div>
            <img src="/rr.webp" className="cara-book"/>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}

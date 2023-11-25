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
          <div className="car-container">
            <img src="/rr.webp" className="cara-book" />
            <div className="car-left">
              <h2 className="car-left-week">Week #51</h2>
              <h1 className="car-left-thisweek">This Week : Siege and Storm</h1>
              <p className="car-left-quote">
                “When people say impossible, they usually mean improbable.”
              </p>

              <button className="car-left-join-button">
                Join the Challenge
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}

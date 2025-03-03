import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const SwiperBtn = () => {
  const swiper = useSwiper();

  return (
    <div className=" flex gap-8">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-transparent border border-solid border-purple-900 rounded-full p-2"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-transparent border border-solid border-purple-900 rounded-full p-2"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SwiperBtn;

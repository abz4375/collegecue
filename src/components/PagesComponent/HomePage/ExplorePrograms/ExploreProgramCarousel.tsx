"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ExploreProgramCard from "@/components/Reusable_cards/ExploreProgramCard";

const ExploreProgramCarousel = ({ data } : {data : any}) => {
  const swiperRef = useRef<any>(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-1 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
        onClick={handlePrevClick}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <div className="mx-auto max-w-full px-10">
        <Swiper
          ref={swiperRef}
          watchOverflow={true}
          centeredSlides={false}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            648: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            enabled: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full"
        >
          {data.map((item : any, index : any) => (
            <SwiperSlide key={index} className="w-fit">
              <div className="flex justify-center">
                <ExploreProgramCard
                  views={100}
                  daysLeft={10}
                  logoSrc="https://i.pinimg.com/236x/e1/e0/13/e1e0135a104412bfc1ff25c08eef7d55.jpg"
                  logoAlt="logoAlt"
                  location="location"
                  heading={item.heading}
                  desc={item.p}
                  image={item.image}
                  compare={item.compare}
                  subs={item.subs}
                  link={item.link}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-1 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
        onClick={handleNextClick}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export { ExploreProgramCarousel };
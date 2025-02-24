"use client";
import React, { useRef } from "react";
import SuggestionCard from "../../../../Reusable_cards/SuggestionCard";
import OurSuggestionData from "../../../../DummyData/OurSuggestionData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Heading from "@/components/Heading/Heading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ViewAllButton from "@/components/Buttons/ViewAllButton";
const OurSuggestion = () => {
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
    <div className=" container my-20">
      <div className="flex w-full justify-between">
        <Heading heading_name="Our Suggestion" />
        <ViewAllButton linkto="#" />
      </div>
      <div className="container max-w-full mx-auto">
        <div className="w-full sm:justify-center navmd:justify-center  py-0">
          <div className="relative w-full">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
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
                modules={[Pagination, Navigation]}
                className="w-full"
              >
                {OurSuggestionData.map((item: any, index) => {
                  return (
                    <SwiperSlide key={index} className="mb-8">
                      <div className=" border-2 border-gray-300 rounded-lg overflow-hidden">
                      <SuggestionCard {...item} />

                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
              onClick={handleNextClick}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OurSuggestion };

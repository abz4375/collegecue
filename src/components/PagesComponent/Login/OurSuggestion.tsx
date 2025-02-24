"use client";
import React from "react";
import OurSuggestionData from "../../DummyData/OurSuggestionData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import dummyImage from '../../../assets/logo-removebg.png'
const OurSuggestion = () => {
  return (
    <div className="flex flex-col">
      <Heading heading_name="" />
      <div className="mx-auto max-w-full">
        <Swiper
          centeredSlides={true}
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]}
        >
          {OurSuggestionData.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center mb-10">
                <Image src={dummyImage} alt="Dummy Image"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { OurSuggestion };

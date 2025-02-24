'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Harvard from "../../../../assets/studyAbroad/TopCollegeImg/Harvard University.jpeg"
import Stanford from "../../../../assets/studyAbroad/TopCollegeImg/Stanford University.png"

const collegeData = [
    {
      img: Harvard,
      name: "Harvard",
    },
    {
      img: Stanford,
      name: "Stanford",
    },
    {
      img: Harvard,
      name: "Australia",
    },
    {
      img: Harvard,
      name: "Australia",
    },
  ];
  
const TopCollegeStepper = () => {
  return (
    <div className='mt-4 mb-12'>
     <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        {collegeData.map((college,index)=>(
            <SwiperSlide key={index}>
            <div>
                <Image 
                src={college.img}
                alt={college.name}
                className='w-auto h-auto max-h-20 max-w-full block mx-auto'
                loading='lazy'
                />
            </div>
            </SwiperSlide>
        ))}
        </Swiper>   
    </div>
  )
}

export default TopCollegeStepper
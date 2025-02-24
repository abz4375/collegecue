'use client';
import React from 'react'
import blog1 from "../../../assets/CollegePredictor/blog-list-1.webp";
import blog2 from "../../../assets/CollegePredictor/blog-list-slide-3.webp";
import blog3 from "../../../assets/CollegePredictor/blog-list-slide-2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const CollegeStepCard = () => {
    const data =[
        {img:blog1,label:"Step 1",step:"Choose Your Exam"},
        {img:blog2,label:"Step 2",step:"Provide Your Details"},
        {img:blog3,label:"Step 3",step:"Predict Your Rank"}
    ]
  return (
    <div>
        <div className='max-w-full self-stretch'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mb-10"
                >
                    {data.map((item,index)=>(
                        <SwiperSlide key={index} >
                            <div className='w-[350px] h-auto rounded-xl mb-14 bg-white hover:scale-105 transition-all 
                            ease-in-out duration-500 flex flex-col justify-center items-center'>
                                <Image src={item.img} alt=".." className='w-full h-[240px] object-cover rounded-xl' />
                                <p className='text-2xl text-[#98a2df] font-semibold mt-4'>{item.label}</p>
                                <p className='text-xl text-[#5f4699]'>{item.step}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    </div>
  )
}

export default CollegeStepCard
'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { countriesData } from '../../../DummyData/studyabraoddummy/CountryData';


const DestinationPlace = () => {
  return (
    <div className='mt-4 mb-12 max-w-[1200px] mx-auto my-20'>
      <Swiper
      spaceBetween={10}
      className='flex justify-center items-center'
      breakpoints={{
        500: {
          // width: 500,
          slidesPerView: 1,
        },
        768: {
          // width: 768,
          slidesPerView: 2,
        },
        1024:{
          slidesPerView:4,
        }
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {countriesData.map((val,index)=>(
        <SwiperSlide key={index}>
          <div className='my-12 mx-20'>
            <Link href={`/studyAbroad/${val.countryName
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                  className='no-underline'>
                    <div className='flex flex-col items-center p-[10px] w-full max-w-[15rem] border-2 border-gray-400 rounded-xl gap-[10px]'>
                      <div>
                        <Image src={val.countryImage}
                        alt={val.countryName}
                        className='w-24 h-auto object-cover rounded-xl border-2 border-black'/>
                      </div>
                      <p className='text-base uppercase text-center font-semibold text-[#3F51B5]
                      max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                        {val.countryName}
                      </p>
                    </div>
                  </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default DestinationPlace
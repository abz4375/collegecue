'use client';
import React from 'react';
import profile1 from "../../../assets/Job-Portal-Page/trustby/profile1.png";
import profile2 from "../../../assets/Job-Portal-Page/trustby/profile2.png";
import profile3 from "../../../assets/Job-Portal-Page/trustby/profile3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const Trustedby = () => {
    const clients = [
        {
            image: profile1,

            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Allison",
            post: "Founder & CEO",
        },

        {
            image: profile2,
            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Adam",
            post: "Head of Design",
        },

        {
            image: profile3,
            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Ross",
            post: "Sr. Developer",
        },

        {
            image: profile1,

            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Jean",
            post: "CTO",
        },

        {
            image: profile2,
            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Sam",
            post: "UI/UX Designer",
        },

        {
            image: profile3,
            content:
                "Seattle Opera Simplifies Performance Planning with CollegeCue Signature",
            Name: "Ron",
            post: "Jr. Developer",
        },
    ];

    return (
        <div className='w-[1120px] flex flex-col items-start justify-start max-w-full self-stretch mt-32 mx-auto '>
            <div className='max-w-[552px] h-32 flex flex-col items-start justify-start gap-6 mb-16 sm:items-center sm:justify-center '>
                <p className='m-0 text-[45px] tracking-wider leading-6 font-light sm:text-2xl'>Client’s comments</p>
                <p className='text-base text-[#24282d] self-stretch sm:text-xs'>
                    Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed praesent pharetra quisque consectetur tellus elit.
                </p>
            </div>
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
                    className="mySwiper"
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className='h-[340px] max-w-[329.6px] bg-[#fff] mx-auto  border-2 border-gray-300 rounded-2xl mb-10 flex justify-center'>
                                <div className='flex flex-col justify-center items-center mt-10 pt-10 pb-10 pl-11 pr-11 gap-20'>
                                    <div className='w-fit h-20 flex justify-center self-stretch flex-col gap-4 items-center'>
                                        <Image src={client.image} alt=".." className='h-20 w-20 rounded-full object-contain relative' />
                                        <div className='w-[248px] flex flex-wrap justify-center items-center self-stretch leading-6
                                                    text-base text-center tracking-wider relative'>
                                            {client.content}
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='leading-6 text-[18px] font-semibold relative
                                                  text-base text-center tracking-wider'>{client.Name}</div>
                                        <div className='leading-6 text-[12px] font-light relative text-[#6E7175]
                                                    text-center tracking-wider'>{client.post}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Trustedby
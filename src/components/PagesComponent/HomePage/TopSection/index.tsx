"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TopSection = () => {
  const data = [
    {
      heading: "Swayam",
      image: "https://www.collegecue.com/static/media/Swayam.b8c90a016e906b6aa0a5.webp",
      link: "https://swayam.gov.in/",
    },
    {
      heading: "NPTEL",
      image: "https://www.collegecue.com/static/media/nptel.3b305690af816a0bba67.webp",
      link: "https://nptel.ac.in/",
    },
    {
      heading: "FreeCodeCamp",
      image: "https://www.collegecue.com/static/media/FreeCodeCamp.f344acdc1e902d8b826c.webp",
      link: "https://www.freecodecamp.org/",
    },
    {
      heading: "National Digital Library",
      image: "https://www.collegecue.com/static/media/NDLI-white.7830a43bd90ff6459060.webp",
      link: "https://ndl.iitkgp.ac.in/",
    },
 
  ];

  const swiperRef = useRef(null);

  return (
    <div className="container my-20">
      <div className="w-full px-auto  justify-center px-auto">
        <div className="">
          <p className="text-3xl text-center sm:text-2xl sm:text-center font-bold text-[black]  mx-auto w-full mb-6">
            Get Courses From Here
          </p>
        </div>
      </div>
      <div className="container max-w-full mx-auto">
        <div className="w-full sm:justify-center navmd:justify-center  py-8 pt-0">
          <div className="relative w-full">
            <div className="mx-auto max-w-full px-10">
              <Swiper
                ref={swiperRef}
                watchOverflow={false}
                centeredSlides={false}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  648: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 4,
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
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full"
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index} className="w-fit mb-14 mt-4">
                    <div className="flex justify-center">
                      <div className="w-40 h-40 bg-inherit rounded-lg shadow-md items-center justify-center">
                        <div className="mx-auto my-auto p-4 w-40 border-2 border-gray-300 h-full rounded-lg shadow-md ">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img
                              src={item.image}
                              alt={item.heading}
                              className="w-full h-full object-contain mix-blend-multiply mx-auto my-auto border- border-black"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;

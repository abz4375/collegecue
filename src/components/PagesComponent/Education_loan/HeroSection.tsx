"use client";
import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const EducationLoans: React.FC = () => {
  const swiperRef = useRef(null);
  const data = [
    {
      image: "https://www.collegecue.com/static/media/sbilogo.337afbb8a1721b6d4e71.png",
      alt: "SBI"
    },
    {
      image: "https://www.collegecue.com/static/media/PNB-logo.9b4801772decaf60c7e1.png",
      alt: "PNB"
    },
    {
      image: "https://www.collegecue.com/static/media/Axis-logo.1b2fcee7d7fcb5346c05.png",
      alt: "Axis Bank"
    },
    {
      image: "https://www.collegecue.com/static/media/Kotak-logo.9ab77d0a073659767550.png",
      alt: "Kotak Mahindra"
    },
    {
      image: "https://www.collegecue.com/static/media/Union-logo.be995205b56d796786eb.png",
      alt: "Union Bank"
    },
    {
      image: "https://www.collegecue.com/static/media/Hdfc-logo.b044c7eec5ea3f5406f8.png",
      alt: "HDFC Bank"
    },
    {
      image: "https://www.collegecue.com/static/media/ICICI-logo.52ad190ed8da1e20a68e.png",
      alt: "ICICI Bank"
    },
    {
      image: "https://www.collegecue.com/static/media/BOB-logo.8176a983d87cc7eb7d79.png",
      alt: "Bank of Baroda"
    }
  ];

  return (
    <div className="max-w-full mx-auto bg-[#e6efff] sm:h-fit max-h-[90vh] pt-20 relative overflow-hidden">
      <div className="flex flex-col justify-center  items-center h-full">
        <div className="max-w-[80vw] mx-auto z- h-full ">
          <div className="p-16 border-opacity-20 rounded-xl border-black  mt-auto mb-0">
            <div className="text-center mb-8">
              <h1 className="text-[48px] md:text-[32px] font-bold text-[#002366]">
                Education loans for studies in India and abroad.
              </h1>
              <p className="text-[24px] text-gray-400">
                Education loans help students afford higher education in India or abroad.
              </p>
            </div>
            <div className="container mx-auto border-black flex justify-center">
              <Swiper
                ref={swiperRef}
                centeredSlides={false}
                loop={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  type:'custom'
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  648: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 7,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="w-full"
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index} className="flex justify-center my-4 mb-8 border-black items-center">
                      <img 
                        src={item.image}
                        alt={item.alt}
                        className="h-[55px] px-[8px] object-contain w-[112px] rounded-md bg-slate-100 border-2 mx-auto border-gray-300"
                      />
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

export default EducationLoans;
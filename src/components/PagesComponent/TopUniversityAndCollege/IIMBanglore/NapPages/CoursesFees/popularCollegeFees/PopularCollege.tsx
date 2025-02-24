"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CollegeData {
  img: string;
  college: string;
  avgfees: string;
}

function AvgFees(collegeData: CollegeData) {
  return collegeData;
}

const rows: CollegeData[] = [
  AvgFees({
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2018-02/14/full/1518590840-9333.jpg",
    college: "Indian Institute of Management-[IIMC],Kolkata",
    avgfees: "₹11,50,000 ",
  }),
  AvgFees({
    img: "https://theredpenmba.com/wp-content/uploads/2020/07/Hero-Image-3.jpg",
    college: "Indian School of Business-[ISB], Hyderabad",
    avgfees: "₹36,29,620 ",
  }),
  AvgFees({
    img: "https://static.india.com/wp-content/uploads/2016/03/iim-indore.jpg?impolicy=Medium_Resize&w=1200&h=800",
    college: "Indian Institute of Management-[IIM],Indore",
    avgfees: "₹10,57,111",
  }),
  AvgFees({ img: "https://i.ytimg.com/vi/M2AdGUC6wQk/maxresdefault.jpg", college: "FMS Delhi, New Delhi", avgfees: "₹96,000 " }),
];

const PopularCollege = () => {
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
    <div className="container mx-auto mt-8 p-6 ">
      <p className="text-2xl font-bold text-gray-800 mb-4 mt-8">
        Popular colleges compared with IIM Bangalore
      </p>
      <div className="relative pt-8 max-w-[950px] mx-auto flex justify-center items-center">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
          onClick={handlePrevClick}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="max-w-[900px] px-8 lg:px-0">
          <Swiper
            ref={swiperRef}
            centeredSlides={false}
            loop={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1096: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            modules={[Pagination, Navigation]}
            className="w-full max-w-[900px] [@media_(max-width:_1096px)]:max-w-[620px] lg:max-w-[400px] md:max-w-[180px] sm:max-w-[75px]"
          >
            {rows.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center mb-12 font-normal border-black w-full h-full"
              >
                <div className="w-[260px] h-[275px] max-w-xs md:max-w-sm mx-auto bg-white rounded-lg border-2 border-gray-300 shadow-md overflow-hidden">
                  <div className="relative w-full h-32 md:h-48">
                    <img
                      src={`${item.img}`}
                      alt={`${item.college} Logo`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                  </div>
                  <div className="p-4 flex flex-col justify-between h-full ">
                    <div className="mb-4 flex flex-col justify-between border-0 h-[42.5%]">
                      <p className="text-black font-bold text-center">
                        {item.college}
                      </p>
                      <p className="text-gray-500 font-bold text-sm text-center mt-4">
                        Fees: <span className="text-green-800 text-opacity-80"> {item.avgfees}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
          onClick={handleNextClick}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default PopularCollege;

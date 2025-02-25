"use client";
import { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Poster from "../../../../../assets/IIMBangalore/poster.webp";
import Logo1 from "../../../../../assets/IIMBangalore/logo1.png";
import ReviewImg from "../../../../../assets/IIMBangalore/review.png";
import { MdPushPin } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export const collegeInfo = {
  poster: Poster,
  logo: Logo1,
  name: "IIM Bangalore - Indian Institute of Management",
  location: "Bangalore, Karnataka",
  approved: "AICTE, UGC",
  established: "1973",
  isAutonomous: true,
  questionsAnswered: 210,
  ranking: "2",
  additionalInfo: 19,
  rating: "9.1",
  reviewsImg: ReviewImg,
};

interface CollegeInfo {
  poster: StaticImageData;
  logo: StaticImageData;
  name: string;
  location: string;
  approved: string;
  established: string;
  isAutonomous: boolean;
  questionsAnswered: number;
  ranking: string;
  additionalInfo: number;
  rating: string;
  reviewsImg: StaticImageData;
}

interface Props {
  collegeInfo: CollegeInfo;
}

const HeroSection: FC<Props> = ({ collegeInfo }) => {
  const {
    poster,
    logo,
    name,
    location,
    approved,
    established,
    isAutonomous,
    questionsAnswered,
    ranking,
    additionalInfo,
    rating,
    reviewsImg,
  } = collegeInfo;

  const swiperRef = useRef<any>(null);

  return (
    <div className="relative w-full mt-[64px] overflow-hidden flex lg:flex-col justify-end">
      {/* Details Component */}

      {/* Image Component */}
      <div className="relative border-red-500 border- max-w-[100vw] md:max-w-full w-full lg:max-w-1/2 h-[80vh] sm:h-[70vh] lg:h-[50vh]">
        <Swiper
          effect="fade"
          fadeEffect={{ crossFade: true }}
          ref={swiperRef}
          watchOverflow={true}
          centeredSlides={false}
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
            delay: 3000,
          }}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          className="md:max-w-[100vw] h-full border-0 border-black"
        >
          {[
            "https://cdn.pixabay.com/photo/2016/11/08/12/19/university-of-iowa-1808151_1280.jpg",
            "https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/10/27/15/40/zhejiang-university-3776783_1280.jpg",
            // poster,
          ].map((item, index) => {
            return (
              <SwiperSlide key={index} className="mb-8">
                {/* <div className="flex w-[100vw]"> */}
                  {/* <div className=" bg-red-500">content1</div> */}
                  {/* <div className="h-[80vh] w-[72.5vw] bg-blue-500">content2</div> */}
                 
                  <div className="h-full bg-black ml-auto mr-0 w-full">
                    {typeof item === "string" ? (
                      <img
                        src={item}
                        alt="Campus Poster"
                        className="object-cover h-full w-full"
                        // layout="fill"
                        // priority
                      />
                    ) : (
                      <Image
                        src={item}
                        alt="Campus Poster"
                        className="object-cover h-full w-full"
                        layout="fill"
                        priority
                      />
                    )}
                    {/* <Image
                    src={poster}
                    alt="Campus Poster"
                    className="object-cover h-full w-full"
                    layout="fill"
                    priority
                  />
                  <img
                    src={'https://images.collegedunia.com/public/college_data/images/campusimage/1407243628iim-banglore_1.jpg'}
                    alt="Campus Poster"
                    className="object-cover h-full w-full"
                    // layout="fill"
                    // priority
                  /> */}
                    {/* Gradient Overlay */}
                    <div className="[@media_(min-width:_1024px)]:hidden absolute inset-0 bg-[linear-gradient(90deg,#ffffff,#00000000)] opacity-100 border- border-green-500 w-[16px]"></div>
                    <div className="absolute right-0 top-0 bottom-0 bg-[linear-gradient(90deg,#00000000,#ffffff)] opacity-100 border- border-black w-[16px]"></div>
                    <div className="absolute right-0 top-0 bottom-0 bg-[linear-gradient(0deg,#00000000,#ffffff)] opacity-100 border- border-blue-500 w-full h-[75px]"></div>
                    <div className="absolute bottom-0 right-[0] bg-[linear-gradient(180deg,#00000000,#ffffff)] opacity-100 border- border-red-500 w-full h-[75px]"></div>
                    {/* <div className="absolute right-0 top-0 bottom-0 border-black h-[65%] pointer-events-none z-20">
                    <div className="before:content-[''] before:absolute before:inset-0 before:z-[1] before:backdrop-blur-[0.5px] before:[mask:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_12.5%,rgba(0,0,0,1)_25%,rgba(0,0,0,0)_37.5%)]"></div>

                    <div className="absolute inset-0 z-[2] backdrop-blur-[1px] [mask:linear-gradient(to_bottom,rgba(0,0,0,0)_12.5%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_37.5%,rgba(0,0,0,0)_50%)]"></div>
                    <div className="absolute inset-0 z-[3] backdrop-blur-[2px] [mask:linear-gradient(to_bottom,rgba(0,0,0,0)_25%,rgba(0,0,0,1)_37.5%,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_62.5%)]"></div>
                    <div className="absolute inset-0 z-[4] backdrop-blur-[4px] [mask:linear-gradient(to_bottom,rgba(0,0,0,0)_37.5%,rgba(0,0,0,1)_50%,rgba(0,0,0,1)_62.5%,rgba(0,0,0,0)_75%)]"></div>
                    <div className="absolute inset-0 z-[5] backdrop-blur-[8px] [mask:linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_62.5%,rgba(0,0,0,1)_75%,rgba(0,0,0,0)_87.5%)]"></div>
                    <div className="absolute inset-0 z-[6] backdrop-blur-[16px] [mask:linear-gradient(to_bottom,rgba(0,0,0,0)_62.5%,rgba(0,0,0,1)_75%,rgba(0,0,0,1)_87.5%,rgba(0,0,0,0)_100%)]"></div>
                    <div className="absolute inset-0 z-[7] backdrop-blur-[32px] [mask:linear-gradient(to_bottom,rgba(0,0,0,0)_75%,rgba(0,0,0,1)_87.5%,rgba(0,0,0,1)_100%)]"></div>

                    <div className="after:content-[''] after:absolute after:inset-0 after:z-[8] after:backdrop-blur-[64px] after:[mask:linear-gradient(to_bottom,rgba(0,0,0,0)_87.5%,rgba(0,0,0,1)_100%)]"></div>
                  </div> */}
                  </div>
                {/* </div> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className=" flex [@media_(min-width:_1024.1px)]:absolute lg:relative inset-0 z-10 lg:justify-center">
        <div className="  bg-[linear-gradient(90deg,#ffffff,#ffffffbf,#ffffffbf)] backdrop-blur-md z-10 pl-8 [@media_(min-width:_1024px)]:max-w-[27.5vw] lg:max-w-full p-6 sm:p-8 md:p-10 border-black border- text-black flex flex-col justify-center lg:items-center">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <Image
              src={logo}
              alt="College Logo"
              className="w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
          </div>

          {/* College Name and Location */}
          <h1 className="text-2xl sm:text-3xl lg:mx-auto lg:text-4xl md:text-4xl font-bold leading-tight tracking-tight">
            {name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-80 mt-2 sm:mt-3">
            {location} | {approved} Approved
          </p>

          {/* Additional Info */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base opacity-90">
            <div className="flex items-center gap-1">
              <MdPushPin className="text-lg sm:text-xl" />
              <span>Estd {established}</span>
            </div>
            <span className="hidden sm:inline">
              {isAutonomous
                ? "Autonomous University"
                : "Non-Autonomous University"}
            </span>
            <span>{questionsAnswered} Questions</span>
            <span className="hidden md:inline">
              Ranked {ranking} For MBA By NIRF 2022
            </span>
            <span>+{additionalInfo} More</span>
          </div>

          {/* Rating and Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 mt-6 sm:mt-8 md:mt-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {rating}
              </span>
              <Image
                src={reviewsImg}
                alt="Reviews"
                className="w-12 h-7 sm:w-14 sm:h-9 md:w-16 md:h-11 invert"
              />
            </div>
            <div className="flex sm:flex-col gap-3 sm:gap-5">
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold text-black border-gray-300 border bg-white rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg">
                Will You Get In
              </button>
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold text-black bg-transparent border-gray-300 border rounded-full bg-white hover:bg-gray-200 hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
                Get Contact Details
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden absolute top-0 bottom-0 ring-0 left-[27.5vw] translate-x-[-6px] backdrop-blur-[10px] opacity-100 border- w-[12px] border- z-10 h-full border-red-500"></div>
        <div className="lg:hidden absolute top-0 bottom-0 ring-0 left-[27.5vw] backdrop-blur-[8px] opacity-100 border- w-[12px] border- z-10 h-full border-red-500"></div>
        <div className="lg:hidden absolute top-0 bottom-0 ring-0 left-[27.5vw] translate-x-[6px] backdrop-blur-[6px] opacity-100 border- w-[12px] border- z-10 h-full border-red-500"></div>
        <div className="lg:hidden absolute top-0 bottom-0 ring-0 left-[27.5vw] translate-x-[12px] backdrop-blur-[4px] opacity-100 border- w-[12px] border- z-10 h-full border-red-500"></div>
        <div className="lg:hidden absolute top-0 bottom-0 ring-0 left-[27.5vw] translate-x-[18px] backdrop-blur-[2px] opacity-100 border- w-[12px] border- z-10 h-full border-red-500"></div>
        <div className="lg:hidden absolute top-0 bottom-0 ring-0 left-[27.5vw] translate-x-[24px] backdrop-blur-[1px] opacity-100 border- w-[12px] border- z-10 h-full border-red-500"></div>
        <div className="lg:hidden bg-[linear-gradient(90deg,#ffffffbf,#ffffff80)] opacity-100 border- border-blue-500 w-[60px] h-full"></div>
        <div className="lg:hidden bg-[linear-gradient(90deg,#ffffff80,#00000000)] opacity-100 border- border-blue-500 w-[60px] h-full"></div>
      </div>

      {/* Optional CSS for Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

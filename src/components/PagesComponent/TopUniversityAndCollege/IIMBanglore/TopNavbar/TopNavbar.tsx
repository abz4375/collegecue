"use client";
import React, { useEffect, useState } from "react";
import GalleryContainer from "../NapPages/Gallery/GalleryContainer";
import CoursesFees from "../NapPages/CoursesFees/CoursesFees";
import FacultyContainer from "../NapPages/Faculty/FacultyContainer";
import PlacementContainer from "../NapPages/Pacements/PlacementContainer";
import Review from "../NapPages/Review/Review";
import Applysection from "../Applynow/Applysection";
import TopCourses from "../TopCources/TopCources";
import LearnCourses from "../LearnCources/LearnCources";
import IIMBangaloreReview from "../IIMBangaloreReview/IIMBangaloreReview";
import CollegeCompareContainer from "../NapPages/CollegeCompare/CollegeCompareContainer";
import Hostel from "../NapPages/Hostel/HostelContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import CollegeLogo from "../../../../../assets/IIMBangalore/logo1.png";
import ReviewImg from "../../../../../assets/IIMBangalore/review.png";
import { MdPushPin } from "react-icons/md";

export const collegeInfo = {
  logo: CollegeLogo,
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

const TopNavbar: FC<Props> = ({ collegeInfo }) => {
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(0);
  const [screen, setScreen] = useState<boolean>(true);
  const {
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

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    { label: "Info" },
    { label: "Courses & Fees", component: <CoursesFees /> },
    { label: "Gallery", component: <GalleryContainer /> },
    { label: "Faculty", component: <FacultyContainer /> },
    { label: "Hostel", component: <Hostel /> },
    { label: "Placements", component: <PlacementContainer /> },
    { label: "Review", component: <Review /> },
    { label: "College Compare", component: <CollegeCompareContainer /> },
  ];

  const handleClick = (index: number) => {
    setActiveMenuItem(index === activeMenuItem ? index : index);
  };

  return (
    <div className="flex flex-row [@media_(max-width:_1096px)]:flex-col [@media_(max-width:_1096px)]:items-center justify-center pt-10 md:pt-0">
      <div className="flex flex-col items-start md:items-center justify-center border-black border- pr-4 md:pr-0 max-w-[950px] [@media_(max-width:_1250px)]:max-w-[640px] [@media_(max-width:_700px)]:max-w-[100vw] md:mt-2">
        {/* <div className=" flex items-center">
          <div className=" w-fit  pb-5 md:p-4 sm:mx-0 flex md:flex-col  items-center justify-start gap-1 border- border-black">
            <div>
              <Image src={logo} alt={""} className="m-3" />
            </div>
            <div className="flex flex-col items-start md:items-center border- border-black gap-1 ">
              <p className="font- bold text-2xl text-black text-center">
                {name}
              </p>
              <p className="text-gray-800 text-center">
                {location} | {approved} Approved
              </p>
              <div className="text-gray-800 gap-3 text-[10px] flex  items-center  md:gap-1 ">
                <div className="flex sm:w-[50px] items-center">
                  <MdPushPin className="scale-125 m-2" />
                  <div className=" h-full my-auto">Estd {established}</div>
                </div>
                <p className="sm:w-[60px]">
                  {isAutonomous
                    ? "Autonomous University"
                    : "Non-Autonomous University"}
                </p>
                <p className="sm:w-[60px]">
                  {" "}
                  {questionsAnswered} Questions Answered
                </p>
                <p className="sm:w-[60px]">
                  Ranked {ranking} For MBA By NIRF 2022
                </p>
                <p className="sm:w-[60px]">+{additionalInfo} More</p>
              </div>
              <div className="flex md:flex-col  items-center text-[15px] justify-center space-x-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="font-bold  text-gray-800 text-[25px]">
                    {rating}
                  </div>
                  <Image
                    src={reviewsImg}
                    alt="Reviews"
                    className="w-12 h-8 mt-1 invert"
                  />
                </div>

                <div className="flex  md:flex-col">
                  <button className="text-gray-800  ">Will You Get In</button>
                  <button className="text-gray-800 ">
                    Get Contact Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            648: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1096: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            type: "custom",
          }}
          modules={[Pagination, Autoplay]}
          className="w-full mb-10"
        >
          {menuItems.map((menuItem, index) => (
            <SwiperSlide
              key={index}
              className="flex p-1 w-[10px] justify-center items-end border- border-black"
              style={{ width: "250px" }}
            >
              <div
                className={`mx-auto transition-all duration-300 cursor-pointer border text-[0.9rem] font-semibold rounded-full text-gray-500 bg-white min-w-[60px] text-center py-[6px] px-[10px] w-fit flex flex-row ${
                  index === activeMenuItem
                    ? "text-gray-800 border-blue-500"
                    : "border-white hover:border-gray-300 text-opacity-80"
                }`}
                onClick={() => handleClick(index)}
              >
                {menuItem.label.split(" ").map((word, wordIndex) => (
                  <div key={wordIndex} className=" mr-[2px]">
                    {word}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex md:flex-col gap-10 border- border-black">
          <div className="flex flex-col  sm:max-w-[100vw] ">
            {activeMenuItem !== null && menuItems[activeMenuItem].component}
            <div>
              <IIMBangaloreReview />
            </div>
          </div>
        </div>
      </div>
      <div className="md:mx-2 min-w-[300px] max-w-[300px] [@media_(max-width:_1096px)]:mt-8 [@media_(max-width:_1096px)]:max-w-full [@media_(max-width:_1096px)]:w-full">
        <Applysection />
        <TopCourses />
        <LearnCourses />
      </div>
    </div>
  );
};

export default TopNavbar;

"use client";
import React, { useEffect, useState, useRef } from "react";
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
  menuRef?: React.RefObject<HTMLDivElement>;
}

const TopNavbar: FC<Props> = ({ collegeInfo, menuRef }) => {
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(0);
  const [screen, setScreen] = useState<boolean>(true);
  const [isSticky, setIsSticky] = useState(false);
  const menuRef2 = useRef<HTMLDivElement>(null);
  const originalOffsetTop = useRef<number>(0);

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

    const handleScroll = () => {
      if (menuRef2?.current) {
        if (originalOffsetTop.current === 0) {
          originalOffsetTop.current = menuRef2?.current.offsetTop;
        }

        const scrollPosition = window.scrollY;
        const threshold = 64;

        if (scrollPosition >= originalOffsetTop.current - threshold) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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

    const menuItemElement = document.querySelector(
      `.scrolltohere`
    );
    if (menuItemElement) {
      menuItemElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      const menuItemRect = menuItemElement.getBoundingClientRect();
      const offset = menuItemRect.top - 64;
      window.scrollBy({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="scrolltohere flex flex-row [@media_(max-width:_1096px)]:flex-col [@media_(max-width:_1096px)]:items-center justify-center pt-5 md:pt-0">
      <div className="flex flex-col items-start md:items-center justify-center border-black border- pr-4 md:pr-0 max-w-[950px] [@media_(max-width:_1250px)]:max-w-[640px] [@media_(max-width:_700px)]:max-w-[100vw] md:mt-2">
        <div
          ref={menuRef2}
          className={`${isSticky ? " pt-2 w-full fixed top-14 left-0 right-0 bg-white z-50 shadow-md mx-auto" : "w-full relative appearhere"}`}
        >
          <Swiper
            breakpoints={{
              300: { slidesPerView: 3, spaceBetween: 0 },
              648: { slidesPerView: 4.25, spaceBetween: 0 },
              1024: { slidesPerView: 5.25, spaceBetween: 0 },
              1096: { slidesPerView: 6.25, spaceBetween: 0 },
              1240:{ slidesPerView:8, spaceBetween: 0}
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              type: "custom",
            }}
            modules={[Pagination, Autoplay]}
            className={`${isSticky?' w-4/5 mx-auto md:w-full mb-1':'mb-10 w-full'} px-4`}
          >
            {menuItems.map((menuItem, index) => (
              <SwiperSlide
                key={index}
                className="flex p-1 w-[10px] justify-center items-end border- border-black"
                style={{ width: "250px" }}
              >
                <div
                  className={`mx-auto transition-all duration-300 cursor-pointer border text-[0.9rem] font-semibold rounded-full text-gray-500 bg-white text-center py-[6px] px-[10px] w-fit flex flex-row ${
                    index === activeMenuItem
                      ? "text-gray-800 border-blue-500"
                      : "border-white hover:border-gray-300 text-opacity-80"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {menuItem.label.split(" ").map((word, wordIndex) => (
                    <div key={wordIndex} className="mr-[2px]">
                      {word}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex md:flex-col gap-10 border- border-black">
          <div className="flex flex-col sm:max-w-[100vw]">
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
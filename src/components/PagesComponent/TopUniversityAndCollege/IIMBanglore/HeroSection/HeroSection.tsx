'use client';
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Poster from "../../../../../assets/IIMBangalore/poster.webp";
import Logo1 from "../../../../../assets/IIMBangalore/logo1.png";
import ReviewImg from "../../../../../assets/IIMBangalore/review.png";
import { MdPushPin } from "react-icons/md";

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

  return (
    <div className="relative w-full mt-[64px] overflow-hidden">
      {/* Poster Image as Background */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
        <Image
          src={poster}
          alt="Campus Poster"
          className="object-cover w-full h-full"
          layout="fill"
          priority // Preloads the image for better performance
        />
      </div>

      {/* Gradient Overlay with College Info */}
      <div className="absolute inset-0 bg-gradient-to-r bg-black backdrop-blur-lg shadow-md w-fit lg:bg-opacity-65 lg:w-full bg-opacity-75 from-black via-black/70 to-transparent flex items-center justify-start z-1">
        <div className="w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl p-6 sm:p-8 md:p-10 text-white animate-fadeIn">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <Image
              src={logo}
              alt="College Logo"
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </div>

          {/* College Name and Location */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
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
              {isAutonomous ? "Autonomous University" : "Non-Autonomous University"}
            </span>
            <span>{questionsAnswered} Questions</span>
            <span className="hidden md:inline">Ranked {ranking} For MBA By NIRF 2022</span>
            <span>+{additionalInfo} More</span>
          </div>

          {/* Rating and Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 mt-6 sm:mt-8 md:mt-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">{rating}</span>
              <Image
                src={reviewsImg}
                alt="Reviews"
                className="w-12 h-7 sm:w-14 sm:h-9 md:w-16 md:h-11"
              />
            </div>
            <div className="flex sm:flex-col gap-3 sm:gap-5">
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg">
                Will You Get In
              </button>
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
                Get Contact Details
              </button>
            </div>
          </div>
        </div>
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
'use client'

import React, { useState } from "react";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { FaUserGroup, FaBookmark } from "react-icons/fa6";

interface CourseCardProps {
  category: string;
  title: string;
  lessons: number;
  students: number;
  imageUrl: string;
  instructor: string;
  rating: number;
  originalPrice: string;
  discountedPrice: string;
  index: number;
}

const ExploreCourseCard: React.FC<CourseCardProps> = ({
  category,
  title,
  lessons,
  students,
  imageUrl,
  instructor,
  rating,
  originalPrice,
  discountedPrice,
  index,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const isTestCard = index >= 4;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[300px] md:w-[300px] lg:w-[320px] xl:w-[350px] mx-auto">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={imageUrl}
          alt={`Image for ${title}`}
          width={400}
          height={200}
          className="object-cover w-full h-[150px] sm:h-[250px] md:h-[220px] lg:h-[230px] rounded-t-lg transition-transform duration-300 cursor-pointer"
        />
        {/* <div
          className={`absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
            isBookmarked ? "text-blue-500" : "text-gray-100"
          }`}
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <FaBookmark className="text-white text-sm" />
        </div> */}
         <div className="absolute right-0 top-0 m-2 ">
                  {/* <CiBookmark  className=" text-gray-900  hover:text-white   " /> */}
                    <button
                            className={`p-2  ${
                              isBookmarked ? " text-blue-500 " : " text-white"
                            } transition`}
                            onClick={() => setIsBookmarked(!isBookmarked)}
                            title="Save article"
                          >
                            <FaBookmark className="text-lg " />
                          </button>
                </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="bg-[#EEEBFF] text-blue-500 text-sm font-normal leading-6 rounded-md mb-1 px-2.5 py-1 inline-block">
          {category}
        </div>
        <p className="font-medium text-[15px] sm:text-base mb-1 hover:text-blue-700 transition-colors duration-300 cursor-pointer">
          {title}
        </p>

        {/* Lessons & Students */}
        <div className="text-sm text-[#737477] mb-3 flex flex-wrap items-center gap-3">
          <span className="flex items-center">
            <SlCalender className="mr-1 text-base" />
            {isTestCard ? `${lessons} Tests` : `${lessons} Lessons`}
          </span>
          <span className="flex items-center">
            <FaUserGroup className="mr-1 text-base" /> {students} Students
          </span>
        </div>

        {/* Instructor */}
        <div className="text-sm font-semibold text-gray-700 mb-2">
          Dr. {instructor}
        </div>

        {/* Rating & Price */}
        <div className="flex flex-wrap items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-gray-900 mr-1 text-sm sm:text-base">
              {rating.toFixed(1)}
            </span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 fill-current ${
                    i < Math.round(rating) ? "text-blue-500" : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.364 4.22a1 1 0 00.95.69h4.439c.969 0 1.371 1.24.588 1.81l-3.592 2.606a1 1 0 00-.364 1.118l1.364 4.22c.3.921-.755 1.688-1.54 1.118l-3.592-2.606a1 1 0 00-1.175 0l-3.592 2.606c-.784.57-1.84-.197-1.54-1.118l1.364-4.22a1 1 0 00-.364-1.118L2.25 9.647c-.783-.57-.381-1.81.588-1.81h4.439a1 1 0 00.95-.69l1.364-4.22z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center text-lg sm:text-xl">
            <span className="line-through text-gray-500 mr-2 text-sm sm:text-base">
              ${originalPrice}
            </span>
            <span className="text-gray-700 font-serif">${discountedPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExploreCourseCard };

import React from 'react';
import Image from 'next/image';
import { SlCalender } from "react-icons/sl";
import { FaUserGroup } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";


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
  const isTestCard = index >= 4;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[300px] xl:w-full lg:w-full md:w-full sm:w-full">
      <div className="p-4 rounded-t-lg relative">
        <div className="border rounded-lg overflow-hidden relative">
          <Image
            src={imageUrl}
            alt={`Image for ${title}`}
            width={400}
            height={300}
            className="object-cover rounded-lg transform w-full hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <div className="absolute top-2 right-2 flex items-center justify-center bg-[#b7c1c8] rounded-full w-8 h-8 hover:bg-[#553CDF] cursor-pointer">
            <FaBookmark
              className="text-white text-sm"
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-[#EEEBFF] text-[#553CDF] text-sm font-normal leading-6 rounded-md mb-1 px-2.5 py-1 inline-block">
          {category}
        </div>
        <p className="font-medium text-[20px] mb-2 hover:text-[#0d6efd] transition-colors duration-300 cursor-pointer">
          {title}
        </p>
        <div className="text-sm text-[#737477] mb-4 text-[15px] flex items-start gap-4">
          <span className="flex items-center">
            <SlCalender   className="mr-1" /> {isTestCard ? `${lessons} Tests` : `${lessons} Lessons`}
          </span>
          <span className="flex items-center">
            <  FaUserGroup
              className="mr-1"
            /> {students} Students
          </span>
        </div>
        <div className="text-sm font-semibold text-gray-700 mb-2">Dr. {instructor}</div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">{rating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 fill-current ${i < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.364 4.22a1 1 0 00.95.69h4.439c.969 0 1.371 1.24.588 1.81l-3.592 2.606a1 1 0 00-.364 1.118l1.364 4.22c.3.921-.755 1.688-1.54 1.118l-3.592-2.606a1 1 0 00-1.175 0l-3.592 2.606c-.784.57-1.84-.197-1.54-1.118l1.364-4.22a1 1 0 00-.364-1.118L2.25 9.647c-.783-.57-.381-1.81.588-1.81h4.439a1 1 0 00.95-.69l1.364-4.22z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex items-center text-lg">
            <span className="line-through text-gray-500 mr-2">${originalPrice}</span>
            <span className="text-red-500">${discountedPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExploreCourseCard };

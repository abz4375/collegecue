import Image, { StaticImageData } from "next/image";
import React from "react";
import Logo from "@/assets/CourseFinder/Logo.png";
import StarRating from "../StarRating";

interface Props {
  course: string;
  branch: string;
  rating: number;
  institution: string;
  year: string;
  degree: string;
  type: string;
  time: string;
  role: string;
  apply: string;
  college: string;
  othercollege: string;
  other: string;
  reviews: Review[];
  img?: StaticImageData | string;
  name?: string;
}

interface Review {
  review: string;
}
const CourseFinderCard = ({
  course,
  branch,
  rating,
  institution,
  year,
  degree,
  type,
  time,
  role,
  apply,
  college,
  othercollege,
  other,
  reviews,
  img, // Access img directly from destructured props
  name,
}: Props) => {
  return (
    <div className="rounded-2xl   h-auto border border-solid border-gray-300 hover:shadow-md md:flex md:flex-col md:items-center md:justify-center ">
      <div className="flex m-2 md:flex-col justify-center items-center">
        <div className=" w-[10rem] h-[10rem] rounded-l-2xl rounded-br-2xl bg-white border border-solid border-[#7B90FF] mr-[1rem] flex justify-center items-center overflow-hidden ">
          <Image src={Logo} alt="logo" className=" object-cover" />
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="flex flex-wrap gap-2  md:flex-col items-center md:justify-center md:text-center">
            <h6 className=" text-[#210366] text-[19px] font-semibold ">
              {course}
            </h6>
            <h6 className=" text-[#210366] text-[19px] font-semibold ">
              {branch}
            </h6>
            <StarRating rating={rating} />
          </div>
          <div className="flex flex-wrap md:justify-center md:items-center">
            <p className=" text-[#210366] text-sm font-medium mr-[0.3rem]">
              {institution}
            </p>
            <p className=" text-[#210366] text-sm font-medium mr-[0.3rem]">
              {year}
            </p>
            <p className=" text-[#210366] text-sm font-medium mr-[0.3rem]">
              {degree}
            </p>
            <p className=" text-[#210366] text-sm font-medium mr-[0.3rem]">
              {type}
            </p>
            <p className=" text-[#210366] text-sm font-medium mr-[0.3rem]">
              {time}
            </p>
          </div>
          <div className="flex flex-wrap md:flex-col md:justify-center md:items-center">
            {reviews.map((review, index) => (
              <div
                className=" text-[#210366] text-sm font-medium mr-[1rem] cursor-pointer mb-[1rem]"
                key={index}
              >
                {review.review}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 md:justify-center items-center">
            <div className="flex h-[2rem] md:h-auto  p-2 rounded-lg overflow-auto bg-indigo-200">
              <p className="text-[#210366] text-[12px] font-semibold capitalize ">
                Popular Job Roles: {role}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap rounded-b-2xl justify-center w-full p-[1%] md:p-[3%]  md:flex-col bg-indigo-200 ">
        {[college, othercollege, other].map((item, index) => (
          <div className=" flex items-center  mr-4 " key={index}>
            <Image
              src={Logo}
              alt="logo"
              className="w-[25px] h-[25px] mr-[1rem] "
            />
            <p className="text-[#210366] font-medium ">{item}</p>
          </div>
        ))}
        <button className=" bg-[#FF7900] flex items-center rounded-lg text-white py-[6px] px-[16px]  ">
          {" "}
          {apply}
        </button>
      </div>
    </div>
  );
};

export default CourseFinderCard;

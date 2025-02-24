"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface Props {
  avatar: StaticImageData | string;
  name: string;
  institution: string;
  review: string;
  course: string;
}
const TopReviewCard = ({
  avatar,
  name,
  institution,
  review,
  course,
}: Props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className=" group hover:bg-violet-100 transition-colors duration-200 rounded-2xl w-[22.625rem] p-4 flex flex-col gap-5 sm:w-full sm:h-auto">
      <div className="flex flex-col gap-4 flex-wrap !text-[0.8rem]">
        <div
          className={` bg-violet-100 group-hover:bg-white transition-colors duration-200 rounded-full px-4 py-3 border w-[50px] uppercase`}
        >
          {name[0]}
        </div>
        <div className="flex flex-col">
          <div className=" font-bold text-[#2f1370] text-[0.8rem]">{name}</div>
          <div className=" font-bold text-[0.8rem]">{institution}</div>
        </div>
        <div className="border border-white"></div>
      </div>
      <div>
        <div
          className={` ${
            show ? " h-fit" : "h-[4.5rem]"
          } overflow-hidden transition-all duration-300 ease-in-out  `}
        >
          {review}
        </div>

        <button
          onClick={handleClick}
          className={`${
            show ? "hidden" : "block"
          } text-[#2f1370] bg-violet-100 group-hover:bg-white transition-colors duration-200 mt-2 px-4 py-3 shadow-2xl drop-shadow-sm border rounded-full
        `}
        >
          Show More{" "}
        </button>
        <button
          onClick={handleClick}
          className={`${
            !show ? "hidden" : "block"
          } text-[#2f1370] bg-violet-100 group-hover:bg-white transition-colors duration-200 px-4 py-3 shadow-2xl drop-shadow-sm border rounded-full`}
        >
          Show Less{" "}
        </button>
      </div>
    </div>
  );
};

export default TopReviewCard;

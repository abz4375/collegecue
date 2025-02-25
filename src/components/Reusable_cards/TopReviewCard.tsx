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
    <div className="lg:w-full mx-4 lg:mx-auto group hover:shadow-xl border-2 border-gray-300 hover:bg-blue-100 hover:bg-opacity-75 transition-colors duration-150 rounded-2xl w-[22.625rem] p-4 flex flex-col gap-5 sm:w-full sm:h-auto ">
      <div className="flex flex-row gap-4 flex-wrap !text-[0.8rem]">
        <div
          className={`bg-blue-300 transition-colors duration-150 rounded-full px-4 py-3 border w-[50px] uppercase font-bold`}
        >
          {name[0]}
        </div>
        <div className="flex flex-col">
          <div className="font-bold  text-base">{name}</div>
          <div className="font-bold text-blue-900 text-opacity-60 text-[0.8rem]">{institution}</div>
        </div>
      </div>
      <div>
        <div
          className={`overflow-hidden text-sm transition-all duration-500 ease-in-out ${
            show ? "max-h-60 opacity-100" : "max-h-[4.5rem] opacity-75"
          }`}
        >
          {review}
        </div>

        <button
          onClick={handleClick}
          className={`${
            show ? "hidden" : "mt-2 block"
          } text-blue-900 bg-blue-100 group-hover:bg-white transition-colors duration-150 mt-2 px-4 py-2 text-sm shadow-2xl drop-shadow-sm border rounded-full`}
        >
          Show More
        </button>
        <button
          onClick={handleClick}
          className={`${
            !show ? "hidden" : "mt-2 block"
          } text-blue-900 bg-blue-100 group-hover:bg-white transition-colors duration-150 px-4 py-2 text-sm shadow-2xl drop-shadow-sm border rounded-full`}
        >
          Show Less
        </button>
      </div>
    </div>
  );
};

export default TopReviewCard;

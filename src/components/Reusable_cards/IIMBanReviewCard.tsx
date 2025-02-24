"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import FilterButton from "../Buttons/FilterButton";

interface Props {
  avatar: StaticImageData | string;
  user: string;
  institution: string;
  date: string;
  rating: string;
  reviews: Reviews[];
  heading: string;
}
interface Reviews {
  heading: string;
  review: string;
}

const IIMBanReviewCard = ({
  avatar,
  user,
  institution,
  date,
  rating,
  reviews,
  heading,
}: Props) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="bg-[#fff] shadow drop-shadow rounded-xl p-4 flex flex-col gap-2 max-w-[full] sm:max-w-[320px] mx-auto h-auto border border-gray-300">
      <div className="flex gap-4 justify-between flex-wrap text-[0.8rem]">
        <div className="flex gap-4">
          <div className="bg-blue-300 rounded-full px-4 py-3 border uppercase">
            {user[0]}
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-black capitalize text-[0.8rem]">
              {user}
            </div>
            <div className="flex gap-4">
              <p className={`text-[0.8rem] ${institution ? "" : "hidden"}`}>
                {institution}
              </p>
              <p className="text-[0.8rem] font-bold text-gray-500">{date}</p>
            </div>
          </div>
        </div>
        <div className="font-bold text-black text-lg">
          <span className="text-blue-500">{rating}</span> / 10
        </div>
      </div>
      {/* Updated content section with smooth transition */}
      <div className="relative">
        <div
          className={`${
            show ? "max-h-[1000px]" : "max-h-[6rem]"
          } overflow-hidden transition-all duration-500 ease-out`}
        >
          <h6 className="text-blue-500 text-[1rem]">{heading} : </h6>
          {reviews.map(({ heading, review }, index) => (
            <div key={index}>
              <span className="text-blue-500">{heading} - </span>
              {review}
            </div>
          ))}
        </div>
        {/* Gradient overlay when collapsed */}
        {!show && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-red-500 to-transparent pointer-events-none" />
        )}
      </div>
      <div className="flex justify-between items-center flex-wrap">
          <button
            onClick={handleClick}
            className={`${
              show ? "hidden" : "block"
            } text-blue-500 text-opacity-75 text-sm p-0 mb-2`}
          >
            Read More
          </button>
          <button
            onClick={handleClick}
            className={`${
              !show ? "hidden" : "block"
            } text-blue-500 text-opacity-75 text-sm p-0 mb-2`}
          >
            Read Less
          </button>
        <div className="flex gap-4 sm:gap-0">
          <FilterButton>
            <CiFlag1 className="text-red-600 text-[1.3rem]" />Report
          </FilterButton>
          <FilterButton onClick={() => setLike(like + 1)}>
            <AiFillLike className="text-blue-500 text-[1.3rem]" /> {like}
          </FilterButton>
          <FilterButton onClick={() => setDislike(dislike + 1)}>
            <AiFillDislike className="text-[#FF7900] text-[1.3rem]" /> {dislike}
          </FilterButton>
        </div>
      </div>
    </div>
  );
};

export default IIMBanReviewCard;

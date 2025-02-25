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

const ReviewCard = ({
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
    <div className="p-4 mx-auto flex group hover:shadow-xl hover:bg-slate-100 hover:bg-opacity-75 border-2 border-gray-300 flex-col transition-colors rounded-2xl duration-200 gap-4 overflow-x-auto lg:max-w-[90vw]">
      <div className="flex gap-4 flex-wrap !text-[0.8rem]">
        <div className="flex w-full gap-2">
          <div className="bg-blue-300 font-bold transition-colors duration-200 rounded-full px-4 py-3 border uppercase">
            {user[0]}
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <div className="font-bold capitalize text-base">{user}</div>
              <div className="flex gap-4">
                <p className="text-[0.8rem] font-bold text-blue-900 text-opacity-60">
                  {institution}
                </p>
                <p className="text-[0.8rem] text-gray-600">{date}</p>
              </div>
            </div>
            <div className="font-bold text-base text-black">
              <span className="text-blue-900">{rating}</span> / 10
            </div>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          show ? "max-h-[1000px]" : "max-h-[6rem]"
        }`}
        style={{
          transitionProperty: "max-height, opacity, transform",
          transform: show ? "translateY(0)" : "translateY(-2px)",
          opacity: show ? 1 : 0.95,
        }}
      >
        <h6 className="text-gray-800 font-bold text-lg mb-2">{heading}</h6>
        {reviews.map(({ heading, review }, index) => (
          <div key={index} className="text-gray-800 text-sm">
            <span className="text-blue-500 font-bold text-opacity-80">{heading} : </span>
            {review}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center md:flex-col md:items-start">
        <button
          onClick={handleClick}
          className={`text-blue-900 bg-slate-100 group-hover:bg-white transition-all duration-300 ease-in-out px-4 py-2 text-sm shadow-2xl drop-shadow-sm border rounded-full ${
            show ? "opacity-0 h-0 -translate-y-2" : "opacity-100 h-auto translate-y-0"
          }`}
          style={{ pointerEvents: show ? "none" : "auto" }}
        >
          Show More
        </button>
        <button
          onClick={handleClick}
          className={`text-blue-900 bg-slate-100 group-hover:bg-white transition-all duration-300 ease-in-out px-4 py-2 text-sm shadow-2xl drop-shadow-sm border rounded-full ${
            !show ? "opacity-0 h-0 translate-y-2" : "opacity-100 h-auto translate-y-0 mt-2"
          }`}
          style={{ pointerEvents: !show ? "none" : "auto" }}
        >
          Show Less
        </button>
        <div className="flex gap-auto">
          <FilterButton>
            <CiFlag1 className="text-red-600 font-bold text-[1.3rem]" /> Report
          </FilterButton>
          <FilterButton onClick={() => setLike(like + 1)}>
            <AiFillLike className="text-blue-500 text-[1.3rem]" /> {like}
          </FilterButton>
          <FilterButton onClick={() => setDislike(dislike + 1)}>
            <AiFillDislike className="text-orange-500 text-[1.3rem]" /> {dislike}
          </FilterButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
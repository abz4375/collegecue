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
    <div className="p-2 flex group hover:bg-violet-100 flex-col transition-colors rounded-2xl duration-200 gap-6 overflow-x-auto lg:max-w-[90vw]">
      <div className="flex gap-4 flex-wrap !text-[0.8rem]">
        <div className="flex w-full  gap-4 ">
          <div
            className={` bg-violet-300 group-hover:bg-white transition-colors duration-200 rounded-full px-4 py-3 border uppercase`}
          >
            {user[0]}
          </div>
          <div className="flex items-center border-b-2 border-purple-200 justify-between w-full">
          <div className="flex flex-col">
              <div className=" font-bold text-[#2f1370] capitalize text-[0.8rem]">
                {user}
              </div>
              <div className="flex gap-4">
                <p className="text-[0.8rem]">{institution}</p>
                <p className="text-[0.8rem] font-bold text-[#FF7900]">{date}</p>
              </div>
            </div>
            <div className=" font-bold text-[#FF7900]">
                <span className=" text-[#000]">{rating}</span> / 10
            </div>  
          </div>            
        </div>
        
      </div>
   
      
      <div
        className={` ${
          show ? "h-auto" : "h-[6rem]"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <h6 className=" text-[#7B90FF] text-[1rem]">{heading}</h6>
        {reviews.map(({ heading, review }, index) => {
          return (
            <div key={index}>
              <span style={{ color: "#7B90FF" }}>{heading} : </span>

              {review}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center md:flex-col md:items-start">
        <button
          onClick={handleClick}
          className={`${show ? "hidden" : "block"} text-[#FF7900] p-0   `}
        >
          Read More
        </button>
        <button
          onClick={handleClick}
          className={`${!show ? "hidden" : "block"} text-[#FF7900] p-0  `}
        >
          Read Less
        </button>
        <div className=" flex gap-auto">
          <FilterButton>
            <CiFlag1 className=" text-[#000] text-[1.3rem]" /> Report
          </FilterButton>
          <FilterButton onClick={() => setLike(like + 1)}>
            <AiFillLike className=" text-[#7B90FF] text-[1.3rem]"  /> {like}
          </FilterButton>
          <FilterButton onClick={() => setDislike(dislike + 1)}>
            <AiFillDislike className=" text-[#FF7900] text-[1.3rem]"  /> {dislike}
          </FilterButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

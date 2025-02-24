"use client";
import React, { useState } from "react";

interface NewsCard {
  heading: string;
  date: string;
  description: string;
}

type CardProps = {
  NewsData: NewsCard;
};

const LatestNewsCard: React.FC<CardProps> = ({ NewsData }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(true);
  };

  const handleReadLess = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`transition-all duration-300 bg-white rounded-3xl p-4 
      flex flex-col justify-between items-center border border-gray-400 
      ${isExpanded ? "min-h-[300px] max-h-auto" : "min-h-[200px] max-h-[200px]"} 
     min-w-[300px] sm:w-[350px] md:w-[350px] mx-auto lg:w-[30%] xl:w-[25%] max-w-[400px]`}
    >
      {/* Heading and Date Section */}
      <div className="flex flex-col items-start justify-between w-full">
        <h1 className=" text-lg font-semibold md:text-xl tracking-wide text-black flex-1">
          {NewsData.heading.slice(0, 65) + ".."}.
        </h1>
        <p className="text-sm text-gray-500 mt-1">{NewsData.date}</p>
      </div>

      {/* Description (hidden when collapsed) */}
      <div className="overflow-hidden transition-all duration w-full text-start">
        <p className={`text-base font-light text-[#171616] transition-all duration
          ${isExpanded ? "opacity-100 max-h-[200px]" : "opacity-60 max-h-[40px] truncate"}`}>
          {NewsData.description}
        </p>
      </div>

      <button
        onClick={isExpanded ? handleReadLess : handleReadMore}
        className="px-2 py-1 text-black border rounded-full bg-white font-semibold text-sm uppercase hover:text-blue-500 mt-2"
      >
        {isExpanded ? "View Less" : "Know More"}
      </button>
    </div>
  );
};

export {LatestNewsCard};
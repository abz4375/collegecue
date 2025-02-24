"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CardSectionProps {
  logo?: any;
  heading: string;
  description: string;
  className?: string;
}
const CardSection: React.FC<CardSectionProps> = ({
  logo,
  heading,
  description,
  className,
}) => {
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
      ${
        isExpanded ? "min-h-[400px] max-h-auto" : "min-h-[200px] max-h-[200px]"
      } 
     min-w-[300px] sm:w-[350px] md:w-[350px] mx-auto lg:w-[30%] xl:w-[25%] max-w-[400px]
      ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <h1 className="font-medium text-lg md:text-xl tracking-wide text-black flex-1">
          {heading.slice(0, 65)}.
        </h1>

        {logo && (
          <div className="w-14 h-14 md:w-16 md:h-16">
            <Image
              src={logo}
              alt="Logo"
              width={64}
              height={64}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
      </div>

      <div className="overflow-hidden transition-all duration w-full text-start ">
        <p
          className={`text-base font-light text-[#171616] transition-all duration 
          ${
            isExpanded
              ? "opacity-100 max-h-[200px]"
              : "opacity-60 max-h-[40px] truncate"
          }`}
        >
          {description}
        </p>
      </div>

      <button
        onClick={isExpanded ? handleReadLess : handleReadMore}
        className="px-2 py-1 text-balck border rounded-full bg-white font-semibold text-sm uppercase hover:text-blue-500"
      >
        {isExpanded ? "View Less" : "Know More"}
      </button>
    </div>
  );
};

export default CardSection;

"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
interface Review {
  Answer: string;
}

interface FilterComponentProps {
  heading: string;
  reviews: Review[];
}

const FilterComponentCard: React.FC<FilterComponentProps> = ({
  heading,
  reviews,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white  border-b-[1px]  border-[#D3D3D3]">
      <div
        className="flex items-center cursor-pointer p-4 gap-20"
        onClick={handleToggleExpand}
      >
        <p className="flex-1  text-[#210366] font-semibold text-[14px]">
          {heading}
        </p>
        <div>
          {" "}
          {expanded ? (
            <FaChevronDown className="text-gray-600 rotate-180 transform duration-300" />
          ) : (
            <FaChevronDown className="text-gray-600 transform duration-300" />
          )}
        </div>
      </div>
      {expanded && (
        <div className="transform duration-300 pl-[19px]">
          {reviews.map(({ Answer }, index) => (
            <div key={index} className="flex items-center mb-3 mt-[10px]">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-800 text-[14px]">{Answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponentCard;
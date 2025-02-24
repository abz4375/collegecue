"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <div className={`flex justify-end items-center mt-8 bg-black `}>
      {" "}
      {/* Changed justify-center to justify-end */}
      <div
        className={`flex items-center justify-center  ${
          expanded ? "w-64 bg-[#E0E1E1] " : "w-16 bg-transparent"
        } h-16 rounded-full transition-all duration-200 ease-in-out absolute sm:w-32 sm:h-1/2 `}
      >
        <button
          onClick={handleExpand}
          className={`${
            expanded ? "hidden" : "block"
          } my-auto p-2 outline-none `}
        >
          <FaSearch
            className={`my-auto  ${expanded ? "text-gray-400 " : "text-white"}`}
          />
        </button>
        <input
          placeholder="Search..."
          className={`${
            expanded ? "block" : "hidden"
          } w-full p-2  outline-none bg-transparent pl-8 text-[#585558] `}
        />
        <button
          onClick={handleCollapse}
          className={`${expanded ? "block p-7 " : "hidden"}`}
        >
          <FaSearch className="text-[#676666]" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

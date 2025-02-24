"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchJob: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", searchText, "with option:", selectedOption);
    setSearchText("");
    setSelectedOption("");
    // Implement your search logic here using the searchText state and selectedOption state
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="sm:w-[350px] sm:mr-4 sm:mb-20 w-[1000px] h-[90px] pl-3 pr-6 pt-[25.01px] pb-[26px] bg-white rounded-xl shadow justify-between items-end inline-flex">
      <div className="h-[49px] flex items-end gap-20">
        <div className="flex items-center ml-6 gap-4">
          <AiOutlineSearch className="text-[#75787C] w-[1.5rem] h-[1.5rem]" />
          <div className="text-[#213645] text-opacity-90 text-[20px] font-light leading-normal tracking-wide flex items-center gap-3">
            Colleges
            <RiArrowDropDownLine
              className="text-[#7D8084] text-[24px] cursor-pointer"
              onClick={handleDropdownClick}
            />
            {showDropdown && (
              <div className="absolute mt-[120px]  ml-[100px] bg-white rounded shadow-md">
                {["Option 1", "Option 2", "Option 3"].map((option) => (
                  <div
                    key={option}
                    className="py-1 h-[30px] px-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
      

        </div>
       
        <div className="flex items-center  ml-[200px]  gap-6">
        <AiOutlineSearch className="text-[#75787C] w-[1.5rem] h-[1.5rem]" />


          {["BTech", "MCA"].map((course) => (
            <div key={course} className="flex items-center gap-2 bg-[#E4EEFC] rounded-[60px] px-10 py-2">
              <button className="text-blue-800 text-sm font-medium">{course}</button>
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-[140px] h-12 px-10 bg-[#802ACE] rounded-lg flex items-center justify-center text-white transition duration-300 ease-in-out"
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EA9771")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#802ACE")}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchJob;

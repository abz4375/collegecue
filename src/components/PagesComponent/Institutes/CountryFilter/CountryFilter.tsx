"use client";
import React, { useState } from "react";
import Btns from "../../../DummyData/InstitutesData";
import CounterFilterBtn from "./CounterFilterBtn";

const CountryFilter = () => {
  const [showAllButtons, setShowAllButtons] = useState(false);

  const handleButtonClick = () => {
    setShowAllButtons(!showAllButtons); // Toggle the state between true and false
  };

  // Define the number of buttons to show based on screen size
  const getVisibleButtonsCount = () => {
    if (window.innerWidth >= 1024) return 5; // lg screens and above
    if (window.innerWidth >= 768) return 2; // md screens (medium)
    return 1; // sm screens and below
  };

  return (
    <div className="flex overflow-auto [@media_(min-width:_640px)]:flex-wrap gap-4 shadow-md rounded-xl lg:ml-10 justify-center sm:justify-start border-2 p-2 items-center border-solid border-[#edeff0]">
      <p className="text-[#1a1b1d] font-semibold">Select City</p>
      <div className={`w-[1px] h-12 bg-gray-300 ${showAllButtons?'hidden':''}`}></div>

      <div className="flex [@media_(min-width:_640px)]:flex-wrap sm:flex-row  gap-3">
        {Btns.slice(0, showAllButtons ? Btns.length : getVisibleButtonsCount()).map((btn) => (
          <CounterFilterBtn key={btn.index} name={btn.name} />
        ))}
        {!showAllButtons && Btns.length > getVisibleButtonsCount() && (
          <button
            onClick={handleButtonClick}
            className="rounded-md py-2 px-[19px] font-semibold text-gray-600 transition-all duration-200 hover:text-blue-600 hover:border border-blue-500"
          >
            SHOW ALL
          </button>
        )}
        {showAllButtons && (
          <button
            onClick={handleButtonClick}
            className="rounded-md py-2 px-[19px] font-semibold text-gray-600 transition-all duration-200 hover:text-blue-600 hover:border border-blue-500"
          >
            HIDE
          </button>
        )}
      </div>
    </div>
  );
};

export default CountryFilter;
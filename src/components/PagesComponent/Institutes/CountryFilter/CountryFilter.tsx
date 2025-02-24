"use client";
import React, { useState } from "react";
import Btns from "../../../DummyData/InstitutesData";
import CounterFilterBtn from "./CounterFilterBtn";

const CountryFilter = () => {
  const [showAllButtons, setShowAllButtons] = useState(false);

  const handleButtonClick = () => {
    setShowAllButtons(!showAllButtons); // Toggle the state between true and false
  };
  return (
    <div className="flex overflow-auto flex-wrap gap-4  shadow-md rounded-xl  lg:ml-10   border-2 p-2 items-center border-solid border-[#edeff0]">
      {/* <div className=" border-r-2 border-solid border-[#dbd7d7] p-4 w-[10%] lg:w-full  flex items-center  "> */}
      <p className=" text-[#1a1b1d] font-semibold">Select City</p>
      <div className="w-[1px] h-12 bg-gray-300"></div>

      <div className="flex flex-wrap w-4/5  gap-3 ">
        {Btns.slice(0, showAllButtons ? Btns.length : 5).map((btn) => (
          <CounterFilterBtn key={btn.index} name={btn.name} />
        ))}
        {!showAllButtons && (
          <button
            onClick={handleButtonClick}
            className=" rounded-md py-2 px-[19px] items-center font-semibold text-gray-600 transition-all duration-200 hover:text-blue-600 hover:border border-blue-500"
          >
            SHOW ALL
          </button>
        )}

        {showAllButtons && (
          <button
            onClick={handleButtonClick}
            className=" rounded-md py-2 px-[19px] items-center font-semibold text-gray-600 transition-all duration-200 hover:text-blue-600 hover:border border-blue-500"
          >
            HIDE
          </button>
        )}
      </div>
    </div>
  );
};

export default CountryFilter;

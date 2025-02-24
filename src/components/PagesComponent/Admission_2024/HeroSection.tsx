import React from "react";
import Image from "next/image";
import img from "../../../assets/Admisssion2024/colgadmision.webp";

const HeroSection: React.FC = () => {
  return (
    <div className="max-w-full flex flex-col justify-center items-center relative bg-[linear-gradient(180deg,rgb(227,243,250),#FFFFFF)]">
      {/**/}
      <div className="w-[20rem] h-[20rem] rounded-[50%] border-[3.5rem] -ml-[10%] border-white xl:hidden top-[44%]  left-0 z-[1] navmd:hidden absolute" />
      <div className="w-[20rem] h-[20rem] rounded-[50%] border-[3.5rem] border-white -mt-[40rem] right-0  xl:hidden mr-[4%] z-[1] navmd:hidden absolute" />
      <div className="flex flex-row items-center justify-center relative self-stretch h-auto ">
        <div className="flex flex-col justify-center z-[5] items-center pt-20 gap-[3rem] relative md:pt-12 md:px-4 md:gap-6">
          <p className="text-5xl md:text-3xl font-bold text-[#2a4174] text-center">GET ADMISSION IN BEST COLLEGES</p>
          <div className="w-full flex justify-center items-center">
            <Image src={img} alt="@bharat" className="w-3/4 h-3/4 md:h-full md:w-full object-cover" />
          </div>
        </div>
      </div>
    
      <div className="w-3/4 h-[7rem] -mt-10 z-[10] overflow-hidden md:-mt-4 bg-white rounded-2xl shadow-md md:h-auto">
        <div className="h-full flex flex-row md:flex-col justify-center items-center">
      
          <div className="w-1/3 md:w-full flex justify-center items-center">
            <input
              type="text"
              placeholder="Search college ..."
              className="w-[90%] h-[2.5rem] focus:outline-none rounded-lg border pl-4 border-gray-300
           md:w-full md:border-0"
            />
          </div>
          <div className="md:w-full w-1/3 flex justify-center items-center">
            <select
              className="w-[90%] h-[2.5rem] focus:outline-none rounded-lg border pl-4 border-gray-300
           md:w-full md:border-0 md:rounded-none"
            >
              <option>Select Course</option>
            </select>
          </div>
          <div className="h-full w-1/3 justify-center flex items-center md:w-full md:h-[3rem]">
            <button className="flex justify-center items-center h-[2.5rem] w-[10rem] bg-violet-600 border-0 rounded-xl text-white">
              Search
            </button>
          </div>
        </div>
      </div>
     
      </div>

  );
};

export {HeroSection};

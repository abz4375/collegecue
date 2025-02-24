import React from "react";
import { CollegeCompareCard, CollegeCompareCard2 } from "./CollegeCompareCard";
import logo from "@/assets/IIMBangalore/NavPages/CollegeCompare/office-building.png";

const CollegeCompare: React.FC = () => {
  return (
    <>
      <div className="container mx-auto  bg-white rounded-xl p-8 pt-2">
        <div className="font-bold  sm:text-center text-[30px] text-gray-800 mb-4">
          College Compare
        </div>
        <div className="flex md:flex-col justify-center items-center gap-5 md:gap-0">
          <div className=" max-w-[320px] border-2 border-gray-300 rounded-xl overflow-hidden shadow-md">
            <CollegeCompareCard />
          </div>
          <div className="flex justify-center items-center my-5">
            <div className="bg-blue-200 bg-opacity-75 rounded-full h-12 w-12 flex items-center justify-center">
              <p className="text-blue-800 text-lg font-semibold">Vs</p>
            </div>
          </div>
          <CollegeCompareCard2
            img_logo={logo}
            img_title={"Search College"}
            img_body={"and select Course"}
          />
        </div>
      </div>
    </>
  );
};

export default CollegeCompare;

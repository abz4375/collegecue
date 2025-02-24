import React from "react";
import CountryFilter from "./CountryFilter/CountryFilter";
import FilterComponents from "@/components/Allfilters/Filter/FilterComponents";
import RightCard from "./RightCard";
import InstituteHero from "@/assets/Hero_Section/institutes.png";
import Image from "next/image";
import Background from "./Background";
const InstitutesContainer = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center  py-5 ">
        <div className="max-w-[1340px] w-full h-[350px] flex flex-row items-center bg-white mt-12    overflow-hidden">
          {/* Left Section - Text Content */}
          <div className="w-1/2 flex flex-col justify-center px-6 py-16  text-center">
            <h2 className="font-bold text-[2.5rem] md:text-[1.8rem] text-gray-900">
              List of Top Institutes in India Based on 2024 Ranking
            </h2>
          </div>

          {/* Right Section - Image */}
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src={InstituteHero}
              alt="Review"
              width={400}
              height={600}
              sizes="(min-width:835px) 50vw, 100vw"
              className="h-[300px] md:h-[600px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="container max-w-[1280px] flex flex-col items-center justify-center gap-6 mb-5 lg:py-2 mx-auto px-4 xl:px-5">
        <div className="flex flex-col py-16 lg:px-2 lg:py-1 lg:pb-6 md:p-0 w-full  ">
          <div className=" my-16 lg:max-w-[90%] ">
            <CountryFilter />
          </div>
          <div className="max-w-[1440px] mx-auto  sm:ml-4 sm:mr-4 xl:ml-5 xl:mr-5 my-3 ">
            <div className="flex md:flex-col md:items-center md:mt-8 gap-8 md:gap-2 ">
              <div>
                <FilterComponents />
              </div>
              <div className=" md:mt-4 ">
                <RightCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutesContainer;

import IIMBanReviewCard from "@/components/Reusable_cards/IIMBanReviewCard";
import React from "react";
import IIMBangaloreReviewData from "./IIMBangaloreReviewData";
import Filterby from "./Filterdby/Filterby";
import MostPopularContainer from "./MostPopular/MostPopularContainer";

const IIMBangaloreReview = () => {
  return (
    <div className="max-w-[1000px] gap-2 sm:p-0.5 flex flex-col md:items-center ">
      <div className=" flex flex-col gap-5 p-2 md:p-0 sm:w-[82.5vw]">
        <p className="text-2xl sm:text-2xl sm:text-center font-bold text-left leading-[3rem] md:ml-4 tracking-normal inline text-[black]">
          {"Vedanta IAS Academy Reviews"}
        </p>
        <hr className="h-[1px] w-[80%] sm:w-0 " />
        <div className="p-3 ">
          <Filterby />
        </div>
        <div>
          <MostPopularContainer />
        </div>
        <div className="flex flex-col ">
          <div className=" p-2 sm:p-0 flex flex-col gap-5 md:items-center md:justify-center  ">
            <p className="text-2xl sm:text-2xl sm:text-center font-bold text-left leading-[3rem] tracking-normal inline text-[black]">
              {"Reviews"}
            </p>
            <div className=" flex flex-col items-center justify-center max-w-[1000px]   gap-5 p-5  sm:p-0">
              {IIMBangaloreReviewData.map((item: any, index: number) => (
                <div
                  key={index}
                  className="border-none border-black rounded-lg w-full"
                >
                  <IIMBanReviewCard {...item} />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button className="rounded-lg bg-gray-400 hover:bg-black transition-colors duration-300 px-3 py-2 h-10 text-white">
                {`View All Reviews (${IIMBangaloreReviewData.length})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IIMBangaloreReview;

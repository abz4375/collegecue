import React from "react";
import MostPopularData from "./MostPopularData";
import MostPopularTag from "./MostPopularTag";
import Heading from "@/components/Heading/Heading";

const MostPopularContainer = () => {
  return (
    <div className="flex flex-col md:items-center md:mx-4 ">
      <div>
      <div className="w-fit mb-4 group">
      <p className="text-2xl sm:text-2xl sm:text-center font-bold text-left leading-[3rem] tracking-normal inline text-[black]">
        {"Most Popular"}
      </p>
    </div>
      </div>
      <div className="flex flex-wrap md:justify-center gap-4">
        {MostPopularData.map((item: any, index: number) => (
          <div className="flex" key={index}>
            <MostPopularTag key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularContainer;

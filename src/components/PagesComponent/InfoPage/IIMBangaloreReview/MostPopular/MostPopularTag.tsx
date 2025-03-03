import React from "react";
import MostPopularData from "./MostPopularData";

interface MostPopularTagPorps {
  title: string;
  num: number;
}
const MostPopularTag: React.FC<MostPopularTagPorps> = ({ title, num }) => {
  return (
    <div className="">
      <div className="flex">
        <div className="flex flex-wrap gap-4">
          <button className="text-black bg-gray-300 shadow-lg  rounded-lg px-4 py-0 font-semibold hover:bg-blue-100 hover:bg-opacity-80 hover:text-blue-500 hover:border-blue-100 focus:bg-blue-100 focus:bg-opacity-80 focus:text-blue-500 focus:border-blue-100 h-8 transition duration-300 flex items-center gap-2  border-2 border-gray-300 ">
            {title} <p>({num})</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MostPopularTag;

import React from "react";
import { HiDownload } from "react-icons/hi";
const Applysection = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)]  rounded-[10px] text-[18px] font-bold leading-[22.77px] tracking-normal text-center text-white capitalize hover:bg-blue-600 transition-all duration-300 cursor-pointer px-2 py-4 bg-blue-500 w-[90%] mx-auto">
          Apply now
        </div>
        <div className=" shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] rounded-[10px] text-[18px] font-bold leading-[22.77px] tracking-normal text-center flex items-center justify-center bg-white hover:bg-gray-100 hover:text-blue-500 hover:bg-opacity-80 transition-all duration-300 cursor-pointer gap-4  px-2 py-4 ">
          Download Brochure <HiDownload className="scale-125"/>
        </div>
      </div>
    </div>
  );
};

export default Applysection;

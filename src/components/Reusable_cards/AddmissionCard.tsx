'use client'
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  imag: string | StaticImageData;
  course: string;
  datee: string;
  data: string;
  about: string;
}

const AddmissionCard: React.FC<CardProps> = (props) => {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="cursor-pointer bg-[linear-gradient(0deg,#e4f4fa,white)] w-[270px] h-[360px] rounded-lg flex flex-col justify-left 
    mx-auto pb-6 text-left relative transition duration-300 ease-in-out hover:scale-101 hover:bg-white 
    hover:shadow-xl overflow-hidden hover:border hover:border-orange-400">
      <Image
        src={props.imag}
        alt="avatar"
        className="h-40 w-full overflow-hidden"
      />
      {/* Content */}
      <div className="flex-grow max-h-[250px] mb-6">
        {/* Course and Date */}
        <div className="flex flex-row m-2 p-1">
          <p className="text-left font-bold text-xs leading-[0.8rem] text-purple-900">
            {props.course}
          </p>
          <div className="flex-grow"></div>
          <p className="text-right font-bold text-xs leading-[0.8rem] text-purple-900">
            {props.datee}
          </p>
        </div>
        {/* Data */}
        <div className="m-4 font-semibold text-[0.8rem] leading-[1rem] text-purple-900">
          {props.data}
        </div>
        {/* About */}
        <div className="m-2 p-1 font-semibold text-[0.6rem] leading-[0.7rem] text-purple-900  ml-4  ">
          {showAbout ? (
            <>
              {props.about}
              <span
                className="text-indigo-600 cursor-pointer -mt-2"
                onClick={toggleAbout}
              >
                See Less
              </span>
            </>
          ) : (
            <span
              className="text-indigo-600 cursor-pointer align-center justify-center ml-20"
              onClick={toggleAbout}
            >
              See More
            </span>
          )}
        </div>
      </div>
      {/* Button */}
      <button
        className="bg-indigo-400 rounded-full h-[2rem] text-[0.7rem] text-white self-center px-6 py-1.5 text-sm font-semibold hover:bg-white hover:text-black hover:border-[rgba(255,255,255,0.9)] hover:scale-112 hover:shadow-lg transition duration-1000 ease-in-out absolute bottom-[1.5rem]"
      >
        <p>Apply Now</p>
      </button>
    </div>
  );
};

export default AddmissionCard;

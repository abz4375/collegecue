import React from "react";
import Link from "next/link";
import Image from "next/image";
import city from "../../../assets/Homepage/Herosection/home21-bg-banner2.webp";
import gero from "../../../assets/Homepage/Herosection/heropic.svg";

const ModifiedHero = () => {
  return (
    <div className="max-w-full mx-auto bg-[#f2f7ff] sm:h-fit h-[108vh] object-cover pt-24  relative ">
      <div className="flex flex-wrap justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center max-w-[1170px] mx-auto z-[1] h-full">
          <div className="mx-4  h-[100%]">
            <div className="flex flex-col flex-wrap justify-center items-center w-full">
              <p className="text-center font-semibold text-[#002366] text-opacity-45 text-[1rem]">
                Best For You
              </p>
              <div className="text-center text-[48px] md:text-[32px] font-bold text-[#002366] justify-center flex flex-wrap mt-8">
                Discover 1000+ Colleges around the Globe!
                <br />
                Step To Your Career
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-4 gap-3">
              <input
                placeholder="Search..."
                type="text"
                className="w-[46%] sm:w-3/4 h-[59px] py-[17px] px-[30px] border-none focus: outline-none rounded-full focus:shadow transition-all duration-700"
              />
              <button className="bg-blue-400 hover:bg-blue-500 transition-colors duration-300 w-[240px] h-[60px] py-[18px] px-[45px] rounded-full text-base text-white font-semibold">
                Find College
              </button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-2 text-[18px] text-[#002366] ">
              <Link
                href="/login"
                className=" text-blue-600 no-underline font-semibold  hover:text-blue-600 hover:underline transition-all duration-300 hover:duration-700"
              >
                Sign In
              </Link>
              <p>for your recent addresses</p>
            </div>
          </div>
            <Image
              alt="..."
              src={gero}
              className=" mb-0 z-0 md:mb-0 sm:mb-0 min-h-[30vh] h-[80%] w-auto mx-auto border- border-black py-4"
            />
        </div>
      </div>
      <div className="absolute inset-0 w-full ">
        <Image
          src={city}
          alt=".."
          className=" z-0 h-1/2 absolute bottom-0 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ModifiedHero;

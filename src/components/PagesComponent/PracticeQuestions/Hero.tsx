import Image from "next/image";
import React from "react";
import logo from "../../../assets/practicequestions/practice6.jpg";

const Hero = () => {
  return (
    <>
      <div className=" flex flex-wrap justify-around lg:justify-center  items-center w-[93%]  my-3">
        <div className=" text-[#210366] text-5xl font-bold text-balance    ">
        List of Practice Questions
        </div>

        <Image
          className="w-[400px] h-[266.41px]  sm:aspect-[1.5] "
          src={logo}
          alt="@Bharattech"
        />
      </div>
    </>
  );
};

export default Hero;

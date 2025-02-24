import React from "react";
import manwithlap from "../../../assets/Job-Portal-Page/footer/attractive-dark-haired-man-is-working-with-laptop-table-office-he-wears-blue-shirt-with-black-jacket-he-is-smiling.jpg";
import girl from "../../../assets/Job-Portal-Page/footer/portrait-happy-woman-with-digital-tablet.jpg";
import Image from "next/image";

const FooterButtons = () => {
  return (
    <div className="flex  flex-row rounded-[24px]  overflow-hidden max-w-[1280px] ml-24 mr-24 mx-4 my-20 h-[300px] bg-[#e4e9ff] sm:w-full sm:ml-0 sm:mr-0 sm:h-1/2">
      
      {/* Left Section - Text Content */}
      <div className="w-1/2 flex flex-col justify-center px-10 py-8">
        <h2 className="text-4xl md:text-3xl text-gray-800 font-bold text-center">
          Post Your Jobs & Internship
        </h2>
        <p className=" text-center text-gray-600">Find the right candidate from a diverse talent pool for your roke</p>
        
        {/* <p className="text-lg text-center mt-4">
          It only takes 5 minutes. Set-up is smooth and simple,
          with fully customizable page design to reflect your brand.
        </p> */}
        {/* <p className="text-lg text-center mt-2">
          To discover the ideal job for you, log in. Top talent is awaited by recruiters.
          Get employed by showcasing your expertise and talents.
        </p> */}

        <button className="mt-4 bg-[#0146b1] text-white rounded-full h-10 w-40 text-base flex justify-center items-center mx-auto">
          Post Job Now
        </button>
      </div>

      {/* Right Section - Image */}
      <div className=" w-1/2 flex justify-end items-center relative">
        <Image 
          src={manwithlap} 
          alt="man with Tablet" 
          className="w-[full] h-[300px] sm:h-full  object-cover "
        />
      </div>

    </div>
  );
};

export default FooterButtons;

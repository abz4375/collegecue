"use client";
import EducationLoan1 from "@/assets/Education_Loan/eductionLoan1.png";
import Image from "next/image";

import { useState } from "react";

const EduLoan: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-[80%] mx-auto mt-20 border-2 rounded-3xl bg-blue-100 md:w-full md:rounded-none md:bg-opacity-60 bg-opacity-80 py-8 md:px-4">
      <h1 className="text-2xl font-bold text-center my-0">
       <span className="text-[#002366]">EDUCATION LOAN:&nbsp;&nbsp;</span>
         EVERYTHING TO KNOW ABOUT
      </h1>

      <div className="flex flex-row md:flex-col justify-center items-center text-black">
        <div className="w-3/4 text-normal text-gray-600 md:mt-4 px-2 mt-4">
          Education loans provide financial assistance to students for higher
          education in India or abroad. Banks, NBFCs, and cooperative societies
          offer various loan options to help students overcome financial
          barriers. These loans, along with government subsidies, promote
          academic excellence and enable students to pursue education in reputed
          institutions despite rising costs.
          {showMore && (
            <p className=" pr-4">
              Curabitur vel fermentum justo. Nunc auctor nec enim vel tristique.
              Vestibulum ultrices quam nec justo luctus, sed pulvinar lorem
              congue.
            </p>
          )}
          <div className=" w-full justify-end flex pr-6">
            <span
              onClick={toggleShowMore}
              className="text-blue-500 text-sm no-underline cursor-pointer flex flex:col"
            >
              {showMore ? "Read Less" : "Read More"}
            </span>
          </div>
        </div>

        <div className="w-[10.5rem] md:w-50 h-50 bg-gradient-to-b from-gray-300 to-gray-400 shadow-xl rounded-[1.75rem] flex justify-center items-center mt-0 md:h-45 md:mt-6">
          <Image
            className="w-full h-full object-cover rounded-[1.25rem]"
            src={EducationLoan1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EduLoan;

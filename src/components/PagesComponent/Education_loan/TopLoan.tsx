'use client';
import React, { useState } from "react";
import EducationLoan2 from "@/assets/Education_Loan/educationLoan2.png";
import Image from "next/image";

const TopLoan = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="mt-20 max-w-[1300px] mx-auto w-[80%] ">
      <p className="text-center text-[black] font-bold text-2xl md:text-3xl lg:text-4xl mb-0 md:mb-8">
        TOP-UP &nbsp;LOANS
      </p>
      <div className="flex  md:flex-col justify-center items-center sm:flex-col sm:mt-4">
        <div className="w-4/5 sm:w-4/5 md:w-4/5 lg:w-4/5 max-w-[250px] sm:max-w-[300px] mx-auto bg-gray-300 shadow-lg rounded-[30px] overflow-hidden md:mb-8">
          <Image
            className="w-full h-full object-cover rounded-[30px] "
            src={EducationLoan2}
            alt="Education Loan"
          />
        </div>
        <div className="w-full sm:w-full md:w-3/5 lg:w-2/3 md:mt-0 md:text-left mx-4 md:mx-0 sm:mx-0 p-2 ">
          <p className="text-gray-600 font- text-lg md:text-base sm:text-base sm:w-full sm:mt-2">
            Education loans, offered by banks, NBFCs, and cooperatives, provide
            financial aid for students pursuing higher education in India or
            abroad. With rising education costs, these loans help students
            overcome financial barriers and access quality education. Government
            subsidy schemes further support academic excellence across all
            sectors of society.
          </p>
          {showMore && (
            <div className="text-gray-600 font- text-lg md:text-base sm:text-base sm:w-full">
              Curabitur vel fermentum justo. Nunc auctor nec enim vel tristique.
              Vestibulum ultrices quam nec justo luctus, sed pulvinar lorem
              congue.
            </div>
          )}
          <button
            onClick={toggleShowMore}
            className="text-blue-500 font- text-base md:text-medium no-underline mt-2"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopLoan;




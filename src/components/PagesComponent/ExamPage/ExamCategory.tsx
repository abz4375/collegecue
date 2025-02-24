"use client";

import React, { useState } from "react";
import Link from "next/link";
import {ExamCategoryButton} from "./ExamCategoryButton";

const allButtons = [
  {
    label: "Engineering",
    link: "#",
  },
  {
    label: "Management",
    link: "#",
  },
  {
    label: "Science",
    link: "#",
  },
  // Add all your categories here...
  {
    label: "Law",
    link: "#",
  },
  {
    label: "Pharmacy",
    link: "#",
  },
  {
    label: "Medical",
    link: "#",
  },
  {
    label: "Computer Applications",
    link: "#",
  },
  {
    label: "Arts",
    link: "#",
  },
  {
    label: "Architecture",
    link: "#",
  },
  {
    label: "Design",
    link: "#",
  },
  {
    label: "Class 12 Exams",
    link: "#",
  },
  {
    label: "Class 10 Exams",
    link: "#",
  },
  {
    label: "Hotel Management",
    link: "#",
  },
  {
    label: "Agriculture",
    link: "#",
  },
  {
    label: "Paramedical",
    link: "#",
  },
  {
    label: "Dental",
    link: "#",
  },
  {
    label: "Mass Communications",
    link: "#",
  },
  {
    label: "Vocational Courses",
    link: "#",
  },
  {
    label: "Study Abroad Exams",
    link: "#",
  },
  {
    label: "BBA",
    link: "#",
  },

  {
    label: "Veterinary Sciences",
    link: "#",
  },
  {
    label: "Education",
    link: "#",
  },
  {
    label: "Bachelor of Engineering",
    link: "#",
  },
  {
    label: "Commerce",
    link: "#",
  },
];

const ExamCategory = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState(allButtons.slice(0, 10));

  const handleShowMore = () => {
    setVisibleButtons(allButtons);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleButtons(allButtons.slice(0, 10));
    setShowAll(false);
  };
  return (
    <div className="flex flex-col w-full px-2  ">
      <div className="  rounded-[10px]">
        <div className="text-2xl  flex w-[58%] flex-col  items-start justify-center pb-4 md:w-full font-bold max-md:text-xl rounded-[15px] leading-6 text-[#210366]  ">
          <h5 className=" text-[1.5rem] pt-4">Exams Category</h5>
        </div>
      </div>
      <div className=" my-12 ">
        <div className="flex flex-wrap gap-8">
          {visibleButtons.map((button, index) => (
            <div key={index}>
            <ExamCategoryButton
              label={button.label}
              link={button.label}
            />
            </div>
          ))}
          {!showAll && allButtons.length > visibleButtons.length && (
            <button
              className=" text-[16px] border-2 p-2 rounded-lg hover:scale-105 duration-300 ease-in-out transition-all hover:brightness-105 hover:border-[#312E81] font-bold text-[#312E81] cursor-pointer"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
          {showAll && (
            <button
              className=" text-[16px] border-2 p-2 rounded-lg hover:scale-105 duration-300 ease-in-out transition-all hover:brightness-105 hover:border-[#312E81] font-bold text-[#312E81] cursor-pointer"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export {ExamCategory};

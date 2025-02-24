import React from "react";
import Link from "next/link";
import { LuPencilLine } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

const InnerTextSection = () => {
  const categoryCard = [
    { image: <LuPencilLine />, category: "UI/UX Design", totalJobs: "12" },
    { image: <FaCode />, category: "Development", totalJobs: "7" },
    { image: <BsTelephone />, category: "Telemarketing", totalJobs: "310" },
    { image: <IoBagOutline />, category: "Marketing", totalJobs: "420" },
    { image: <HiMiniAdjustmentsHorizontal />, category: "Editing", totalJobs: "3" },
  ];

  return (
    <div className="flex items-center gap-6 max-w-full mx-auto px-10 ml-12 flex-wrap">
      {/* Heading */}
      <h2 className="text-2xl text-gray-700 font-semibold whitespace-nowrap">Jobs Categories</h2>
      <div className="flex flex-wrap items-center gap-4">
        {categoryCard.map((card, index) => (
          <Link key={index} href="/job-portal/job">
            <div
              className="w-[200px] h-[66px] flex items-center px-3 border border-gray-300 rounded-[12px] 
              bg-white hover:border-blue-500  transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-blue-100 mr-4">
                <p className="text-[28px] text-gray-600">{card.image}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-gray-600 hover:text-blue-500">{card.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InnerTextSection;

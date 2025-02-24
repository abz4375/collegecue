import Link from "next/link";
import React from "react";
import { IoMdSend } from "react-icons/io";
import { HiMiniBellAlert } from "react-icons/hi2";

interface ScholarshipCardProps {
  scholarshipName: string;
  internationalStudentEligible: string;
  amount: string;
  type: string;
  levelOfStudy: string;
  numberOfScholarships: number;
  viewMore: any;
  applyNow: any;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  scholarshipName,
  internationalStudentEligible,
  amount,
  type,
  levelOfStudy,
  numberOfScholarships,
  viewMore,
  applyNow,
}) => {
  return (
    <div
      className="max-w-[370px] transition duration-300 transform hover:scale-[1.01] rounded-[2px] 
      shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] hover:shadow-[0px_2px_8px_2px_rgba(178,178,178,0.48)] 
      p-6"
    >
      <div className="text-[18px] font-semibold">
        {scholarshipName}
        <hr className="text-[#54595F] h-[2px] my-2" />
      </div>
      <div>
        <ul className="list-disc py-4 px-7 flex flex-col gap-2 text-[#331873]">
          <li>
            International Student eligible:
            <span className="font-bold"> {internationalStudentEligible}</span>
          </li>
          <li>
            Amount: <span className="font-bold"> {amount}</span>
          </li>
          <li>
            Type: <span className="font-bold">{type}</span>
          </li>
          <li>
            Level of Study: <span className="font-bold">{levelOfStudy}</span>
          </li>
          <li>
            Number of Scholarships:
            <span className="font-bold"> {numberOfScholarships}</span>
          </li>
        </ul>
      </div>
      <div>
        <Link href={viewMore} className="font-semibold underline text-[#FF7900] text-[13px]">
          View More
        </Link>
      </div>
      <div className="flex mt-4 space-x-2">
        <Link href={applyNow}>
          <button className="flex items-center gap-1 px-5 py-2 bg-[#ff7900] border-[1px] border-[#AF9690] hover:bg-[#FF592E] text-white text-[0.875rem] hover:text-[#331873] rounded-[30px]">
            <IoMdSend /> APPLY NOW
          </button>
        </Link>
        <button className="flex items-center gap-1 px-6 py-2 bg-[#1080d0] border-[1px] border-[#AF9690] hover:bg-[#FFFFFF] text-white hover:text-[#331873] text-[0.875rem] rounded-[30px]">
          <HiMiniBellAlert /> GET ALERT
        </button>
      </div>
    </div>
  );
};

export default ScholarshipCard;







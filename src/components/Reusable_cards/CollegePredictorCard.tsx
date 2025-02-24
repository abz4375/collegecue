"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import examboy from "../../assets/CollegePredictor/boy-student-sitting-stack-books-with-laptop-flat-icon-illustration.png";

interface CardProps {
  collegeParticipating:any;
  examDate: any;
  examLevel: string;
  imgContent: string;
  imgLogo: any;
  images: any;
}

const CollegePredictorCard: React.FC<CardProps> = ({
  collegeParticipating,
  examDate,
  examLevel,
  imgContent,
  imgLogo,
  images,
}) => {
  const router = useRouter();

  const handlePredictNowClick = () => {
    router.push("/collegepredictor/exam");
  };
  return (
    <>
      <div className="w-[346.8px] h-[320px] bottom-14 relative hover:border hover:border-gray-200
       hover:bg-blue-100 rounded-[18px] flex flex-col">
        <div className="w-[346.8px] h-[150px] relative pt-2 flex rounded-t-[18px] items-start gap-3">
          <div className="w-[250px] left-0 pt-2 pl-4 gap-2  flex flex-col  mt-4 justify-start items-start text-indigo-950 text-md font-bold leading-relaxed tracking-tight">
            {imgContent}
            <button className="w-auto h-auto px-2 py-1 text-[14px] border border-gray-300 bg-gray-100 text-black rounded-xl">
            {examLevel}
          </button>
          </div>
          <div className="w-[140px] absolute right-0 pr-4">
            <Image src={examboy} alt="..." className="" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-2 px-6">
          <div className="w-full flex justify-between items-center">
            <span className="text-[14px]">College Participating</span>
            <span className="text-[14px]">{collegeParticipating}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-[14px]">Exam Date</span>
            <span className="text-[14px]">{examDate}</span>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 mt-4 w-full">
          <button className="text-violet-950 text-[14px] font-semibold hover:bg-gray-200 px-2 py-1 rounded-lg hover:border hover:border-gray-300">Exam Info</button>
          <button className="text-violet-950 text-[14px] font-semibold hover:bg-gray-200 px-2 py-1 rounded-lg hover:border hover:border-gray-300">Cutoff</button>
          <button className="text-violet-950 text-[14px] font-semibold hover:bg-gray-200 px-2 py-1 rounded-lg hover:border hover:border-gray-300">Practice Tests</button>
        </div>
        <div className="w-[312.11px] h-[34.40px] mt-4 mx-auto bg-indigo-400 rounded-2xl flex justify-center items-center">
          <button
            onClick={handlePredictNowClick}
            className="w-32 h-9 mt-1 text-center text-white text-[12.80px] font-semibold  uppercase leading-snug tracking-tight"
          >
            Predict Now
          </button>
        </div>
      </div>
    </>
  );
};

export default CollegePredictorCard;

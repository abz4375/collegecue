'use client'
import React from "react";
import { useRouter } from "next/navigation";

interface LowerCardProps {
  Images: any; // Assuming Images is a URL for the college logo
  collegeName: string;
  collegeLocation: string;
  collegeParticipating: any;
}

const LowerCard: React.FC<LowerCardProps> = ({
  Images,
  collegeName,
  collegeLocation,
  collegeParticipating,
}) => {
    const router = useRouter();

    const handlePredictNowClick = () => {
      router.push('/collegepredictor/exam');
    };
  return (
    <>
      <div className="w-[355px] h-[250px] relative rounded-2xl overflow-hidden hover:bg-blue-100 border border-indigo-300">
        <div className="w-full h-20 py-2 flex-col flex items-center justify-center">
          <div className="w-full text-center text-indigo-950 text-medium font-bold">
            {collegeName}
          </div>
          <div className="w-full text-center text-indigo-950 text-medium font-medium">
            {collegeLocation}
          </div>
        </div>
        <hr className="w-[90%] mx-auto border border-indigo-300 my-2" />
        <div className="w-full px-8 flex justify-between items-center gap-2">
          <div className="flex text-center text-violet-950 text-base font-bold">
            College Participating
          </div>
          <div className="flex text-center text-violet-950 text-base font-bold">
            {collegeParticipating}
          </div>
        </div>
        <hr className="w-[90%] mx-auto border border-indigo-300 my-2" />
        <div className="flex justify-between items-center px-4 mt-4 w-full">
          <button className="text-violet-950 text-[14px] font-semibold hover:bg-gray-200 px-2 py-1 rounded-lg hover:border hover:border-gray-300">Addmission</button>
          <button className="text-violet-950 text-[14px] font-semibold hover:bg-gray-200 px-2 py-1 rounded-lg hover:border hover:border-gray-300">College Info</button>
          <button className="text-violet-950 text-[14px] font-semibold hover:bg-gray-200 px-2 py-1 rounded-lg hover:border hover:border-gray-300">Course & Fees</button>
        </div>
        <div className="w-80 h-9 mx-auto py-1.5 my-4 bg-indigo-400 rounded-2xl justify-center items-center flex">
          <button  onClick={handlePredictNowClick} className="w-32 h-9 text-center text-white text-[12.80px] mt-1 font-semibold  uppercase leading-snug tracking-tight">
            Predict Now
          </button>
        </div>
      </div>
    </>
  );
};

export default LowerCard;

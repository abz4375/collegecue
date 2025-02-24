import React from "react";

interface Points {
  sub_heading: string;
}

interface SeeScholarTypeProps {
  heading: string;
  points: Points[];
}

const SeeScholarType: React.FC<SeeScholarTypeProps> = ({ heading, points }) => {
  return (
    <div className="">
      <div
        className="border-b-2 bg-white rounded-[20px]  
      shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] 
      hover:shadow-[0px_2px_8px_2px_rgba(178,178,178,0.48)] overflow-hidden"
      >
        <div className="font-semibold text-lg text-[#210366] mb-4 text-center p-5 border-b">
          {heading}
        </div>
        {points.map(({ sub_heading }: Points, index: number) => (
          <div key={index} className="border-b p-4 ">
            <div className="flex flex-col items-center justify-between py-2  gap-2 text-[#210366] ">
              {sub_heading}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeScholarType;

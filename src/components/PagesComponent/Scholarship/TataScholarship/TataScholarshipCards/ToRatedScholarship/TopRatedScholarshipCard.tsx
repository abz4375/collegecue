import React from "react";
interface Answere {
  desc: string;
  amount: string;
}
interface TopRatedScholarshipCardProps {
  heading: string;
  sub_heading: Answere[];
}
const TopRatedScholarshipCard: React.FC<TopRatedScholarshipCardProps> = ({
  heading,
  sub_heading,
}) => {
  return (
    <div>
      <div className="pb-8  ">
        <div
          className="border-b-2 bg-white rounded-[20px]  
      shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] 
      hover:shadow-[0px_2px_8px_2px_rgba(178,178,178,0.48)]"
        >
          <div className="p-4 ">
            <p className="font-semibold text-lg text-[#210366] mb-4">
              {heading}
            </p>
            <hr className="mb-4" />
            <ul className="border-b ">
              {sub_heading.map(({ amount, desc }: any, index: number) => (
                <li
                  className="flex flex-col items-start justify-between py-2  gap-2"
                  key={index}
                >
                  <p className="text-[#210366] ">{desc}</p>
                  <p className="text-[#210366] text-[12px]">{amount}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopRatedScholarshipCard;

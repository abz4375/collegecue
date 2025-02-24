

import Image, { StaticImageData } from "next/image";
import React from "react";

interface ExamJeeMainCardProps {
  name: string;
  date: string;
  img: StaticImageData;
}

const ExamJeeMainCard: React.FC<ExamJeeMainCardProps> = ({ name, date, img }) => {
  return (
    <div className="flex flex-col bg-[#FFF4EB] items-center rounded-[0.50rem] shadow-lg w-[260px] h-[240px] p-4 hover:scale-[1.1] transition-all duration-300">
      <Image
        src={img}
        width={100}
        height={100}
        alt={name}
        className="mt-2 h-[100px] w-[100px]"
      />
      <p className="font-[400] text-[0.875rem] text-[#333333] mt-4">{name}</p>
      <p className="text-[0.875rem] font-[400] text-[#333333]">{date}</p>
    </div>
  );
};

export default ExamJeeMainCard;

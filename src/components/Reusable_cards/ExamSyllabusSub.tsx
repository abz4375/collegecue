import React from "react";
import Image, { StaticImageData } from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

interface ExamSyllabusSubProps {
  pattern: string;
  analysis: string;
  syllabus: string;
  img: StaticImageData;
  name: string;
  mode: string;
}

const ExamSyllabusSub: React.FC<ExamSyllabusSubProps> = ({
  pattern,
  analysis,
  syllabus,
  img,
  name,
  mode,
}) => {
  return (
    <div className=" py-2 px-3 space-x-1 space-y-1">
      <div className="flex items-center space-x-2">
        <Image
          src={img}
          width={45}
          height={45}
          alt="gateimage"
          className="h-[45px] w-[45px] rounded-[12px] object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-1.5">
          <p className="!text-[1.2rem] tracking-[0.18px]">{name}</p>
          <p className="!text-[14.4px] !font-light tracking-[0.14px]">{mode}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 self-stretch">
        <Link href={'/exam'} className="flex items-center justify-between gap-5">
          <p>Pattern</p>
          <RiArrowRightSLine />
        </Link>
        <Link href={'/exam'} className="flex items-center justify-between gap-5">
          <p>Analysis</p>
          <RiArrowRightSLine />
        </Link>
        <Link href={'/exam'} className="flex items-center justify-between gap-5">
          <p>Syllabus</p>
          <RiArrowRightSLine />
        </Link>
      </div>
      <div className="h-[2px]   border-indigo-300 bg-indigo-100" />
    </div>
  );
};

export {ExamSyllabusSub};

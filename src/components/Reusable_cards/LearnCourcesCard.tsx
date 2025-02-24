import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface LearnCoursesProps {
  course: string;
}

const LearnCoursesCard: React.FC<LearnCoursesProps> = (props: any) => {
  return (
    <div>
      <div className="">
        <div className=" flex  justify-between p-2 items-center text-[14px] font-bold text-gray-800">
          <div className="col-span-6">
            <p>{props.course}</p>
          </div>
          <div className="col-span-2">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCoursesCard;

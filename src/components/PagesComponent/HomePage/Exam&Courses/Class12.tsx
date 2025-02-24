import React from "react";
import Button from "../../../Buttons/Courses";
import Class12data from "../../../DummyData/Class12data";

const Class12 = () => {
  return (
    <div className="border-2 border-gray-300 bg-gray-50 py-4 rounded-[18px] hover:shadow-lg transition-all duration-300">
      <div className="font-bold mt-[10px] px-[20px] text-[1.5rem] text-[black]">
        {" "}
        CBSE 12 Exam
      </div>
      <div className=" max-h-[400px]  overflow-y-scroll flex flex-col gap-[20px] px-[30px] py-[30px]">
        {Class12data.map((button: any, index: number) => (
          <div key={index} className="flex flex-wrap ">
            <Button dt={button.label} link={button.link} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export {Class12};

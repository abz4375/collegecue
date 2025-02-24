import React from "react";
import Image from "next/image";
import {ExamCategory} from "./ExamCategory";
import Search from "./Search";
// import examhero from "@/Assets/ExamPage/exam_hero.svg";
import {ExamButtonRender} from "./ExamButtonRender";

const ExamHero = () => {
  return (
    <div className="relative z-[5] w-full max-w-full flex flex-col bg-[linear-gradient(180deg,rgb(211,211,217),white)] 
    items-start justify-center lg:max-w-full md:w-full px-4 mb-20">
      <div className="relative z-[5] pt-10 w-full flex  items-center max-w-[1536px] justify-center gap-5 mx-auto lg:max-w-full md:flex-col-reverse p-5 md:p-2 ">
        <div className="flex w-[58%] flex-1 flex-col  items-center justify-center py-4 md:w-full  ">
          <h1 className="text-indigo-900  text-[64px] text-[700] md:text-[34px] sm:text-[32px]">
            Entrance Exams In India
          </h1>
          <Search />
          <div className="my-12">
            <ExamButtonRender />
          </div>
        </div>
        <div className="">
          <Image
            src='https://studyhub.themewant.com/wp-content/uploads/2024/04/09.png'
            alt="examhero"
            width={300}
            height={300}
            className="h-[300px] md:w-full md:h-auto w-full"
          />
        </div>
      </div>

      <div className="flex  justify-start items-start max-w-[1536px] mx-auto">
        <ExamCategory />
      </div>
    </div>
  );
};

export {ExamHero};

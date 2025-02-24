import React from "react";
import {Class10} from "./Class10";
import {Class12} from "./Class12";
import {Courses} from "./Courses";
import Heading from "@/components/Heading/Heading";

const ExamCources = () => {
  return (
    <div className="mt-20 mb-20">
      <Heading heading_name={"Exam & Courses"} />
      <div className="flex flex-row sm:flex-col gap-[15px] items-center justify-around mx-[1rem]">
        <Class10 />
        <Class12 />
        <Courses />
      </div>
    </div>
  );
};

export default ExamCources;

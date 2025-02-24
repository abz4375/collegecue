import React from "react";
import LearnCoursesCard from "@/components/Reusable_cards/LearnCourcesCard";
import LearnCoursesData from "./LearnCourcesData";
const LearnCourses: React.FC = () => {
  return (
    <>
      <div className=" bg-white shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)]  mt-8 mb-8 rounded-3xl p-5 ">
        <p className="font-bold text-2xl text-gray-800 mb-4">
          Learn more about the courses
        </p>
        {LearnCoursesData.map((item, id) => {
          return <LearnCoursesCard key={id} {...item} />;
        })}
      </div>
    </>
  );
};

export default LearnCourses;

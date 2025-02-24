import React from "react";
import TopCourses from "./ListOfTopCourses/TopCourses";
import FilterComponents from "../../Allfilters/Filter/FilterComponents";
import RightCard from "./Courses/RightCard";

const CourseFinderContainer = () => {
  return (
    <div className=" flex max-w-full flex-col gap-y-24">
      <div className="bg-[#7861ee]">
        <section className=" container max-w-7xl mx-auto ">
          <TopCourses />
        </section>
      </div>
      <div className="max-w-[1480px] mx-auto  sm:ml-4 sm:mr-4 xl:ml-5 xl:mr-5 my-3 ">
        <div className="flex md:flex-col md:items-center md:mt-8 gap-8 md:gap-0 ">
          <div>
            <div className=" text-[#210366] text-3xl font-bold text-balance    ">
              Found 1715 Courses
            </div>
            <FilterComponents />
          </div>
          <div className=" md:mt-3">
            <RightCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFinderContainer;

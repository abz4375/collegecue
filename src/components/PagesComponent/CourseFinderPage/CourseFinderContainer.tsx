import React from "react";
import TopCourses from "./ListOfTopCourses/TopCourses";
import FilterComponents from "../../Allfilters/Filter/FilterComponents";
import RightCard from "./Courses/RightCard";

const CourseFinderContainer = () => {
  return (
    <div className=" flex max-w-full flex-col gap-y-6">
      <div className="bg-blue-100/60">
        <section className=" container max-w-7xl mx-auto ">
          <TopCourses />
        </section>
      </div>
      <div className="max-w-[1480px] mx-auto  sm:ml-4 sm:mr-4 xl:ml-8 xl:mr-8 my-3 ">
        <div className="flex md:flex-col md:items-center md:mt-8 gap-4 md:gap-0 ">
          <div className="md:w-[80%]">
            <div className=" text-blue-900/90 text-3xl font-bold text-balance text-center">
              Found 1715 Courses
            </div>
            <div className="my-4">
            <FilterComponents />

            </div>
          </div>
          <div className=" md:mt-0">
            <RightCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFinderContainer;

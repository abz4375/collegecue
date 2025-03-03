import React from "react";
import Search from "../Search/Search";
import writebook from "@/assets/CourseFinder/coursefindernew2.png";
import Image from "next/image";
import CourseFinderPage from "./CourseButton";

const TopCourses = () => {
  return (
    <div className=" flex flex-wrap justify-between  py-24 pb-12 md:pb-6 bg-opacity-[1.1] md:px-2 items-center w-full ">
      <div className="px-6 flex md:flex-col w-full mx-auto my-3 justify-between items-center  ">
        <div className="flex flex-col  gap-3  ">
          <div className=" text-blue-900 text-[2rem] md:text-[2.075rem] font-bold text-balance    ">
            List of Top courses in Indian Colleges 2025
          </div>
          <Search placeholder=" Search Courses" />
          <CourseFinderPage />
        </div>
        <Image
          src={writebook}
          alt="@Bharattech"
          // height={300}
          // width={300}
          className=" max-h-[300px] max-w-[300px] md:max-h-[250px] md:max-w-[250px] ml-6 md:ml-0 aspect-square"
        />
      </div>

      {/* */}
    </div>
  );
};

export default TopCourses;

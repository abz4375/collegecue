import React from "react";
import Search from "../Search/Search";
import writebook from "@/assets/CourseFinder/coursefinder.png"
import Image from "next/image";
import CourseFinderPage from "./CourseButton";

const TopCourses = () => {
  return (
    <div className=" flex flex-wrap justify-between  py-24 bg-opacity-[1.1] bg-[#7861ee] md:px-2 items-center w-full ">
      <div className="px-3 flex md:flex-col w-full mx-auto my-3 justify-between items-center  ">
      <div className="flex flex-col  gap-3  ">
        <div className=" text-[#fafafa] text-3xl font-bold text-balance    ">
          List of Top courses in Indian Colleges 2023
        </div>
        <Search placeholder=" Search Courses" />
        <CourseFinderPage />
      </div>
      <Image src={writebook} alt="@Bharattech"  height={300} width={300} className=" aspect-square"/>

      </div>
   
      {/* */}
      
    </div>
  );
};

export default TopCourses;

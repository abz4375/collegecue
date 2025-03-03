"use client";
import React, { useState } from "react";

interface CourseSelectProps {}

const CourseSelect: React.FC<CourseSelectProps> = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const courseSelects = [
    "Degree",
    "Streams",
    "Program Type",
    "Entrance/Exam accepted",
    "Course Level",
  ];
  const courses = ["PGPM", "PGPEM", "EPGP", "PGP-PPM", "Certification", "Ph.D"];

  const handleCourseSelection = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((item) => item !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="container max-w-full flex flex-col  gap-8  pt-0">
      <div className="bg-white flex flex-col items-center gap-10  shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] rounded-[15px] p-10 pt-4">
        <p className="text-2xl font-bold  text-black ">Course Selection</p>
        <div className="flex flex-col   gap-4">
          <div className="flex items-center justify-center md:flex-col gap-4">
            <input
              className="border border-gray-300 px-8 py-2 w-[376px] sm:w-auto rounded-lg focus:outline-none"
              type="text"
              placeholder="Search for College,exam,courses and more ..."
            />
            <button className="bg-blue-500 hover:bg-[#1565C0] text-white   px-8 py-2 rounded-lg">
              Search Course
            </button>
          </div>
          {/******************* */}
          <div
            className="flex gap-5 items-center
          justify-center md:gap-2 md:flex-col"
          >
            <div className="flex flex-wrap  items-center justify-center gap-5 max-w-[400px] text-black ">
              {courseSelects.map((courseSelect, index) => (
                <p key={index} className="text-lg font-semibold">
                  {courseSelect}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 max-w-[400px]">
              {courses.map((course, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    checked={selectedCourses.includes(course)}
                    onChange={() => handleCourseSelection(course)}
                  />
                  <span className="ml-2">{course}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelect;

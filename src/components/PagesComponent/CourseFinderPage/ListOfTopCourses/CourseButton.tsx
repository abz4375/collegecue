"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const courses = [
  { label: "BTech", id: 1 },
  { label: "MBA", id: 2 },
  { label: "MBBS", id: 3 },
  { label: "Law", id: 4 },
  { label: "Science", id: 5 },
  { label: "Study Abroad", id: 6 },
  { label: "All Course", id: 7 },
];

const CourseButton = () => {
  const searchParams = useSearchParams();

  const handleFilterCountry = (country: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tag", country);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 md:mb-16 mt-4 max-w-[40vw] md:max-w-full">
      {courses.map((course) => (
        <button
          key={course.id}
          className={` transition-all duration-300 border-2 bg-blue-100/75 text-blue-500  border-blue-500 rounded-full drop-shadow-2xl shadow-md  hover:text-[#ffffff]  text-base font-semibold hover:bg-blue-500 px-3 py-1 flex items-center`}
          onClick={() => handleFilterCountry(course.label)}
        >
          {course.label}
        </button>
      ))}
    </div>
  );
};

const CourseFinderPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseButton />
    </Suspense>
  );
};

export default CourseFinderPage;

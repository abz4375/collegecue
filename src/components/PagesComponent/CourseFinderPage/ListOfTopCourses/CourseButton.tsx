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
    params.set("selectedCountry", country);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 max-w-[420px] mt-8">
      {courses.map((course) => (
        <button
          key={course.id}
          className={`  border-2 bg-purple-600/40  border-purple-600/40 rounded-full drop-shadow-2xl shadow-md  text-[#ffffff]  text-lg font-semibold hover:bg-[#f94306] px-4 py-2 flex items-center`}
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

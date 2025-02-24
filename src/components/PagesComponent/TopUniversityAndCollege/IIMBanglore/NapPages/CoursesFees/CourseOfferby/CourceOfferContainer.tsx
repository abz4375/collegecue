import React from "react";

import CourseOfferby from "./CourseOfferBy";
import CourseOfferData from "./CourseOfferData";

const CourseOfferContainer = () => {
  return (
    <div className="flex flex-col gap-8 p-0 pt-8">
      <div className="bg-white flex  flex-col gap-8 p-4 rounded-[15px]">
        <p className="text-2xl font-bold text-[black] mb-0 ">
          Courses Offered By IIM Bangalore, Bangalore
        </p>
        {CourseOfferData.map((answer: any, index: number) => (
          <CourseOfferby key={index} {...answer} />
        ))}
      </div>
    </div>
  );
};

export default CourseOfferContainer;

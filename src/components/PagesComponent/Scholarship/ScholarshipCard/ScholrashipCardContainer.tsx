import React from "react";
import ScholarshipData from "./ScholarCardData";
import ScholarshipCard from "./ScholarshipCard";

const ScholrashipCardContainer = ({}) => {
  return (
    <div className="flex flex-wrap gap-5 lg:p-2 lg:items-center lg:justify-center max-w-[1200px]">
      {ScholarshipData.map((item: any, index: number) => (
        <ScholarshipCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ScholrashipCardContainer;

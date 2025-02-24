import React from "react";
import TataScholarData from "./TataCardData";
import TopRatedScholarshipCard from "./TopRatedScholarshipCard";

const TopRatedScholarshipCardContainer: React.FC = () => {
  return (
    <div>
      {TataScholarData.map((item, index) => (
        <TopRatedScholarshipCard key={index} {...item} />
      ))}
    </div>
  );
};

export default TopRatedScholarshipCardContainer;

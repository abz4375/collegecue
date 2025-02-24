import React from "react";
import CollegeCompare from "./CollegeCompare";
import PopularCompare from "./PopularCompare";
import QuesCard from "../Review/Question/QuesCard";
import QuestionCard from "./QuestionCard";
import QuestionCardContainer from "../Review/Question/QuesCardContainer";

const CollegeCardContainer = () => {
  return (
    <div>
      <div className=" ">
        {" "}
        <CollegeCompare />
        <PopularCompare />
        <div className="px-2">

        <QuestionCardContainer />
        </div>
      </div>
    </div>
  );
};

export default CollegeCardContainer;

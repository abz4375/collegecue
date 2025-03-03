import React from "react";
import QuestionCardContainer from "./Question/QuesCardContainer";
import CollegeRating from "../CoursesFees/CollegeRating/CollegeRating";
import Comment from "./Comment/Comment";
import PopularComparision from "./PopularComperision/PopularComparision";
import RadioGroupRating from "../../../../RadioGroupRating";

const Review = () => {
  return (
    <div className="px-2">
      <CollegeRating />
      <QuestionCardContainer />
      <Comment />
      <PopularComparision />
      <div className="text-center my-5  font-bold ">
        How likely are you to recommend collegecue.com to a friend or a
        colleagcue?
      </div>
      <RadioGroupRating />
    </div>
  );
};

export default Review;

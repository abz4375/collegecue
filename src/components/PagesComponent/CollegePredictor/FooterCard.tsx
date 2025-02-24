import React from "react";
import CollegeStepCard from "./CollegeStepCard";

const FooterCard: React.FC = () => {
  return (
    <div className="w-[1200px] mx-auto my-12 sm:w-[350px] sm:ml-12">

      <h3 className="text-xl font-semibold" >How to use collegecue admission predictor?</h3>
      <p className="text-medium leading-8 text-black font-medium my-6">
        Done with your Exam? Well, we know you are not quite done yet! The
        anxiety of results must be keeping you up at nights. Not anymore folks-
        Get your expected rank and colleges with our Rank Predictor. Know where
        you’ll land with your expected rank and plan your battles ahead.
      </p>
      <h3 className="text-xl font-semibold mb-2">
        Follow these steps to check your rank with our College Predictor
      </h3>
      <div className="w-full my-4">
        <CollegeStepCard />
      </div>
      <p className="text-medium leading-8 text-black font-medium my-6">
        Choose your Exam from the list and enter necessary details such as your
        name, registration number, preferred location. Enter your expected marks
        in the next step and let us do the rest for you. Lay back in your chair
        and let the page load. Who knows, your dream colleges could be in the
        list.
      </p>
    </div>
  );
};

export default FooterCard;

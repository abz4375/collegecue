import React from "react";
import QuesData from "./QuestionAns";
import QuesAns from "./PracticeQues";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const QuestionCard: React.FC = () => {
  return (
    <div className="">
      <div className="flex  items-center sm:justify-center my-5">
        <FaHome className="w-8 h-8 text-blue-500" />
        <FaAngleRight className="text-blue-500" />
        <p className="text-purple-900 text-lg font-semibold">
          Practice Questions
        </p>
        <FaAngleRight className="text-blue-500" />
        <p className="text-purple-900 text-lg font-semibold">Answers</p>
      </div>
      <div className="grid grid-cols-1 sm:flex sm:flex-col   md:grid-cols-1 lg:grid-cols-3 gap-4 pt-8">
        {QuesData.map((question: any, index: any) => (
          <QuesAns key={index} {...question} />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

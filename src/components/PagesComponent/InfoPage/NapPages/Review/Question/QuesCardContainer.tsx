import React from "react";
import QuesCard from "./QuesCard";
import { GoArrowUpRight } from "react-icons/go";

interface QuestionData {
  ques: string;
  ans: string;
  ansby: string;
}

const QuestionCardContainer: React.FC = () => {
  const data: QuestionData[] = [
    {
      ques: "Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",
      ans: "Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 23",
    },
    {
      ques: "Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",
      ans: " Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 23",
    },
    {
      ques: "Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",
      ans: "Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 23",
    },
    {
      ques: "Ques. How tough is IIM B test for getting into fellowship program at IIM Bangalore?",
      ans: " Ans: Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert IIM conducts its own admission process for FPM and thus the pattern of RAT varies from IIM to IIM. One of the patterns is termed as minorRead more RAT followed at IIMB and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 23",
    },
  ];

  return (
    <div className="w-full  flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            IIM Bangalore: 224 Answered Questions
          </h3>
        </div>
        <button className="text-sm font-  border-2 border-gray-800 px-3 py-1 rounded-lg hover:bg-gray-800 hover:text-white text-gray-800 transition duration-150 flex items-center">
          <span>View All &nbsp;</span>
          <GoArrowUpRight className="text-lg" />
        </button>
      </div>
      {data.map((item, index) => (
        <div key={index} className="flex">
          <QuesCard ques={item.ques} ans={item.ans} ansby={item.ansby} />
        </div>
      ))}
    </div>
  );
};

export default QuestionCardContainer;

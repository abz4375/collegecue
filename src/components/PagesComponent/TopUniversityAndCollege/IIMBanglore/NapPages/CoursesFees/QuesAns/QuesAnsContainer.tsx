import React from "react";
import QuesAnsData from "./QuesAnsData";
import QueAns from "./QuesAns";

const QuesAnsContainer = () => {
  return (
    <div className="container mx-auto mt-8">
      <p className="text-2xl font-bold text-gray-800 mb-4">
        IIM Bangalore: 210 Answered questions
      </p>
      <div className="bg-white flex flex-col gap-10 rounded-lg p-6">
        {QuesAnsData.map((answer: any, index: number) => (
          <div key={index} className="">
            <QueAns {...answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuesAnsContainer;

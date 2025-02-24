import React from "react";

import QuesData from "../../DummyData/DataPractQues";
import QuestionsCard from "./QuestionsCard";

const AllQuesAns: React.FC = () => {
  return (
    // <div className=" ml-[24rem] mt-[-35rem] sm:m-auto ">

    <div className="flex flex-col h-auto gap-5 my-8 mx-2 ">
      {QuesData.map((question, index) => (
        <QuestionsCard key={index} {...question} />
      ))}
    </div>
  );
};

export default AllQuesAns;

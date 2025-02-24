'use client'
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

interface Question {
  question: string;
}


interface Props {
  paper: string;
  topic: string;
  subject: string;
  questions: Question[];
  statement1: string;
  statement2: string;
  date: string;
}

const QuestionsCard: React.FC<Props> = ({
  paper,
  topic,
  subject,
  questions,
  statement1,
  statement2,
  date,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="bg-white rounded-xl  border-[3px] border-solid border-gray-300 p-5 w-[730.66px]  shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] sm:w-[300px]   ">
      <div className="font-normal text-[#2f1370]">
        <div className="overflow-hidden">
          <div className="gap-4 flex flex-wrap justify-between">
            {questions.map(({ question }, index) => (
              <div key={index}>
                <span className="text-[#2f1370] font-semibold text-sm">
                  Question: {question}
                </span>
                <div className="flex items-center justify-between pt-12">
                  <div className="flex">
                    <div className="mr-2 md:mr-10">
                      <span className="text-[#2f1370] font-semibold text-sm">
                        {paper}
                      </span>
                    </div>
                    <div className="mr-2 md:mr-10">
                      <span className="text-[#2f1370] font-semibold text-sm">
                        {topic}
                      </span>
                    </div>
                    <div className="mr-2 md:mr-10">
                      <span className="text-[#2f1370] font-semibold text-sm">
                        {subject}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleClick}
                    className="flex items-center gap-1 text-[#ff7900] font-semibold text-sm border-none hover:border-none focus:outline-none"
                  >
                    {show ? `Updated On: ${date}` : "Solution"}
                    <FiArrowRight />
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-300 ${
                    show ? "h-auto" : "h-0"
                  }`}
                >
                  {show && (
                    <div>
                      <span className="text-[#2f1370] font-semibold text-sm pt-4">
                        Answer: {statement1}
                      </span>
                      <span className="text-[#2f1370] font-semibold text-sm pt-4">
                        Reason: {statement2}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsCard;

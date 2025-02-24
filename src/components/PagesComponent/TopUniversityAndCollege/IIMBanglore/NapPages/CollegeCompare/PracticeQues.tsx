"use client";
import React, { useState } from "react";

interface Question {
  question: string;
}

interface Answer {
  ans: string;
  correctAns?: boolean;
}

interface QueAnsProps {
  paper: string;
  topic: string;
  subject: string;
  questions: Question[];
  statement1: string;
  statement2: string;
  answers: Answer[];
  date: string;
  title: string;
}

const QueAns: React.FC<QueAnsProps> = ({
  paper,
  topic,
  subject,
  questions,
  statement1,
  statement2,
  answers,
  date,
  title,
}) => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClicked = () => {
    setMark(!mark);
  };

  return (
    <div className="font-normal bg-white shadow-lg rounded-xl p-4 text-base text-indigo-900 m-5 gap-6">
      {questions.map(({ question }, index) => (
        <div key={index} className="flex flex-col gap-5">
          <p className="text-2xl font-bold text-[#210366] py-2">{title}</p>
          <div className="flex flex-col gap-2">
            <span className="text-[#210366] font-semibold">Q: {question}</span>
            <span className="text-[#210366] font-semibold">
              Assertion A: {statement1}
            </span>
            <span className="text-[#210366] font-semibold">
              Reason R: {statement2}
            </span>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-[#210366] font-semibold">{paper}</span>
                <span className="text-[#210366] font-semibold">{topic}</span>
                <span className="text-[#210366] font-semibold">{subject}</span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleClick}
                  className={`${
                    show ? "hidden" : "block"
                  } text-orange-500 hover:text-orange-700 focus:outline-none`}
                >
                  View Solution
                </button>
                <button
                  className={`${
                    !show ? "hidden" : "block"
                  } text-orange-500 font-bold focus:outline-none`}
                >
                  Updated On: {date}
                </button>
                <div
                  onClick={handleClick}
                  className={`${show ? "hidden" : "block"} text-orange-500`}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={`${show ? "" : "h-0 overflow-hidden"} transition-all`}
          >
            {answers.map(({ ans, correctAns }, index) => (
              <div key={index}>
                <div className="flex pt-4 items-start">
                  <button
                    onClick={handleClicked}
                    className="w-full text-start text-[#210366] font-semibold border border-indigo-400 rounded-md h-12 px-4 focus:outline-none"
                    style={{
                      backgroundColor:
                        mark && correctAns !== undefined
                          ? "lightgreen"
                          : mark && correctAns === undefined
                          ? "mistyrose"
                          : "",
                    }}
                  >
                    {ans}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QueAns;

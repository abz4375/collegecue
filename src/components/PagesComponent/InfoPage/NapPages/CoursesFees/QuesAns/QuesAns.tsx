"use client";
import React, { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";

interface Question {
  question: string;
  answer: string;
}

interface QuestionProps {
  user: string;
  date: string;
  questions: Question[];
}

const QueAns: React.FC<QuestionProps> = ({ user, date, questions }) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="bg-white rounded-lg p-4 text-sm text-gray-800 border-2 border-gray-200 transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01]">
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          show ? "max-h-screen" : "max-h-20"
        }`}
      >
        {questions.map(({ question, answer }, index) => (
          <div key={index}>
            <div className="flex">
              <div className="flex items-center justify-around font-bold text-gray-800 gap-[20px]">
                <div>Ques: {question}</div>
                <div>
                  <button
                    onClick={handleClick}
                    className={`${
                      show ? "text-blue-500" : "text-blue-500"
                    } font-bold ml-2`}
                  >
                    {show ? "VIEW LESS" : "VIEW ALL"}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-600 text-xs">
                Top Answer by {user} on {date}
              </p>
            </div>
            <p>Ans: {answer}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-4">
          <div
            onClick={() => setLike(like + 1)}
            className="cursor-pointer flex items-center text-blue-600 hover:text-blue-800 border-2 px-2 py-1 rounded-lg focus:bg-gray-300 border-gray-300 hover:border-blue-500 hover:border-opacity-75 transition-all duration-150"
          >
            <BiSolidLike className="text-lg" /> {like}
          </div>
          <div
            onClick={() => setDislike(dislike + 1)}
            className="cursor-pointer flex items-center text-orange-500 hover:text-orange-700 border-2 px-2 py-1 rounded-lg focus:bg-gray-300 border-gray-300 hover:border-orange-400 hover:border-opacity-75 transition-all duration-150"
          >
            <BiSolidDislike className="text-lg" /> {dislike}
          </div>
          <div className="cursor-pointer flex items-center text-gray-800 hover:text-gray-900 border-2 px-2 py-1 rounded-lg focus:bg-gray-300 border-gray-300 hover:border-gray-500 hover:border-opacity-75 transition-all duration-150">
            <IoShareSocialSharp className="text-lg" /> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueAns;

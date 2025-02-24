'use client';
import React, { useState } from "react";
interface Review {
  Answer: string;
}

interface CardProps {
  stream: string;
  cutoff: string;
  area: string;
  heading: string;
  avatar: string;
  userav: string;
  user: string;
  institution: string;
  posted: string;
  date: string;
  reviews: Review[];
  rateup: number;
  ratedown: number;
  share: number;
  ans: number;
  getbgColor: (letter: string) => string;
}

const QNACard: React.FC<CardProps> = ({
  stream,
  cutoff,
  area,
  heading,
  avatar,
  userav,
  user,
  institution,
  posted,
  date,
  reviews,
  rateup,
  ratedown,
  share,
  ans,
  getbgColor,
}) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(rateup);
  const [dislike, setDislike] = useState(ratedown);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around border border-gray-300 p-4 rounded-2xl bg-white">
      <div className="flex flex-col justify-center w-full gap-6">
        <div className="flex justify-around items-center md:flex-row flex-col">
          <p className="text-purple-800 text-sm font-medium">{stream}</p>
          <p className="text-purple-800 text-sm font-medium">{cutoff}</p>
          <p className="text-purple-800 text-sm font-medium">{institution}</p>
        </div>
        <p className="text-blue-400 text-lg font-semibold">{heading}</p>
        <div className="flex gap-4 text-sm">
          <div
            className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: getbgColor(userav[0].toUpperCase()) }}
          >
            {userav}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-purple-800 text-sm font-semibold">{user}</p>
            <div className="flex gap-20">
              <p className="text-purple-800 text-sm font-semibold">{institution}</p>
              <div className="flex flex-col">
                <p className="text-purple-800 text-sm font-semibold">{posted}</p>
                <p className="text-purple-800 text-sm font-semibold">{date}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-height duration-300 overflow-hidden ${
            show ? "h-auto" : "h-24"
          }`}
        >
          {reviews.map(({ Answer }, index) => (
            <p
              className="text-purple-800 text-sm font-normal"
              key={index}
            >
              {Answer}
            </p>
          ))}
        </div>

        <button
          onClick={handleClick}
          className={`text-orange-500 text-sm font-normal underline ${
            show ? "hidden" : "block"
          }`}
        >
          Read more
        </button>

        <button
          onClick={handleClick}
          className={`text-orange-500 text-sm font-normal underline ${
            show ? "block" : "hidden"
          }`}
        >
          Read less
        </button>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setLike(like + 1)}
            className="flex items-center gap-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 9l-2 2m0 0l-2-2m2 2v6m-4 0a2 2 0 01-2-2V7a2 2 0 012-2h3.5a2.5 2.5 0 011.5 4.5V15M21 12h-6"
              ></path>
            </svg>
            {like}
          </button>

          <button
            onClick={() => setDislike(dislike + 1)}
            className="flex items-center gap-1 text-red-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 15l2-2m0 0l2 2m-2-2V9m4 6a2 2 0 002-2V7a2 2 0 00-2-2h-3.5a2.5 2.5 0 00-1.5 4.5V15M3 12h6"
              ></path>
            </svg>
            {dislike}
          </button>

          <button className="flex items-center gap-1">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v16h16V4H4zm2 8h4M6 6h4m-4 8h4m6 2h2m0-2h2m-2 0h-2m0-4h2m0-2h2m0 4h-2"
              ></path>
            </svg>
            {share}
          </button>

          <button className="flex items-center gap-1">
            {ans}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QNACard;

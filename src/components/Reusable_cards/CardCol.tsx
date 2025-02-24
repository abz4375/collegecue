'use client';
import React, { useState } from 'react';
import Image from 'next/image';
interface Review {
  id: number;
  Answer: string;
}

interface CardColProps {
  heading: string;
  avatar: string;
  userav: string;
  user: string;
  reviews: Review[];
  getbgColor: (char: string) => string;
}

const CardCol: React.FC<CardColProps> = ({ heading, avatar, userav, user, reviews, getbgColor }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="w-[350px] flex flex-row flex-wrap md:flex-nowrap sm:w-[380px]">
      <div className="bg-white p-4 border border-gray-300 rounded-2xl flex flex-col mt-4 w-full h-auto md:h-88">
        <p className="text-indigo-900 text-xl font-semibold break-words">{heading}</p>

        <div className="flex items-center gap-4 mt-2">
          <div
            className={`w-18 h-18 rounded-lg flex items-center justify-center bg-${getbgColor(
              userav.charAt(0).toUpperCase()
            )}`}
          >
            <Image src={avatar} alt={userav} width={100}  height={100} className="w-full h-full rounded-lg object-cover " />
          </div>

          <h3 className="text-indigo-900 text-base font-semibold break-words">{user}</h3>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          {reviews.map(({ Answer }, index) => (
            <div key={index} className="text-indigo-900 text-sm font-normal break-words">
              {Answer}
            </div>
          ))}
        </div>

        <div className="flex  items-start mt-4">
          <button
            onClick={handleClick}
            className={`text-orange-500 text-sm font-normal underline ${show ? 'hidden' : 'block'}`}
          >
            Read more
          </button>
          <button
            onClick={handleClick}
            className={`text-orange-500 text-sm font-normal underline ${!show ? 'hidden' : 'block'}`}
          >
            Read less
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCol;

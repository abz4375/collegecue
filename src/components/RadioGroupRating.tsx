'use client'
import { useState } from 'react';

import { MdOutlineSentimentDissatisfied, MdSentimentDissatisfied, MdSentimentSatisfied, MdSentimentSatisfiedAlt, MdSentimentVerySatisfied } from "react-icons/md";

interface IconProps {
  value: number;
}

function IconContainer(props: IconProps) {
  const { value } = props;
  const iconSize = "2.5rem"; // Adjust the icon size as needed
  const iconClassName = "text-[#BFBFBF] transition duration-300 transform hover:text-blue-500 hover:scale-110"; // Common icon styles

  switch (value) {
    case 1:
      return <MdOutlineSentimentDissatisfied className={iconClassName}  size={iconSize} />;
    case 2:
      return <MdSentimentDissatisfied className={iconClassName} size={iconSize} />;
    case 3:
      return <MdSentimentSatisfied className={iconClassName} size={iconSize} />;
    case 4:
      return <MdSentimentSatisfiedAlt className={iconClassName} size={iconSize} />;
    case 5:
      return <MdSentimentVerySatisfied className={iconClassName} size={iconSize} />;
    default:
      return null;
  }
}

function RadioGroupRating() {
  const [rating, setRating] = useState<number | null>(2);

  return (
    <div className="w-full flex justify-center items-center flex-col mb-6">
      <div className="w-full flex justify-center items-center flex-col mb-6">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className="flex items-center mr-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={value}
                checked={rating === value}
                onChange={() => setRating(value)}
                className="sr-only"
              />
              <IconContainer value={value} />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RadioGroupRating;


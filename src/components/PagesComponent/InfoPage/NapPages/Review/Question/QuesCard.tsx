import React, { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdShare } from "react-icons/md";

interface Props {
  ques: string;
  ans: string;
  ansby: string;
}

const QuesCard: React.FC<Props> = ({ ques, ans, ansby }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const maxChars = 100;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    }
  };

  const truncatedAns = isExpanded ? ans : `${ans.slice(0, maxChars)}...`;

  return (
    <div className="w-full border border-gray-300 rounded-lg shadow-md mb-8 p-4 transition duration-300 ease-in-out hover:bg-gray-100">
      <p className="text-lg font-semibold text-gray-800 mt-2">{ques}</p>

      <p className="text-sm font-medium text-gray-700 mt-2">
        Answered by {ansby}
      </p>

      <div
        className={`text-base font-normal text-gray-800 mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-96" : "max-h-24"
        }`}
        style={{
          transitionProperty: "max-height, opacity",
          opacity: isExpanded ? 1 : 0.9,
        }}
      >
        {truncatedAns}
      </div>

      <p
        className="text-base font-medium text-blue-500 mt-4 cursor-pointer transition duration-300 ease-in-out hover:text-blue-600"
        onClick={toggleExpand}
      >
        {isExpanded ? "Read less" : "Read more"}
      </p>

      <div className="flex items-center mt-4 text-gray-700 space-x-4">
        <div className="flex items-center">
          <BiSolidLike
            className={`text-lg cursor-pointer transition duration-300 ease-in-out ${
              liked ? "text-green-500" : "hover:text-green-500"
            }`}
            onClick={handleLike}
          />
          <p
            className={`text-sm font-medium ml-1 transition duration-300 ease-in-out ${
              liked ? "text-green-500" : "hover:text-green-500"
            }`}
          >
            {likes}
          </p>
        </div>
        <div className="flex items-center">
          <BiSolidDislike
            className={`text-lg cursor-pointer transition duration-300 ease-in-out ${
              disliked ? "text-red-500" : "hover:text-red-500"
            }`}
            onClick={handleDislike}
          />
          <p
            className={`text-sm font-medium ml-1 transition duration-300 ease-in-out ${
              disliked ? "text-red-500" : "hover:text-red-500"
            }`}
          >
            {dislikes}
          </p>
        </div>
        <div className="flex items-center">
          <MdShare className="text-lg hover:text-blue-500 transition duration-300 ease-in-out" />
          <p className="text-sm font-medium ml-1 hover:text-blue-500 transition duration-300 ease-in-out">
            2 Answers
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuesCard;
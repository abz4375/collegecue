import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";

interface MoreNewsCardProps {
  moreNewsImg: string;
  heading: string;
  content?: string;
  date: string;
  readLink: string;
}

const MoreNewsCard: FC<MoreNewsCardProps> = ({
  moreNewsImg,
  heading,
  content,
  date,
  readLink,
}) => {
  return (
    <div className="transition-all duration-300 bg-white rounded-sm p-4 flex items-center  border-t-2 border-b-2 border-gray-200 space-x-4">
      {/* Left Side - News Content */}
      <div className="flex-1">
        <p className="text-gray-500 text-sm">{date}</p>
        <h3 className="text-gray-900 font-semibold text-md leading-tight hover:text-blue-600 transition cursor-pointer mt-2">
          {heading}
        </h3>
        {/* Show content if available */}
        {content && (
          <p className="text-gray-600 text-sm mt-1 line-clamp-2 navmd:hidden">{content}</p>
        )}
        {/* Read More Button */}
        <Link
            href="https://www.thehindu.com/topic/College_admission/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button
            className=" text-sm font-normal text-gray-700 mt-2 hover:underline hover:text-blue-500"
            aria-label="Read more about this news"
          >
            Read More..
          </button>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="w-[80px] h-[60px] md:w-[100px] md:h-[75px] flex-shrink-0">
        <Image
          className="w-full h-full object-cover rounded-lg"
          src={moreNewsImg}
          alt={heading}
          width={100}
          height={75}
          priority
        />
      </div>
    </div>
  );
};

export default MoreNewsCard;

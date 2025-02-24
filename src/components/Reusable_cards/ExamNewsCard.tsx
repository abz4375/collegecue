import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import profilepic from "@/assets/ExamPage/profilepic.webp";

interface ExamNewsProps {
  publishedAt: Date;
  title: string;
  url: string;
  urlToImage?: StaticImageData;
}

const ExamNewsCard: React.FC<{ NewsCard: ExamNewsProps }> = ({ NewsCard }) => {
  return (
    <div className="w-full px-4">
      <div className="border-t-[1.5px]  flex items-center border-solid border-[#7b90ff] opacity-100  ">
        {NewsCard.urlToImage && (
          <Image
            src={NewsCard.urlToImage}
            alt="news image"
            width={100}
            height={100}
            className="absolute w-[45px] h-[45px] rounded-sm mt-2 "
          />
        )}
        {!NewsCard.urlToImage && (
          <Image
            src={profilepic}
            alt="news image"
            width={100}
            height={100}
            className="absolute w-[45px] h-[45px] rounded-sm mt-2"
          />
        )}
        <div className="flex flex-col ml-16 mt-2">
          <Link href={NewsCard.url}>
            <p className="text-[#210366] text-[12px] font-bold  ">
              {NewsCard.title}
            </p>
          </Link>
          <div className="flex items-center">
            <CiCalendar className="text-[#210366] text-[15px]  mt-[5.92px]" />
            <h5 className="text-[#210366] mt-[5.29px] ml-[5.25px] text-[10px] font-normal leading-4">
              {new Date(
                NewsCard.publishedAt
                  ? NewsCard.publishedAt
                  : "2024-04-03T09:25:02Z"
              ).toUTCString()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export {ExamNewsCard};

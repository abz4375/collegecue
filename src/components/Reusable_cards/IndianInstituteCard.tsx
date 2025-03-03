// the bookmark should come in horizontal ine with heading name:
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import StarRating from "../StarRating";
import { IoIosCall } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import Link from "next/link";

interface RightCardProps {
  img: StaticImageData;
  name: string;
  Courses: string;
  stars: number;
  CoursesFee: string;
  CenterName: string;
  brochure: string;
  apply: string;
  BlueBoxes: { name: string; link: string }[];
  id?: string;
}

const IndianInstituteCard = ({
  img,
  name,
  Courses,
  stars,
  CoursesFee,
  CenterName,
  brochure,
  apply,
  BlueBoxes,
  id,
}: RightCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="rounded-2xl transition-all duration-300 h-auto border border-solid hover:bg-gray-50 border-gray-300 hover:shadow-md lg:flex lg:flex-col lg:items-center lg:justify-center ">
      <div className="flex m-4 lg:flex-col justify-center lg:items-center">
        <div className="flex w-full justify-end [@media_(min-width:_1024px)]:hidden">
          <button
            onClick={handleBookmarkClick}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            {isBookmarked ? (
              <BsFillBookmarkFill className="text-blue-600 text-xl" />
            ) : (
              <BsBookmark className="text-gray-500 text-xl" />
            )}
          </button>
        </div>
        <Link href={`/institute-info/${id}/`} className="my-auto">
          <div className=" w-[10rem] h-[10rem] rounded-xl bg-gray-200 border-solid border mr-[1rem] flex justify-center items-center overflow-hidden lg:mx-auto">
            <Image
              src={img}
              alt="logo"
              className=" object-cover max-w-[6rem] rounded-full"
            />
          </div>
        </Link>
        <div className="flex flex-row lg:flex-col gap-2 pt-4">
          <div className="flex flex-col justify-between gap- pt-0 lg:gap-2 lg:flex-col">
            <div className="flex flex-col flex-wrap border-black">
              <div className="flex flex-col gap-0 lg:flex-col lg:items-center lg:justify-center lg:text-center">
                <Link href={`/institute-info/${id}/`}>
                  <h6 className="text-black hover:text-blue-900 transition-all duration-150 text-lg font-semibold ">
                    {name}
                  </h6>
                </Link>
                <div className="flex text-gray-500 items-center lg:justify-center space-x-1 text-sm w-[270px] mb-4 mt-1">
                  <h6 className="font-semibold ">Programs Offered:</h6>
                  {BlueBoxes.map((item, index) => (
                    <div className="text-sm gap-2 font-medium " key={index}>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex lg:items-center flex-1 justify-start border-black flex-col lg:flex-col-reverse lg:gap-3">
              <div className="flex items-center lg:justify-center gap-1">
                <p className="text-sm text-black">{stars}</p>
                <StarRating rating={stars} />
              </div>
              <div className="flex items-center space-x-1 text-sm ">
                <span className=" text-ellipsis  ">
                  Centres: <span className=" text-blue-600">{CenterName}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end lg:flex-col">
            {/* Bookmark button added here */}
            <div className="flex justify-end lg:hidden -translate-y-1">
              <button
                onClick={handleBookmarkClick}
                className="p-1 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                {isBookmarked ? (
                  <BsFillBookmarkFill className="text-blue-400 text-[1.125rem]" />
                ) : (
                  <BsBookmark className="text-gray-500 text-[1.125rem]" />
                )}
              </button>
            </div>
            <div className="flex flex-col items-center border-black justify-end mb-4 mt- pt-1">
              <span className="text-ellipsis text-gray-500 text-sm">
                Total Fees: <span className="text-[#287444]">{CoursesFee}</span>
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-0 lg:items-center lg:justify-center">
              <div>
                <button className="group w-[180px] font-[0.7rem] flex items-center justify-center bg-[#fff] border py-1 px-2 rounded-full border-solid border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-150">
                  <IoIosCall />
                  <span className="duration-150">
                    {" "}
                    &nbsp;Request a Callback
                  </span>
                </button>
              </div>
              <div className="">
                <button className="group w-[180px] hover:text-orange-600 font-[0.7rem] flex items-center justify-center border py-1 px-2 rounded-full border-solid border-gray-300 transition-all text-gray-600 duration-300">
                  Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianInstituteCard;

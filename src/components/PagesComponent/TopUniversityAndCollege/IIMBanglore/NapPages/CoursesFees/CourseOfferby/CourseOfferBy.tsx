import React from "react";
import { FaRegClock } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { BsBuildings } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { MdOutlineCompareArrows } from "react-icons/md";
interface CourseOfferbyProps {
  streams: string;
  duaration: string;
  time: string;
  degree: string;
  degrees: string;
  campus: string;
  fees: string;
  rating: number;
  review: number;
  rate: string;
  exam: string;
  applDate: string;
}

const CourseOfferby: React.FC<CourseOfferbyProps> = ({
  streams,
  duaration,
  time,
  degree,
  degrees,
  campus,
  fees,
  exam,
}) => {
  return (
    <div className="border border-gray-300 bg-white transition duration-100 rounded-lg p-4 hover:shadow-md">
      <div className="flex  gap-[40px] justify-between">
        <div className=" text-gray-800 text-lg font-bold rounded-[50px] p-2 px-0 flex flex-col justify-center w-full">
          <span>{streams}</span>
          <div className="flex justify-between items-center md:flex-col text-sm font-normal">
            <div className="flex items-center flex-wrap  gap-5 justify-around pt-4">
              <div className="flex items-center  ">
                <span className="text-gray-400 flex gap-1 items-center font-semibold">
                  <FaRegClock />
                  {duaration}
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-gray-400 font-semibold flex gap-1 items-center">
                  <BsBookHalf />
                  {degree}
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-gray-400 font-semibold flex gap-1 items-center">
                  <LuGraduationCap />
                  {degrees}
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-gray-400 font-semibold flex gap-1 items-center">
                  <HiOutlineDotsCircleHorizontal />
                  {time}
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-gray-400 font-semibold flex gap-1 items-center">
                  <BsBuildings />
                  {campus}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-gray-800 rounded-[50px] flex justify-end pr-2 items-center font-bold w-[25%] ">
          <span>{time}</span>
        </div>
      </div>
      <div className="flex justify-between items-center md:flex-col"></div>
      <div></div>

      <div className="pt-2 text-sm">
        <p className="text-gray-600">
          Exams Accepted :{" "}
          <span className="text-gray-500 font-bold">{exam}</span>
        </p>
      </div>

      <div className="flex items-center justify-between pr- mt-2 font-semibold md:flex-wrap md:gap-3 md:justify-center text-sm">
        <div className=" flex items-center justify-around gap-5 md:flex-wrap md:gap-3">
          <div className="flex items-center cursor-pointer">
            <span className="text-gray-800 flex gap-1 items-center ">
              <FaCircleArrowRight />
              Admission Predictor
            </span>
          </div>
          <div className="flex items-center cursor-pointer ">
            <span className="text-blue-500 flex gap-1 items-center">
              <MdFileDownload />
              Download Brochure
            </span>
          </div>
          <div className="flex items-center cursor-pointer">
            <span className="text-orange-500 flex gap-1 items-center">
              <MdOutlineCompareArrows />
              Compare
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:flex-wrap md:gap-3 border- border-black">
          <span className="text-gray-400">Total :</span>
          <span className="text-green-600">{fees}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseOfferby;

import React from "react";
import Image, { StaticImageData } from "next/image";
import BlueButton from "../Buttons/BlueButton";
import StarRating from "../StarRating";
import { IoIosCall } from "react-icons/io";

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
}: RightCardProps) => {
  return (
    <div className="rounded-2xl   h-auto border border-solid border-gray-300 hover:shadow-md md:flex md:flex-col md:items-center md:justify-center ">
      <div className="flex m-2 md:flex-col justify-center md:items-center">
        <div className=" w-[10rem] h-[10rem] rounded-l-2xl rounded-br-2xl bg-white border border-solid border-[#7B90FF] mr-[1rem] flex justify-center items-center overflow-hidden ">
          <Image src={img} alt="logo" className=" object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-10 md:gap-2 md:flex-col">
            <div className="flex flex-col flex-wrap">
              <div className="flex flex-col gap-2  md:flex-col md:items-center md:justify-center md:text-center">
                <h6 className=" text-[#210366] text-[19px] font-semibold ">
                  {name}
                </h6>
                <div className="flex items-center space-x-1 text-sm w-[270px] ">
                  <h6 className=" text-[#210366]  font-semibold ">
                    Programs Offered:
                  </h6>
                  {BlueBoxes.map((item, index) => (
                    <div className="text-sm gap-2 font-medium " key={index}>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
              <span className=" text-ellipsis  text-gray-500">
                Total Fees:{" "}
                <span className=" text-[#287444]">{CoursesFee}</span>
              </span>
            </div>
          </div>
          <div className="flex md:flex-col">
            <div className="flex md:items-center flex-1  flex-col md:flex-col-reverse md:gap-3">
              <div className="flex items-center  md:justify-center gap-1">
                <p className="text-sm text-[#210366]">{stars}</p>
                <StarRating rating={stars} />
              </div>
              <div className="flex items-center space-x-1 text-sm ">
                <span className=" text-ellipsis  ">
                  Centres: <span className=" text-[#493695]">{CenterName}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 text-sm ">
                <span className=" text-ellipsis rounded-full px-3 py-1.5 bg-gray-200  ">
                  Info
                </span>
                <span className=" text-ellipsis rounded-full px-3 py-1.5 bg-gray-200  ">
                  Course Fees
                </span>
              </div>
             
            </div>
            <div className="flex flex-col gap-3 md:items-center md:justify-center">
              <div>
                <button className=" group w-[180px] font-[0.7rem] flex items-center justify-center bg-[#fff] border py-1 px-2 rounded-full border-solid border-[#F05E23] text-[#F05E23]">
                  <IoIosCall/>
                  <span className="group-hover:text-black duration-500">Request a Callback</span>
                </button>
              </div>
              <div className="">
                <button className=" group w-[180px] hover:text-white hover:bg-[#F05E23] font-[0.7rem] flex items-center justify-center border py-1 px-2 rounded-full border-solid border-[#F05E23] ]">
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

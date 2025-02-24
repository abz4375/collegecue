import Image from "next/image";
import React from "react";
import Button from "../Buttons/Courses";
import StarRating from "../StarRating";
import { CiLocationOn } from "react-icons/ci";

import Link from "next/link";
interface CollegeCardProps {
  img: any;
  name: string;
  location: string;
  stars: number;
  fees: string;
  otherfee: string;
  brochure: string;
  enquire: string;
  isStydyAbroad?: boolean;
}
const TopuniversityCollageCard: React.FC<CollegeCardProps> = ({
  img,
  name,
  location,
  stars,
  fees,
  otherfee,
  brochure,
  enquire,
  isStydyAbroad = false,
}) => {
  return (
    <div>
      {isStydyAbroad ? (
        <div className="border-[1px] border-solid border-[#553CDF]  box-borde  p-5 rounded-[15px] w-[800px] xl:w-full lg:w-full md:w-full sm:w-full  ">
          <div className="flex flex-row items-center justify-around gap-3 md:flex-col ">
            <div className="flex items-center justify-center">
              <Image src={img} alt="img" width={100} />
            </div>
            <div className=" w-[50%] sm:w-full flex flex-col gap-2 md:gap-3 md:items-center md:text-center">
              <Link href={`/college-info/${name}/*`}>
                <div className="text-[#210366]  font-bold ">{name} </div>
              </Link>
              <div className="text-[#210366] font-[500]">{location}</div>
              <div className="flex gap-1 md:gap-3 md:flex-col ">
                <div className="flex gap-1 md:gap-5">
                  <div>
                    <button className="font-bold text-[#210366] py-2 px-3  rounded-[10px]  bg-[#F6F6F6] border-1 border border-[#76c3f7] hover:bg-[#210366] hover:text-white transition duration-200 text-[12px]">
                      View Details
                    </button>
                  </div>
                  <div>
                    <button className="py-2 px-3 rounded-[10px]   border-1 border border-[#76c3f7] hover:bg-[#210366] hover:text-white transition duration-200 text-[12px] font-bold text-[#210366] bg-[#F6F6F6] ">
                      Pacements
                    </button>
                  </div>
                </div>
                <div>
                  <button className="font-bold py-2 px-3  rounded-[10px]  border-1 border text-[#5A4FCF] border-[#76c3f7] hover:bg-[#FFCC86] hover:text-[#CB7712] transition duration-200  text-[12px]">
                    Add to Compare
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 md:flex-col">
                <div>
                  <button className="font-bold text-[#210366] py-2 px-3   rounded-[10px]   border-1 border border-[#76c3f7]  hover:bg-[#210366] hover:text-white transition duration-200 text-[12px] bg-[#F6F6F6]">
                    {fees}
                  </button>
                </div>
                <div className="font-[700] text-[#210366] text-[12px]  ">
                  {otherfee}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-around gap-3 items-start md:items-center">
              <div className="flex items-center">
                <div className="font-bold text-[#210366]">{stars}</div>
                <StarRating rating={stars} />
              </div>
              <div className="flex flex-col items-start gap-2">
                <button className="font-bold text-white py-2 px-3  rounded-[10px]  bg-[#F05E23] border-1 border-[#D3D3D3] hover:bg-[#210366] hover:text-white transition duration-200 text-[14px] w-[150px] ">
                  {brochure}
                </button>
                <button className="font-bold text-white py-2 px-3  rounded-[10px]  bg-[#F05E23] border-1 border border-[#D3D3D3] hover:bg-[#210366] hover:text-white transition duration-200 text-[14px] w-[150px]">
                  {enquire}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-[1px] flex flex-col  border-solid border-[#553CDF]  box-borde  p-5 rounded-[15px] w-[800px] xl:w-full lg:w-full md:w-full sm:w-full ">
          <div className="mb-4">
            <Link href="/topcollege/iimbangalore">
              <div className="text-[#210366] font-bold ">{name}</div>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-around gap-3 md:flex-col ">
            <div className="flex items-center justify-center">
              <Image src={img} alt="img" width={100} />
            </div>
            <div className=" w-full flex flex-col gap-3 md:items-center md:text-center">
              <div className="flex space-x-2 items-center flex-wrap sm:justify-center sm:gap-4">
                <div className="font-bold text-[#210366]">{stars}</div>
                <div>
                  <StarRating rating={stars} />
                </div>
                <div className="text-[#210366] font-[500] flex space-x-1">
                  <CiLocationOn />
                  {location}
                </div>
              </div>
              <div className="flex gap-1 md:gap-3 md:flex-col ">
                <div className="flex gap-1 md:gap-5">
                  <div>
                    <button className="font-bold text-[#210366] py-2 px-3  rounded-[10px]  bg-[#F6F6F6] border-1 border border-[#76c3f7] hover:bg-[#210366] hover:text-white transition duration-200 text-[12px]">
                      View Details
                    </button>
                  </div>
                  <div>
                    <button className="py-2 px-3 rounded-[10px]   border-1 border border-[#76c3f7] hover:bg-[#210366] hover:text-white transition duration-200 text-[12px] font-bold text-[#210366] bg-[#F6F6F6] ">
                      Pacements
                    </button>
                  </div>
                </div>
                <div>
                  <button className="font-bold py-2 px-3  rounded-[10px]  border-1 border text-[#5A4FCF] border-[#76c3f7] hover:bg-[#FFCC86] hover:text-[#CB7712] transition duration-200  text-[12px]">
                    Add to Compare
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 md:flex-col"></div>
            </div>
            <div className="flex flex-col justify-around gap-3 items-start md:items-center"></div>
          </div>
          <div className="flex mt-2 border-t py-2 md:flex-col md:items-center  justify-between gap-2">
            <div className="flex md:flex-col md:space-y-2  items-center space-x-2">
              <div>
                <button className="font-bold text-[#210366] py-2 px-3   rounded-[10px]   border-1 border border-[#76c3f7]  hover:bg-[#210366] hover:text-white transition duration-200 text-[12px] bg-[#F6F6F6]">
                  Course & fee {fees}
                </button>
              </div>
              <div className="font-[700] text-[#210366] text-[12px]  ">
                {otherfee}
              </div>
            </div>
            <div className="flex items-center  space-x-2 flex-wrap sm:justify-center gap-4">
              <button className="font-bold text-white py-2 px-3  rounded-[10px]  bg-[#F05E23] border-1 border border-[#D3D3D3] hover:bg-[#210366] hover:text-white transition duration-200 text-[14px] w-[150px]">
                {enquire}Enquire
              </button>
              <button className="font-bold  py-2 px-3  rounded-[10px]  border border-[#F05E23] border-1  hover:bg-[#210366] hover:text-white transition duration-200 text-[14px] w-[150px] ">
                {brochure} Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopuniversityCollageCard;

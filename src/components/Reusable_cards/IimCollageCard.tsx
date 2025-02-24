import Image from "next/image";
import React from "react";
import logo1 from "../../assets/TopCollegeUniversity/CollegeCard/1.png";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import Button from "../Buttons/Courses";
const IimCollageCard = () => {
  return (
    <div className="border-[1px] border-solid border-[#553cdf]  box-borde  p-[10px] rounded-[15px] m-10">
      <div className="flex flex-row items-center justify-around gap-3 ">
        <div>
          <Image src={logo1} alt="img" className="m-2" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[#210366] font-bold ">
            IIM Banglore -Indian Institute of Mangement
          </div>
          <div className="text-[#210366] font-[500]">
            Bangalore, Karnataka| AICTE, UGC Approved
          </div>
          <div className="flex gap-1">
            <div>
              <button className="font-[500] py-2 px-3 rounded-[10px]  border-1 border border-[#76c3f7] hover:bg-[#210366] hover:text-white transition duration-200 text-[14px] ">
                View Details
              </button>
            </div>
            <div>
              <button className="font-[500] py-2 px-3 rounded-[10px]   border-1 border border-[#76c3f7] hover:bg-[#210366] hover:text-white transition duration-200 text-[14px] ">
                Pacements
              </button>
            </div>
            <div>
              <button className="font-[500] py-2 px-3 rounded-[10px]  border-1 border text-[#7B90FF] border-[#76c3f7] hover:bg-yellow-200 hover:text-orange-600 transition duration-200  text-[14px]">
                Add to Compare
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <button className="font-[500] py-2 px-3 rounded-[10px]   border-1 border border-[#76c3f7] hover:bg-[#210366] hover:text-white transition duration-200 text-[14px]">
                Cources & Fees :24,50,000/*
              </button>
            </div>
            <div className="font-[700] text-[#210366] text-[14px]">
              MBA/PDMG-Total Fee
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-2">
          <div>4.1</div>
          <div>
            <ul className="flex ">
              <li>
                <GoStarFill className="text-[#7B90FF]" />
              </li>
              <li>
                <GoStarFill className="text-[#7B90FF]" />
              </li>
              <li>
                <GoStarFill className="text-[#7B90FF]" />
              </li>
              <li>
                <GoStarFill className="text-[#7B90FF]" />
              </li>
              <li>
                <FaRegStarHalfStroke className="text-[#7B90FF]" />
              </li>
            </ul>
          </div>
          <div>
            <Button dt={"Brochure"} link={""} />
          </div>
          <div>
            <Button dt={"Enquire"} link={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IimCollageCard;

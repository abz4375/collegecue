"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdAlarm } from "react-icons/io";
import { MdShare } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import GuidelinesPopup from "@/components/PagesComponent/TestSeries/GuideLinesPopup";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import card_img_2 from "../../assets/Test_series/test_card img-1.jpg";

interface CardProps {
  attempts: string;
  headings: string;
}

export default function TestSeriesCards({ attempts, headings }: CardProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleStartTest = () => {
    setShowPopup(true);
  };

  const handleAccept = () => {
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="w-[350px] sm:w-full h-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 rounded-t-lg relative">
          <div className="border rounded-lg overflow-hidden relative">
            <Image
              src={card_img_2}
              alt="test card image"
              width={300}
              height={250}
              className="object-cover rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <div className="absolute top-2 right-2 flex items-center justify-center bg-[#b7c1c8] rounded-full w-8 h-8 hover:bg-[#553CDF] cursor-pointer">
              <FontAwesomeIcon
                icon={faBookmark}
                className="text-[white] text-sm "
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] font-bold text-indigo-900">
              {headings}
            </h2>
            <MdShare className="text-blue-500 h-18 w-6 m-3 text-2xl" />
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <div className="flex items-center ml-6">
              <IoMdAlarm className="text-blue-700 w-8 h-5 " />
              <p className=" font-[60px] text-center">180 Min</p>
            </div>
            <div className="flex items-center mr-4">
              <MdQuiz className="text-blue-500 w-8 h-5" />
              <p className="">75 Ques</p>
            </div>
          </div>
          <div className="flex justify-evenly items-center mt-3 ">
            <p className="ml-1 font-medium ">{attempts}</p>
          </div>
          <div className="flex justify-evenly items-center mt-3">
            <button
              onClick={handleStartTest}
              className="flex items-center justify-center bg-[#FB3F00] hover:text-black hover:bg-[#fff] text-white font-bold w-[115px] py-2 px-4 rounded-[12px]"
            >
              Start
              <MdArrowRight className="w-4 " />
            </button>
            <button className="flex items-center justify-center bg-[#7B90FF] hover:text-black hover:bg-[#fff] text-white font-bold py-2 px-4 h-[40px] w-[115px] rounded-[12px] ml-2">
              Download
              <MdOutlineSaveAlt className="w-6 h-6 font-medium ml-[0.6px] " />
            </button>
          </div>
        </div>
      </div>
      <GuidelinesPopup
        open={showPopup}
        onClose={handleCancel}
        onAccept={handleAccept}
      />
    </>
  );
}

"use client";
import React from "react";
import img from "../../../../../../assets/IIMBangalore/NavPages/Placements/cutoff.jpg";
import TableContainer from "./Table/TableContainer";
import LabelingBar from "./LabelChart/LabelChart";
import Barrtwo from "@/components/PagesComponent/studyAbroad/Taketotest/BarrTwo";
import Image from "next/image";
import Faq from "@/components/Faq/Faq";
import FaQData from "./FaQ/FaQData";

const PacementContainer = () => {
  return (
    <div>
      <div>
        <TableContainer />
        <div>
          <div className="max-w-screen-xl mx-auto mt-10 px-4">
            <div className="w-1015px mx-auto mb-12">
              <p className="text-2xl font-bold mb-4 text-purple-900">
                <span className="text-orange-500">Check</span>{" "}
                <span className="text-gray-800">IIM Bangalore Cutoff</span>
              </p>
              <div className="mt-4">
                <Image src={img} alt="image" className="max-h-[60vh] w-auto mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <LabelingBar />
        <div
          className="mx-auto w-full flex justify-center md:flex-col sm:flex-col sm:overflow-x-scroll 
        md:overflow-x-scroll lg overflow-x-scroll xl:overflow-x-scroll"
        >
          {" "}
          <Barrtwo />
        </div>
        <div className="flex flex-col items-center justify-center bg-[#F7F7F7] rounded-[15px] mb-4">
          <div className="font-bold text-[29px] mt-4"> FAQs </div>
          <Faq faqs={FaQData} />
        </div>
      </div>
    </div>
  );
};

export default PacementContainer;

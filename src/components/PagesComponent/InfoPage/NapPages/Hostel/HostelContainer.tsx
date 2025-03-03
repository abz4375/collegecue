import React from "react";
import Img1 from "../../../../../assets/IIMBangalore/NavPages/Hostel/image63.png";
import HostelFees from "./HostelFees";
import HostelDetails from "./HostelDetails";
import Image from "next/image";
import {
  hostelInfo,
  Hostelfees,
  HostelDetail,
  HostelDetailsData,
} from "./HostelData";

const Hostel: React.FC = () => {
  const { pageTitle, fee, description, image, tableOfContent } = hostelInfo;

  return (
    <div className="container mx-auto px-4 py-6 gap-5">
      <div className="flex items-center justify-between  gap-5">
        <div className="text-gray-800 text-2xl md:text-xl font-bold">
          {pageTitle} Hostel
        </div>
        <div className="text-green-600 font-medium">
          <div className=" text-gray-800 text-sm font-bold">Fee :</div>
          <div className="text-2xl md:text-lg font-bold">{fee}</div>
        </div>
      </div>

      <div className="text-gray-600 text-base md:text-sm  font-medium  leading-5 mt-4">
        {description}
      </div>

      <div className="flex justify-center my-6">
        <Image src={Img1} alt="Hostel" className="w-[100%] rounded-xl border-2 border- md:w-auto" />
      </div>

      <div className="bg-blue-100 bg-opacity-75 mx-auto md:ml-4 mb-6 w-full md:w-3/4 rounded-xl p-6  gap-5 shadow-md">
        <div className="font-bold text-lg text-blue-500">Table Of Content</div>
        <div className="mt-4  text-base font-normal">
          {tableOfContent.map((item: any, index: number) => (
            <div key={index}>{`${index + 1}. ${item}`}</div>
          ))}
        </div>
      </div>

      <HostelFees Hostelfees={Hostelfees} name={pageTitle} />
      <HostelDetails
        HostelDetail={HostelDetail}
        HostelDetailsData={HostelDetailsData}
        name={pageTitle}
      />
    </div>
  );
};

export default Hostel;

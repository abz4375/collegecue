import React from "react";
import Image from "next/image";
import img1 from "../../../../../../../assets/IIMBangalore/NavPages/Gallery/PopularComparison/iimblr.png";
import img2 from "../../../../../../../assets/IIMBangalore/NavPages/Gallery/PopularComparison/iimahm.png";
import img3 from "../../../../../../../assets/IIMBangalore/NavPages/Gallery/PopularComparison/isbhyd.png";
import img4 from "../../../../../../../assets/IIMBangalore/NavPages/Gallery/PopularComparison/dms.png";
import img5 from "../../../../../../../assets/IIMBangalore/NavPages/Gallery/PopularComparison/iimlukh.png";
import img6 from "../../../../../../../assets/IIMBangalore/NavPages/Gallery/PopularComparison/iitmadras.png";
import img7 from "../../../../../../../assets/IIMBangalore/NavPages/Gallery/PopularComparison/iitkanpur.png";
import img8 from "../../../../../../../assets/IIMBangalore/NavPages/Gallery/PopularComparison/iitdelhi.png";
const institutions = [
  { img: img1, name: "IIM Bangalore" },
  { img: img2, name: "IIM Ahmedabad" },
  { img: img3, name: "ISB Hyderabad" },
  { img: img4, name: "DMS IITD MBA" },
  { img: img5, name: "IIM Lucknow" },
  { img: img6, name: "IIT Madras" },
  { img: img7, name: "IIT Kanpur" },
  { img: img8, name: "IIT Delhi" },
];

export default function PopularComparision() {
  return (
    <div className="w-full shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] rounded-[15px] mb-8">
      <div className="flex items-center justify-between p-4">
        <p className="text-xl font-bold text-gray-800 ">Popular Comparison</p>
        <p className="text-sm font-semibold text-blue-600 cursor-pointer">
          VIEW ALL
        </p>
      </div>
      <hr className="border-gray-300" />
      <div className="grid grid-cols-2 gap-2 p-4">
        {institutions.map((institution, index) => (
          // <div key={index} className="mb-6">
          //   <div className="rounded-lg overflow-hidden mb-4">
          //     <Image
          //       src={institution.img}
          //       alt={institution.name}
          //       className="w-full h-auto"
          //     />
          //   </div>
          //   <p className="text-lg font-semibold text-gray-900">
          //     {institution.name}
          //   </p>
          // </div>
          <div key={index} className="w-100 h-fit md:h-fit mx-0 bg-white rounded-lg border-0 border-black">
            <div className="relative">
              <div className="relative w-full h-30 rounded-t-lg overflow-hidden">
                <Image
                  src={institution.img}
                  alt={`${"description"} Logo`}
                  className="w-full h-40 object-cover bg-blue-400 bg-opacity-30 rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black opacity-[25%]"></div>
              </div>
              <div className=" absolute mx-auto w-full top-[8.75rem]"></div>
            </div>
            <div className="p-4 border-2 border-t-0 border-gray-300 h-[60%] rounded-b-lg flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <div className=" mx-auto">
                  <p className="text-gray-600 my-0 text-xl font-bold text-center">
                    {institution.name}
                  </p>
                  {/* <p className="text-gray-500 mb-4  text-center">
                    {props.contents_body}
                  </p> */}
                </div>
              </div>
              {/* <p className="text-blue-500 text-center w-full mx-auto relative bottom-0">
                <Link href={`/top-universities/${props.titles}`}>
                  View Colleges
                </Link>
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import img1 from "../../../../assets/Homepage/collegerankingtable/agency1.webp";
import img2 from "../../../../assets/Homepage/collegerankingtable/agency2.webp";
import img3 from "../../../../assets/Homepage/collegerankingtable/agency3.webp";
import img4 from "../../../../assets/Homepage/collegerankingtable/agency4.webp";
import img5 from "../../../../assets/Homepage/collegerankingtable/agency5.webp";
import img6 from "../../../../assets/Homepage/collegerankingtable/agency6.webp";
import Image from "next/image";

function Category(college:any, ranking:any, stream:any, image:any) {
  return { college, ranking, stream, image };
}

const Categoryrows = [
  Category(
    "IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee",
    "1 out of 200",
    "overall",
    img1
  ),
  Category(
    "School of Planning and Architecture - [SPA], New Delhi",
    "1 out of 200",
    "overall",
    img2
  ),
  Category(
    "School of Planning and Architecture - [SPAV], Vijayawada",
    "1 out of 200",
    "overall",
    img3
  ),
  Category(
    "Sir JJ College of Architecture - [SJJCA], Mumbai",
    "1 out of 200",
    "overall",
    img4
  ),
  Category(
    "Jamia Millia Islamia University-[JMI], New Delhi",
    "1 out of 200",
    "overall",
    img5
  ),
  Category(
    "School of Planning and Architecture - [SPA], Bhopal",
    "1 out of 200",
    "overall",
    img6
  ),
];

const ClgRankTable = () => {
  return (
    <div className="overflow-x-auto w-full mx-auto border-2 border-gray-300 rounded-lg shadow-md">
      <table className="w-full rounded-lg">
        <thead>
          <tr>
            <th className="bg-blue-200 min-w-[400px] font-bold text-black text-base border-r border-white p-4 text-center">
              College
            </th>
            <th className="items-center text-white font-bold text-base bg-blue-950 bg-opacity-95 border-r border-white p-4 text-center">
              Ranking
            </th>
            <th className="items-center text-white font-bold text-base bg-blue-950 bg-opacity-95 p-4 text-center">
              Stream
            </th>
          </tr>
        </thead>
        <tbody>
          {Categoryrows.map((Categoryrow, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-blue-100 bg-opacity-55 shadow-md" : "bg-white"
              } shadow-sm`}
            >
              <td className="text-gray-700 text-md font-bold flex items-center p-4">
                <Image
                  src={Categoryrow.image}
                  alt="..."
                  className="w-10 h-10 rounded-full mr-6"
                />
                {Categoryrow.college}
              </td>
              <td className="text-blue-950 text-base font-normal text-center">
                {Categoryrow.ranking}
              </td>
              <td className="text-blue-950 text-base font-normal text-center">
                {Categoryrow.stream}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClgRankTable;

import React from "react";
import img1 from "../../../../assets/Homepage/collegerankingtable/agency1.webp";
import img2 from "../../../../assets/Homepage/collegerankingtable/agency2.webp";
import img3 from "../../../../assets/Homepage/collegerankingtable/agency3.webp";
import img4 from "../../../../assets/Homepage/collegerankingtable/agency4.webp";
import img5 from "../../../../assets/Homepage/collegerankingtable/agency5.webp";
import img6 from "../../../../assets/Homepage/collegerankingtable/agency6.webp";
import Image from "next/image";

function Category(college: any, ranking: any, stream: any, image: any) {
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
    <div className="sm:overflow-x-scroll w-fit mx-auto flex justify-center sm:justify-start border-2 border-gray-300 rounded-lg shadow-md">
      <table
        className="min-w-[600px] overflow-hidden rounded-lg"
        aria-label="caption table"
      >
        <thead>
          <tr>
            <th className="bg-blue-200 font-bold text-black text-base border-r border-white w-[750px] h-14 p-4 text-center ">
              College
            </th>
            <th className="items-center text-[white] font-bold text-base bg-blue-950 bg-opacity-95 border-r border-white w-56 h-14 p-4 text-center ">
              Ranking
            </th>
            <th className="items-center text-[white] font-bold text-base bg-blue-950 bg-opacity-95 w-40 h-14 p-4 text-center ">
              Stream
            </th>
          </tr>
        </thead>
        <tbody>
          {Categoryrows.map((Categoryrow, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-blue-100 bg-opacity-55 shadow-md" : "bg-white"} h-[3rem] shadow-sm`}
            >
              <td className="text-gray-700 text-md font-bold mr-8 flex items-center ml-8 h-[4rem] pl-4 sm:pl-2 sm:font-normal overflow-x-auto">
                <Image
                  src={Categoryrow.image}
                  alt="..."
                  className="w-10 h-10 rounded-full mr-6"
                />
                {Categoryrow.college}
              </td>
              <td className="text-blue-950 text-base font- text-center h-[4rem] sm:font-normal">
                {Categoryrow.ranking}
              </td>
              <td className="text-blue-950 text-base font- text-center h-[4rem] sm:font-normal">
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

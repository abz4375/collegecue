import React from "react";
import Heading from "../../Heading/Heading";

function Category(college: any, cutoff: any, fees: any) {
  return { college, cutoff, fees };
}
const Categoryrows = [
  Category(
    "IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee",
    "Closing rank 2023 - 14",
    "₹ 209,550 (1st Year Fees)",
   
  ),
  Category(
    "School of Planning and Architecture - [SPA], New Delhi",
    "Closing rank 2023 - 1544",
    "₹ 209,550 (1st Year Fees)",
   
  ),
  Category(
    "School of Planning and Architecture - [SPAV], Vijayawada",
    "Closing rank 2023 - 244",
    "₹ 209,550 (1st Year Fees)",
   
  ),
  Category(
    "Sir JJ College of Architecture - [SJJCA], Mumbai",
    "Closing rank 2023 - 344",
    "₹ 209,550 (1st Year Fees)",
  
  ),
  Category(
    "Jamia Millia Islamia University-[JMI], New Delhi",
    "Closing rank 2023 - 104",
    "₹ 209,550 (1st Year Fees)",
  
  ),
  Category(
    "School of Planning and Architecture - [SPA], Bhopal",
    "Closing rank 2023 - 54",
    "₹ 209,550 (1st Year Fees)",
  
  ),
];

const CollegeRank = () => {
  return (
    <div className="max-w-[1440px] mx-auto md:mx-8">
      <div className="ml-4 md:ml-0">
        <Heading heading_name={" List of Colleges Accepting Application"} />
        </div>
   
    <div className="md:overflow-x-scroll max-w-[1400px]  mb-20 mx-auto flex justify-center rounded-xl ">
      <table
        className="min-w-[650px] w-full  border-2 border-gray-300 rounded-xl overflow-hidden sm:ml-72"
        aria-label="caption table"
      >
        <thead>
          <tr>
            <th className="bg-[#7B90FF] text-[white] font-extrabold text-base border-r border-white w-[60%] h-14 p-4 text-center ">
              College
            </th>
            <th className="items-center text-[white] font-bold text-base bg-[#210366] border-r border-white w-[20%] h-14 p-4 text-center ">
         Cutoff
            </th>
            <th className="items-center text-[white] font-bold text-base bg-[#210366] w-[20%] h-14 p-4 text-center ">
              Fees
            </th>
          </tr>
        </thead>
        <tbody>
          {Categoryrows.map((Categoryrow, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-[#EEECFE]" : "bg-white"}`}
            >
              <td className="text-[#000080] text-base font-bold mr-8 flex items-center ml-8 h-20">
            
                {Categoryrow.college}
              </td>
              <td className="text-[#000080] text-base font-bold text-center h-20">
                {Categoryrow.cutoff}
              </td>
              <td className="text-[#000080] text-base font-bold text-center h-20">
                {Categoryrow.fees}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CollegeRank;


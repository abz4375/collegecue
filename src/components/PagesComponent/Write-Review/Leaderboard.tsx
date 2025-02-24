'use client';
import { useState } from "react";
import data from "../../DummyData/writeareviewleadboardData";
import FilledButton from "../../Buttons/FilledButton";
import Link from "next/link";

const LeaderBoard = () => {
  function getTopRankers(data:any) {
    const sortedData = data.sort((a:any, b:any) => a.rank - b.rank);
    const topRankers = sortedData.slice(0, 3);
    return topRankers;
  }

  const topRankers = getTopRankers(data);
  const [filterData, setFilterData] = useState(data);

  const handleFilter = () => {
    const k = data.filter(({ date }:any) => {
      const reviewDate = date.split("-");
      const currDate = new Date();
      const month = currDate.getMonth() + 1; // getMonth() returns month from 0-11, add 1 to make it 1-12
      return month === parseInt(reviewDate[1], 10);
    });

    setFilterData(k);
  };

  return (
    <div className="flex flex-col items-center justify-around gap-4 w-full p-8 md:px-0">
      <div className="flex gap-4 items-center flex-wrap justify-center w-full md:px-8 md:gap-32">
        <FilledButton handleClick={handleFilter} backgroundColor="white" textColor="#cc5500" textD="underline">
          <Link href="/writestep" className="no-underline">
          This Month
          </Link>
        </FilledButton>
        <FilledButton backgroundColor="white" textColor="#cc5500" textD="underline">
        <Link href="/writestep" className="no-underline">
          This Week
          </Link>
        </FilledButton>
        <FilledButton backgroundColor="white" textColor="#cc5500" textD="underline">
        <Link href="/writestep" className="no-underline">
          This Quator
          </Link>
        </FilledButton>
      </div>
      <div className="flex flex-col w-full justify-center sm:overflow-x-scroll mt-4 rounded-2xl overflow-hidden mb-20">
        <table>
          <thead>
        <tr className="w-[1300x] min-w-[600px] p-8 flex justify-evenly items-center bg-gray-50 text-lg font-semibold gap-4 md:px-8">
          <td className="font-bold w-[15%] text-xl text-center text-[#4C516D] md:text-lg">Rank</td>
          <td className="font-bold w-[35%] text-xl text-[#4C516D] md:text-lg">Student Name & College Name</td>
          <td className="font-bold w-[35%] text-xl text-[#4C516D] md:text-lg">Course</td>
          <td className="font-bold w-[15%] text-xl text-center text-[#4C516D] md:text-lg">Review Count</td>
        </tr></thead>
        <tbody>
        {filterData.map((item) => (
          <tr key={item.rank} className="w-[1300x] min-w-[600px] p-8 bg-gray-50 flex justify-around items-center text-lg font-semibold md:px-8">
            <td className="w-[15%] text-[#2F1370] text-center">#{item.rank}</td>
            <td className="w-[35%] flex flex-col">
              <p className="text-[#008080]">{item.name}</p>
              <p className="text-gray-500">{item.college}</p>
            </td>
            <td className="w-[35%] flex flex-col">
              <p className="text-[#2E2787]">{item.stream}</p>
              <p className="text-[#8DA399]">{item.courses.join(", ")}</p>
            </td>
            <td className="w-[15%] text-[#007791] text-center text-xl font-bold">{item.reviewsCount}</td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
      <FilledButton  
      backgroundColor="white"
        textColor="#cc5500"
        textD="underline">
        Check more Details
      </FilledButton>
    </div>
  );
};

export default LeaderBoard;

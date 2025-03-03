import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Course {
  course: string;
  fees: string;
  progType: string;
}

const rows: Course[] = [
  {
    course: "GMAT Coaching",
    fees: "₹35,000",
    progType: "Regular Classroom Program",
  },
  {
    course: "BAT Coaching",
    fees: "₹35,000",
    progType: "Regular Classroom Program",
  },
  {
    course: "SAT Coaching",
    fees: "₹35,000",
    progType: "Regular Classroom Program",
  },
];

const IIMBangaloreSwiper: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 p-0 w-full">
      <div className="bg-white flex  flex-col gap-4 p-2 py-0 rounded-lg ">
        {rows.map((answer: any, index: number) => (
          <div key={index} className=" bg-white font-normal transition duration-100 rounded-lg border shadow-sm hover:shadow-md border-gray-300 p-4">
            <div className="flex text-lg gap-[40px] justify-between font-bold">
              <div className=" flex flex-col">
                <span>{answer.course}</span>
                <div className="pt-0 font-normal">
                  <p className="text-gray-600 text-sm">
                    Program Type : <span className="">{answer.progType}</span>
                  </p>
                </div>
              </div>
              <div className=" text-gray-500 text-opacity-65 rounded-[50px] p-2 flex md:flex-col justify-end items-center font-bold w-[25%] text-sm">
                <span>Total : &nbsp;</span>
                <span className="text-green-600"> {answer.fees}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IIMBangaloreSwiper;

import React from "react";
import JEEMain1 from "@/Assets/ExamPage/ExamSyllabus/JEEMain1.png";
import JEEMain2 from "@/Assets/ExamPage/ExamSyllabus/JEEMain2.png";
import JEEMain3 from "@/Assets/ExamPage/ExamSyllabus/JEEMain3.png";
import ExamJeeMainCard from "../../Reusable_cards/ExamJeeMainCard";
const JEEMainData = [
  {
    name: "JEE Main 2023 Question Paper",
    date: "April 13 Shift 1",
    img: JEEMain1,
  },

  {
    name: "JEE Main 2023 Question Paper",
    date: "April 12 Shift 1",
    img: JEEMain2,
  },

  {
    name: "JEE Main 2023 Question Paper",
    date: "April 11 Shift 2",
    img: JEEMain3,
  },
];

const ExamJeeMainRender = () => {
  return (
    <div className="  flex flex-col  items-center">
       <h5 className=" text-center pt-2 mt-[18px] text-4xl text-[#210366] font-bold max-md:text-[26px] max-sm:text-[22px]">
          Top Jee Main Previous Year Papers
        </h5>
      <div className="mt-12 flex flex-wrap justify-around items-center gap-20 w-full max-sm:flex-col">
        {JEEMainData.map((data, index) => (
          <div key={index}>
            <ExamJeeMainCard
              name={data.name}
              date={data.date}
              img={data.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export {ExamJeeMainRender};

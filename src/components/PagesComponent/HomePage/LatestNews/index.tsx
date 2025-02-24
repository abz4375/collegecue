import React from "react";
import {ParentComponent} from "./ParentComponent";
import Heading from "@/components/Heading/Heading";

const LatestNews = () => {
  const buttons = [
    {
      label: "Exam Alert",
      link: "",
    },
    {
      label: "College Alert",
      link: "",
    },
    {
      label: "Admission Alert",
      link: "",
    },
  ];
  return (
    <section className="max-w-full mt-20 mb-20 mx-auto w-full">
      <div>
        <Heading heading_name="Latest News & Stories" />
      </div>
      <div className=" mb-4 gap-4 flex flex-wrap items-center">
        {buttons.map((btn, index) => (
          <a
            className=" text-sm font-semibold rounded-lg px-2 py-1 hover:bg-blue-100 hover:border-blue-100 transition-all duration-300 border-2 border-solid text-black border-gray-200 h-8 bg-gray-200"
            href={btn.link}
            key={index}
          >
            {btn.label}
          </a>
        ))}
      </div>
      <ParentComponent />
    </section>
  );
};

export default LatestNews;

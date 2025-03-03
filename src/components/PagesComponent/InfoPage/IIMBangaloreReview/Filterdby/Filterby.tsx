import React from "react";
const tag: string[] = ["Stream", "Course Tag", "Course", "Batch"];
const Filterby = () => {
  return (
    <div className="flex items-center md:justify-center">
      <div>
      <p className="text-2xl sm:text-2xl sm:text-center font text-left leading-[3rem] tracking-normal inline text-[black]">
        {"Filter By: "} &nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      </div>
      <div className="flex md:items-center md:justify-center flex-wrap gap-4">
        {tag.map((value) => (
          <button
            key={value}
            className="text-black bg-gray-300 shadow-lg  rounded-lg px-4 py-0 h-8 font-semibold hover:bg-blue-100 hover:bg-opacity-80 transition duration-300"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filterby;

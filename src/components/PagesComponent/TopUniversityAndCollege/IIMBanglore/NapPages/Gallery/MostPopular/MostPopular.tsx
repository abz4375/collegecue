import React from "react";

const MostPopular = () => {
  let tag = [
    {
      title: "Placement",
      num: 14,
      id: 25,
    },
    {
      title: "Program",
      id: 26,
      num: 12,
    },
    {
      id: 27,
      title: "Hostel Room",
      num: 11,
    },
    {
      id: 28,
      title: "Management",
      num: 11,
    },
    {
      id: 29,
      title: "Bangalore",
      num: 8,
    },
    {
      id: 30,
      title: "Campus Life",
      num: 6,
    },
    {
      id: 31,
      title: "Internship Offer",
      num: 6,
    },
    {
      id: 32,
      title: "Recruit",
      num: 3,
    },
    {
      id: 33,
      title: "Course Curriculum",
      num: 6,
    },
    {
      title: "Summer Internship",
      num: 6,
      id: 34,
    },
    {
      id: 35,
      title: "Faculty Members",
      num: 4,
    },
  ];

  return (
    <div className="w-full shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] rounded-[15px] mb-8 p-5">
      <div className="p-4 text-xl font-bold text-gray-800">
        {" "}
        Most Popular tags{" "}
      </div>
      <div>
        <div className="flex md:items-center md:justify-center flex-wrap gap-4">
          {tag.map((value) => (
            <button
              key={value.id}
              className="text- bg-gray-200 shadow-lg  rounded-[0.8rem] px-6 py-2 font-semibold hover:bg-blue-100 hover:bg-opacity-75 hover:text-blue-500 transition duration-300"
            >
              {value.title}({value.num})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;

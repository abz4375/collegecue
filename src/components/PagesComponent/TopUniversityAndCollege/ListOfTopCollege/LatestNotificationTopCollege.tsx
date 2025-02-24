import Heading from "@/components/Heading/Heading";
import React from "react";

const Notifications = [
  {
    id: 1,
    date: "11 April, 2023",
    content:
      "IIT JAM 2023 2023 Admission form @Joaps.iitg.ac.in, check Link Here",
  },
  {
    id: 2,
    date: "11 April, 2023",
    content:
      "IIM Bangalore Convocation 2023: 673 Student Graduated & 8 Student Received Gold Medals",
  },
];

export { Notifications };
const LatestNotificationTopCollege = () => {
  return (
    <div className="container mx-auto mt-8 sm:ml-0 sm:w-full">
      <div className=" text-[30px] font-bold  text-[#ffffff]">
        List of Top Colleges in Indian Based on 2023 Ranking
      </div>
      <div className="mt-4 p-4 rounded-lg border-2 bg-white border-[#553CDF] shadow-xl ">
        <p className="font-semibold text-[25px] ">Latest Notification</p>
        {Notifications.map((item, index) => (
          <div key={index} className="flex  mt-4 space-x-[50px] sm:flex-col ">
            <p className="font-semibold text-xs text-red-600 md:w-24 md:space-x-[0px] ">
              {item.date}
            </p>
            <p className="font-semibold text-xs text-[#41355D]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNotificationTopCollege;

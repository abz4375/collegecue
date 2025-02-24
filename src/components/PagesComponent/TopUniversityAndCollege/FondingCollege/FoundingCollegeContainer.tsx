"use client";
import React, { useState } from "react";
import Button from "../../../Buttons/Courses";
import CollegeCardContainer from "./CollegeCard/CollegeCardContainer";
import FilterComponents from "../../../Allfilters/Filter/FilterComponents";


const FoundingCollegeHeading = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div className="flex flex-col items-center justify-between mt-[20px] mx-auto">
   
      <div className="flex items-center gap-2 mt-5 flex-col">
        <div className="font-medium text-2xl text-[#41355D] ">
          Found 19030 Colleges.
        </div>
        <div className="flex items-center gap-4 p-2 flex-wrap">
          <Button
            dt={"IIT"}
            link={""}
            onClick={() => setSearchKeyword("IIT")}
          />
          <Button
            dt={"IIIT"}
            link={""}
            onClick={() => setSearchKeyword("IIIT")}
          />
          <Button
            dt={"IIM"}
            link={""}
            onClick={() => setSearchKeyword("IIM")}
          />
          <Button
            dt={"NIT"}
            link={""}
            onClick={() => setSearchKeyword("NIT")}
          />
        </div>
      </div>
      <div className="flex md:flex-col md:items-center ">
        <div className="-mt-[0.55rem]">
          <FilterComponents />
        </div>
        <div>
          <CollegeCardContainer searchKeyword={searchKeyword} />
        </div>
      </div>
    </div>
  );
};

export default FoundingCollegeHeading;

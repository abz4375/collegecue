import React from "react";
import DropDown from "./DropDown";
import DropDownData from "./DropDownData";

const DropDownContainer = () => {
  return (
    <div className="flex flex-wrap  lg:p-2 lg:items-center lg:justify-center justify-around  max-w-[1200px] ">
      {DropDownData.map((item: any, index: number) => (
        <DropDown key={index} {...item} />
      ))}
    </div>
  );
};

export default DropDownContainer;

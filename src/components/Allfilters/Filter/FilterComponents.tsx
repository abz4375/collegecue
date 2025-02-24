import React from "react";
import FilterComponentCard from "./FilterCardComponent";
import filterData from "./FilterCardData";
const FilterComponents = () => {
  return (
    <div className="rounded-[12px] border-[3px] border-[#D3D3D3] pl-5 pr-5 pb-2 mt-[20px] ">
      {filterData.map((item: any, index: number) => (
        <FilterComponentCard key={index} {...item} />
      ))}
    </div>
  );
};

export default FilterComponents;
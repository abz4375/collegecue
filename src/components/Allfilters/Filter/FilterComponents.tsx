import React from "react";
import FilterComponentCard from "./FilterCardComponent";
import filterData from "./FilterCardData";
const FilterComponents = () => {
  return (
    <div className="rounded-xl border-2 border-gray-300 pl-5 pr-5 pb-2 shadow-md">
      {filterData.map((item: any, index: number) => (
        <FilterComponentCard key={index} {...item} />
      ))}
    </div>
  );
};

export default FilterComponents;
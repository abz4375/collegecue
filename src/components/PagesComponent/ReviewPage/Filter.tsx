import React from "react";
import FilterButton from "../../Buttons/FilterButton";

const Filter = ({
  filters,
}: {
  filters: string[];
}) => {
  return (
    <div className={`flex  justify-center items-center  h-auto flex-wrap gap-4`}>
      {filters &&
        filters.map((filter, index) => (
          <FilterButton reviewfilter key={index}>{filter}</FilterButton>
        ))}
    </div>
  );
};

export default Filter;

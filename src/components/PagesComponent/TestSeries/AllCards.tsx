import React from "react";
import Cards from "../../Reusable_cards/TestSeriesCards";

let data = [
  { headings: "Mock Test-01: JEE Main 2023", attempts: "5344 Attempted" },
  { headings: "Mock Test-02: JEE Main 2023", attempts: "5062 Attempted" },
  { headings: "Mock Test-03: JEE Main 2023", attempts: "5994 Attempted" },
  { headings: "Mock Test-04: JEE Main 2023", attempts: "6861 Attempted" },
  { headings: "Mock Test-05: JEE Main 2023", attempts: "6970 Attempted" },
  { headings: "Mock Test-06: JEE Main 2023", attempts: "5213 Attempted" },
];
const AllCards = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-5 py-10 w-full justify-between sm:justify-center items-center">
        {data.map(({ headings, attempts }, index) => (
          <div key={index} className=" mb-4">
            <Cards headings={headings} attempts={attempts} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
import React from "react";
import CountryWisedata from "./CountryWiseData";
import SeeScholarType from "../../../../../Reusable_cards/SeeScholarType";

const CountryWiseCardContainer = () => {
  return (
    <div>
      <div className="mt-10  ">
        {CountryWisedata.map((item: any, index: number) => (
          <SeeScholarType key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CountryWiseCardContainer;

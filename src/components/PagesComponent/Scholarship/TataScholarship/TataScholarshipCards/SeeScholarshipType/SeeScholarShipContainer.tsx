import React from "react";
import SeeScholarShiptype from "./SeeScholarShiptype";
import SeeScholarType from "../../../../../Reusable_cards/SeeScholarType";
import SeeScholarData from "./SeeScholarShiptype";
const SeeScholarShipContainer = () => {
  return (
    <div className="">
      {SeeScholarData.map((item: any, index: number) => (
        <SeeScholarType key={index} {...item} />
      ))}
    </div>
  );
};

export default SeeScholarShipContainer;

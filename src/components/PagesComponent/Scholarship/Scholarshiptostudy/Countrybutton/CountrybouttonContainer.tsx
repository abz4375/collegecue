import React from "react";
import Button from "./Button";
import CountrynameData from "./CountrynameData";

const CountrybouttonContainer = () => {
  return (
    <div className="flex flex-wrap gap-[10px] lg:p-2 lg:items-center lg:justify-center  max-w-[1200px]">
      {CountrynameData.map((country: any, index: number) => (
        <div key={index}>
          {" "}
          <Button {...country} />
        </div>
      ))}
    </div>
  );
};

export default CountrybouttonContainer;

import React from "react";
import HeroSection, { collegeInfo } from "./HeroSection/HeroSection";

import IImBangaloreBottom from "./IIMBangaloreBottom/IImBangaloreBottom";
const IIMBanglore = () => {
  return (
    <div>
      <div className="">
        <HeroSection collegeInfo={collegeInfo} />
      </div>
      <div className="mx-10 sm:mx-0 sm:p-0">
        <div className=" pb-5 mx-auto sm:mx-0 ">
          <IImBangaloreBottom />
        </div>
      </div>
    </div>
  );
};

export default IIMBanglore;

import React from "react";
import CountrybouttonContainer from "./Scholarshiptostudy/Countrybutton/CountrybouttonContainer";
import ScholrashipCardContainer from "./ScholarshipCard/ScholrashipCardContainer";
import DropDownContainer from "./Scholarshiptostudy/DropDown/DropDownContainer";
import Heading from "../../Heading/Heading";
import RadioGroupRating from "../../RadioGroupRating";

const Scholarshipcontainer = () => {
  return (
    <div>
      <div className=" flex  flex-col items-center lg:p-2 lg:items-center lg:justify-center gap-30 mt-20">
        <div className="flex flex-col gap-20">
          {" "}
          <div>
            <Heading heading_name={"Scholarships to study Abroad"} />
            <CountrybouttonContainer />
          </div>
          <div className="">
            <DropDownContainer />
          </div>
        </div>
        <div className="flex  flex-col ">
          <div className="items-center mb-8 mt-5">
            {" "}
            <Heading heading_name={"Found 527 Scholarships"} />
          </div>

          <ScholrashipCardContainer />
        </div>
        <div className="flex flex-col items-center justify-center text-center  lg:p-2 lg:items-center lg:justify-center max-w-[1200px]">
          <div>
            How likely are you to recommend collegecue.com to a friend or a
            colleague?
          </div>

          <RadioGroupRating />
        </div>
      </div>
    </div>
  );
};

export default Scholarshipcontainer;

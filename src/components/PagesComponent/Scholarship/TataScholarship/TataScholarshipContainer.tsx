import React from "react";
import TataScholarship from "./TataScholarship/TataScholarship";
import TopRatedScholarshipCardContainer from "./TataScholarshipCards/ToRatedScholarship/TopRatedScholarshipCardContainer";

import SeeScholarShipContainer from "./TataScholarshipCards/SeeScholarshipType/SeeScholarShipContainer";
import CountryWiseCardContainer from "./TataScholarshipCards/SeeScholarshipType/CountryWiseCardContainer";
import RadioGroupRating from "@/components/RadioGroupRating";

const TataScholarshipContainer = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="flex flex-col justify-center ">
            <div className=" p-20 lg:p-10 sm:p-5 flex  justify-center gap-10 ">
              <div className="flex justify-center md:flex-col md:items-center  gap-7 ">
                <div className="  flex justify-center  ">
                  <TataScholarship />
                </div>
                <div className="">
                  <TopRatedScholarshipCardContainer />
                  <SeeScholarShipContainer />
                  <CountryWiseCardContainer />
                  <div className="mt-20 flex items-center justify-center ">
                    <button className="border-2 rounded-3xl items-center py-2 px-5 w-[150px] font-bold text-white bg-[#7B90FF] hover:bg-[#1565C0]">
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center  lg:p-2 lg:items-center lg:justify-center ">
              <div>
                How likely are you to recommend collegecue.com to a friend or a
                colleague?
              </div>

              <RadioGroupRating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TataScholarshipContainer;

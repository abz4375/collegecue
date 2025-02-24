import React from "react";
import CardGrid from "./CardGrid";
import Admission2023Data from "../../DummyData/Admission2024DataFile";
import {HeroSection} from "./HeroSection";
import RadioGroupRating from "../../RadioGroupRating";

const Admission2024 = () => {
  return (
    <>
      <HeroSection />
      <div className="max-w-[1340px] mx-auto px-4 mt-20">
        <CardGrid cardsData={Admission2023Data} />
      <div className="mt-20">

        <h6 className="text-xl text-black font-[500px] text-center mb-13 mt-10">
          How likely are you to recommend collegecue.com to a friend or a colleague?
        </h6>

        <RadioGroupRating />
      </div>
      </div>
    </>
  );
};

export {Admission2024};

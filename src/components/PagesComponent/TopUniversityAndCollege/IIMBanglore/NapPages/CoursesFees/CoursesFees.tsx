import React from "react";
import IIMBangaloreSwiper from "./Table/IIMBangaloreFees";
import CourseSelect from "./CourseSelect/CourseSelect";
import CourseOfferContainer from "./CourseOfferby/CourceOfferContainer";
import PopularCollegeCointainer from "./popularCollegeFees/PopularCollegeCointainer";
import CourceFinder from "./CourceFinder/CourceFinder";
import CollegeRating from "./CollegeRating/CollegeRating";
import FacultyReview from "./FacultyReview/FacultyReview";
import QuesAnsContainer from "./QuesAns/QuesAnsContainer";

const CoursesFees = () => {
  return (
    <div className="">
      <div className="  text-black text-xl sm:text-center mt-4 font-bold flex flex-col gap-5">
        <div>IIM Bangalore Fees & Eligibility</div>
        <div className="p- rounded-[15px] max-w-full items-center flex justify-center">
          <IIMBangaloreSwiper />
        </div>
      </div>
      <div>
        <CourseSelect />
      </div>
      <div>
        <CourseOfferContainer />
      </div>
      <div>
        <PopularCollegeCointainer />
      </div>
      <div>
        <CourceFinder />
      </div>
      <div>
        <CollegeRating />
      </div>
      <div>
        <FacultyReview />
      </div>
      <div>
        <QuesAnsContainer />
      </div>
    </div>
  );
};

export default CoursesFees;

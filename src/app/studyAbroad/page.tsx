import AcademicCounsiller from "@/components/PagesComponent/studyAbroad/Academic-counsiller/AcademicCounsiller";
import BlogSection from "@/components/PagesComponent/studyAbroad/BlogCard/BlogSection";
import ChooseProgrameToStudy from "@/components/PagesComponent/studyAbroad/ChooseyourStudy/ChooseProgrameToStudy";
import CollegeWallahmain from "@/components/PagesComponent/studyAbroad/CollegeWallah/CollegeWallahmain";
import DestinationPlace from "@/components/PagesComponent/studyAbroad/destinationplace/DestinationPlace";
import FactAbout from "@/components/PagesComponent/studyAbroad/Facts/FactAbout";
import SAHeroSection from "@/components/PagesComponent/studyAbroad/Hero-section/SAHeroSection";
import HowWeWork from "@/components/PagesComponent/studyAbroad/Howdowework/HowWeWork";
import MeetOurCounsiller from "@/components/PagesComponent/studyAbroad/Meetourcounsiller/MeetOurCounsiller";
import OurStudentLoveUs from "@/components/PagesComponent/studyAbroad/Studentlove/OurStudentLoveUs";
import StudyAbroadDetails from "@/components/PagesComponent/studyAbroad/StudyAbroadDetails";
import StudyAbroadmain from "@/components/PagesComponent/studyAbroad/StudyAbroadexam/StudyAbroadmain";
import StudyAbroadfaq from "@/components/PagesComponent/studyAbroad/StudyAbroadfaq";
import Studydestination from "@/components/PagesComponent/studyAbroad/Studydestination";
import TakeToTest from "@/components/PagesComponent/studyAbroad/Taketotest/TakeToTest";
import TopCollegeStudy from "@/components/PagesComponent/studyAbroad/TopCollegeStudy";
import Universities from "@/components/PagesComponent/studyAbroad/Universities";
import ChooseYourFuture from "@/components/PagesComponent/studyAbroad/Yourfuture/ChooseYourFuture";
import React from "react";


const page = () => {
  return (
    <div>
      <SAHeroSection />
      <div className="max-w-[1152px] lg:mx-8 md:mx-4 mx-auto sm:mx-4 xl:mx-6">
      <DestinationPlace />
      <Universities />
      <Studydestination />
      <CollegeWallahmain />
      <AcademicCounsiller />
      <ChooseYourFuture />
      <TopCollegeStudy />
      <HowWeWork />
      <MeetOurCounsiller />
      <StudyAbroadmain />
      <OurStudentLoveUs />
      <FactAbout />
      <BlogSection />
      <StudyAbroadDetails />
      <ChooseProgrameToStudy />
      <TakeToTest />
      
      </div>
      <div className="max-w-[1536px] mx-auto">
        <StudyAbroadfaq />
      </div>

    </div>
  );
};

export default page;

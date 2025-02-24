import CompanyPrepration from "@/components/PagesComponent/Job-portalpage/CompanyPrepration";
import CounterBox from "@/components/PagesComponent/Job-portalpage/CounterBox";
import FooterButtons from "@/components/PagesComponent/Job-portalpage/FooterButtons";
import GetthejobDone from "@/components/PagesComponent/Job-portalpage/GetthejobDone";
import HeroSection from "@/components/PagesComponent/Job-portalpage/HeroSection";
import InnerTextSection from "@/components/PagesComponent/Job-portalpage/InnerTextSection";
import Joblisting from "@/components/PagesComponent/Job-portalpage/Joblisting";
import Rightrole from "@/components/PagesComponent/Job-portalpage/Rightrole";
import Searchbar from "@/components/PagesComponent/Job-portalpage/Searchbar";
import TrustedCompnay from "@/components/PagesComponent/Job-portalpage/TrustedCompnay";
import React from "react";
import HiringChallanges from "@/components/PagesComponent/Job-portalpage/HiringChallanges";
import Mentors from "@/components/PagesComponent/Job-portalpage/Mentors";
import JobListContainer from "@/components/PagesComponent/Job-portalpage/jobListContainer";

const page = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div className=" max-w-[1536px] mx-auto">
        <Searchbar />
      </div>
      <div className="max-w-[1480px] mx-auto sm:ml-4 sm:mr-4 xl:ml-5 xl:mr-5">
        <TrustedCompnay />
        <InnerTextSection />
      </div>
      <GetthejobDone />
      <div className="max-w-[1480px] mx-auto sm:ml-4 sm:mr-4 xl:ml-5 xl:mr-5">
        <CounterBox />
        <Joblisting />
        <HiringChallanges />
        {/* <JobList /> */}
        <Rightrole />
        <Mentors />
        <CompanyPrepration />
        <JobListContainer/>
        
      </div>

      <div className=" max-w-[1536px] mx-auto">
        <FooterButtons />
      </div>
    </div>
  );
};

export default page;

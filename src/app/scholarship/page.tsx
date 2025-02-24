import React from "react";
import Scholarshipcontainer from "@/components/PagesComponent/Scholarship/ScholarshipContainer";
import HeroSection from "@/components/PagesComponent/Scholarship/HeroSection";

const page = () => {
  const leftContent = [
    'The Results of Our Work are Tailored to the Interests of Each Client',
    <span key="1" style={{ color: '#7A7A7A' }}>Irure dolor in reprehenderit</span>,
    <span key="2" style={{ color: '#7A7A7A' }}>Duis aute irure dolor in reprehenderit</span>,
    <span key="3" style={{ color: '#7A7A7A' }}>Duis aute irure dolor</span>,
  ];

  const rightContent = [
    'These cases are perfectly simple and easy to distinguish',
    'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.',
  ];

  return (
    <div>
      <HeroSection leftContent={leftContent} rightContent={rightContent} />
      <Scholarshipcontainer />
    </div>
  );
};

export default page;

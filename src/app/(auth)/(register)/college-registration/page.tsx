import CollegeRegistration from "@/components/Auth/CollegeRegistraton";
import React from "react";
import Animate from "@/components/Auth/Animate";

const CollegeRegistrationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Animate>
        <CollegeRegistration />
      </Animate>
    </div>
  );
};

export default CollegeRegistrationPage;

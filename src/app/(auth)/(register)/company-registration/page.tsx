import CompanyRegistration from "@/components/Auth/CompanyRegistration";
import React from "react";
import Animate from "@/components/Auth/Animate";

const CompanyRegistrationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Animate>
        <CompanyRegistration />
      </Animate>
    </div>
  );
};

export default CompanyRegistrationPage;

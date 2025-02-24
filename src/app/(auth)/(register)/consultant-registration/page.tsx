import Register from "@/components/Auth/Register";
import React from "react";
import ConsultantRegistration from "@/components/Auth/ConsultantRegistration";
import Animate from "@/components/Auth/Animate";
const ConsultantRegistrationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Animate>
        <ConsultantRegistration />
      </Animate>
    </div>
  );
};

export default ConsultantRegistrationPage;

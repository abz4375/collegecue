"use client";

import React from "react";
import { OurSuggestion } from "../PagesComponent/Login/OurSuggestion";

const Left = () => {
  return (
    <div className="h-[612px] p-4 max-w-[40rem] flex flex-row">
      <div className=" w-full px-auto pt-28">
        <OurSuggestion />
      </div>
    </div>
  );
};

export default Left;

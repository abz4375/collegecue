'use client';
import React, { useRef } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import { collegeInfo } from "../HeroSection/HeroSection";
import { defaultInstituteInfo } from "../OrgInfo";

const IImBangaloreBottom = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  return (
    <div className="" ref={menuRef}>
      <TopNavbar collegeInfo={defaultInstituteInfo} />
    </div>
  );
};

export default IImBangaloreBottom;

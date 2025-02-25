'use client';
import React, { useRef } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import { collegeInfo } from "../HeroSection/HeroSection";

const IImBangaloreBottom = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  return (
    <div className="" ref={menuRef}>
      <TopNavbar collegeInfo={collegeInfo} />
    </div>
  );
};

export default IImBangaloreBottom;

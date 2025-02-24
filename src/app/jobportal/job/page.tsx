'use client';
import FilterBar from "@/components/PagesComponent/Job-portalpage/Filterbar";
import FooterButtons from "@/components/PagesComponent/Job-portalpage/FooterButtons";
import JobHeroSection from "@/components/PagesComponent/Job-portalpage/Jobcomponent/JobHeroSection";
import JobListContainer from "@/components/PagesComponent/Job-portalpage/jobListContainer";
import RightSide from "@/components/PagesComponent/Job-portalpage/Jobcomponent/RightSide";
import React, { useEffect, useState, useCallback, useRef, Dispatch, SetStateAction } from "react";

type JobId = string | number | null;

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [filterbarHeight, setFilterbarHeight] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [initialFilterTop, setInitialFilterTop] = useState(0);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const [selectedJobId, setSelectedJobId] = useState<JobId>(1); 

  const handleScroll = useCallback(() => {
    if (!filterBarRef.current) return;

    const navbarHeight = 64;
    const currentScrollY = window.scrollY;
    const isScrollingUp = currentScrollY < lastScrollY;

    if (isScrollingUp) {
      setIsSticky(currentScrollY > initialFilterTop - navbarHeight);
    } else {
      setIsSticky(currentScrollY > initialFilterTop - navbarHeight);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, initialFilterTop]);

  useEffect(() => {
    if (filterBarRef.current) {
      setFilterbarHeight(filterBarRef.current.offsetHeight);
      setInitialFilterTop(filterBarRef.current.getBoundingClientRect().top + window.scrollY);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="overflow-hidden max-w-full mx-auto">
      <JobHeroSection />

      <div style={{ height: isSticky ? filterbarHeight : 'auto' }}>
        <div
          ref={filterBarRef}
          className={`transition-[box-shadow,background] duration-300 ease-in-out z-50 ${
            isSticky
              ? "fixed top-16 left-0 w-full bg-white shadow-md"
              : "relative bg-transparent shadow-none"
          }`}
        >
          <FilterBar />
        </div>
      </div>

      <div className="flex flex-row gap-1 justify-between items-start p-[2%] sm:w-full sm:flex-row sm:items-center mt-12 sm:-mt-56 sm:gap-12">
        <div className="flex w-1/4 md:w-1/2 lg:w-1/3 sm:mt-48 h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-100">
          <JobListContainer 
            selectedJobId={selectedJobId} 
            setSelectedJobId={setSelectedJobId}
          />
        </div>
        <div className="w-3/4 mx-auto sm:hidden sticky top-0">
          <RightSide selectedJobId={selectedJobId}/>
        </div>
      </div>
      <FooterButtons />
    </div>
  );
};

export default Page;
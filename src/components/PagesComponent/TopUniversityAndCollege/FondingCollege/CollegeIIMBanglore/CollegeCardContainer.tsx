"use client";
import React, { useState, useRef, useEffect } from "react";
import TopuniversityCollageCard from "@/components/Reusable_cards/TopuniversityCollageCard";;
import NewApplicationCard from "../../FondingCollege/NewApplication/NewApplicationContainer";
import { CollegeData } from "./College";

const CollegeCardContainer = () => {
  const [visibleData, setVisibleData] = useState(5);
  const [isFetching, setIsFetching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isFetching &&
          visibleData < CollegeData.length
        ) {
          setIsFetching(true);
          setTimeout(() => {
            setVisibleData((prev) => Math.min(prev + 4, CollegeData.length));
            setIsFetching(false);
          }, 1000);
        }
      },
      { threshold: 1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isFetching, visibleData]);

  return (
    <div className="ml-5 sm:ml-0">
      {CollegeData.slice(0, 4).map((item: any) => (
        <div key={item.id} className="my-3">
          <TopuniversityCollageCard {...item} />
        </div>
      ))}
      <NewApplicationCard />
      {CollegeData.slice(4).map((item) => (
        <div key={item.id} className="my-3">
          <TopuniversityCollageCard {...item} />
        </div>
      ))}

      <div ref={containerRef}></div>
      {!isFetching && visibleData >= CollegeData.length && (
        <p className="text-center text-gray-500 my-4">Reached the end</p>
      )}
      {isFetching && <p className="text-center my-4">Loading...</p>}
    </div>
  );
};

export default CollegeCardContainer;
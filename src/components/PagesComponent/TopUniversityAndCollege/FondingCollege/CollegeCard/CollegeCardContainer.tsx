"use client";
import React, { useState, useRef, useEffect } from "react";
import TopuniversityCollageCard from "../../../../Reusable_cards/TopuniversityCollageCard";
import NewApplicationCard from "../NewApplication/NewApplicationContainer";
import { CollegeData } from "./College";

const CollegeCardContainer = ({ searchKeyword }:any) => {
  const [visibleData, setVisibleData] = useState(5);
  const [isFetching, setIsFetching] = useState(false);
  const containerRef = useRef(null);

  const filteredData = CollegeData.filter((college) =>
    searchKeyword ? college.name.toLowerCase().includes(searchKeyword.toLowerCase()) : true
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isFetching &&
          visibleData < filteredData.length
        ) {
          setIsFetching(true);
          setTimeout(() => {
            setVisibleData((prev) => Math.min(prev + 4, filteredData.length));
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
  }, [isFetching, visibleData, filteredData.length]);

  return (
    <div className="sm:mx-4">
      {filteredData.slice(0, visibleData).map((item) => (
        <div key={item.id} className="my-3">
          <TopuniversityCollageCard {...item} isStydyAbroad={false} />
        </div>
      ))}
      <NewApplicationCard />
      <div ref={containerRef}></div>
      {!isFetching && visibleData >= filteredData.length && (
        <p className="text-center text-gray-500 my-4">Reached the end</p>
      )}
      {isFetching && <p className="text-center my-4">Loading...</p>}
    </div>
  );
};

export default CollegeCardContainer;

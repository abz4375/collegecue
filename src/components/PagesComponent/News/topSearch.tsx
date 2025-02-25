"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const topSearches = [
  "GATE 2025 Answer Key",
  "CBSE Exam 2025",
  "ICSI CS Result",
  "JEE Mains 2025 Registration",
  "UGC NET Cutoff for PhD Admission",
  "UP Board Exams 2025",
  "Intermediate 2nd Year Question Paper",
  "CUET PG 2022 Question Paper",
];

const TopSearches = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to check if scrolling is possible
  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  // Scroll Right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(checkScroll, 300); // Delay check to update state after scroll
    }
  };

  // Scroll Left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  // Check scroll position when component mounts
  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <div className="flex items-center  justify-items-center  space-x-2 p-4 ml-10 mr-10 sm:mr-1 sm:ml-1">
      {/* Title */}
      <h2 className="text-md font-semibold">Top Searches</h2>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        className={`p-2 rounded-full ${canScrollLeft ? "hover:bg-gray-200 ml-3" : "opacity-50 cursor-not-allowed"} `}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex space-x-3 overflow-x-hidden scrollbar-hide scroll-smooth"
        onScroll={checkScroll}
      >
        {topSearches.map((search, index) => (
          <button
            key={index}
            className="px-2 py-1 border border-blue-500 bg-blue-100 text-black rounded-full hover:bg-gray-100 whitespace-nowrap"
          >
            {search}
          </button>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        disabled={!canScrollRight}
        className={`p-2 rounded-full ${canScrollRight ? "hover:bg-gray-200" : "opacity-50 cursor-not-allowed"}`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default TopSearches;

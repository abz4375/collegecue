"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FacultyData } from "./FacultyData";
import { Faculty } from "./Faculty";

function FacultyContainer() {
  const [showAll, setShowAll] = useState(false);
  const professorsToShow = 7;
  const buttonRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleShowAll = () => {
    if (!showAll) {
      setScrollPosition(window.scrollY);
    } else {
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
    setShowAll(!showAll);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white border px-4 py-6 rounded-lg mr-4 max-w-screen-md mx-auto">
        <p className="text-xl font-semibold text-black mb-4">
          IIM Bangalore Faculty Details
        </p>
        <div>
          {showAll
            ? FacultyData.map((post: any, index: any) => (
                <Faculty key={index} {...post} />
              ))
            : FacultyData.slice(0, professorsToShow).map(
                (post: any, index: any) => <Faculty {...post} key={index} />
              )}
        </div>
        <div className="flex justify-center mt-4">
          {!showAll && FacultyData.length > professorsToShow && (
            <button
              ref={buttonRef}
              onClick={toggleShowAll}
              className="px-4 py-2 bg-white border-gray-300 border text-blue-500 rounded-md hover:bg-blue-100 hover:bg-opacity-75 hover:border-blue-100 hover:border-opacity-75 transition-all duration-150 text-sm"
            >
              Read More
            </button>
          )}
          {showAll && (
            <button
              onClick={toggleShowAll}
              className="px-4 py-2 bg-white border-gray-300 border text-blue-500 rounded-md hover:bg-blue-100 hover:bg-opacity-75 hover:border-blue-100 hover:border-opacity-75 transition-all duration-150 text-sm"
            >
              Read Less
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default FacultyContainer;
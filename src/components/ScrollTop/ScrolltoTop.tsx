"use client";
import React, { useState, useEffect } from "react";
import { GoChevronUp } from "react-icons/go";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          className="
            fixed bottom-6 right-6 
            bg-gray-200 text-[#101321] 
            p-3 rounded-full 
            shadow-lg 
            transition-all duration-300 ease-in-out 
            hover:bg-gray-300 hover:shadow-xl hover:scale-105 
            
            z-[1000]"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <GoChevronUp className="text-3xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
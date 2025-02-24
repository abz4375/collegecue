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
          className=" fixed bottom-6 right-6 bg-gray-200 focus:bg-gray-300 text-white font-bold py-3 px-3 shadow-3xl rounded-full transition duration-300 animate-bounce ease-in-out z-[1000]"
          onClick={scrollToTop}
        >
          <GoChevronUp className="text-3xl text-[#101321]" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

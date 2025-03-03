"use client";
import React from "react";
import { motion } from "framer-motion";
import FilterButton from "./FilterButton";

const CourseFinder: React.FC = () => {
  const FinderTags: string[] = [
    "Digital Marketing",
    "Fashion Designing",
    "Interior Design",
    "Paramedical",
    "Nursing",
    "Graphic Design",
    "Data Science",
    "Computer",
    "Hotel Management",
    "BE/B.Tech",
    "BA",
    "B.Sc",
    "M.Com",
    "B.Ed",
    "B.Com",
    "M.Sc",
    "MA",
    "BBA",
    "Doctorate",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-8 ]"
    >
      <div className="bg-gray-100  rounded-lg p-6  ">
        <p className="text-2xl font-bold text-black mb-4">
          Course Finder - Search From 20K + Courses
        </p>

        <input
          type="text"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-gray-500 mb-4"
          placeholder="Search Degree, Stream or Program"
        />

        <div className="flex flex-wrap gap-4">
          {FinderTags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <FilterButton>{tag}</FilterButton>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseFinder;

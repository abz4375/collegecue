"use client";
import React from "react";
import { motion } from "framer-motion";

const FacultyReview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container max-w-full mx-auto mt-8"
    >
      <div className="bg-white shadow-md border-2 rounded-lg p-6">
        <p className="text-2xl font-bold text-gray-800 mb-4 text-center">
          IIM Bangalore Faculty Reviews
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <div className="w-32">
            <label
              htmlFor="stream"
              className="block text-sm font-medium text-gray-700 text-center"
            >
              Stream
            </label>
            <select
              id="Stream"
              className="mt-1 px-4 py-2 border-2  block w-full rounded-md border-gray-300 shadow-sm  "
            >
              <option>ECE</option>
              <option>CS</option>
              <option>ME</option>
              <option>EE</option>
            </select>
          </div>

          <div className="w-32">
            <label
              htmlFor="courseTag"
              className="block text-sm font-medium text-gray-700 text-center"
            >
              Course Tag
            </label>
            <select
              id="courseTag"
              className="mt-1 block w-full px-4 py-2 border-2 rounded-md border-gray-300 shadow-sm "
            >
              <option>ECE</option>
              <option>CS</option>
              <option>ME</option>
              <option>EE</option>
            </select>
          </div>

          <div className="w-32">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700 text-center"
            >
              Course
            </label>
            <select
              id="course"
              className="mt-1 block w-full  px-4 py-2 border-2 rounded-md border-gray-300 shadow-sm "
            >
              <option>ECE</option>
              <option>CS</option>
              <option>ME</option>
              <option>EE</option>
            </select>
          </div>

          <div className="w-32">
            <label
              htmlFor="batches"
              className="block text-sm font-medium text-gray-700 text-center"
            >
              Batches
            </label>
            <select
              id="batches"
              className="mt-1 block w-full px-4 py-2 border-2 rounded-md border-gray-300 shadow-sm "
            >
              <option>ECE</option>
              <option>CS</option>
              <option>ME</option>
              <option>EE</option>
            </select>
          </div>
        </div>

        <div className="pt-4 cursor-pointer">
        </div>
      </div>
    </motion.div>
  );
};

export default FacultyReview;

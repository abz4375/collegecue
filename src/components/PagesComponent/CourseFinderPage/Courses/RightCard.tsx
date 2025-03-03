"use client";
import React, { useState } from "react";
import courseFinderdata from "../../../DummyData/CourseFinderdata";
import CourseFinderCard from "../../../Reusable_cards/CourseFinderCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TopFilters from "./TopFilters";

const RightCard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  // Calculate the total number of pages
  const totalPages = Math.ceil(courseFinderdata.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Get the courses for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courseFinderdata.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  return (
    <div className=" flex flex-col h-auto gap-5 my-8 mt-0 mx-2  ">
      <TopFilters/>
      {currentCourses.map((course, index) => (
        <>
          <CourseFinderCard key={index} {...course} />
        </>
      ))}
      <div className="flex justify-center mt-4">
        <nav aria-label="Pagination">
          <ul className="flex items-center">
            {/* Previous button */}
            <li>
              <button
                className={`px-3 py-2 leading-tight rounded-md text-gray-500 w-full bg-white  hover:bg-gray-100 flex items-center gap-1 hover:text-gray-700 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaArrowLeft />
                Previous
              </button>
            </li>
            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <li key={pageNumber}>
                  <button
                    className={`px-3 py-1.5 leading-tight text-gray-500   rounded-xl hover:bg-blue-100 hover:text-gray-700  ${
                      pageNumber === currentPage
                        ? " bg-blue-500 text-white"
                        : ""
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              )
            )}
            {/* Next button */}
            <li>
              <button
                className={`px-3 py-2 leading-tight text-gray-500 bg-white flex items-center gap-1  hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
                <FaArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RightCard;

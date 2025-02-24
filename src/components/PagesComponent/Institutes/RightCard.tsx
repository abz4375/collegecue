"use client";
import React, { useState,useEffect } from "react";
import { Data } from "../../DummyData/InstitutesData"
import IndianInstituteCard from "../../Reusable_cards/IndianInstituteCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const RightCard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(Data.length / itemsPerPage);

  // const handlePageChange = (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  // };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent invalid page numbers
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInstitutes = Data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className=" flex flex-col items-center gap-3 w-full">
   
        {currentInstitutes.map((item, index) => (
          <IndianInstituteCard key={index} {...item} />
        ))}
      <div className="flex justify-center mt-4">
        <nav aria-label="Pagination">
          <ul className="flex items-center">
            {/* Previous button */}
            <li>
              <button
                className={`px-3 py-2 leading-tight  text-gray-500 bg-white border rounded-lg  hover:bg-gray-100 flex items-center gap-1 hover:text-gray-700 ${
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
                    className={`px-3 py-1.5 leading-tight text-gray-500   rounded-full  hover:text-gray-700  ${
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
                className={`px-3 py-2 leading-tight text-gray-500 bg-white flex items-center gap-1 border rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
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

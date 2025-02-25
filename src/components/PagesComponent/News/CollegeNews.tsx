"use client";
import React, { useState } from "react";
import { MoreNews } from "../../DummyData/NewsData";
import MoreNewsCard from "./MoreNewsCard";
import Heading from "../../Heading/Heading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface MoreNewsItem {
  moreNewsImg: any;
  date: any;
  heading: string;
  content: string;
  read_link: string;
}

const itemsPerPage = 6; // Number of cards per page

const CollegeNews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(MoreNews.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const paginatedNews = MoreNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-[1320px] mx-auto mb-20 mt-20">
      <div className="h-[41.99px] max-w-full mb-5 mr-10">
        <Heading heading_name={"College News"} />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-6 ml-10 mr-10">
      {/* <div className='flex flex-col-3 sm:flex-row md:flex-col-2 gap-6'> */}
        {paginatedNews.map((item: MoreNewsItem, index: number) => (
          <MoreNewsCard
            key={index}
            moreNewsImg={item.moreNewsImg}
            date={item.date}
            heading={item.heading}
            content={item.content}
            readLink={item.read_link}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-9">
        <nav aria-label="Pagination">
          <ul className="flex items-center space-x-2">
            {/* Previous Button */}
            <li>
              <button
                className={`px-3 py-2 leading-tight text-gray-500 bg-white border rounded-2xl hover:bg-gray-100 flex items-center gap-1 hover:text-gray-700 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaArrowLeft />
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <li key={pageNumber}>
                  <button
                    className={`px-3 py-1.5 leading-tight text-gray-500 rounded-full hover:text-gray-700 ${
                      pageNumber === currentPage ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              )
            )}

            {/* Next Button */}
            <li>
              <button
                className={`px-3 py-2 leading-tight text-gray-500 bg-white flex items-center gap-1 border rounded-2xl hover:bg-gray-100 hover:text-gray-700 ${
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

export default CollegeNews;

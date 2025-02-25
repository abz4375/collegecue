"use client";
import React, { useRef, useState } from "react";
import TopReviewCard from "../../Reusable_cards/TopReviewCard";
import {FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const data = [
  {
    avatar: "https://example.com/avatar1.jpg",
    name: "Sagar Wani",
    institution: "Apollo Physiotherapy College",
    review:
      "Placement opportunities are excellent because of its location in Silicon Valley of India amet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore vel?Experience from senior was good. Most ",
    course: "B.P.T.",
  },
  {
    avatar: "https://example.com/avatar2.jpg",
    name: "Gaurav Porwal",
    institution: "Faculty of Law, University of Delhi",
    review:
      "Entrance exam for LLB is conducted by Delhi University every year. Forms were available amet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore vel?Experience from senior was good. Most ",
    course: "L.L.B.",
  },
  {
    avatar: "https://example.com/avatar3.jpg",
    name: "Chandan Kumar",
    institution: "Banaras Hindu University - [BHU]",
    review:
      "I got admission in BHU MBA in 2015 on the basis of BHU PG entrance examination. I scored 33 amet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore vel?Experience from senior was good. Most ",
    course: "MBA",
  },
  {
    avatar: "https://example.com/avatar4.jpg",
    name: "Sahil Smart",
    institution: "Banaras Hindu University - [BHU]",
    review:
      "Entrance exam for LLB is conducted by Delhi University every year. Forms were availableamet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore vel?Experience from senior was good. Most ",
    course: "MBA",
  },
  {
    avatar: "https://example.com/avatar5.jpg",
    name: "Divya Raj Singh",
    institution: "Christ University",
    review:
      "1st log on to the college site which is www.christuniversity.in. 2nd select the course amet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore vel?Experience from senior was good. Most ",
    course: "BBA, Tourism",
  },
  {
    avatar: "https://example.com/avatar6.jpg",
    name: "Pranit Sagar",
    institution: "Apollo Physiotherapy College",
    review:
      "Placement opportunities are excellent because of its location in Silicon Valley of India amet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore vel?Experience from senior was good. Most ",
    course: "B.P.T.",
  },
  {
    avatar: "https://example.com/avatar7.jpg",
    name: "Akshay Bhushan",
    institution: "Udai Pratap College",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore vel?Experience from senior was good. Most of the seniors are working with good organizations",
    course: "BCA",
  },
  {
    avatar: "https://example.com/avatar8.jpg",
    name: "Shreya Divya",
    institution: "IIMT College of Engineering",
    review:
      "Placement opportunities are excellent because of its location in Silicon Valley of India Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore vel?",
    course: "B.TECH.",
  },
  {
    avatar: "https://example.com/avatar9.jpg",
    name: "Sagar Wani",
    institution: "Apollo Physiotherapy College",
    review:
      "Placement opportunities are excellent because of its location in Silicon Valley of India Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae itaque cum quasi asperiores illo laborum, commodi culpa. Temporibus distinctio dicta, illum impedit quae numquam pariatur ab, a enim tempore ve ",
    course: "B.P.T.",
  },
];
const AllTopReviewCard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(3);
  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Get the courses for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const sliceddata = data.slice(indexOfFirstItem, indexOfLastItem);


  const swiperRef = useRef<any>(null);
  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  // return (
  //   <div className=" sm:max-w-[300px] mx-auto">
  //     <div className="relative px-8 lg:px-0 max-w-[900px] lg:max-w-[720px] md:max-w-[700px] mx-auto">
  //       <button
  //         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
  //         onClick={handlePrevClick}
  //         aria-label="Previous slide"
  //       >
  //         <ChevronLeft className="w-6 h-6 text-gray-600" />
  //       </button>
  //       <Swiper
  //         // effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards' | string;
  //         ref={swiperRef}
  //         watchOverflow={true}
  //         centeredSlides={false}
         
  //         loop={true}
  //         pagination={{
  //           clickable: true,
  //           dynamicBullets: true,
  //         }}
  //         navigation={{
  //           enabled: true,
  //           nextEl: ".swiper-button-next",
  //           prevEl: ".swiper-button-prev",
  //         }}
  //         modules={[Pagination, Navigation]}
  //         className="w-full"
  //       >
  //         {data.map((review: any, index) => {
  //           return (
  //             <SwiperSlide key={index} className="mb-8 ">
  //                 {/* <SuggestionCard {...item} /> */}
  //                 <TopReviewCard {...review} />
  //             </SwiperSlide>
  //           );
  //         })}
  //       </Swiper>
  //       <button
  //         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
  //         onClick={handleNextClick}
  //         aria-label="Next slide"
  //       >
  //         <ChevronRight className="w-6 h-6 text-gray-600" />
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col items-center gap-6 sm:max-w-[300px] mx-auto">
      <div className="flex lg:flex-wrap lg:items-center lg:justify-center justify-items-start items-center rounded-2xl h-auto md:flex-wrap gap-1 gap-y-3 mb-4">
        {sliceddata.map((review, index) => (
          <TopReviewCard key={index} {...review} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaAngleLeft className=" text-blue-400"/>
        </button>
        {currentPage}
      
        <button
             onClick={() => handlePageChange(currentPage + 1)}
             disabled={currentPage === totalPages}
        >
          <FaAngleRight  className=" text-blue-400"/>
        </button>

      </div>
    </div>
  );

  
};

export default AllTopReviewCard;

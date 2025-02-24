"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa6";
import job1 from "../../../assets/jobportal/joblisting/job1.png";
import job2 from "../../../assets/jobportal/joblisting/job2.png";
import job3 from "../../../assets/jobportal/joblisting/job3.png";
import job4 from "../../../assets/jobportal/joblisting/job4.png";
import job5 from "../../../assets/jobportal/joblisting/job5.png";

const listing = [
  {
    image: job1,
    position: "Developer & expert in Java C++",
    time: "Fulltime",
    date: "18 Jul 2024",
    company: "Slack",
    location: "Spain, Barcelona",
  },
  {
    image: job2,
    position: "Animator & Expert in Maya 3D",
    time: "Part time",
    date: "25 Jul 2024",
    company: "Google",
    location: "USA, New York",
  },
  {
    image: job3,
    position: "Marketing Specialist in SEO",
    time: "Part time",
    date: "25 Jan 2024",
    company: "Pinterest",
    location: "USA, Alaska",
  },
  {
    image: job4,
    position: "Developer & expert in Java C++",
    time: "Fulltime",
    date: "10 Feb 2024",
    company: "Instagram",
    location: "USA, California",
  },
  {
    image: job5,
    position: "Lead & Product Designer",
    time: "Fulltime",
    date: "15 Feb 2024",
    company: "LinkedIn",
    location: "UK, London",
  },
];

const CompanyPrepration = () => {
  const [clicked, setClicked] = useState(false);
  const changeColor = () => setClicked(!clicked);
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

  return (
    <div className="my-20 xl:mx-5 sm:mx-2 ml-10 mr-10">
      {/* Header Section */}
      <div className="w-full flex items-center justify-between px-12 mt-6 mb-3">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Company Preparation
          </h1>
          <h3 className="text-gray-500">
            Crack upcoming interviews in just 5 days{" "}
          </h3>
        </div>
        <Link
          href="/job-portal/job"
          className="font-medium text-blue-500 border-b-2 border-blue-500 w-fit mr-5"
        >
          View all{" "}
        </Link>
      </div>

      {/* Swiper Navigation Buttons */}
      <div className="relative w-full">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-1 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
          onClick={handlePrevClick}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="mx-auto max-w-full px-10">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              enabled: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-20"
          >
            {listing.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-xl scale-100 border p-0 overflow-hidden w-[300px] h-[300px] lg:w-[290px] mb-10 hover:scale-95 transition-all duration-300">
                  {/* Top Half - Company Logo & Job Title */}
                  <div className="bg-blue-100 p-5 flex flex-col items-center justify-center text-center">
                    <Image
                      src={job.image}
                      alt="Company Logo"
                      width={60}
                      height={60}
                      className="mb-3"
                    />
                  </div>

                  {/* Bottom Half - Job Details */}
                  <div className="p-5 flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-gray-800">
                      {job.position}
                    </h3>
                    <p className="text-gray-600">{job.company}</p>
                    <p className="text-sm text-gray-600">{job.location}</p>
                    <p className="text-sm text-violet-600 font-medium">
                      {job.time} - {job.date}
                    </p>

                    {/* Apply Button & Bookmark Icon */}
                    <div className="flex items-center justify-between mt-1">
                      <Link href="/login">
                        <button className="text-white bg-blue-400 hover:bg-blue-600 font-semibold py-2 px-4 rounded-full">
                          APPLY
                        </button>
                      </Link>
                      {/* <FaBookmark
                        className={`text-xl cursor-pointer ${
                          clicked ? "text-orange-400" : "text-gray-300"
                        }`}
                        onClick={changeColor}
                      /> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-1 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
          onClick={handleNextClick}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CompanyPrepration;

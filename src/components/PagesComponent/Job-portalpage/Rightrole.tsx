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
import Heading from "../../Heading/Heading";
import { FiArrowUpRight } from "react-icons/fi";

const listing = [
  {
    image: job1,
    position: "Developer & expert in Java C++",
    time: "Fulltime",
    date: "18 Jul 2024",
    company: "Slack",
    location: "Spain, Barcelona",
    skill: ["Developer", "Coder"],
  },
  {
    image: job2,
    position: "Animator & Expert in Maya 3D",
    time: "Part time",
    date: "25 Jul 2024",
    company: "Google",
    location: "USA, New York",
    skill: ["Finance", "Accounting"],
  },
  {
    image: job3,
    position: "Marketing Specialist in SEO & SMM",
    time: "Part time",
    date: "25 Jan 2024",
    company: "Pinterest",
    location: "USA, Alaska",
    skill: ["Design", "Artist"],
  },
  {
    image: job4,
    position: "Developer & expert in Java C++",
    time: "Fulltime",
    date: "10 Feb 2024",
    company: "Instagram",
    location: "USA, California",
    skill: ["Application", "Marketing"],
  },
  {
    image: job5,
    position: "Lead & Product Designer",
    time: "Fulltime",
    date: "15 Feb 2024",
    company: "LinkedIn",
    location: "UK, London",
    skill: ["Finance", "Business"],
  },
];

const Rightrole = () => {
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
    <div className="my-20 xl:mx-5 sm:mx-2 ml-10 ">
      {/* <h2 className="text-3xl font-semibold text-black mb-6 ml-3 mt-2">New Job Listings</h2> */}

      <div className="w-full flex items-center justify-between px-12 mt-6 mb-3">
        <div>
          <h1 className="text-3xl sm:text-1xl font-semibold text-gray-800">
            Find The Right Role For You
          </h1>
          <h3 className="text-gray-500 sm:hidden">
            Apply to roles matching your skills from 500+ trending options.
          </h3>
        </div>
        <Link
          href="/job-portal/job"
          className="font-medium text-blue-500   flex items-center gap-1"
        >
          View all
          <FiArrowUpRight className="text-xl " />
        </Link>
      </div>
      <div className="relative w-full">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
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
            className="pb-10"
          >
            {listing.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-xl  scale-100 p-5  mr-3 ml-3 mb-10 hover:scale-95">
                  <div className="flex items-center mb-4">
                    <Image
                      src={job.image}
                      alt="Company Logo"
                      width={50}
                      height={50}
                      className="mr-3"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{job.position}</h3>
                      <p className="text-gray-500">{job.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{job.location}</p>
                  <p className="text-sm text-violet-600 font-medium">
                    {job.time} - {job.date}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <button className="text-white bg-blue-400 hover:bg-blue-600 font-semibold py-2 px-4 rounded-full">
                      <Link href="/login">APPLY</Link>
                    </button>
                    <FaBookmark
                      className={`text-xl cursor-pointer ${
                        clicked ? "text-orange-400" : "text-gray-300"
                      }`}
                      onClick={changeColor}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
          onClick={handleNextClick}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Rightrole;

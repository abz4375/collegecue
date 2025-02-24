import React from 'react'
import Image from "next/image";
import search from "../../../assets/About/collogecue_search.png";
import abroad from "../../../assets/About/collogecue_abroad.png";
import job from "../../../assets/About/collogecue_jobs.png";
import course from "../../../assets/About/collogecue_courses.png";

const WhatWeOffer = () => {
  return (
    <>
        <div className="container mx-auto text-center py-8">
            <h2 className="text-4xl sm:text-3xl font-bold text-purple-900 mb-4">
                What We Offer
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 p-5">
                    <div className="flex justify-center items-center mb-2">
                        <Image src={search} alt="@bharat" className="w-[80px] h-auto" />
                    </div>
                    <h2 className="text-2xl sm:text-xl font-bold text-purple-900 mb-4">College Search</h2>
                    <p className="text-gray-700 text-xl sm:text-l">
                    Access detailed information about courses, exams, colleges, career options, admission requirements, eligibility, costs, placement data, rankings, reviews, scholarships, and more.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 p-5">
                    <div className="flex justify-center items-center mb-2">
                        <Image src={abroad} alt="@bharat" className="w-[80px] h-auto" />
                    </div>
                    <h2 className="text-2xl sm:text-xl font-bold text-purple-900 mb-4">Study Abroad Services</h2>
                    <p className="text-gray-700 text-xl sm:text-l">
                    Explore opportunities for studying abroad with guidance on colleges, programs, exams, scholarships, and expert counseling services for applications to universities and colleges in 23+ countries.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 p-5">
                    <div className="flex justify-center items-center mb-2">
                        <Image src={job} alt="@bharat" className="w-[80px] h-auto" />
                    </div>
                    <h2 className="text-2xl sm:text-xl font-bold text-purple-900 mb-4">Collegecue Jobs</h2>
                    <p className="text-gray-700 text-xl sm:text-l">
                    Collegecue Careers connects job searchers, both students and professionals, with potential employers. The program provides personalized job opportunities based on individual skills and objectives. Companies can easily access a pool of talented people.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 p-5">
                    <div className="flex justify-center items-center mb-2">
                        <Image src={course} alt="@bharat" className="w-[80px] h-auto" />
                    </div>
                    <h2 className="text-2xl sm:text-xl font-bold text-purple-900 mb-4">Collegecue Courses</h2>
                    <p className="text-gray-700 text-xl sm:text-l">
                        Collegecue Courses is a platform that aids mentors and prospective educators in their educational journey, offering materials to enhance teaching skills and AI-based tools for test preparation, ensuring applicants are well-prepared for realistic scenarios.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhatWeOffer
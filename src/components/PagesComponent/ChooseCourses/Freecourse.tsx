"use client";

import React, { useRef, useState } from "react";
import Heading from "../../Heading/Heading";
import { ExploreCourseCard } from "../../Reusable_cards/ExploreCourseCard";

const courses = [
  {
    category: "Web Development",
    title: "The Complete Web Developer in 2023: Zero to Mastery",
    lessons: 25,
    students: 54,
    imageUrl: "https://html.themewant.com/studyhub/assets/images/course/01.jpg",
    instructor: "Angela Yu",
    rating: 4.5,
    originalPrice: "79.99",
    discountedPrice: "FREE",
  },
  {
    category: "Marketing, Finance",
    title: "How to Write the Ultimate 1 Page Strategic Business Plan",
    lessons: 22,
    students: 60,
    imageUrl: "https://html.themewant.com/studyhub/assets/images/course/02.jpg",
    instructor: "John Doe",
    rating: 4.0,
    originalPrice: "89.99",
    discountedPrice: "FREE",
  },
  {
    category: "Web Development",
    title: "100 Days Of Code - 2023 Web Development Bootcamp",
    lessons: 23,
    students: 40,
    imageUrl: "https://html.themewant.com/studyhub/assets/images/course/03.jpg",
    instructor: "Jane Smith",
    rating: 4.8,
    originalPrice: "99.99",
    discountedPrice: "FREE",
  },
  {
    category: "Design, UI/UX",
    title: "User Experience The Ultimate Guide to Usability and UX",
    lessons: 19,
    students: 14,
    imageUrl: "https://html.themewant.com/studyhub/assets/images/course/04.jpg",
    instructor: "Alex Johnson",
    rating: 4.2,
    originalPrice: "79.99",
    discountedPrice: "FREE",
  },
  {
    category: "Design, UI/UX",
    title: "User Experience The Ultimate Guide to Usability and UX",
    lessons: 19,
    students: 14,
    imageUrl: "https://html.themewant.com/studyhub/assets/images/course/05.jpg",
    instructor: "Alex Johnson",
    rating: 4.2,
    originalPrice: "79.99",
    discountedPrice: "FREE",
  },
  {
    category: "Design, UI/UX",
    title: "User Experience The Ultimate Guide to Usability and UX",
    lessons: 19,
    students: 14,
    imageUrl: "https://html.themewant.com/studyhub/assets/images/course/06.jpg",
    instructor: "Alex Johnson",
    rating: 4.2,
    originalPrice: "79.99",
    discountedPrice: "FREE",
  },
  {
    category: "Design, UI/UX",
    title: "User Experience The Ultimate Guide to Usability and UX",
    lessons: 19,
    students: 14,
    imageUrl: "https://html.themewant.com/studyhub/assets/images/course/07.jpg",
    instructor: "Alex Johnson",
    rating: 4.2,
    originalPrice: "79.99",
    discountedPrice: "FREE",
  },
  {
    category: "Design, UI/UX",
    title: "User Experience The Ultimate Guide to Usability and UX",
    lessons: 19,
    students: 14,
    imageUrl: "https://html.themewant.com/studyhub/assets/images/course/08.jpg",
    instructor: "Alex Johnson",
    rating: 4.2,
    originalPrice: "79.99",
    discountedPrice: "FREE",
  },
];
const coursesPerPage = 8;

const Freecourse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const sectionRef = useRef<HTMLDivElement>(null);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);

    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div ref={sectionRef} className="w-full bg-[#F5F5F5] my-20">
      <div className="max-w-[1340px] px-4 mx-auto py-8">
        <div className="mb-4">
          <Heading heading_name={"Free Course"} />
          <p className="  ml-5 md:ml-7 text-gray-700">
            Courses are available at an affordable price & valuable
            certifications are included.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:w-full justify-center">
          {currentCourses.map((course, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[350px] sm:w-full flex md:flex-row sm:flex-col"
            >
              <ExploreCourseCard
                category={course.category}
                title={course.title}
                lessons={course.lessons}
                students={course.students}
                imageUrl={course.imageUrl}
                instructor={course.instructor}
                rating={course.rating}
                originalPrice={course.originalPrice}
                discountedPrice={course.discountedPrice}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-3xl disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-1 border rounded-full ${
                  pageNumber === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-3xl disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Freecourse;

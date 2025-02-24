import React from "react";
import { ExploreCourseCard } from "../../../Reusable_cards/ExploreCourseCard";
import Heading from "@/components/Heading/Heading";
import ViewAllButton from "@/components/Buttons/ViewAllButton";

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
    discountedPrice: "Free",
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
    discountedPrice: "Free",
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
    discountedPrice: "Free",
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
    discountedPrice: "Free",
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
    discountedPrice: "Free",
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
    discountedPrice: "Free",
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
    discountedPrice: "Free",
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
    discountedPrice: "Free",
  },
];

const FeaturedCourses: React.FC = () => {
  return (
    <div className=" mx-auto max-w-ful">
      <div className="">
        <div className="flex w-full justify-between">
          <Heading heading_name={"Explore Featured Courses"} />
          <ViewAllButton linkto="#" />
        </div>
        <p className="mb-6 text-[#737477] sm:text-center md:text-center">
          You&apos;ll find something to spark your curiosity and enhance
        </p>
      </div>
      <div className="flex flex-wrap gap-6 md:w-full justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-[300px] h-[490px] md:w-full sm:w-full flex md:flex-col sm:flex-col"
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
    </div>
  );
};

export default FeaturedCourses;

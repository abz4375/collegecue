"use client";
import React, { useState } from "react";
import ReviewCard from "../../Reusable_cards/ReviewCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const data = [
  {
    avatar: "https://example.com/avatar1.jpg",
    user: "karan",
    institution: "ABC College",
    date: "June 1, 2024",
    rating: "4.5",
    heading: "Great College with Excellent Facilities",
    reviews: [
      {
        heading: "Amazing Faculty and Supportive Staff",
        review:
          "The faculty at ABC College is highly knowledgeable and experienced. They are always ready to help and provide guidance to the students. The staff members are also very supportive and ensure that the campus facilities are well-maintained. Overall, the college provides a great learning environment.",
      },
      {
        heading: "Wide Range of Courses and Opportunities",
        review:
          "ABC College offers a wide range of courses in various disciplines. This provides students with numerous opportunities to explore their interests and pursue their desired career paths. The college also organizes various events and workshops to enhance the skills and knowledge of the students.",
      },
      {
        heading: "Excellent Infrastructure and Resources",
        review:
          "The college campus is equipped with state-of-the-art infrastructure and modern facilities. The classrooms are well-equipped with audio-visual aids, and the library is stocked with a vast collection of books and research materials. The college also provides access to computer labs, sports facilities, and a dedicated study area.",
      },
    ],
  },
  {
    avatar: "https://example.com/avatar2.jpg",
    user: "example_user2",
    institution: "Example Institution 2",
    date: "June 2, 2024",
    rating: "4.0",
    heading: "Positive Experience at Example Institution 2",
    reviews: [
      {
        heading: "Dedicated and Knowledgeable Faculty",
        review:
          "The faculty members at Example Institution 2 are highly dedicated and knowledgeable. They provide comprehensive guidance and support to the students throughout their academic journey. The teaching methods are effective, and the faculty ensures a conducive learning environment.",
      },
      {
        heading: "Opportunities for Practical Learning",
        review:
          "Example Institution 2 emphasizes practical learning alongside theoretical knowledge. The college organizes regular industrial visits, internships, and workshops to provide hands-on experience to the students. This practical exposure has been instrumental in shaping my understanding and skills.",
      },
      {
        heading: "Collaborative and Inclusive Campus Culture",
        review:
          "The campus culture at Example Institution 2 is inclusive and fosters collaboration among students. There are various clubs, societies, and events where students can engage and showcase their talents. The college also encourages participation in extracurricular activities and sports.",
      },
    ],
  },
  {
    avatar: "https://example.com/avatar3.jpg",
    user: "example_user3",
    institution: "Example Institution 3",
    date: "June 3, 2024",
    rating: "4.2",
    heading: "A Memorable Journey at Example Institution 3",
    reviews: [
      {
        heading: "Supportive and Approachable Faculty",
        review:
          "The faculty members at Example Institution 3 are extremely supportive and approachable. They not only focus on academic excellence but also guide students in their personal and professional development. The faculty's dedication and mentorship have had a positive impact on my overall growth.",
      },
      {
        heading: "State-of-the-Art Facilities and Infrastructure",
        review:
          "Example Institution 3 boasts state-of-the-art facilities and infrastructure that facilitate effective learning. The classrooms are equipped with modern technology, and the laboratories are well-maintained. The library is a treasure trove of resources, and the campus provides a comfortable and conducive environment for studying.",
      },
      {
        heading: "Holistic Learning and Skill Development",
        review:
          "Example Institution 3 focuses on holistic learning and skill development. Along with academic curriculum, the college offers workshops, seminars, and industry interactions to enhance practical knowledge and skills. This approach has prepared me well for real-world challenges.",
      },
    ],
  },
  {
    avatar: "https://example.com/avatar4.jpg",
    user: "example_user4",
    institution: "Example Institution 4",
    date: "June 4, 2024",
    rating: "4.8",
    heading: "Exceptional Learning Experience at Example Institution 4",
    reviews: [
      {
        heading: "Highly Qualified Faculty Members",
        review:
          "The faculty members at Example Institution 4 are highly qualified and experienced in their respective fields. They possess in-depth knowledge and expertise, which they effectively impart to the students. The faculty's guidance has been instrumental in shaping my academic and professional growth.",
      },
      {
        heading: "Vibrant and Engaging Campus Life",
        review:
          "Example Institution 4 offers a vibrant and engaging campus life. The college organizes various cultural events, fests, and sports activities that create a lively atmosphere for students. Additionally, there are ample opportunities to participate in clubs, societies, and community service initiatives.",
      },
      {
        heading: "Industry-Relevant Curriculum",
        review:
          "The curriculum at Example Institution 4 is designed to align with industry requirements. The college focuses on providing practical exposure and developing industry-relevant skills among students. Regular guest lectures, industrial visits, and internships contribute to a comprehensive learning experience.",
      },
    ],
  },
];
import { useRef } from "react";

const AllReviewCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Set limit to 5 cards per page
  const reviewsRef = useRef<HTMLHeadingElement>(null); // Create a ref for the heading

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the items to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReviews = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page navigation with smooth scroll
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to the heading smoothly
      if (reviewsRef.current) {
        reviewsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div ref={reviewsRef} className="flex flex-col items-center gap-6 mx-auto mb-4">
      {/* Heading with ref */}
      {/* <h2  className="text-2xl font-bold">
        Reviews Out of {data.length}
      </h2> */}

      {/* Review Cards */}
      <div className="flex flex-col h-auto mx-auto gap-4">
        {currentReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 px-0 disabled:opacity-50"
          >
            <FaAngleLeft className="text-blue-400 w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === page
                    ? "bg-gray-200 text-black"
                    : " text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 px-0 disabled:opacity-50"
          >
            <FaAngleRight className="text-blue-400 w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AllReviewCard;

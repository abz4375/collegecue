import Image, { StaticImageData } from "next/image";
import React from "react";
import Logo from "@/assets/CourseFinder/Logo.png";
import StarRating from "../StarRating";
import { useRouter } from "next/navigation"; // Use this for Next.js 13+ App Router
// OR import { useRouter } from "next/router"; for Pages Router

interface Props {
  course: string;
  branch: string;
  rating: number;
  institution: string;
  year: string;
  degree: string;
  type: string;
  time: string;
  role: string;
  apply: string;
  college: string;
  othercollege: string;
  other: string;
  reviews: Review[];
  img?: StaticImageData | string;
  name?: string;
}

interface Review {
  review: string;
}

const CourseFinderCard = ({
  course,
  branch,
  rating,
  institution,
  year,
  degree,
  type,
  time,
  role,
  apply,
  college,
  othercollege,
  other,
  reviews,
  img, // Access img directly from destructured props
  name,
}: Props) => {
  const router = useRouter(); // Initialize the router

  // Function to handle the click on the course name and set URL parameters
  const handleCourseClick = () => {
    const queryParams = {
      Streams: "Engineering",
      Course: "BE/B.Tech",
      "Program Type": "Full Time",
      "Course Type": "Degree",
      "Course Duration": "4 Years",
    };

    // Construct the query string
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");

    // Navigate to the new URL with query parameters
    router.push(`/course-finder?${queryString}`);
  };

  return (
    <div className="rounded-2xl h-auto border border-solid border-gray-300 hover:shadow-md [@media_(max-width:_896px)]:flex [@media_(max-width:_896px)]:flex-col [@media_(max-width:_896px)]:items-center [@media_(max-width:_896px)]:justify-center">
      <div className="flex m-2 [@media_(max-width:_896px)]:m-4 [@media_(max-width:_896px)]:flex-col justify-center items-center">
        <div className="w-[11rem] h-[11rem] lg:h-[14rem] [@media_(max-width:_896px)]:max-h-[11rem] sm:max-h-[8rem] sm:max-w-[8rem] rounded-lg bg-gray-300 border-solid mr-[1rem] [@media_(max-width:_896px)]:mr-0 flex justify-center items-center overflow-hidden">
          <Image src={Logo} alt="logo" className="object-cover" />
        </div>
        <div className="flex flex-col [@media_(max-width:_896px)]:text-center">
          <div className="flex flex-wrap pr-4 gap-2 justify-between [@media_(max-width:_896px)]:flex-col items-center [@media_(max-width:_896px)]:justify-center [@media_(max-width:_896px)]:text-center [@media_(max-width:_896px)]:mt-2">
            <div className="flex flex-wrap gap-2">
              <h6
                className="text-gray-800 text-[19px] font-semibold hover:text-black cursor-pointer"
                onClick={handleCourseClick} // Add click handler here
              >
                {course}
              </h6>
              <h6 className="text-gray-800 text-[19px] font-semibold">
                {branch}
              </h6>
            </div>
            <div className="flex items-center gap-2">
              <StarRating rating={rating} />
              {/* <span>{rating}/5</span> */}
            </div>
          </div>
          <div className="flex flex-wrap [@media_(max-width:_896px)]:justify-center [@media_(max-width:_896px)]:items-center text-gray-600 mt-2">
            <p className="text-sm font-medium mr-[0.3rem]">{institution}</p>
            <p className="text-sm font-medium mr-[0.3rem]">{year}</p>
            <p className="text-sm font-medium mr-[0.3rem]">{degree}</p>
            <p className="text-sm font-medium mr-[0.3rem]">{type}</p>
            <p className="text-sm font-medium mr-[0.3rem]">{time}</p>
          </div>
          <div className="flex flex-wrap [@media_(max-width:_896px)]:flex-col [@media_(max-width:_896px)]:text-center [@media_(max-width:_896px)]:justify-center [@media_(max-width:_896px)]:items-center text-gray-600 my-4">
            {reviews.map((review, index) => (
              <div
                className="text-sm font-medium mr-[1rem] [@media_(max-width:_896px)]:mr-0 [@media_(max-width:_896px)]:max-w-3/4 sm:max-w-full cursor-pointer mx-auto my-auto"
                key={index}
              >
                {review.review}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 [@media_(max-width:_896px)]:justify-center items-center">
            <div className="flex max-h-[2rem] lg:max-h-[2.5rem] [@media_(max-width:_896px)]:max-h-fit p-2 rounded-lg overflow-auto bg-blue-100/80">
              <p className="text-gray-800 text-[12px] font-semibold capitalize">
                <span className="font-normal">Popular Job Roles: </span>
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap rounded-b-2xl justify-center w-full p-[1%] [@media_(max-width:_896px)]:p-[3%] [@media_(max-width:_896px)]:flex-col bg-blue-100/80">
        {[college, othercollege, other].map((item, index) => (
          <div className="flex items-center mr-4 my-1" key={index}>
            <Image src={Logo} alt="logo" className="w-[20px] h-[20px] mr-[1rem]" />
            <p className="text-gray-800 font-medium text-sm">{item}</p>
          </div>
        ))}
        <button className="bg-blue-500 flex lg:my-1 lg:w-full lg:justify-center lg:mt-4 items-center rounded-lg text-white py-[6px] px-[16px]">
          {apply}
        </button>
      </div>
    </div>
  );
};

export default CourseFinderCard;
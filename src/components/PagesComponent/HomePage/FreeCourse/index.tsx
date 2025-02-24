import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import {CourseSlider} from "./CourseSlider";
import Heading from "@/components/Heading/Heading";
interface CourseData {
  img: StaticImageData; // Use StaticImageData from next/image
  name: string;
  link: string;
}

type FreeCourseProps = {
  FreeCourseData: readonly CourseData[];
};
const FreeCourse: React.FC<FreeCourseProps> = ({ FreeCourseData }) => {
  return (
    <section className="max-w-full px-4 pb-20 mx-auto w-full mt-5 mb-5">
      <div>
        <div className="w-full flex flex-col items-center text-center ">
          {" "}
          <Heading heading_name="Get Coursers from Here"  />
          <p className="mb-4">ldfddsfsbdgngmhgfdsadfghjgdsgf</p>
          <div className="container max-w-full mx-auto">
            <CourseSlider FreeCourseData={FreeCourseData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCourse;

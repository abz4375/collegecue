import React from "react";
import Image from "next/image";
import academic from "../../../../../../assets/IIMBangalore/NavPages/CourseFees/academic-new.png";
import accomodation from "../../../../../../assets/IIMBangalore/NavPages/CourseFees/accomodation-new.png";
import faculty from "../../../../../../assets/IIMBangalore/NavPages/CourseFees/teacher-new.png";
import infrastructure from "../../../../../../assets/IIMBangalore/NavPages/CourseFees/infra-new.png";
import placement from "../../../../../../assets/IIMBangalore/NavPages/CourseFees/placement-new.png";
import sociallyf from "../../../../../../assets/IIMBangalore/NavPages/CourseFees/social-status-new.png";

interface RatingData {
  label: string;
  imgSrc: any;
  rating: number;
}

const ratingsData: RatingData[] = [
  { label: "Academic", imgSrc: academic, rating: 9.0 },
  { label: "Accommodation", imgSrc: accomodation, rating: 9.0 },
  { label: "Faculty", imgSrc: faculty, rating: 9.2 },
  { label: "Infrastructure", imgSrc: infrastructure, rating: 9.0 },
  { label: "Placement", imgSrc: placement, rating: 9.0 },
  { label: "Social Life", imgSrc: sociallyf, rating: 9.2 },
];

const CollegeRating: React.FC = () => {
  return (
    <div className="mt-4 w-full rounded-lg  shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)]  bg-white p-4 mb-8">
      <div className="flex justify-between">
        <p className="text-2xl font-bold text-gray-800 my-2">
          College Rating
        </p>
        <div className="text-lg font-bold text-gray-800 text-opacity-60 cursor-pointer hover:text-opacity-100 transition-all duration-150 flex flex-col items-end">
          <span>{ratingsData[0].rating.toFixed(1)} / 10</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold text-gray-800 opacity-80 my-2">
          Based on <span className="text-blue-900">74 students</span> Rating
          <span className="text-blue-900"> CLAIM THIS COLLEGE</span>
        </p>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-3 gap-4">
        {ratingsData.map((data, index) => (
          <div key={index} className="text-center sm:p-1 ">
            <div className="w-20 h-20 overflow-hidden rounded-lg mx-auto">
              <Image
                src={data.imgSrc}
                alt={data.label}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm sm:max-w-[50px]  text-gray-800 font- my-2">
              {data.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeRating;

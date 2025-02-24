"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa6";
import jobListings from "../../../DummyData/JobRightsideData";

interface Joblistprops {
  id: number;
  image: any;
  time: string;
  post: string;
  location: string;
  stipend: string;
  duration: string;
  exper: string;
  
}

const JobListPage: React.FC<Joblistprops> = ({
  id,
  image,
  time,
  post,
  location,
  stipend,
  duration,
  exper,

  

}) => {
  const [clicked, setClicked] = useState(false);
  

  const changeColor = () => {
    setClicked(!clicked);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col space-y-4 border transition hover:shadow-lg w-full sm:w-full mx-auto mb-2" >
      
      {/* Job Header */}
      <div className="flex items-center space-x-4">
        <Image
          alt="Company Logo"
          loading="lazy"
          decoding="async"
          src={image}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{post}</h3>
          <p className="text-gray-500 text-sm">{time}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="text-gray-700 text-sm md:text-base space-y-2">
        <p>
          <span className="font-medium"> Location:</span> {location}
        </p>
        <p>
          <span className="font-medium"> Stipend:</span> {stipend} / {duration}
        </p>
        <p>
          <span className="font-medium">Experience:</span> {exper}
        </p>
        
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          className={`p-2 rounded-full border ${
            clicked ? "bg-blue-500 text-white" : "bg-gray-200 text-slate-700"
          } transition`}
          onClick={changeColor}
          title="Save Job"
        >
          <FaBookmark className="text-xl" />
        </button>

        <Link
          href="/login"
          className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-full hover:bg-blue-500 transition"
        >
          APPLY
        </Link>
      </div>
    </div>
  );
};

export default JobListPage;

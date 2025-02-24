"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa6";
import jobListings from "../../../DummyData/JobRightsideData";

interface Joblistprops {
  id?: number;
  image?: any;
  time?: string;
  post?: string;
  location?: string;
  stipend?: string;
  duration?: string;
  exper?: string;
  jobs?: string;
}

const RightSideCard: React.FC<Joblistprops> = ({
  id,
  image,
  time,
  post,
  location,
  stipend,
  duration,
  exper,
  jobs,
}) => {
  const [clicked, setClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only the first 150 characters initially
  const shortDescription = (jobs || "").slice(0, 250) + "...";

  const changeColor = () => {
    setClicked(!clicked);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col space-y-4 border transition hover:shadow-lg w-full sm:w-full mx-auto mb-5">
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
        {/* Job Description */}
      <p >
       <span className="mt-2 text-gray-700 text-base font-semibold">Job Discription:</span> 
       {isExpanded ? jobs : shortDescription}
       <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-blue-600 font-semibold hover:underline"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
      </p>

      {/* Read More / Read Less Button */}
      
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          className={`p-2 rounded-full border ${
            clicked ? "bg-slate-200 text-gray-700" : "bg-gray-400 text-blue-300"
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

export default RightSideCard;

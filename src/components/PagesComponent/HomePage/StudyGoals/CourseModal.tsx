import React, { useState, useEffect } from "react";
import { cityData } from "../../../DummyData/DataLocations";
import Image from "next/image";
import Link from "next/link";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: string;
}

const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  if (!isOpen) return null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter cityData based on the search query
  const filteredCities = cityData.filter((city) =>
    city.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 sm:px-6 lg:px-8 z-20">
      <div className="bg-white rounded-lg p-4 w-[440px] h-[700px] sm:w-[420px] relative overflow-y-auto custom-scrollbar">
        <button className="absolute top-3 right-6 text-3xl text-violet-800" onClick={onClose}>
          &times;
        </button>
        <div className="flex flex-col items-center sm:text-sm">
          <h1 className="text-xl mb-4 text-violet-800 text-center">Select Your Study Preference</h1>
          <input
            type="text"
            className="w-80 p-2 border border-gray-300 rounded mb-4"
            placeholder="Search/Select Your Study Preference"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <h1 className="text-xl mb-4 text-violet-800 text-center">Popular Cities</h1>
          <div className="grid grid-cols-3  gap-4 sm:grid-cols-2 sm:gap-8 cursor-pointer">
            {filteredCities.map((city) => (
              <div key={city.city} className="border sm:w-36 text-center hover:border-blue-400 hover:bg-blue-300 hover:bg-opacity-20 hover:text-blue-700">
                <Link href={city.link}>
                <div className="flex flex-col items-center">
                  <Image src={city.img} className="w-20 h-20 mb-2" alt={city.city} />
                  <span className="text-base text-center">{city.city}</span>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;

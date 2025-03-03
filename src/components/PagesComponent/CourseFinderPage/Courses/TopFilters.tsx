"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const filterData = [
  {
    heading: "Streams",
    find: "Find Stream",
    reviews: [
      { id: 1, Answer: "Arts" },
      { id: 2, Answer: "Science" },
      { id: 3, Answer: "Engineering" },
      { id: 4, Answer: "Medical" },
      { id: 5, Answer: "Vocational Course" },
      { id: 6, Answer: "Design" },
    ],
  },
  {
    heading: "Course",
    find: "Find Course",
    reviews: [
      { id: 1, Answer: "BE/B.Tech" },
      { id: 2, Answer: "MBA/PGDM" },
      { id: 3, Answer: "ME/M.Tech" },
      { id: 4, Answer: "BBA/BBM" },
      { id: 5, Answer: "B.Sc" },
      { id: 6, Answer: "MCA" },
      { id: 7, Answer: "BCA" },
    ],
  },
  {
    heading: "Program Type",
    find: "Find Program Type",
    reviews: [
      { id: 1, Answer: "Full Time" },
      { id: 2, Answer: "Part Time" },
    ],
  },
  {
    heading: "Course Type",
    find: "Find Course Type",
    reviews: [
      { id: 1, Answer: "Degree" },
      { id: 2, Answer: "Diploma" },
      { id: 3, Answer: "Certification" },
    ],
  },
  {
    heading: "Course Duration",
    find: "Find Course Duration",
    reviews: [
      { id: 1, Answer: "2 Years" },
      { id: 2, Answer: "3 Years" },
      { id: 3, Answer: "1 Year" },
      { id: 4, Answer: "4 Years" },
      { id: 5, Answer: "5 Years" },
      { id: 6, Answer: "7 Years" },
    ],
  },
];

const TopFilters: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [dropdownStates, setDropdownStates] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (dropdown: string) => {
    setDropdownStates((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const handleSelect = (filterKey: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey]?.includes(value)
        ? prev[filterKey]?.filter((item) => item !== value)
        : [...(prev[filterKey] || []), value],
    }));
  };

  const clearFilters = (filterKey: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: [],
    }));
  };

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-lg shadow-md justify-center sm:justify-start sm:gap-2 relative">
      <div className="flex items-center gap-2 px-4 py-2 text-gray-800 border-r-2 border-gray-300">
        Top Filters
      </div>

      {filterData.map((filter, index) => (
        <div key={index} className="relative">
          <button
            onClick={() => toggleDropdown(filter.heading)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full border-blue-600 transition sm:hidden"
            aria-expanded={dropdownStates[filter.heading]}
          >
            {filter.heading} <IoIosArrowDown />
          </button>
          {dropdownStates[filter.heading] && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-xl p-4 z-50"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{filter.find}</span>
                <button
                  onClick={() => clearFilters(filter.heading)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Clear
                </button>
              </div>
              <div className="max-h-40 overflow-y-auto">
                {filter.reviews
                  .filter((review) =>
                    review.Answer.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((review) => (
                    <label
                      key={review.id}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                    >
                      {review.Answer}
                      <input
                        type="checkbox"
                        checked={selectedFilters[filter.heading]?.includes(review.Answer)}
                        onChange={() => handleSelect(filter.heading, review.Answer)}
                        className="hidden"
                      />
                      {selectedFilters[filter.heading]?.includes(review.Answer) ? (
                        <Check className="text-blue-500" size={18} />
                      ) : (
                        <span className="w-5 h-5 border rounded"></span>
                      )}
                    </label>
                  ))}
              </div>
              <button
                className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                onClick={() => toggleDropdown(filter.heading)}
              >
                Apply Filter →
              </button>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopFilters;

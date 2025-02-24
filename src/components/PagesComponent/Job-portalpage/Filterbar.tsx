"use client";
import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const workTypes = ["In Office", "Remote", "Field Work", "Hybrid"];
const filters = [
  {
    name: "Status",
    options: ["Live", "Expired", "Registrations Closed", "Recent"],
  },
  { name: "Type", options: ["Internship", "Full-time", "Part-time"] },
  { name: "Timing", options: ["Day Shift", "Night Shift", "Flexible"] },
  { name: "Work Days", options: ["5 Days", "6 Days", "Rotational"] },
  { name: "User Type", options: ["Fresher", "Experienced"] },
  {
    name: "Organisation Tier",
    options: ["Startup", "Mid-Level", "Enterprise"],
  },
  { name: "Passing out year", options: ["2024", "2025", "2026"] },
];

const Categories = [
  "Non Voice",
  "production",
  "Banking",
  "lending",
  "Life Insurance",
];

const userType = ["fresher", "professional", "college"];
const FilterBar: React.FC = () => {
  const [filterCount, setFilterCount] = useState(0);
  const [userTypeCount, setUserTypeCount] = useState(0);
  const [isWorkTypeOpen, setIsWorkTypeOpen] = useState(false);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>({});
  const [isuserTypeOpen, setIsuserTypeOpen] = useState(false);
  const [selecteduserTypes, setSelecteduserTypes] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [iscategoryOpen, setIscategoryOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  // const [isLocationOpen, setIsLocationOpen] = useState(false);

  // State for selected locations
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  // State for search input
  // const [search, setSearch] = useState("");
  interface Country {
    name: { common: string };
  }

  // const CountryList = () => {

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data.map((country: any) => country.name.common);
        setCountries(countryNames.sort());
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // const toggleDropdown = (
  //   setter: React.Dispatch<React.SetStateAction<boolean>>
  // ) => setter((prev) => !prev);

  const handleSelect = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
  };

  const toggleWorkTypeDropdown = () => setIsWorkTypeOpen(!isWorkTypeOpen);
  const toggleuserTypeDropdown = () => setIsuserTypeOpen(!isuserTypeOpen);
  const togglectogeryDropdown = () => setIscategoryOpen(!iscategoryOpen);

  const handleSelectWorkType = (type: string) => {
    setSelectedWorkTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handleSelectuserType = (type: string) => {
    setSelecteduserTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handleSelectCategory = (type: string) => {
    setCategory((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleFilterDropdown = () => setIsFilterOpen(!isFilterOpen);

  const handleFilterChange = (category: string, option: string) => {
    setSelectedFilters((prev) => ({ ...prev, [category]: option }));
  };

  const clearFilters = () => setSelectedFilters({});

  const clearWorkTypeFilters = () => setSelectedWorkTypes([]);
  

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsLocationOpen((prev) => !prev);
  };

  // Handle selecting a location
  const handleSelectLocation = (location:any) => {
    setSelectedLocations((prevSelected : any) =>
      prevSelected.includes(location)
        ? prevSelected.filter((item : any) => item !== location) // Remove if already selected
        : [...prevSelected, location] // Add if not selected
    );
  };

  // Clear all selected locations
  const clearLocationFilters = () => {
    setSelectedLocations([]);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-lg shadow-md justify-center sm:justify-start sm:gap-2  relative">
      {/* Jobs Button */}
      <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
        Jobs <IoIosArrowDown />
      </button>
      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
        Salary (High to Low)
      </button>

      {/* Salary Filter */}
      <div className="relative">
      {/* Filters Button */}
      <button
        onClick={toggleFilterDropdown}
        className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:border border-blue-600 transition"
      >
        <FaFilter />
        Filters
        {Object.keys(selectedFilters).length > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-sm text-white bg-blue-600 rounded-full -mt-2 -mr-2">
            {Object.keys(selectedFilters).length}
          </span>
        )}
        <IoIosArrowDown />
      </button>

      {/* Filters Dropdown with Animation */}
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-4 z-50 max-h-96 overflow-y-auto"
        >
          {/* Header with Clear Button */}
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Filters</span>
            <button
              onClick={clearFilters}
              className="text-red-500 text-sm hover:underline"
            >
              Clear
            </button>
          </div>

          {/* Filter Options */}
          <div className="max-h-60 overflow-y-auto">
            {filters.map((filter) => (
              <div key={filter.name} className="mb-3">
                <h4 className="text-sm font-medium text-gray-700">
                  {filter.name}
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {filter.options.map((option) => (
                    <label
                      key={option}
                      className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                        selectedFilters[filter.name] === option
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => handleFilterChange(filter.name, option)}
                    >
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Apply Button */}
          <button
            className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={toggleFilterDropdown}
          >
            Apply Filters →
          </button>
        </motion.div>
      )}
    </div>

      {/* Filters with count badge
      <button className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
        <FaFilter />
        Filters
        {filterCount > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-sm text-white bg-blue-600 rounded-full -mt-2 -mr-2">
            {filterCount}
          </span>
        )}
      </button> */}

      {/* Location Dropdown */}
      {/* <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition sm:hidden">
        Location <IoIosArrowDown />
      </button> */}
        <div className="relative">
      {/* Location Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:border border-blue-600 transition sm:hidden"
      >
        Location <IoIosArrowDown />
      </button>

      {/* Location Dropdown with Animation */}
      {isLocationOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute left-0 mt-2 w-64 bg-white border shadow-lg rounded-xl p-4 z-50 max-h-60 overflow-y-auto"
        >
          {/* Header with Clear Button */}
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Select Location</span>
            <button
              onClick={clearLocationFilters}
              className="text-red-500 text-sm hover:underline"
            >
              Clear
            </button>
          </div>

          {/* Search Input
          <input
            type="text"
            placeholder="Search location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}

          {/* Location Options */}
          <div className="max-h-44 overflow-y-auto">
            {countries
              .filter((country:string) =>
                country.toLowerCase().includes(search.toLowerCase())
              )
              .map((country) => (
                <label
                  key={country}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelectLocation(country)}
                >
                  {country}
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(country)}
                    onChange={() => handleSelectLocation(country)}
                    className="hidden"
                  />
                  {selectedLocations.includes(country) ? (
                    <Check className="text-blue-500" size={18} />
                  ) : (
                    <span className="w-5 h-5 border rounded"></span>
                  )}
                </label>
              ))}
          </div>

          {/* Apply Button */}
          <button
            className="w-full mt-3 bg-blue-500 text-white py-1 rounded-full hover:bg-blue-600"
            onClick={toggleDropdown}
          >
            Apply Filter →
          </button>
        </motion.div>
      )}
    </div>
      {/* <div className="max-h-40 overflow-y-auto">
              {workTypes
                .filter((type) =>
                  type.toLowerCase().includes(search.toLowerCase())
                )
                .map((type) => (
                  <label
                    key={type}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    {type}
                    <input
                      type="checkbox"
                      checked={selectedWorkTypes.includes(type)}
                      onChange={() => handleSelectWorkType(type)}
                      className="hidden"
                    />
                    {selectedWorkTypes.includes(type) ? (
                      <Check className="text-blue-500" size={18} />
                    ) : (
                      <span className="w-5 h-5 border rounded"></span>
                    )}
                  </label>
                ))}
            </div> */}

      {/* Work Type Dropdown */}
      <div className="relative">
        <button
          onClick={toggleWorkTypeDropdown}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full  hover:border border-blue-600  transition sm:hidden"
        >
          Work Type <IoIosArrowDown />
        </button>

        {/* Dropdown Menu */}
        {isWorkTypeOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-xl p-4 z-50"
          >
            {/* Header with Clear button */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Type</span>
              <button
                onClick={clearWorkTypeFilters}
                className="text-red-500 text-sm"
              >
                Clear
              </button>
            </div>

            {/* Work Type Options */}
            <div className="max-h-40 overflow-y-auto">
              {workTypes
                .filter((type) =>
                  type.toLowerCase().includes(search.toLowerCase())
                )
                .map((type) => (
                  <label
                    key={type}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    {type}
                    <input
                      type="checkbox"
                      checked={selectedWorkTypes.includes(type)}
                      onChange={() => handleSelectWorkType(type)}
                      className="hidden"
                    />
                    {selectedWorkTypes.includes(type) ? (
                      <Check className="text-blue-500" size={18} />
                    ) : (
                      <span className="w-5 h-5 border rounded"></span>
                    )}
                  </label>
                ))}
            </div>

            {/* Apply Button */}
            <button
              className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={() => setIsWorkTypeOpen(false)}
            >
              Apply Filter →
            </button>
          </motion.div>
        )}
      </div>

      {/* User Type Dropdown with count badge */}
      {/* <button className="relative flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition sm:hidden">
        User Type <IoIosArrowDown />
        {userTypeCount > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-sm text-white bg-blue-600 rounded-full -mt-2 -mr-2">
            {userTypeCount}
          </span>
        )}
      </button> */}
      <div className="relative">
        <button
          onClick={toggleuserTypeDropdown}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:border border-blue-600  transition sm:hidden"
        >
          Experience <IoIosArrowDown />
        </button>

        {/* Dropdown Menu */}
        {isuserTypeOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-xl p-4 z-50"
          >
            {/* Header with Clear button */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Type</span>
              <button
                onClick={clearWorkTypeFilters}
                className="text-red-500 text-sm"
              >
                Clear
              </button>
            </div>

            {/* Work Type Options */}
            <div className="max-h-40 overflow-y-auto items-center">
              {userType
                .filter((type) =>
                  type.toLowerCase().includes(search.toLowerCase())
                )
                .map((type) => (
                  <label
                    key={type}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    {type}
                    <input
                      type="radio"
                      value={type}
                      checked={selectedWorkTypes.includes(type)}
                      onChange={() => handleSelectuserType(type)}
                      className="hidden"
                    />
                    {selecteduserTypes.includes(type) ? (
                      <Check className="text-blue-500" size={18} />
                    ) : (
                      <span className="w-5 h-5 border rounded"></span>
                    )}
                  </label>
                ))}
            </div>

            {/* Apply Button */}
            <button
              className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={() => setIsuserTypeOpen(false)}
            >
              Apply Filter →
            </button>
          </motion.div>
        )}
      </div>

      {/* Category Dropdown */}
      {/* <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition sm:hidden">
        Category <IoIosArrowDown />
      </button> */}
      <div className="relative">
        <button
          onClick={togglectogeryDropdown}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full  hover:border border-blue-600 transition sm:hidden"
        >
          Category <IoIosArrowDown />
        </button>

        {/* Dropdown Menu */}
        {iscategoryOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-xl p-4 z-50"
          >
            {/* Header with Clear button */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Type</span>
              <button
                onClick={clearWorkTypeFilters}
                className="text-red-500 text-sm"
              >
                Clear
              </button>
            </div>

            {/* Work Type Options */}
            <div className="max-h-40 overflow-y-auto">
              {Categories.filter((type) =>
                type.toLowerCase().includes(search.toLowerCase())
              ).map((type) => (
                <label
                  key={type}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  {type}
                  <input
                    type="checkbox"
                    checked={selectedWorkTypes.includes(type)}
                    onChange={() => handleSelectCategory(type)}
                    className="hidden"
                  />
                  {selectedWorkTypes.includes(type) ? (
                    <Check className="text-blue-500" size={18} />
                  ) : (
                    <span className="w-5 h-5 border rounded"></span>
                  )}
                </label>
              ))}
            </div>

            {/* Apply Button */}
            <button
              className="w-full mt-3 bg-blue-500 text-white py-1 rounded-full hover:bg-blue-600"
              onClick={() => setIscategoryOpen(false)}
            >
              Apply Filter →
            </button>
          </motion.div>
        )}
      </div>

      {/* Quick Apply Button */}
      <button className="ml-auto px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition lg:hidden sm:hidden">
        Quick Apply
      </button>
    </div>
  );
};

export default FilterBar;

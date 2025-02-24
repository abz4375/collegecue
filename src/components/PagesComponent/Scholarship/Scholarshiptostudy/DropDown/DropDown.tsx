"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface SimpleDropDownProps {
  type: string;
  options: string[];
}

const SimpleDropDown: React.FC<SimpleDropDownProps> = ({ type, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-[#7B90FF] gap-1 rounded-[30px] shadow-md  p-0">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="block  py-2  px-4 text-[#1E1E1E]  bg-white rounded-[30px]   "
        >
          <option value="" className="">
            {type}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  );
};

export default SimpleDropDown;

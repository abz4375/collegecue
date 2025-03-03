"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

interface Review {
  Answer: string;
}

interface FilterComponentProps {
  heading: string;
  reviews: Review[];
}

const FilterComponentCard: React.FC<FilterComponentProps> = ({
  heading,
  reviews,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(reviews.length).fill(false)
  );

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div className={`bg-white ${(heading === "Course Duration ")?'':'border-b-2'} border-gray-300`}>
      <div
        className="flex items-center cursor-pointer p-4 gap-20"
        onClick={handleToggleExpand}
      >
        <p className="flex-1 text-black font-semibold text-[14px]">
          {heading}
        </p>
        <div>
          {expanded ? (
            <FaChevronDown className="text-gray-600 rotate-180 transform duration-300" />
          ) : (
            <FaChevronDown className="text-gray-600 transform duration-300" />
          )}
        </div>
      </div>
      {expanded && (
        <div className="transform duration-300 pl-[19px] pb-2">
          {reviews.map(({ Answer }, index) => (
            <div key={index} className="flex items-center mb-1 mt-[]">
              <div className="my-2 flex items-center">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={checkedState[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="mr-2 form-checkbox h-4 w-4 text-gray-500 border-gray-500 bg-white fill-gray-500 appearance-none hidden"
                />
                <button
                  type="button"
                  className="text-gray-900 mr-[2px]"
                  onClick={() => handleCheckboxChange(index)}
                >
                  {checkedState[index] ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                </button>
                <label htmlFor={`checkbox-${index}`} className="text-sm text-gray-600">
                  &nbsp;&nbsp;&nbsp;{Answer}
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponentCard;

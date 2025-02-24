import React, { useState } from "react";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaChevronDown } from "react-icons/fa";
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

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div
        className="flex items-center cursor-pointer p-4"
        onClick={handleToggleExpand}
      >
        <h6 className="flex-1 text-lg text-indigo-900 font-semibold">
          {heading}
        </h6>
        <FaChevronDown className="text-gray-600" />
      </div>
      {expanded && (
        <div className="p-4">
          {reviews.map(({ Answer }, index) => (
            <div key={index} className="flex items-center mt-3">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-800">{Answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponentCard;

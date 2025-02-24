import React from "react";

interface FilterButtonProps {
  onClick?: () => void;
  children: any;
}

const FilterButton: React.FC<FilterButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="flex items-center justify-center gap-1 bg-white rounded-full text-gray-500 px-4 py-1.5 border-2 border-gray-300 font-semibold hover:border-blue-200 hover:border-opacity-75 hover:bg-blue-200 hover:bg-opacity-75 hover:text-blue-500  focus:border-blue-200 focus:border-opacity-75 focus:bg-blue-200 focus:bg-opacity-75 focus:text-blue-500  transition-all duration-150"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;

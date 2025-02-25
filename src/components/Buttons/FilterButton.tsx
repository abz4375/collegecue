import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => any;
  reviewpage?: boolean;
  reviewfilter?: boolean;
}

const FilterButton: React.FC<Props> = ({ children, onClick, reviewpage, reviewfilter }) => {
  // console.log('extraclass:', extraclass); // Debugging line to check the value of extraclass
  const extraclass = "flex text-center items-center rounded-[1.5rem] gap-2 mr-2 py-[5px] px-[18px] font-semibold border-[2px] border-solid cursor-pointer bg-white hover:bg-blue-100 hover:bg-opacity-75 transition-all text-gray-600 border-gray-300 hover:border-blue-300 hover:border-opacity-75 hover:shadow-md transition-all duration-300"

  const extraclass2 = "flex text-center items-center rounded-[1.5rem] gap-2 bg-white text-gray-600 mr-2 py-[5px] px-[18px] font-semibold border-[2px] border-solid cursor-pointer border-gray-300 hover:bg-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:text-blue-500 hover:bg-blue-100 hover:bg-opacity-75"

  if (reviewfilter) return (
    <div
      className={extraclass}
      onClick={onClick}
    >
      {children}
    </div>
  );

  return (
    <div
      className={`${(reviewpage)?extraclass2:"flex text-center items-center rounded-[1.5rem] gap-2 bg-white text-gray-600 mr-2 py-[5px] px-[18px] font-semibold border-[2px] border-solid cursor-pointer border-gray-300 hover:bg-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 "}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FilterButton;

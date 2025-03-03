import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Search = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="h-[56px] bg-[#fff] shadow-[0px_0px_3rem_rgba(123,144,255,0.15)] gap-2 rounded-full border-blue-200 border flex items-center px-6 ">
      <MdOutlineSearch aria-label="search" className=" text-blue-400 text-2xl" />

      <input
        type="text"
        className=" font-medium leading-6 outline-none border-none text-gray-600 w-full"
        placeholder={placeholder}
        aria-label= {placeholder}
      />
    </div>
  );
};

export default Search;

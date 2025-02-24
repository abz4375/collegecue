import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Search = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="h-[56px] bg-[#fff] shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] gap-2 rounded-lg flex items-center px-2 ">
      <MdOutlineSearch aria-label="search" className=" text-purple-400 " />

      <input
        type="text"
        className=" font-medium leading-6 outline-none border-none"
        placeholder={placeholder}
        aria-label= {placeholder}
      />
    </div>
  );
};

export default Search;

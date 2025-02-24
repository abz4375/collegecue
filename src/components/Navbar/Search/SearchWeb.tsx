import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
const SearchWeb = ({
  searchOpen,
  setSearchOpen,
}: {
  searchOpen: boolean;
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className="relative">
          <div
            className={`relative overflow-hidden ${
              searchOpen
                ? "w-[15vw] md:w-[40vw] rounded-3xl bg-white"
                : "w-[40px] rounded-full bg-transparent"
            } transition-all duration-1000`}
          >
            <input
              type="search"
              name="search"
              placeholder="Search"
       
              autoComplete="off"
              className={`search__input ${
                searchOpen ? "w-[14vw] md:w-[38vw] opacity-100 p-4" : "w-0 opacity-0 p-0"
              } transition-all duration-1000 h-[35px] bg-white border-none outline-none font-semibold `}
            />
            <button
              onClick={() => {
                setSearchOpen((prev) => !prev);
                }}
              className="w-8 h-8 bg-richblue-600 rounded-full absolute top-[1.1px] right-1 mx-auto grid place-items-center place-content-center transition-[transform] duration-[0.6s]"
            >
              <AiOutlineSearch
                className={`text-xl text-richblack-5 text-white absolute ${
                  searchOpen ? "rotate-90 scale-0" : "scale-100"
                } transition-all duration-[2s]`}
              />
              <AiOutlineCloseCircle
                className={`text-xl text-richblack-5 absolute transition-all duration-1000 ${
                  searchOpen ? "scale-100" : "-rotate-90 scale-0"
                } transition-all duration-[2s]`}
              />
            </button>
          </div>
    

        </div>
      );
};

export default SearchWeb;

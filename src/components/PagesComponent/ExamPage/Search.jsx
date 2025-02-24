import React from 'react'
import { MdOutlineSearch } from "react-icons/md";


const Search = () => {
  return (
    <div className='mt-12 flex items-start gap-5 w-3/4 self-stretch md:w-full sm:w-full focus:bg-transparent  rounded-[5px] p-3 shadow-sm bg-[#c1c1c1] pt-[20px] pb-[20px] pl-[20px]'>
        <MdOutlineSearch size={25} color='white'/>
        <input type="text" placeholder='Search Entrance Exams' className='flex-1 placeholder:font-[500] outline-none  !text-indigo-900 text-[16px] '/>
    </div>
  )
}

export default Search
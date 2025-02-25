import React from 'react'
import newLetter from "../../../assets/News/news.png";
import Image from 'next/image';

const SubscribeBox = () => {
  return (
    <>

      <div className="max-w-[1180px] h-[184.59px] hover:bg-white relative rounded-lg xl:mx-16 ml-44 bg-white-300 mb-14 
      flex flex-row items-center justify-start hover:shadow-xl hover:scale-95 duration-500 transition-all ease-in-out ">
        <Image className="w-[150px] h-[150px] top-[20px] ml-[8rem] xl:hidden md:hidden" src={newLetter} alt="..." />
       <div className='flex flex-col gap-8 m-8 ml-48 md:ml-4'>
        <p className='font-semibold text-[30px] md:text-[18px] sm:text-[12px] text-gray-800 '>Subscribe to Our Newsletter</p>
        <div className='flex flex-wrap items-center gap-4'>
          <input
          type="text"
          placeholder='Email'
          className='w-[280px] sm:w-[260px] p-2 h-[40px] focus:outline-none border border-gray-400'
          />
          <button className='W-[130px] h-[44px] bg-blue-400 text-white text-sm flex justify-center items-center p-[8px] px-4 rounded-full hover:bg-blue-600'>
            SUBSCRIBE
          </button>
        </div>
       </div>
      </div>
    </>
  )
}

export default SubscribeBox


'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

const CollegeCard = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-[320px] sm:w-full h-auto mx-auto mb-4 rounded-2xl bg-white px-2 py-3 hover:shadow-3xl relative '>
      <div className='w-full h-44 rounded-2xl flex items-center justify-center overflow-hidden'>
        <Image src={props.img} alt="..." className='h-full w-full object-cover rounded-2xl' loading='lazy' />
      </div>
      <div className='flex flex-row flex-wrap items-center justify-evenly mx-8'>
        <button 
          className='text-white border bg-[#7B90FF] border-transparent hover:bg-white hover:text-black w-fit h-8 px-2
          hover:border-gray-500 text-[0.6rem] font-bold my-2 rounded-xl capitalize transition-[background-color 0.3s, color 0.3s, border-color 0.3s]'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link href={`/top-universities/${props.titles}`}>{props.titles}</Link> 
        </button>
        <div className={classNames(
            'duration-500 transition-all ease-in-out', 
            { 'opacity-0 max-h-0 overflow-hidden': !isHovered },
            { 'opacity-100 max-h-screen': isHovered }
          )}>
          <p className='text-start text-base font-semibold mt-2 text-[#210366]'>{props.contents}</p>
          <p className='text-start text-xs font-medium my-2 text-[#3858FC] h-20'>{props.contents_body}</p>
        </div>
        <div className='flex justify-center items-center'>
          <button className=' bottom-3 bg-transparent capitalize w-52 my-2 transition-[border-color 0.3s] justify-center text-[#3858FC]'>
            <Link href={`/top-universities/${props.titles}`}>{props.content_link}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;

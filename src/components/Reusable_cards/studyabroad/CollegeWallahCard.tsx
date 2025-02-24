import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CollegeCard{
    img:any,
    bgColor:string,
    title:string,
    content:string,
    link:string,
}

const CollegeWallahCard:React.FC<CollegeCard> = ({
    img,
    bgColor,
    title,
    content,
    link,
}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[300px] h-[380px] 
    rounded-[1.3rem] bg-white my-4 p-[5px] shadow-3xl hover:scale-105 hover:duration-300'>
        <div className='w-full h-auto flex items-center justify-center overflow-hidden rounded-2xl'>
            <Image src={img} alt={title} className='h-full object-contain' />
        </div>
        <p className='text-center text-base font-bold mx-auto my-4'>{title}</p>
        <hr className='w-[90%]' />
        <p className='text-center text-[0.8rem] font-semibold m-4'>{content}</p>
        <hr className='w-[90%]' />
        <Link href="#" className='no-underline'>
            <p className='text-center my-4 text-base font-normal capitalize rounded-lg p-[5px]
            hover:text-[#fff] hover:scale-105 hover:bg-cardlinkbg hover:duration-300'>
                {link}{" "}
            </p>
        </Link>
    </div>
  )
}

export default CollegeWallahCard
import React from 'react';
import Image from 'next/image';

interface FactCard{
    img:any,
    title:string,
    content:string
}

const FactCard:React.FC<FactCard> = ({
    img,
    title,
    content
}) => {
  return (
    <div className='flex flex-col items-center justify-center h-60 w-60 bg-[#7B90FF] m-4 
    rounded-tl-[20%] rounded-br-[20%] rounded-tr-[2rem] rounded-bl-[2rem] shadow-3xl'>
        <Image src={img} alt={title} className='w-[100px] h-[80px] object-cover' />
        <p className='text-white font-bold text-base mt-[0.7rem]'>{title}</p>
        <p className='text-white font-medium text-[0.8rem] mt-[0.2rem]'>{content}</p>
    </div>
  )
}

export default FactCard
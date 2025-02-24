'use client';
import React, {useState} from 'react'
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

interface clgCard{
    img:any,
    date:string,
    icon:any,
    contents:string,
    contents_body:string,
    content_link:string
}
const CollegeCard:React.FC<clgCard> = ({
    img,
    date,
    icon,
    contents,
    content_link,
    contents_body
}) => {
    const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className='flex flex-col h-[400px] w-[350px] rounded-2xl bg-white m-4 p-3 shadow-newd'>
        <div className={`relative h-[175px] w-full rounded-[20px]`}>
            <Image src={img} alt="..." className='w-full h-full overflow-hidden object-center' />
            <p className='bg-[#FFFFFF] bg-opacity-80 text-black rounded-xl w-auto left-[5%] absolute bottom-[10%] p-[5px]'>
                {date}
            </p>
            <button className='absolute bottom-[5%] right-[5%] w-auto transition-colors duration-300'
            onClick={toggleLike}>
                <FaHeart className={`text-[#4f7be9] ${liked?'text-[#ff0811]':'text-[#4f7be9]'}`}/>
            </button>
        </div>
        <p className='text-center text-sm text-[#210366] mt-2 mx-4 font-bold'>{contents}</p>
        <p className='text-center text-xs font-semibold h-[130px] text-[#210366]'>{contents_body}</p>
        <Link href="#">
            <p className='text-center text-[0.6rem] font-bold underline capitalize text-[#210366]'>{content_link}{" "}</p>
        </Link>
    </div>
  )
}

export default CollegeCard
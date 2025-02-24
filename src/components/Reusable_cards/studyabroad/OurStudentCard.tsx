import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdPlayArrow } from "react-icons/md";


interface StudentCard{
    id:number,
    thumbnail:any,
    title:string,
    subtitle:string,
    youtubeLink:string
}

const OurStudentCard:React.FC<StudentCard> = ({
    id,
    thumbnail,
    title,
    subtitle,
    youtubeLink
}) => {
  return (
    <>
    <div className='w-[400px] mb-3' key={id}>
        <div className='relative w-full'>
            <Link href={youtubeLink} >
                <Image src={thumbnail}
                alt="..."
                className='w-full'
                />
            </Link>
            <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#D32F2F] w-16 h-9 flex justify-center items-center'>
                <MdPlayArrow className='text-white text-2xl'/>
            </button>
        </div>
        <p className='font-semibold text-black'>
            <Link href={youtubeLink} className='no-underline text-inherit'>
                {title}
            </Link>
        </p>
        <p className='text-[0.6rem]'>
            {subtitle}
        </p>
    </div>
    </>
  )
}

export default OurStudentCard
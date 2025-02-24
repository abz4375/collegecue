import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ExamCard{
    img:any,
    heading:string,
    content:string,
    link:string
}

const ExamCard:React.FC<ExamCard> = ({
    img,
    heading,
    content,
    link,
}) => {
  return (
    <div className='mt-4 ml-8 mb-4 rounded-[28px] shadow-newd p-[10px] flex flex-col items-center justify-center w-[350px] bg-white]'>
        <div className='flex justify-center items-center w-[330px]'>
            <Image src={img} alt={heading} className='w-[50px] h-[50px]' />
            <p className='text-[#210366] text-base font-bold pl-5'>
                {heading}
            </p>
        </div>
        <hr className='border border-[#7B90FF33] w-[220px] h-[5px] justify-center mt-4' />
        <p className='text-[#210366] mt-2 w-full text-xs'>{content}
        <Link href="https://collegedunia.com/exams/ielts" className='text-[#210366] font-bold no-underline'>
            Read more
            </Link>
            </p>        
        <hr className='border border-[#7B90FF33] w-[220px] h-[5px] justify-center mt-4' />
        <Link href="https://collegedunia.com/exams/ielts/application-process" 
        className='mt-4 no-underline font-semibold uppercase text-[#210366] text-xs'>
            {link}
        </Link>

    </div>
  )
}

export default ExamCard
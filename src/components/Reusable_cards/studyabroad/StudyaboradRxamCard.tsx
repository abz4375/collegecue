import React from 'react'
import Link from 'next/link'

interface StudyCard{
    examName: string,
    examDescription: string,
    registrationPage: string,
    readMore: string
}

const StudyaboradRxamCard:React.FC<StudyCard> = ({
    examName,
    examDescription,
    registrationPage,
    readMore 
}) => {
  return (
    <div className='w-[22rem] min-h-[300px] rounded-[18px] flex flex-col justify-around text-center my-4 mx-auto 
    shadow-9xl transition-shadow duration-300 ease-in-out hover:shadow-2x9xl'>
        <div className='py-1 px-[1.8rem] h-[5.5rem] bg-[#4F5DE4] rounded-tr-[18px] rounded-tl-[18px] overflow-hidden flex justify-center items-center'>
            <p className='text-[1.2rem] text-[#ffffff] font-bold'>{examName}</p>
        </div>
        <div className='py-2 px-4 overflow-hidden'>
            <p className='text-[0.8rem] font-medium leading-6 text-center text-[#210366]'>
            {examDescription ? examDescription.slice(0, 140) + "..." : ""}
            </p>
        </div>
        <button className='text-[#ffffff] bg-[#7B90FF] w-[190px] h-[37px] font-semibold text-[0.9rem] tracking-wide rounded-xl my-2 mx-auto
        hover:bg-[#5f77db]'>
            {registrationPage}
        </button>
        <button className='block text-[#210366] text-[0.9rem] font-semibold leading-6 text-center normal-case my-[15px]
        mx-auto hover:text-[#FF8911]'>
            <Link href={readMore} className='no-underline'>Read More</Link>
        </button>
    </div>
  )
}

export default StudyaboradRxamCard
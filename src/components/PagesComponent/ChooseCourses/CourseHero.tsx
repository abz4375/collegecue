import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import courses from "../../assets/ChooseCourse/courses.png";
import xysx from "../../../assets/ChooseCourse/earth-globe-with-graduation-cap-education-day.png"
import Image from 'next/image';


const data=[
    {
        course:"Web/APP Developement"
    },
    {
        course:"Data Science"
    },
    {
        course:"Marketing/Fianace"
    },
    {
        course:"UI/UX"
    }
];
const CourseHero = () => {
  return (
    <div className='max-w-full h-auto bg-gray-200 px-16 md:px-4'>
        <div className='flex items-center justify-between flex-wrap md:justify-center ml-14'>
            <div className='flex flex-col left-0 w-auto py-12 mt-8 md:text-2xl gap-2'>
                <p className='text-3xl text-gray-900 font-bold text-wrap md:text-2xl mt-5 '>
                    GET THE BEST QUALITY COURSES 
                    <span className='text-blue-500 md:text-2xl'>{" "}ALL UPTO 40% </span>
                </p>
                <p className='text-2xl text-gray-900 font-bold text-wrap'>
                LEARN FROM EXPERIENCED INDUSTRY EXPERT
                </p>
                <div className='flex flex-wrap justify-start items-center gap-5 md:gap-4 mt-4'>
                    {data.map((item,index)=>(
                         <button className='px-3 py-1 hover:border-2 hover:border-blue-500 rounded-3xl p-2 hover:text-blue-600
                         transition-all ease-in-out duration-300 text-base text-gray-900' key={index}>
                            {item.course}
                         </button>
                    ))}
                </div>
                <div className='mt-2 flex flex-col justify-start gap-2'>
                    <div className='flex flex-row items-center gap-2 md:items-baseline'>
                        <FaBookOpen  className='text-gray-900'/>
                        <p className='text-xl text-gray-900'>Enroll in more than <span className='text-blue-600'>400+ courses</span></p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <FaGlobe className='text-gray-900'/>
                        <p className='text-xl text-gray-900'>Lifetime Access</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <TbCertificate className='text-gray-900'/>
                        <p className='text-xl text-gray-900'>Free Certification</p>
                    </div>
                </div>
                <div className='mt-6'>
                <button className='w-[150px] h-[40px] rounded-3xl bg-gray-100 text-gray-900 flex justify-center items-center hover:bg-blue-500 hover:text-white'>
                    Enroll Now
                </button>
                </div>
            </div>
            <div className='right-0 flex justify-end '>
                <Image src={xysx} alt=".." className='w-full h-[400px] md:w-[350px] md:h-[300px] sm:h-[250px] object-contain sm:hidden lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default CourseHero
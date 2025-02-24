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
    <div className='max-w-full h-auto bg-coursehero px-16 md:px-4'>
        <div className='flex items-center justify-between flex-wrap md:justify-center'>
            <div className='flex flex-col left-0 w-auto py-12'>
                <p className='text-3xl text-white font-bold text-wrap'>
                    GET THE BEST QUALITY COURSES 
                    <span className='text-yellow-300'>{" "}ALL UPTO 40%</span>
                </p>
                <p className='text-2xl text-white font-bold text-wrap'>
                LEARN FROM EXPERIENCED INDUSTRY EXPERT
                </p>
                <div className='flex flex-wrap justify-start items-center gap-8 md:gap-4 mt-4'>
                    {data.map((item,index)=>(
                         <button className='h-auto w-auto hover:border-2 hover:border-white rounded-xl p-2 hover:scale-105
                         transition-all ease-in-out duration-300 text-base text-white' key={index}>
                            {item.course}
                         </button>
                    ))}
                </div>
                <div className='mt-4 flex flex-col justify-start'>
                    <div className='flex flex-row items-center gap-2 md:items-baseline'>
                        <FaBookOpen  className='text-white'/>
                        <p className='text-xl text-white'>Enroll in more than <span className='text-yellow-300'>400+ courses</span></p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <FaGlobe className='text-white'/>
                        <p className='text-xl text-white'>Lifetime Access</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <TbCertificate className='text-white'/>
                        <p className='text-xl text-white'>Free Certification</p>
                    </div>
                </div>
                <div className='mt-6'>
                <button className='w-[120px] h-[40px] rounded-xl bg-[#004a2d] text-white flex justify-center items-center'>
                    Enroll Now
                </button>
                </div>
            </div>
            <div className='right-0 flex justify-end '>
                <Image src={xysx} alt=".." className='w-full h-[450px] md:w-full md:h-full object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default CourseHero
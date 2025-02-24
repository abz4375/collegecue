import React from 'react'
import AcademicCounsillercard from '../../../Reusable_cards/studyabroad/AcademicCounsillercard'
import AcadCounsellor from '../../../DummyData/studyabraoddummy/AcademicData'
import Image from 'next/image'
import AcadCons from "../../../../assets/studyAbroad/AcademicCounsiller/AcadCounsell.png"

const AcademicCounsiller = () => {
  return (
    <div className='p-8 rounded-[28px] shadow-newd max-w-[1152px] mx-auto my-20'>
        <div className='flex flex-col justify-center mb-3 items-center w-full'>
            <div className='font-bold text-xl text-[#210366] text-start mx-auto'>
                <p className='font-semibold'> How Our Academic Counsellor Can Help You : Get Admission</p>
            </div>
            <div className='flex flex-row mt-6 items-center 
            md:flex-col-reverse md:justify-center md:gap-[20px]'>
                <div className='flex flex-wrap md:w-auto md:justify-center'>
                  {AcadCounsellor.map((item,index)=>{
                    return(
                      <AcademicCounsillercard key={index} {...item} />
                    )
                  })}
                </div>
                <div className='w-[70%]'>
                  <Image
                  src={AcadCons} alt="..."
                  className='h-full w-full object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AcademicCounsiller
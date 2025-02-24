import React from 'react'
import CollegeWallahCard from '@/components/Reusable_cards/studyabroad/CollegeWallahCard'
import CollegeWallahData from '../../../DummyData/studyabraoddummy/CollegeWallahData'
import Studyabroadheading from '@/components/Heading/Studyabroadheading'

const CollegeWallahmain = () => {
  return (
    <div className=' max-w-[1152px] mx-auto flex flex-col justify-start mt-20 mb-20 flex-wrap'>
        <div><Studyabroadheading heading='Collegecue Free Counselling: Let Us Guide You' /></div>
        <div className='text-base tracking-wide text-[#210366] font-semibold py-[10px] flex sm:flex-wrap w-full'> 
        <p>  Looking into Study Abroad colleges and universities as an
  international student can be a challenge, but it&apos;s one you can
  overcome! From how to look for accredited schools to what you should
  write about on your applications, our expert counsellors will help you
  at every step.</p></div>
        <div className='flex flex-row flex-wrap items-center justify-evenly my-8 sm:flex-col'>
            {CollegeWallahData.map((item,index)=>{
                return(
                    <CollegeWallahCard key={index} {...item} />
                )
            })}
        </div>
    </div>
  )
}

export default CollegeWallahmain
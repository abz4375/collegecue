'use client';
import Studyabroadheading from '@/components/Heading/Studyabroadheading'
import React from 'react'
import GraphData from '../../../DummyData/studyabraoddummy/ProgramData'
import PieCard from '@/components/Reusable_cards/studyabroad/PieCard'


const ChooseProgrameToStudy = () => {
  return (
    <div className='my-20'>
        <Studyabroadheading heading='Choose A Program To Study' />
        <p className='text-[#210366] text-xs font-semibold tracking-wide my-4 mx-0'>
        Before we begin, the first main step is to finalize the choice of
          study students want to pursue for the future. There are a lot of
          programs offered at the associate, bachelor’s, master’s, doctoral and
          certificate levels in a wide variety of professional fields such as
          Business & Finance, Medicine, Engineering & Technology, Education,
          History, Literature, Visual & Performing Arts, Politics, etc. Detailed
          below are some of the most opted programs among Indian students
          studying abroad.
        </p>
        <div className='flex flex-wrap justify-center items-center gap-4'>
            {GraphData.map((item,index)=>(
                <PieCard key={index} {...item}/>
            ))}
        </div>
    </div>
  )
}

export default ChooseProgrameToStudy
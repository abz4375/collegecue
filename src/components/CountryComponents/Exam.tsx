import React from 'react'
import ExamCard from '../Reusable_cards/CountryExamCard'

const Exam = ({exams,country}:any) => {
  return (
    <div className='mt-5'>
        <p className='text-[#41355D] font-bold text-[30px]'>Exams for {country}</p>
        <div className='flex items-center justify-center flex-row flex-wrap'>
            {exams.map((item:any,index:any)=>(
                <ExamCard key={index} {...item} />
            ))}
        </div>
    </div>
  )
}

export default Exam
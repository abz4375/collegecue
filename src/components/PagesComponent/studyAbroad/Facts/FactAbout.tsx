import React from 'react'
import FactData from '../../../DummyData/studyabraoddummy/FactData'
import FactCard from '@/components/Reusable_cards/studyabroad/FactCard'
import Studyabroadheading from '@/components/Heading/Studyabroadheading'


const FactAbout = () => {
  return (
    <div className='flex flex-col justify-start my-20'>
        <Studyabroadheading heading='A FEW FACTS ABOUT US..' />
        <div className='flex flex-row flex-wrap items-center justify-center'>
            {FactData.map((item,index)=>(
                <FactCard key={index} {...item} />
            ))}
        </div>
    </div>
  )
}

export default FactAbout
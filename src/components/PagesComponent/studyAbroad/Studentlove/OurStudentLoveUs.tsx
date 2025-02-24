import Studyabroadheading from '@/components/Heading/Studyabroadheading';
import React from 'react';
import OurStudentData from '../../../DummyData/studyabraoddummy/OurStudentData';
import OurStudentCard from '@/components/Reusable_cards/studyabroad/OurStudentCard';

const OurStudentLoveUs = () => {
  return (
    <div>
        <div className='mt-20 mb-4 mx-0'>
            <Studyabroadheading heading='Our Student Loves us' />
        </div>
        <div className='flex flex-wrap justify-center items-center gap-5'>
            {OurStudentData.map((item,index)=>(
                <OurStudentCard key={index} {...item} />
            ))}
        </div>
    </div>
  )
}

export default OurStudentLoveUs
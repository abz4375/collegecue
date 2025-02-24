import React from 'react';
import CounsellorsCardData from '../../../DummyData/studyabraoddummy/DataFile';
import CounsillerCard from '@/components/Reusable_cards/studyabroad/CounsillerCard';
import Studyabroadheading from '@/components/Heading/Studyabroadheading';

const MeetOurCounsiller = () => {
  return (
    <div className='my-20 max-w-[1152px] mx-auto'>
        <Studyabroadheading heading='Meet Our Counsellors' />
        <div className='grid grid-cols-4  xl:grid-cols-2 sm:grid-cols-1 items-center gap-4 mt-8'>
            {CounsellorsCardData.map((item,index)=>(
                <CounsillerCard key={index} {...item} />
            ))}
        </div>
    </div>
  )
}

export default MeetOurCounsiller
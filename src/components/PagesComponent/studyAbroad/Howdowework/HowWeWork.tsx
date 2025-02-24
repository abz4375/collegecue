import React from 'react'
import Cardtwo from '../../../DummyData/studyabraoddummy/Cardtwo';
import Studyabroadheading from '@/components/Heading/Studyabroadheading';
import Howwework from '@/components/Reusable_cards/studyabroad/Howwework';


const HowWeWork = () => {
  return (
    <div className='my-20'>
        <Studyabroadheading heading='How Do We Work' />
        <div className='flex flex-wrap flex-row items-center justify-evenly'>
            {Cardtwo.map((item,index)=>(
                <Howwework key={index} {...item} />
            ))}
        </div>
    </div>
  )
}

export default HowWeWork
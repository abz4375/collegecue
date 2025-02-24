import React from 'react'
import { FC } from "react";
import StudyAbroadCard from '../../Reusable_cards/StudyAbroadCard';
import Abroad from '../../DummyData/StudyAbroadData';
import Studyabroadheading from '../../Heading/Studyabroadheading';

interface AbroadData {
  img: any;
  cardName: any;
  check: any;
  no: any;
  fee: any;
  ranking: any;
  keyFact1: any;
  keyFact2: any;
  keyFact3: any;
}

const Studydestination:FC = () => {
  return (
    <div className='max-w-[1152px] mx-auto flex flex-col justify-start mt-20 mb-20 sm:justify-center'>
        <Studyabroadheading heading='CHOOSE YOUR STUDY DESTINATION' />
            <div className="flex justify-center items-center sm:flex-col gap-4">
            {Abroad.map((val: AbroadData, index: any) => (
            <StudyAbroadCard
              key={index}
              img={val.img}
              name={val.cardName}
              check={val.check}
              no={val.no}
              fee={val.fee}
              rank={val.ranking}
              keyFact1={val.keyFact1}
              keyFact2={val.keyFact2}
              keyFact3={val.keyFact3}
            />
          ))}
            </div>
    </div>
  )
}

export default Studydestination
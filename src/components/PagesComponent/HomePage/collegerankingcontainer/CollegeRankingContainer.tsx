import React from 'react';
import DataFile from '../../../DummyData/CityDatafile';
import CollegeRankingCard from './CollegeRankingCard';

const CollegeRankingContainer = () => {
  return (
    <div className='mt-16 mb-16'>
      <div className='flex justify-items-center items-center flex-col'>
        <div className='flex flex-row flex-wrap w-full'>

        </div>
        <div className='flex flex-row flex-wrap justify-center gap-8'>
        {DataFile.map((val,index) => {
              return <CollegeRankingCard key={index} img={val.img} city={val.city}></CollegeRankingCard>;
            })}
        </div>
      </div>
    </div>
  )
}

export default CollegeRankingContainer
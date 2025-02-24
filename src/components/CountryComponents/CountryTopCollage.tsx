import React from 'react'
import CollageCard from '../PagesComponent/HomePage/Topcollege/CollegeCard'


const CountryTopCollage = ({ topcollege,country  }: any) => {
  return (
    <div className='mt-20'>
      <div className='flex flex-row max-w-full justify-between mb-[10px] m-0'>
        <p className='text-[30px] text-[#41355D] font-bold capitalize ml-4'>
        Top college collection of {country}
        </p>
      </div>
      <div className='flex flex-wrap flex-row justify-center items-center mt-8'>
        {topcollege.map((val:any,index:any)=>{
          return (
            <CollageCard 
            key={index}
            img={val.img}
            icon={val.icon}
            bgColor={val.bgColor}
            titles={val.titles}
            contents={val.contents}
            contents_body={val.contents_body}
            content_link={val.content_link}
            />
          ) 
        })}
        </div>      
    </div>
  )
}

export default CountryTopCollage
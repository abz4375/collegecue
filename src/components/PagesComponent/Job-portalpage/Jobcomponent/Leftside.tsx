import React from 'react'
import jobdata from './LeftsideData' 
import FilterComponentCard from '@/components/Allfilters/Filter/FilterCardComponent'

const Leftside = () => {
    const jobtype=jobdata;
  return (
    <div className='w-auto h-auto px-1 py-4 shadow-3xl flex items-start justify-start flex-col rounded-2xl'>
        <div className='text-2xl font-bold text-blue-900 ml-4 mb-8'>
            Filter By
        </div>
        <div className='w-full rounded-2xl py-2 px-2'>
        {jobtype.map((data,index)=>(
             <FilterComponentCard key={index} {...data}/>
        ))}
       </div>
    </div>
  )
}

export default Leftside
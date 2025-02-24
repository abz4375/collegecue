import React from 'react'
import ScholarshipCard from '../Reusable_cards/CountryScholarShipCard'

const ScholarshipComp = ({scholar,country}:any) => {
  return (
    <div className='mt-5'>
        <p className='font-bold text-[30px] text-[#41355D]'>Popular Scholarship For {country}</p>
        <div className='flex flex-row flex-wrap items-center justify-center'>
            {scholar.map((item:any,index:any)=>(
                <ScholarshipCard key={index} {...item} />
            ))}
        </div>
    </div>
  )
}

export default ScholarshipComp
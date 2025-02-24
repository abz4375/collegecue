import React from 'react'
import Hero from './Hero'
import ShowCard1 from './ShowCard1'
import FooterCard from './FooterCard'
import ShowCard2 from './ShowCard2'

const CollegePredictor = () => {
  return (
    <div className=''>
      <Hero />
      <div className='my-40 max-w-[1536px] mx-auto'>
        <ShowCard1 data={[]} />
        <ShowCard2 />
        <FooterCard />
        </div>
    </div>
  )
}

export default CollegePredictor

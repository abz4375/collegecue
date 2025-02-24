import React from 'react'
import Hero from './Hero'
import RadioGroupRating from '../../RadioGroupRating'
import AllQuesAns from './AllQuesAns'

const PracticeQuestions = () => {
  return (
    <>
      <div className='ml-48  sm:ml-[-10rem]'>
        <Hero />
        <div className='mt-10'>
          <AllQuesAns />
        </div>
        <h6 className="text-xl text-black font-medium text-center mb-4 mt-10 sm:ml-14 sm:mr-2 sm:text-md sm:whitespace-normal">
          How likely are you to recommend collegecue.com to a friend or a colleague?
        </h6>
        <div className='sm:ml-40'>

          <RadioGroupRating />
        </div>
      </div>
    </>
  )
}

export default PracticeQuestions

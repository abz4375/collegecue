import GetAns from '@/components/PagesComponent/Q&A/GetAns'
import StudyAbroad from '@/components/PagesComponent/Q&A/StudyAbroad'
import React from 'react'

const Page = () => {
  return (
    <div className="flex items-center justify-center flex-col max-w-[1536px] my-20 mx-auto">
      <div className="flex  flex-col items-center justify-center">
        <GetAns />
        <StudyAbroad />
      </div>
    </div>
  )
}

export default Page
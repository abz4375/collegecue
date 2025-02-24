import PreniumCourse from '@/components/PagesComponent/ChooseCourses/PreniumCourse'
import FreeCourse from '@/components/PagesComponent/ChooseCourses/Freecourse'
import React from 'react'
import CourseHero from '@/components/PagesComponent/ChooseCourses/CourseHero'

const page = () => {
  return (
    <div  className="">
      <CourseHero />
        <div className='max-w-[1536px] mx-auto  '>
          <PreniumCourse />
          <FreeCourse />
        </div>
    </div>
  )
}

export default page
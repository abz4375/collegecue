import React from 'react'
import Courses from '@/components/Buttons/Courses';

const CollegeArticleCard = () => {
    const buttons = [
        {
            label: "Why Study Abroad?",
            link: "#",
        },
        {
            label: "Test Prep",
            link: "#",
        },
        {
            label: "Application",
            link: "#",
        },
        {
            label: "Funding",
            link: "#",
        },
        {
            label: "Visa",
            link: "#",
        },
        {
            label: "Travel & Stay",
            link: "#",
        },
        {
            label: "Post Degree",
            link: "#",
        },
      ];
  return (
    <div className='mb-16 mt-8 ml-4'>
         {buttons.map((button, index) => (
        <Courses key={index} link={button.link} dt={button.label} />
        ))}
    </div>
  )
}

export default CollegeArticleCard
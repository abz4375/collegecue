import React from 'react'
import StudyaboradRxamCard from '@/components/Reusable_cards/studyabroad/StudyaboradRxamCard';

const StudyData = () => {
    const data = [
        {
          examName: "International English Language Testing System [IELTS]",
          examDescription:
            "International English Language Testing System(IELTS) is an international standardized test that measures the level...",
          registrationPage: "IELTS Regrestration",
          readMore: "Read me",
        },
        {
          examName: "Test of English as a Foreign Language [TOEFL]]",
          examDescription:
            "Test of English as a Foreign Language (TOEFL) is an international standardized test conducted to assess the level of En....",
          registrationPage: "IELTS Regrestration",
          readMore: "Read me",
        },
        {
          examName: "Test of English as a Foreign Language [TOEFL]]",
          examDescription:
            "Test of English as a Foreign Language (TOEFL) is an international standardized test conducted to assess the level of En....",
          registrationPage: "IELTS Regrestration",
          readMore: "Read me",
        },
        {
          examName: "Graduate Record Examination [GRE]",
          examDescription:
            "Graduate Record Examination (GRE) is an international standardized test required for admission into Graduate schools in the United States...",
          registrationPage: "IELTS Regrestration",
          readMore: "Read me",
        },
        {
          examName: "Graduate Management Admission Test [GMAT]",
          examDescription:
            "Graduate Management Admission Test (GMAT) is conducted by GMAC for admission to nearly 5400 management courses in various Business Schools...",
          registrationPage: "IELTS Regrestration",
          readMore: "Read me",
        },
        {
          examName: "Scholastic Aptitude Test [SAT]",
          examDescription:
            "SAT is an international standardized test required for admission into most of the colleges in the United States. It is also accepted...",
          registrationPage: "IELTS Regrestration",
          readMore: "Read me",
        },
      ];
  return (
    <div className='flex justify-evenly items-start gap-10 h-auto flex-wrap my-4 mx-0'>
        {data.map((item,index)=>(
            <StudyaboradRxamCard key={index} {...item} />
        ))}
    </div>
  )
}

export default StudyData
'use client';
import React from 'react'
import Studyabroadheading from '../../Heading/Studyabroadheading'
import Faq from '../../Faq/Faq';



const StudyAbroadfaq = () => {
    const CanadaFAQsData = [
        {
          question:
            "What are the graduate admission requirements to study in Canada?",
          answer:
            "The admission requirements for graduate programs at the Canadian universities are course-specific. Generally students need a bachelor's degree in a relevant field with 70% aggregate, 1-3 years of work experience, GRE score of 300 or GMAT score of 580-600.",
        },
          {
          question:
            "What are the graduate admission requirements to study in Canada?",
          answer:
            "The admission requirements for graduate programs at the Canadian universities are course-specific. Generally students need a bachelor's degree in a relevant field with 70% aggregate, 1-3 years of work experience, GRE score of 300 or GMAT score of 580-600.",
        },
        {
          question:
            "What are the undergraduate admission requirements to study in Canada?",
          answer:
            "International students need a 12th grade certificate or equivalent for admission to undergraduate programs in Canada. Students need an overall aggregate of 70% in class 12 for admission to the top universities in Canada. Students need an IELTS score of 6.0 overall and 5.5 in each section for admission to the program.",
        },
        {
          question:
            "What are the supporting documents required for admission to the graduate programs in Canada?",
          answer:
            "Students need to demonstrate a 500 word Statement of Purpose, multiple LORs from academic and/or professional supervisors as supporting documents. Some universities might ask for samples or copies of published work/ portfolio. Graduate applicants in Canada need an IELTS score of 6.5 overall with band scores of 6.0.",
        },
        {
          question: "What is the minimum GPA for admissions in Canada?",
          answer:
            "International students need a minimum GPA of 3.0 on a 4.0 scale (83-86%) for admission to the top universities in Canada. Students also get admission across some of the universities in Canada with a lesser GPA but a good GPA makes your application strong.",
        },
        {
          question: "Is IELTS required to study in Canada?",
          answer:
            "IELTS is the majorly accepted standardised test score in Canada. International students with an IELTS score of 6.0 to 6.5 are commonly accepted by the top universities in Canada. ",
        },
      ];

  return (
    <div className='lg:mx-8 md:mx-4 mx-auto sm:mx-4 xl:mx-6 my-20'>
        <div className='max-w-[1152px] mx-auto'>
        <Studyabroadheading heading='Frequently Asked Questions (FAQs)' />
        </div>
        <div className='flex flex-wrap justify-center items-center sm:flex-col sm:flex-nowrap'>
            <Faq faqs={CanadaFAQsData} />
        </div>
    </div>
  )
}

export default StudyAbroadfaq
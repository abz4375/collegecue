'use client';
import Studyabroadheading from '@/components/Heading/Studyabroadheading'
import React from 'react'
import Barrtwo from './BarrTwo'

const TakeToTest = () => {
  return (
    <div>
        <Studyabroadheading heading='Tests to Take' />
        <p className='text-[#210366] text-[0.8rem] font-semibold tracking-wide m-4'>
        There are two types of tests international students must take before
          starting with the application process. These are Language Proficiency
          Tests (IELTS, TOEFL, PTE, etc) and Standardized Tests (SAT, ACT, GMAT,
          GRE, etc). Different countries have different preferences for one test
          over another. For instance:-
        </p>
        <p className='text-[#210366] text-[0.8rem] font-semibold tracking-wide m-4'>
        IELTS and PTE (Pearson Tests of English) exams are the most preferred
          language exams in the United Kingdom, Australia, and New Zealand.
        </p>
        <p className='text-[#210366] text-[0.8rem] font-semibold tracking-wide m-4'>
        TOEFL (Test of English as a Foreign Language) is widely accepted by
          the USA and Canadian universities.
        </p>
        <p className='text-[#210366] text-[0.8rem] font-semibold tracking-wide m-4'>
        Cambridge English Proficiency Tests (CAE & CPE) are given a huge
          preference by British universities.
        </p>
        <p className='text-[#210366] text-[0.8rem] font-semibold tracking-wide m-4'>
        SAT and/or ACT scores are widely accepted by countries for
          undergraduate programs.
        </p>
        <p className='text-[#210366] text-[0.8rem] font-semibold tracking-wide m-4'>
        GMAT/ GRE scores are globally accepted by the universities for
          graduate programs.
        </p>
        <div className='mx-auto w-full flex justify-center md:flex-col sm:flex-col sm:overflow-x-scroll 
        md:overflow-x-scroll lg:overflow-x-scroll xl:overflow-x-scroll'>
            <Barrtwo />
            <Barrtwo />
        </div>
    </div>
  )
}

export default TakeToTest
'use client'
import React from 'react';
import Prediction from './Prediction';
import Suggestion from './Suggestion';
import CollegeRank from './CollegeRank';
import { ExamNotificationRender } from '../ExamPage/ExamNotificationRender';
import {ExamNews} from '../ExamPage/ExamNews';

const CollegeInfo = () => {
  return (
    <div className='overflow-x-hidden'>
      <h1 className="text-2xl text-[#160048] font-bold mt-8 text-center mx-4">
        College Predictor: Predict Your Admission Chances based on Exam
      </h1>

      <Prediction />

      <div className="flex items-start max-w-full md:flex-col md:mb-10">
        <div className="flex-1 flex flex-col  md:w-full w-3/4">
          <Suggestion />
        </div>
        <div className="w-1/4 md:w-full mx-4 md:justify-center md:items-center md:mx-auto  flex-shrink-0 sm:flex md:flex-col">
          <ExamNews />
          <ExamNotificationRender />
        </div>
      </div>
      <CollegeRank />
    </div>
  );
};

export default CollegeInfo;


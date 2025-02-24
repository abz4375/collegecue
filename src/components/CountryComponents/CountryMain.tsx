import React from 'react'
import CountryHero from './CountryHero'
import TopplacesComponent from './TopplacesComponent'
import CountryTopCollage from './CountryTopCollage'
import AcademicCounsiller from '../PagesComponent/studyAbroad/Academic-counsiller/AcademicCounsiller'
import ChooseYourFuture from '../PagesComponent/studyAbroad/Yourfuture/ChooseYourFuture'
import FoundingCollege from './FoundingCollege'
import CountryCollegeRankingTable from './CountryCollegeRankingTable'
import Applicationtable from './Applicationtable'
import ScholarshipComp from './ScholarshipComp'
import Exam from './Exam'
import CountryFaqs from './CountryFaqs'
import Articleclg from './Articleclg'

interface Country {
  countryName: string,
  TopPlaces: any,
  TopCollege: any,
  FC: any
  CollegeRankingTable: any,
  ApplicationDatestable: any
  Scholorship: any,
  ArticleData:any,
  Examdata: any,
  Faqs: any
}

const CountryMain: React.FC<Country> = ({
  countryName,
  TopPlaces,
  TopCollege,
  FC,
  CollegeRankingTable,
  ApplicationDatestable,
  Scholorship,
  ArticleData,
  Examdata,
  Faqs,
}) => {
  return (
    <div>
      <CountryHero country={countryName} />
      <div className='max-w-[1200px] px-[24px] mx-auto'>
        <TopplacesComponent topplace={TopPlaces} country={countryName} />
        <CountryTopCollage topcollege={TopCollege} country={countryName} />
        <AcademicCounsiller />
        <ChooseYourFuture />
        <FoundingCollege FC={FC} />
        <CountryCollegeRankingTable clgRnktable={CollegeRankingTable} />
        <Applicationtable appdates={ApplicationDatestable} />
        <ScholarshipComp scholar={Scholorship} country={countryName} />
        <Articleclg article={ArticleData} />
        <Exam exams={Examdata} country={countryName} />
      </div>
      <div className='max-w-[1536px] px-[24px] mx-auto'>
      <CountryFaqs faqs={Faqs} />
      </div>
    </div>
  )
}

export default CountryMain
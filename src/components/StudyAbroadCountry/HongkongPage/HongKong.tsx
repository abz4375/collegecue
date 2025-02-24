import React from 'react';
import {TopPlacesData, 
  TopCollegesData, 
  CollegeArticleData, 
  FCCard, 
  CollegeRankingData, 
  ApplicationDatesData, 
  ScholarshipData, 
  ExamsData, 
  HongkongFAQsData } from './HongKongData';
import CountryMain from '../../CountryComponents/CountryMain';

const HongKong = () => {
  const countryName="Hong Kong"
  return (
    <div>
        <CountryMain countryName={countryName} 
                     TopPlaces={TopPlacesData}
                     TopCollege={TopCollegesData}
                     FC={FCCard}
                     CollegeRankingTable={CollegeRankingData}
                     ApplicationDatestable={ApplicationDatesData}
                     Scholorship={ScholarshipData}
                     ArticleData={CollegeArticleData}
                     Examdata={ExamsData}
                     Faqs={HongkongFAQsData}
                     />
    </div>
  )
}

export default HongKong
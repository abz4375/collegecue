import React from 'react'
import {
    TopPlacesData,
    topCollegesCard,
    CollegeArticleData,
    FCCard,
    CollegeRankingData,
    ApplicationDatesData,
    PopularScholarshipData,
    ExamsData,
    CanadaFAQsData,
  } from "./CanadaData";
  import CountryMain from '../../CountryComponents/CountryMain';

const CanadaPage = () => {
    const countryName="Canada"
    return (
      <div>
          <CountryMain countryName={countryName} 
                       TopPlaces={TopPlacesData}
                       TopCollege={topCollegesCard}
                       FC={FCCard}
                       CollegeRankingTable={CollegeRankingData}
                       ApplicationDatestable={ApplicationDatesData}
                       Scholorship={PopularScholarshipData}
                       ArticleData={CollegeArticleData}
                       Examdata={ExamsData}
                       Faqs={CanadaFAQsData}
                       />
      </div>
  )
}

export default CanadaPage
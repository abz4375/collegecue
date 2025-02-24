import React from 'react'
import {
    TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData, 
    FCCard, 
    CollegeRankingData, 
    ApplicationDatesData, 
    ScholarshipData, 
    ExamsData, 
    USAFAQsData
} from "./USAData";
import CountryMain from '../../CountryComponents/CountryMain';

const USApage = () => {
    const countryName="USA"
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
                       Faqs={ USAFAQsData}
                       />
      </div>
  )
}

export default USApage
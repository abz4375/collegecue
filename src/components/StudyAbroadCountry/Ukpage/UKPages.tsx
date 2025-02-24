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
    UKFAQsData
} from "./UKData";

import CountryMain from '../../CountryComponents/CountryMain';

const UKPages = () => {
    const countryName="UK"
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
                       Faqs={UKFAQsData}
                       />
      </div>
    )
}

export default UKPages
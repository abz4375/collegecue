import React from 'react'
import {TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData, 
    FCCard, 
    CollegeRankingData, 
    ApplicationDatesData,
     ScholarshipData, 
     ExamsData, 
     SwedenFAQsData} from "./Swedandata";

import CountryMain from '../../CountryComponents/CountryMain';

const SwedanPage = () => {
    const countryName="Swedan"
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
                       Faqs={SwedenFAQsData}
                       />
      </div>
    )
}

export default SwedanPage
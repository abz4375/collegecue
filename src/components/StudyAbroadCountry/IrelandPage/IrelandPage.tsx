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
    IrelandFAQsData 
} from "./IrelandData";
import CountryMain from '../../CountryComponents/CountryMain';

const IrelandPage = () => {
    const countryName="Ireland"
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
                       Faqs={IrelandFAQsData}
                       />
      </div>
    )
}

export default IrelandPage
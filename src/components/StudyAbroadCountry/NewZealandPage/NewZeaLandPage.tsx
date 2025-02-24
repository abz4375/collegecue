import React from 'react';
import {TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData,
    FCCard, 
    CollegeRankingData, 
    ApplicationDatesData, 
    ScholarshipData, 
    ExamsData, 
    NewZealandFAQsData} from "./NewZealandData";
import CountryMain from '../../CountryComponents/CountryMain';
const NewZeaLandPage = () => {
    const countryName="New Zealand"
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
                       Faqs={NewZealandFAQsData}
                       />
      </div>
  )
}

export default NewZeaLandPage
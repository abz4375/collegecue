import React from 'react';
import { TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData, 
    FCCard, 
    CollegeRankingData, 
    ApplicationDatesData, 
    ScholarshipData,
     ExamsData, 
     MalaysiaFAQsData } from "./MalaysiaData"
import CountryMain from '../../CountryComponents/CountryMain';

const MalaysiaPage = () => {
    const countryName="Malaysia"
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
                       Faqs={ MalaysiaFAQsData}
                       />
      </div>
    )
}

export default MalaysiaPage
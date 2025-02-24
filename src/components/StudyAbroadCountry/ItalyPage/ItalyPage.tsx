import React from 'react';
import {
    TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData, 
    FCCard, 
    CollegeRankingData, 
    ApplicationDatesData, 
    ScholarshipData, 
    ExamsData, 
    ItalyFAQsData 
} from "./ItalyData";
import CountryMain from '../../CountryComponents/CountryMain';

const ItalyPage = () => {
    const countryName="Italy"
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
                       Faqs={ ItalyFAQsData}
                       />
      </div>
    )
}

export default ItalyPage
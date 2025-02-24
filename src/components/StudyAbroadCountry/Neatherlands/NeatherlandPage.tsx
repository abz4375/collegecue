import React from 'react';
import { TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData, 
    FCCard, 
    CollegeRankingData, 
    ApplicationDatesData, 
    ScholarshipData, 
    ExamsData, 
    NetherlandsFAQsData } from "./NeatherLandData";
import CountryMain from '../../CountryComponents/CountryMain';

const NeatherlandPage = () => {
    const countryName="NeatherLands"
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
                       Faqs={NetherlandsFAQsData}
                       />
      </div>
    )
}

export default NeatherlandPage
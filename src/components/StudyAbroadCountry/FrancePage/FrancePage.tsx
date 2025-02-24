import React from 'react'
import {TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData, 
    FCCard, 
    CollegeRankingData, 
    ApplicationDatesData,
     ScholarshipData, 
     ExamsData, FranceFAQsData} from "./FranceData";
import CountryMain from '../../CountryComponents/CountryMain';
const FrancePage = () => {
    const countryName="France"
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
                     Faqs={FranceFAQsData}
                     />
    </div>
  )
}

export default FrancePage
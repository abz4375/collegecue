import React from 'react'
import {TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData, 
     FCCard, CollegeRankingData, 
     ApplicationDatesData, 
     ScholarshipData, ExamsData, 
     GermanyFAQsData} from "./GermanyData"
import CountryMain from '../../CountryComponents/CountryMain';

const GermanyPage = () => {
    const countryName="Germany"
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
                     Faqs={GermanyFAQsData}
                     />
    </div>
  )
}

export default GermanyPage
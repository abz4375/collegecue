import React from 'react'
import CountryMain from '../../CountryComponents/CountryMain'
import { TopPlacesData,TopCollegesData, FCCard,CollegeRankingData,ApplicationDatesData,CollegeArticleData,ScholarshipData,ExamsData,USAFAQsData } from './AustraliaData'

const AurtaliaPage = () => {
    const countryName="Australia"
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
                     Faqs={USAFAQsData}
                     />
    </div>
  )
}

export default AurtaliaPage
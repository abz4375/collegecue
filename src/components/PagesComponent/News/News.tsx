import React from "react";
import TrendingNews from "./TrendingNews";
import SubscribeBox from "./SubscribeBox";
import RadioGroupRating from "../../RadioGroupRating";
import MoreNewses from "./MoreNewses";
import ModifednewsHero from "./ModifednewsHero";
import TopSearches from "./topSearch";
import CollegeNews from "./CollegeNews";
import CollegeEntrance from "./collegeEntrance";
import SchoolNews from "./SchoolNews";

const News = () => {
  return (
    <>
    {/* <ModifednewsHero /> */}
      <div className='max-w-[1536px] mt-20 mb-20 mx-auto bg-[#f9f7ff] pt-4'>
        <div>
          <TopSearches/>
          <TrendingNews />
          <MoreNewses /> 
          <CollegeNews/>
          <CollegeEntrance/>
          <SchoolNews/>
          <SubscribeBox />
          <h6 className="text-xl text-black font-medium text-center mb-[14px] mt-10">
            How likely are you to recommend collegecue.com to a friend or a colleague?
          </h6>
          <RadioGroupRating />
        </div>

      </div>
    </>
  )
}

export default News

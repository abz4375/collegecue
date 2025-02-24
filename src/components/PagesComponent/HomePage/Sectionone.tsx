import dynamic from "next/dynamic";
const Topcollege = dynamic(() => import("@/components/PagesComponent/HomePage/Topcollege/Topcollege"));
const ExplorePrograms = dynamic(() => import("@/components/PagesComponent/HomePage/ExplorePrograms/ExplorePrograms"));//
const TopSection = dynamic(() => import("@/components/PagesComponent/HomePage/TopSection/index"));
const CollegeRanking = dynamic(() => import("@/components/PagesComponent/HomePage/collegeranking/CollegeRanking"));
const CollegeRankingContainer = dynamic(() => import("@/components/PagesComponent/HomePage/collegerankingcontainer/CollegeRankingContainer"));
const StudyGoals = dynamic(() => import("@/components/PagesComponent/HomePage/StudyGoals/index"));
const ParentCard = dynamic(() => import("@/components/PagesComponent/HomePage/LatestNotificationComponent/ParentCard"));


const Sectionone = () =>{
    return (
        <>
        <StudyGoals />
          <ParentCard />
        <div className="max-w-[1340px] mx-auto px-4">
        <Topcollege />
        <ExplorePrograms />
        <TopSection />
        <CollegeRanking />
        <CollegeRankingContainer />
      </div>
      </>
    )
};

export default Sectionone;

import React, { Suspense } from "react";
import Loader from "@/components/Loader";
const CollegeRanking = React.lazy(
  () =>
    import("@/components/PagesComponent/HomePage/collegeranking/CollegeRanking")
);
const CollegeRankingContainer = React.lazy(
  () =>
    import(
      "@/components/PagesComponent/HomePage/collegerankingcontainer/CollegeRankingContainer"
    )
);
const ParentCard = React.lazy(
  () =>
    import(
      "@/components/PagesComponent/HomePage/LatestNotificationComponent/ParentCard"
    )
);
const ExamCources = React.lazy(
  () => import("@/components/PagesComponent/HomePage/Exam&Courses/ExamCources")
);
const LatestNews = React.lazy(
  () => import("@/components/PagesComponent/HomePage/LatestNews/index")
);
const Joblisting = React.lazy(
  () => import("@/components/PagesComponent/Job-portalpage/Joblisting")
);
const StudyAbroadContainer = React.lazy(
  () =>
    import(
      "@/components/PagesComponent/HomePage/StudyAbroad/StudyAbroadContainer"
    )
);
const FeaturedCourses = React.lazy(
  () =>
    import(
      "@/components/PagesComponent/HomePage/Explore_Courses/FeaturedCourses"
    )
);
const ModifiedHero = React.lazy(
  () => import("@/components/PagesComponent/HomePage/ModifiedHero")
);
const Admission = React.lazy(
  () => import("@/components/PagesComponent/HomePage/Admission2023/Admission")
);
const Testimonial = React.lazy(
  () => import("@/components/PagesComponent/HomePage/testimonial_section/index")
);
const Topcollege = React.lazy(
  () => import("@/components/PagesComponent/HomePage/Topcollege/Topcollege")
);
const StudyGoals = React.lazy(
  () => import("@/components/PagesComponent/HomePage/StudyGoals/index")
);
const TopSection = React.lazy(
  () => import("@/components/PagesComponent/HomePage/TopSection/index")
);
const ExplorePrograms = React.lazy(
  () =>
    import(
      "@/components/PagesComponent/HomePage/ExplorePrograms/ExplorePrograms"
    )
);

const Homepage = React.memo(() => {
  return (
    <>
      <div className="overflow-x-hidden mx-auto w-full ">
        <Suspense
          fallback={
            <div className="h-[80vh]">
              <Loader></Loader>
            </div>
          }
        >
          <ModifiedHero />
          <StudyGoals />
          <ParentCard />
          <div className="max-w-[1340px] mx-auto px-4">
            <Topcollege />
            <ExplorePrograms />
            <TopSection />
            <CollegeRanking />
            <CollegeRankingContainer />
          </div>
          <div className="bg-[#f2f7ff] mix-blend-multiply  bg-no-repeat mb-20 bg-center bg-cover py-20 pt-16">
            <div className="max-w-[1340px] mx-auto px-4">
              <Admission />
              <FeaturedCourses />
            </div>
          </div>
          <div className="max-w-[1340px] mx-auto px-4">
            <StudyAbroadContainer />
            <ExamCources />
            <LatestNews />
          </div>
          <Joblisting />
          <div className="max-w-[1340px] mx-auto px-4">
            <Testimonial />
          </div>
        </Suspense>
      </div>
    </>
  );
});

Homepage.displayName = "Homepage";

export default Homepage;

import dynamic from "next/dynamic"
const StudyAbroadContainer = dynamic(() => import("@/components/PagesComponent/HomePage/StudyAbroad/StudyAbroadContainer"));
const ExamCources = dynamic(() => import("@/components/PagesComponent/HomePage/Exam&Courses/ExamCources"));
const LatestNews = dynamic(() => import("@/components/PagesComponent/HomePage/LatestNews/index"));
const Joblisting = dynamic(() => import("@/components/PagesComponent/Job-portalpage/Joblisting"));
const Testimonial = dynamic(() => import("@/components/PagesComponent/HomePage/testimonial_section/index"));


const Sectionthree = () => {
  return (
    <div className="max-w-[1340px] mx-auto px-4">
    <StudyAbroadContainer />
    <ExamCources />
    <LatestNews />
    <Joblisting/>
    <Testimonial />
  </div>
  )
}

export default Sectionthree
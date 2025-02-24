import dynamic from "next/dynamic";
const Admission = dynamic(() => import("@/components/PagesComponent/HomePage/Admission2023/Admission"));
const FeaturedCourses = dynamic(() => import("@/components/PagesComponent/HomePage/Explore_Courses/FeaturedCourses"));


const Sectiontwo = () => {
  return (
    <div className="bg-[#f2f7ff] mix-blend-multiply  bg-no-repeat mb-20 bg-center bg-cover py-20">
            <div className="max-w-[1340px] mx-auto px-4">
              <Admission />
              <FeaturedCourses />
            </div>
          </div>
  )
}

export default Sectiontwo
import TopuniversityHero from "@/components/PagesComponent/TopUniversityAndCollege/TopuniversityHero";
import TopCollegeUniversityContainer from "../../components/PagesComponent/TopUniversityAndCollege/TopCollegeUniversityContainer";

const TopCollegeUniversity = () => {
  return (
    <div className=" mx-auto max-w-full">
      <TopuniversityHero />
      <div className="max-w-[1340px] mx-auto">
        <TopCollegeUniversityContainer />
      </div>
    </div>
  );
};

export default TopCollegeUniversity;

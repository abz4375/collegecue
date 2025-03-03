import React from "react";
import HeroSection, { collegeInfo } from "./HeroSection/HeroSection";
import IImBangaloreBottom from "./IIMBangaloreBottom/IImBangaloreBottom";
import Data from "../../DummyData/InstitutesData";
import Poster from "../../../assets/IIMBangalore/poster.webp";
import vedantaPoster from "../../../assets/IIMBangalore/vedantaPoster.jpg";
import Logo1 from "../../../assets/IIMBangalore/logo1.png";
import vedantaLogo from "../../../assets/IIMBangalore/vedantaLogo.png";
import ReviewImg from "../../../assets/IIMBangalore/review.png";

interface OrgInfoProps {
  org?: string;
  id?: number;
}

export const defaultInstituteInfo = {
  poster: vedantaPoster,
  logo: vedantaLogo,
  name: "Vedanta IAS Academy",
  location: "New Delhi",
  approved: "UGC Recognized",
  established: "2010",
  isAutonomous: false,
  questionsAnswered: 1250,
  ranking: "Top 10 IAS Coaching Institutes in Delhi",
  additionalInfo: 20,
  rating: "9.2",
  reviewsImg: ReviewImg,
};

const OrgInfo: React.FC<OrgInfoProps> = ({ org, id }) => {
  // const collegeInfo = Data.find((college) => college.id === id
  // );
  // if org === institute, then fetch instituteInfo
  return (
    <div>
      <div className="">
        <HeroSection
          // info={org === "institute" ? defaultInstituteInfo : collegeInfo}
          collegeInfo={defaultInstituteInfo}
        />
      </div>
      <div className="mx-10 sm:mx-0 sm:p-0">
        <div className="pb-5 mx-auto sm:mx-0">
          <IImBangaloreBottom />
        </div>
      </div>
    </div>
  );
};

export default OrgInfo;

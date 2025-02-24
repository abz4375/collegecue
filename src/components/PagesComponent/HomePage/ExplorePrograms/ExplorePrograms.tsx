import React from "react";
import image1 from "@/Assets/Homepage/Explore/image1.svg";
import image2 from "@/Assets/Homepage/Explore/image2.svg";
import image3 from "@/Assets/Homepage/Explore/image3.svg";
import image4 from "@/Assets/Homepage/Explore/image4.svg";
import image5 from "@/Assets/Homepage/Explore/image5.svg";
import image6 from "@/Assets/Homepage/Explore/image6.svg";
import Delhi from "@/Assets/Homepage/Explore/Delhi.png";
import Bombay from "@/Assets/Homepage/Explore/bombay.png";
import Heading from "@/components/Heading/Heading";
import { ExploreProgramCarousel } from "./ExploreProgramCarousel";
import ViewAllButton from "@/components/Buttons/ViewAllButton";

const data = [
  {
    heading: "Ranking",
    p: "College ranking based on real data",
    image: image1,
    subs: [
      {
        id: 1,
        sub: "Indiatoday - 1553",
      },
      {
        id: 2,
        sub: "Outlook - 1200",
      },
      {
        id: 3,
        sub: "IIRF - 1356",
      },
      {
        id: 4,
        sub: "NIRF - 1173",
      },
    ],
    link: "Top Ranked Colleges In India",
  },
  {
    heading: "Find Colleges",
    p: "Discover 19000+ colleges via preferences",
    image: image2,
    subs: [
      {
        id: 1,
        sub: "Best MBA colleges in India",
      },
      {
        id: 2,
        sub: "Best BTech colleges in India",
      },
    ],
    link: "Discover Top Colleges In India",
  },
  {
    heading: "Compare Colleges",
    p: "Compare on the basis of rank, fees, etc.",
    image: image3,
    compare: [
      {
        college1: {
          logo: Delhi,
          name: "IIT Delhi",
          course: "BE/BTech",
        },

        college2: {
          logo: Bombay,
          name: "IIT Bombay",
          course: "BE/BTech",
        },
      },
    ],

    link: "Compare Colleges",
  },
  {
    heading: "Exams",
    p: "Know more about your exams",
    image: image4,
    subs: [
      {
        id: 1,
        sub: "B.Com",
      },
      {
        id: 2,
        sub: "B.Sc",
      },
      {
        id: 3,
        sub: "B.Sc(Nursing)",
      },
      {
        id: 4,
        sub: "BA",
      },
      {
        id: 5,
        sub: "BBA/BMS",
      },
      {
        id: 6,
        sub: "BCA",
      },
      {
        id: 7,
        sub: "BE/B.Tech",
      },
    ],
    link: "Check All Entrance Exams In India",
  },
  {
    heading: "College Predictor",
    p: "College ranking based on real data",
    image: image5,
    subs: [
      {
        id: 1,
        sub: "NEET",
      },
      {
        id: 2,
        sub: "CAT",
      },
      {
        id: 3,
        sub: "JEE Main",
      },
      {
        id: 4,
        sub: "JEE Advanced",
      },
      {
        id: 5,
        sub: "NMAT",
      },
      {
        id: 6,
        sub: "GATE",
      },
    ],
    link: "Find Where you may get Admission",
  },
  {
    heading: "Course Finder",
    p: "Discover top courses in Indian Colleges 2024",
    image: image6,
    subs: [
      {
        id: 1,
        sub: "BE/B.Tech - 1183",
      },
      {
        id: 2,
        sub: "MBA/PGDM - 1134",
      },
      {
        id: 3,
        sub: "ME/MTech - 1242",
      },
      {
        id: 4,
        sub: "B.Sc - 1016",
      },
      {
        id: 5,
        sub: "BA - 931",
      },
    ],
    link: "Top Ranked Colleges In India",
  },
];
const ExplorePrograms = () => {
  return (
    <div className=" container my-20">
      <div className="flex w-full justify-between">
        <Heading heading_name="Explore Programs" />
        <ViewAllButton linkto="#" />
      </div>
      <div className="container max-w-full mx-auto">
        <div className="w-full sm:justify-center navmd:justify-center  py-8 pt-0">
          <ExploreProgramCarousel data={data} />
        </div>
      </div>
    </div>
  );
};

export default ExplorePrograms;

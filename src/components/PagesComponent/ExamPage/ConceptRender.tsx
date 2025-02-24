import React from "react";
import Card1 from "@/Assets/ExamPage/Articles/CollegeCards1.jpg";
import Card2 from "@/Assets/ExamPage/Articles/CollegeCards2.jpg";
import Card3 from "@/Assets/ExamPage/Articles/CollegeCards3.jpg";
import Card4 from "@/Assets/ExamPage/Articles/CollegeCards4.jpg";
import Card5 from "@/Assets/ExamPage/Articles/CollegeCards5.jpg";
import Card6 from "@/Assets/ExamPage/Articles/CollegeCards6.jpg";
import Card7 from "@/Assets/ExamPage/Articles/CollegeCards7.jpg";
import Card8 from "@/Assets/ExamPage/Articles/CollegeCards8.jpg";
import Card9 from "@/Assets/ExamPage/Articles/CollegeCards9.jpg";
import ArticleSlider from "./ArticleSlider";
import {ExamCategoryButton} from "./ExamCategoryButton";

const ClassTenArticles = [
  {
    img: Card1,
    contents: "180-Degree Angle: How to Draw and ...",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card2,
    contents: "Sum of First N terms of an AP...",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card3,
    contents: "Linear Equation in Two Variable Definition and Graphs:",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card4,
    contents: "Principles of Mathematical Induction: Important Questions",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card5,
    contents: "Curved Line: Examples, Types, Sample Questions &",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card6,
    contents: "Factors of 415: Prime & Pair Factors",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
];
const ClassTwelveArticles = [
  {
    img: Card7,
    contents: "How to Score Good Marks in Maths: Top 8 Tips for Students",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card8,
    contents: "Write the degree of zero polynomial.",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card7,
    contents: "How to Score Good Marks in Maths: Top 8 Tips for Students",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card8,
    contents: "Write the degree of zero polynomial.",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card9,
    contents: "Factors of 415: Prime Factors",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card7,
    contents: "How to Score Good Marks in Maths: Top 8 Tips for Students",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card8,
    contents: "Write the degree of zero polynomial.",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
  {
    img: Card9,
    contents: "Factors of 415: Prime Factors",
    date: "14-Feb-2023",
    content_link: "Read More",
  },
];

const ConceptRender = () => {
  const buttons = [
    {
      label: "Mathematics",
      link: "#",
    },
    {
      label: "Physics",
      link: "#",
    },
    {
      label: "Biology",
      link: "#",
    },
    {
      label: "Chemistry",
      link: "#",
    },
  ];
  return (
    <div className="">
      <div className="  flex flex-col  items-center">
        <h5 className=" text-center pt-4 mt-[19px] text-4xl text-[#7763E5] font-bold max-md:text-[34px] sm:text-[32px]">
          Concept Articles
        </h5>
        <div className="mt-12 flex justify-center items-center gap-[17px] w-full sm:flex-col ">
          {buttons.map((button, index) => (
            <div key={index}>
            <ExamCategoryButton 
            label={button.label}
            link={button.link} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="mt-16 space-y-5 ">
          <h5 className="text-xl font-semibold z-[2] text-[#210366] ">
            Top Class 10 Concept Articles
          </h5>

          <div className="w-full">
            <ArticleSlider articles={ClassTenArticles} />
          </div>
        </div>
        <div className="mt-16 space-y-5  ">
          <div>
            <h5 className="text-xl font-semibold z-[2] text-[#210366] ">
              Top Class 12 Concept Articles
            </h5>
          </div>

          <ArticleSlider articles={ClassTwelveArticles} autoplaySpeed={2500} />
        </div>
      </div>
    </div>
  );
};

export {ConceptRender};

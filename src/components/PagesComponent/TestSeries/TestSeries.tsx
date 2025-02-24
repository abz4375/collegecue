import React from "react";
import CollegeArticleCard from "./CollegeArticleCard";
import AllCards from "./AllCards";
import BoldHeading from "../../Heading/BoldHeading";
import { FaqData } from "./AccordianData";
import Faq from "../../Faq/Faq";
import { useRouter } from "next/navigation";
import Image from "next/image";
import test_hero from "../../../assets/Test_series/test_hero.png";

const TestSeries = () => {
  const router = useRouter();

  const handleAccept = () => {
    console.log("sddd");
    // setShowPopup(false);
    router.push("/testseries/quiz");
    console.log("sddd");
  };

  const data = [
    {
      id: 1,
      title: "Exam Category 1",
    },
    {
      id: 2,
      title: "Exam Category 2",
    },
    {
      id: 2,
      title: "Exam Category 2",
    },
    // Add more data as needed
  ];
  return (
    <div className="">
      <div className="py-5 w-full h-fit bg-[#F6FCFF] flex flex-row md:flex-col-reverse items-center justify-evenly">
        <div className="px-5 max-w-[1536px]  mx-auto flex justify-between items-center flex-wrap">
          <div className="flex flex-col">
            <div className="text-violet-950 text-6xl font-semibold md:text-4xl">
              Online Test Series
            </div>
            <div className="text-violet-950 text-xl text-wrap my-6">
              Practice online mock tests for{" "}
              <span className="bg-[#EA580C] text-white h-1 rounded">
                JEE, NEET, CAT,{" "}
              </span>
              and more with Collegecue.
              <br />
              Get the latest pattern-based tests,detailed solutions, and
              performance analysis. <br />
              Prepare effectively and track your progress with ease.
            </div>
            <div className="my-5 flex items-center justify-start gap-4">
              <button className="bg-blue-500 text-white shadow-xl py-4 px-6 rounded-full sm:text-nowrap hover:bg-[#EA580C]">
                Start your test →
              </button>

              <button className="bg-blue-500 text-white shadow-xl rounded-full p-4 w-16 h-16  hover:bg-[#EA580C] flex items-center justify-center">
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4l12 6-12 6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative inline-block md:p-2">
            <div className="absolute z-0 left-12 flex justify-center items-center">
              <div className="w-64 h-64 bg-yellow-500 rounded-full opacity-50 transition transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"></div>
            </div>
            <div className="relative z-20">
              <Image
                src={test_hero}
                alt="student picture with bag"
                width={460} // Desired width
                height={260} // Desired height
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" relative bg-indigo-700 w-screen h-16 flex -mt-5 justify-between items-center overflow-x-hidden max-w-full mx-auto">
        <div className="w-full flex justify-around items-center gap-10 animate-marquee">
          <span className="flex-shrink-0 text-2xl font-semibold text-white">JEE Exams.</span>
          <span className="flex-shrink-0 text-2xl font-semibold text-white">NEET Exams.</span>
          <span className="flex-shrink-0 text-2xl font-semibold text-white">CAT Exams.</span>
          <span className="flex-shrink-0 text-2xl font-semibold text-white">MAT Exams.</span>
          <span className="flex-shrink-0 text-2xl font-semibold text-white">OTHERS Exams.</span>
        </div>
        <div className=" absolute w-full flex justify-around items-center gap-10 animate-marquee2 sm:hidden">
          <span className="flex-shrink-0 text-2xl font-semibold text-white">JEE Exams.</span>
          <span className="flex-shrink-0 text-2xl font-semibold text-white">NEET Exams.</span>
          <span className="flex-shrink-0 text-2xl font-semibold text-white">CAT Exams.</span>
          <span className="flex-shrink-0 text-2xl font-semibold text-white">MAT Exams.</span>
          <span className="flex-shrink-0 text-2xl font-semibold text-white">OTHERS Exams.</span>
        </div>
      </div>
      <div className="max-w-[1340px] mx-auto my-20">
        <div className=" mt-8 w-full">
          <CollegeArticleCard />
        </div>
        <div className="w-full px-4">
          <AllCards />
        </div>
        <div className="mt-10  text-6xl w-full mx-auto">
          <BoldHeading
            color="violet-950"
            textAlign="center"
            heading="Frequently Asked Questions (FAQs)"
          />
        </div>
        <Faq faqs={FaqData} />
      </div>
    </div>
  );
};

export default TestSeries;

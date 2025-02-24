import React from "react";
import { TopSectiondata } from "../../DummyData/CollegePredictorData"; 
import Image from "next/image";
import banner from "../../../assets/CollegePredictor/image1-home1.webp"
import Linebutton from "../../Buttons/Linebutton";

const Hero = () => {
  return (
    <div className="max-w-full h-auto mx-auto bg-predictorhero py-8 bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col justify-center items-center pt-20">
        <p className="text-5xl text-[#223354] text-center">COLLEGE PREDICTOR</p>
        <button className="w-[218px] h-[60px] text-white mt-12 bg-[#FF6B52] justify-center items-center flex rounded-full hover:bg-[#223354]">Let&apos;s Get Started</button>
        <div className="flex flex-wrap items-center justify-center gap-4 my-6">
        {TopSectiondata.courseLabels.map((label:any, index:any) => (
            <div key={index}>
              <Linebutton textD={label} textColor={"#223354"} borderColor={"#223354"} />
            </div>
          ))}
        </div>
        <Image src={banner} alt="..." className="mt-20 object-cover" />
      </div>
    </div>
  );
};

export default Hero;

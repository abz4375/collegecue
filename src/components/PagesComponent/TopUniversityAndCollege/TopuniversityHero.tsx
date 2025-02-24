import React from "react";
import TopCollege_svg from "../../../assets/Hero_Section/woman.png";
import Image from "next/image";
import Background from "./FondingCollege/Background";
import book from "@/assets/TopCollegeUniversity/book.png"
import bubble from "@/assets/TopCollegeUniversity/bubble.png"
import zigzag from "@/assets/TopCollegeUniversity/zigzag.png"
import collegegirl from "../../../assets/TopCollegeUniversity/topcollegehero.png";

const TopuniversityHero = () => {

  return (
    <div className="max-w-full bg-[linear-gradient(0deg,#9ca3af,white)] h-[80vh] lg:h-auto">
      <div className="w-full flex lg:flex-col lg:justify-center justify-between relative items-center px-16 sm:px-4">
        <div className="flex justify-center items-center flex-col w-[450px] sm:w-full mt-10 sm:mt-0">
          <div className="text-wrap text-5xl lg:text-4xl leading-[4rem]  text-[#312e81] font-bold">
          List of Top Colleges in Indian Based on 2024 Ranking
          </div>
          <div className="text-[#312e81] text-wrap text-xl mt-10 font-medium text-left -ml-20 sm:ml-0">
            Find best college and course for yourself
          </div>
        </div>
        <div className="w-[440px] h-auto block mx-auto md:w-full bottom-0 mt-9 relative">
          <Image src={collegegirl} alt="..." className="w-full h-full" />
        </div>
      </div>
    </div>
  )

  //return (
  //  <div className="flex max-w-full mx-auto items-center relative bg-[#553cde] ">
  //  <Background />
  //  <div className=" z-40 container mx-auto max-w-[1280px] relative flex lg:flex-col items-center px-3 pt-4">
  //    <div className=" text-[30px] font-bold  text-[#ffffff]">
  //      List of Top Colleges in Indian Based on 2024 Ranking
  //    </div>
  //    {/* <div className="flex flex-col items-center md:flex-wrap md:gap-[90px] ">
  //      <LatestNotificationTopCollege />
  //    </div> */}
  //    <div className="relative">
  //      <Image
  //        src={TopCollege_svg}
  //        alt={"svg image"}
  //        className="md:h-[75vh] "
  //      />
//
  //      <Image src={book} alt="book" className="w-[50px] h-[50px] absolute top-0 left-0"/>
  //      <Image src={bubble} alt="bubble" className="w-[50px] h-[50px] absolute top-0 right-0"/>
  //      <Image src={zigzag} alt="zigzag" className="w-[50px] h-[50px] absolute top-96 -right-16"/>
//
  //    </div>
  //  </div>
  //</div>
  //)
}

export default TopuniversityHero
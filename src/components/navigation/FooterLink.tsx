import React from "react";
import Link from "next/link";

const FooterLink = () => {
  return (
    <div className="gap-3 font-normal items-center [@media_(max-width:_1080px)]:items-start [@media_(max-width:_1080px)]:flex-col [@media_(max-width:_1080px)]:justify-start [@media_(max-width:_1080px)]:gap-5  w-1/2 [@media_(max-width:_1080px)]:w-full text-white  pt-8">
      <div className="items-start flex flex-row justify-evenly">
        <div className="flex flex-col items-start border-0 px-auto w-auto h-full p-4 border-black">
          <span className="font- sm:text-xl text-xl ">About</span>
          <div className="border-[white] border-b-4 w-1/5 mt-2 mb-2 uppercase" />
          <Link
            href="/top-university"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>Top University</span>
          </Link>
          <Link
            href="/exam"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>Top Exam</span>
          </Link>
          <Link
            href="/studyAbroad"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>Study Abroad</span>
          </Link>
          <Link
            href="/jobportal"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>Job Portal</span>
          </Link>
        </div>
        <div className="flex flex-col items-start border-0 px-auto w-auto h-full p-4 border-black">
          <span className="font- sm:text-xl text-xl">Other Links</span>
          <div className="border-b-4 w-1/5 mt-2 mb-2" />
          <Link
            href="/about"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>About CollegeCue</span>
          </Link>
          <Link
            href="/promotion"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>Promotion</span>
          </Link>
          <Link
            href="/coming-soon"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>Career</span>
          </Link>
          <Link
            href="/contactus"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>Contact Us</span>
          </Link>
          <Link
            href="/terms-conditions"
            className="block hover:text-opacity-75 text-[0.9rem] my-2 no-underline text-[#dee9ff]"
          >
            <span>Terms & Conditions</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;

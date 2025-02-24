import React from "react";
import logo from "../../assets/logo-removebg.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterStart = () => {
  return (
    <div className="flex flex-col items-start justify-start [@media_(max-width:_1080px)]:items-center [@media_(max-width:_1080px)]:gap-3  mb-2 ">

      <Image
        src={logo}
        alt="..."
        className="h-auto max-w-full min-w-[14rem] mb-[-2rem]"
      />
      <div className="flex items-center justify-end gap-3  h-[2rem] mb-4 w-full pr-28">
        <span className="text-xs">Owned by</span>
        <img src="https://www.collegecue.com/static/media/bharat.de0668a069a72296acf9.webp" alt="" className=" min-w-[2rem] max-w-[4rem] "/>
      </div>


      <div className="flex flex-row w-11/12 items-center justify-start gap-6 mb-28 [@media_(max-width:_1080px)]:mb-12">
        <FaFacebookSquare className=" w-5 h-5" />
        <FaInstagram className=" w-5 h-5" />
        <FaXTwitter className=" w-5 h-5" />
        <FaYoutube className=" w-5 h-5" />
        <FaLinkedin className=" w-5 h-5" />
      </div>
      <span className="font-semibold mb-1">Support Inquiries: </span>
      <span className="flex flex-row items-center justify-center gap-3">
        <MdEmail className="w-5 h-5" />
        collegecuesupport@gmail.com
      </span>
    </div>
  );
};

export default FooterStart;

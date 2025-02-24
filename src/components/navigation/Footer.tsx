import React from "react";
import FooterStart from "./FooterStart";
import FooterLink from "./FooterLink";
import CustomInput from "./CustomInput";
import FootBottom from "./FootBottom";

const Footer = () => {
  return (
    <div className="bg-cover bg-no-repeat relative overflow-hidden mt-8 bg-center z-[1] bg-white text-black  border- border-black">
      <div className="flex flex-col justify-between min-h-full">
        <div className="flex flex-row p-0 justify-between gap-0 [@media_(max-width:_1080px)]:flex-col border- border-red-500 bg-[#002366] bg-opacity-[87.5%]">
          <div className="flex flex-col gap-4 [@media_(max-width:_1080px)]:gap-8 [@media_(max-width:_1080px)]:items-center [@media_(max-width:_1080px)]:justify-center border- border-black px-4 p-2 [@media_(max-width:_1080px)]:w-full w-1/4 bg-gray-300 bg-opacity-[90%]">
            <FooterStart />
          </div>
          <FooterLink />
          <div className="border-r-2 h-[16rem] my-auto border-white [@media_(max-width:_1080px)]:hidden">
            {" "}
          </div>
          <CustomInput />
        </div>
        <div>
          <FootBottom />
        </div>
      </div>
      <div className="[@media_(max-width:_1080px)]:hidden"></div>
    </div>
  );
};

export default Footer;

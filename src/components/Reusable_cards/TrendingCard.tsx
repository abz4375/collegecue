import Image from "next/image";
import React from "react";

interface TrendingCardProps {
  image: any;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  image,
  content1,
  content2,
  content3,
  content4,
  content5,
}) => {
  return (
    <div className="rounded-[28px]">
   


    <div className="w-[350px] h-[500px] rounded-[20px] hover:shadow-xl hover:bg-white hover:scale-105 duration-500 transition-all ease-in-out flex-col justify-start items-start inline-flex ">
      <div className="h-[500px]  rounded-[20px]  flex-col justify-end items-start flex">
        <div className="self-stretch h-[180px] rounded-tl-[20px] rounded-tr-[20px] justify-center items-center inline-flex">
          <Image
            className="w-[350px] h-[180px] relative rounded-tl-[28px] rounded-tr-[28px] "
            src={image}
            alt="Trending"
          />
        </div>
        <div className="self-stretch h-[397.20px] px-4 pt-4 pb-15 flex-col justify-start items-start inline-flex  rounded-[28px] rounded-t-none  ">
          <div className="self-stretch h-[45.20px] px-4 py-2 flex-col justify-start items-start flex   ">
            <div className="self-stretch h-[29.20px] flex-col justify-start items-start gap-[0.40px] flex ">
              <div className="text-violet-950 text-[12.80px] font-semibold  leading-tight tracking-tight text-clip ">
                {content1}
              <div className="self-stretch mt-2 h-[1.80px] bg-violet-500 border-b  bg-opacity-30" />
              </div>

            </div>
          </div>
          <div className="self-stretch h-[64.20px] px-4 py-2 flex-col justify-start items-start flex">
            <div className="self-stretch h-[48.20px] flex-col justify-start items-start gap-[0.40px] flex">
              <div className="text-violet-950 text-[12.80px] font-semibold  leading-tight tracking-tight">
                {content2}
              </div>
              {/* <div className="self-stretch h-[8.80px] border-b border-violet-500/opacity-30" /> */}
              <div className="self-stretch mt-2 h-[1.80px] bg-violet-500 border-b  bg-opacity-30" />
          
            </div>
          </div>
          <div className="self-stretch h-[64.20px] px-4 py-2 flex-col justify-start items-start flex">
            <div className="self-stretch h-[48.20px] flex-col justify-start items-start gap-[0.40px] flex">
              <div className="text-violet-950 text-[12.80px] font-semibold leading-tight tracking-tight">
                {content3}
              </div>
              {/* <div className="self-stretch h-[8.80px] border-b border-violet-500/opacity-30" /> */}
              <div className="self-stretch mt-2 h-[1.80px] bg-violet-500 border-b  bg-opacity-30" />
           
            </div>
          </div>
          <div className="self-stretch h-[64.20px] px-4 py-2 flex-col justify-start items-start flex">
            <div className="self-stretch h-[48.20px] flex-col justify-start items-start gap-[0.40px] flex">
              <div className="text-violet-950 text-[12.80px] font-semibold  leading-tight tracking-tight">
                {content4}
              </div>
              <div className="self-stretch mt-2 h-[1.80px] bg-violet-500 border-b  bg-opacity-30" />
             
              {/* <div className="self-stretch h-[8.80px] border-b border-violet-500/opacity-30" /> */}
            </div>
          </div>
          <div className="self-stretch h-[64.20px] px-4 py-2 flex-col justify-start items-start flex">
            <div className="self-stretch h-[48.20px] flex-col justify-start items-start gap-[0.40px] flex">
              <div className="text-violet-950 text-[12.80px] font-semibold  leading-tight tracking-tight">
                {content5}
              </div>
              {/* <div className="self-stretch h-[8.80px] border-b border-violet-500/opacity-30" /> */}
           
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrendingCard;

import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";

interface MoreNewsCardProps {
  heading: string;
  content: string;
  moreNewsImg: string;
  date:any,
  readLink:string,
}

const MoreNewsCard: FC<MoreNewsCardProps> = ({
  moreNewsImg,
  heading,
  content,
  date,
  readLink
}) => {
  return (
    <div className="w-[350px] h-[400px] hover:bg-white rounded-[28px] flex-col justify-center items-start inline-flex
    hover:shadow-xl hover:scale-105 duration-500 transition-all ease-in-out">
      <div className="self-stretch h-[180px] rounded-tl-[28px] rounded-tr-[28px] justify-center items-center inline-flex">
        <Image
          className="w-[350px] h-[180px] rounded-xl relative rounded-b-none"
          src={moreNewsImg}
          alt="News"
        />
      </div>
      <div className="self-stretch h-[223.05px] px-4 pt-[15.25px] pb-4 flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch h-[19.75px] pb-[0.75px] flex-col justify-start items-start flex">
          <div className="self-stretch text-neutral-600 text-[12.80px] font-medium leading-[18.30px] tracking-tight">
            {date}
          </div>
        </div>
        <div className="self-stretch h-[57px] flex-col justify-start items-start flex">
          <div className="self-stretch text-zinc-800 text-lg font-bold  leading-7 tracking-tight truncate">
            {heading}
          </div>
        </div>
        <div className="self-stretch h-[61px] flex-col justify-start items-start flex">
          <div className="self-stretch text-stone-500 text-sm font-normal  leading-tight tracking-tight">
            {content}
          </div>
        </div>
        <div className="self-stretch pl-[119.40px] pr-[119.41px] pt-2 justify-center items-start inline-flex">
          <div className="self-stretch flex-col justify-start items-start inline-flex">
            <Link href={readLink} className="no-underline">
            <div className="text-orange-500 text-base font-semibold  leading-normal tracking-tight">
              Read More
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreNewsCard;

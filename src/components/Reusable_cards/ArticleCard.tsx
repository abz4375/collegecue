import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { CiHeart } from "react-icons/ci";

interface Article {
  img: StaticImageData;
  contents: string;
  date: string;
  content_link: string;
}
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <div className="flex  justify-center item-center mx-auto mb-4 w-[273px] h-[255px] flex-col gap-2 rounded-[28px] bg-white p-2.5 shadow-lg hover:scale-[1.05] hover:duration-500 hover:ease-in-out hover:transition-all hover:cursor-pointer">
      <div className="relative rounded-[28px] ">
        <Image
          src={article.img}
          alt="article image"
          width={273}
          height={123}
          className="h-[123px] w-[273px] rounded-lg object-cover"
        />
        <div className="absolute right-0 top-0 m-2 ">
          <CiHeart className=" text-[#FFC72C]  hover:text-white   " />
        </div>
      </div>
      <p
        className={`mt-2 text-center text-sm text-[#210366] font-semibold  ${
          isContentVisible ? "auto" : "h-[3.5rem]"
        }`}
      >
        {isContentVisible ? article.contents : article.contents.slice(0, 25)}
      </p>
      <div className=" w-[80%] opacity-70 mx-auto mt-4"></div>
      <hr />
      <button
        onClick={toggleContentVisibility}
        className=" text-orange-400 flex justify-center cursor-pointer mb-1.5 rounded-md hover:text-orange-300 "
      >
        {isContentVisible ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ArticleCard;

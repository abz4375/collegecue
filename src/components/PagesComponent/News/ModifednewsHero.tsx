import React from 'react'
import newsland from "../../../assets/News/news-concept-landing-page (1).png";
import image from "../../../assets/News/img2.jpg";
import line from "../../../assets/News/line-title.png";
import Image from 'next/image';
import { Trending, Featured } from "../../DummyData/TrendingNewsData";
import Link from "next/link";
import { MdOutlineLiveTv } from "react-icons/md";

interface NewsItem {
  heading: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  date: string;
}

const ModifednewsHero = () => {
  const latestNews = [
    {
      title:
        "Empowering Progress with Every Update: Uncover Stories of Transformation, Innovation, and Success in the Dynamic World of Education",
      description:
        "Keeping You Ahead of the Learning Curve: Gain a Competitive Edge with Timely Updates, Resources, and Strategies for Educational Leadership",
      image: image,
    },
  ];

  const { title, description } = latestNews[0];

  return (
    <div className='max-w-full mx-auto bg-[#f9f7ff] h-auto relative py-12'>
      <div className='flex max-w-full flex-col justify-center items-center mx-auto'>
        <div className='max-w-full h-auto mx-[10rem] md:mx-4 flex flex-col'>
          <Image
            src={line}
            alt="Line"
            width={250}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-[2rem] text-center font-semibold text-[#333] mb-4 sm:text-xl sm:text-[1rem]">
            {title}
          </h3>
          <p className="text-[1.2rem] text-[#666] text-center">{description}</p>
        </div>
        <div className='w-fucll flex flex-wrap items-center '>
          <div className='w-1/2 md:w-full flex justify-center items-center'>
            <Image src={newsland} alt="..." className='w-3/4 h-3/4 object-contain' />
          </div>
          <div className='w-1/2 md:w-full flex flex-wrap items-center justify-evenly gap-8 lg:w-full'>
            <div className="bg-white rounded-[20px] p-[20px] w-[279px] h-auto overflow-hidden cursor-pointer">
              {Trending.map((item: NewsItem, index: number) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-[24px] text-gray-800">{item.heading}</h4>
                  <hr className="my-2 border-t border-gray-300 mb-6" />
                  <p className="text-blue-500 font-medium text-[14px]">{item.content1}</p>
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="text-blue-500  font-medium text-[14px]">{item.content2}</p>
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="text-blue-500  font-medium text-[14px]">{item.content3}</p>
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="text-blue-500  font-medium text-[14px]">{item.content4}</p>
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="text-blue-500  font-medium text-[14px]">{item.content5}</p>
                  <p className="text-gray-600 italic font-medium mt-6">
                    Date: {item.date}
                  </p>
                  {index !== Trending.length - 1 && (
                    <hr className="my-4 border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div>
            <div className="bg-white rounded-[20px] p-[20px] w-[279px] h-auto overflow-hidden cursor-pointer">
              {Featured.map((item: NewsItem, index: number) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-[24px] text-gray-800">{item.heading}</h4>
                  <hr className="my-2 border-t border-gray-300 mb-6" />
                  <p className="text-blue-500 font-medium text-[14px]">{item.content1}</p>
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="text-blue-500  font-medium text-[14px]">{item.content2}</p>
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="text-blue-500  font-medium text-[14px]">{item.content3}</p>
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="text-blue-500  font-medium text-[14px]">{item.content4}</p>
                  <hr className="my-2 border-t border-gray-300" />
                  <p className="text-blue-500  font-medium text-[14px]">{item.content5}</p>
                  <p className="text-gray-600 italic font-medium mt-6">
                    Date: {item.date}
                  </p>
                  {index !== Featured.length - 1 && (
                    <hr className="my-4 border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link
            href="https://www.thehindu.com/topic/College_admission/"
            target="_blank"
            rel="noopener noreferrer"
          >
        <div className='w-[160px] h-[40px] bg-blue-500 flex items-center justify-center gap-2 md:mt-8 flex-row rounded-lg text-white hover:bg-blue-600  '>
            <div>Live News</div>
            <div><MdOutlineLiveTv /></div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default ModifednewsHero
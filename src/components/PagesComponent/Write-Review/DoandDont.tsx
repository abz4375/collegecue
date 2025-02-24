import React from 'react';
import img6 from "../../../assets/writeareview/6.png";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Image from 'next/image';

const DoandDont = () => {
    const dos = [
            "Be Factual - Read the instructions provided along with the questions carefully, and try to include mentioned facts to the best of your knowledge.",
            "Be Decent - Talking about your alma mater should always have decency, even when criticizing it.",
            "Be Original - Write your own review on your own, write your own experience. Most elaborate reviews might bring extra rewards.",
            "Be Patient - The review has 8 steps, each step covering one aspect of your college life, so answer them with patience so they add value to the user. You can complete the review form in phases.",
        "Be Social - Once you are done with your review, share the review form with as many students from your college as possible. More the rewards. Rewards for the courses with lesser reviews on collegedunia have extra rewards added to them.",
      ];
    
      const donts = [
        "Don't ignore instructions, rush through questions, make assumptions, leave out mentioned facts, or provide irrelevant information.",
        "No Rash words should be used in the content, it will be edited during the moderation process.",
        "Don't Copy others' content and reviews. Don't let anyone use your identity.",
        "Don't rush through the review form or skip steps, as each step is important and contributes to a comprehensive evaluation of your college experience.",
        "Don't be afraid to share the review form with other students and encourage them to participate, but avoid spamming or pressuring people to submit reviews. Respect their decision if they choose not to participate.",
      ];

  return (
    <div className='flex flex-col items-center gap-4 text-[#2F1370] text-left'>
        <div className='w-[200px] h-[200px]'>
            <Image src={img6} alt="..." className='w-full h-full' />
        </div>
        <div className='flex gap-16 p-8 md:gap-[1vh] md:flex-col md:pl-[5vw] md:pr-[5vw]'>
            <div className='flex-[1] flex gap-4 flex-col md:gap-[2vh] pb-[10vh]'>
                {dos.map((item:any,index:any)=>(
                    <div className='flex gap-4'key={index}>
                        <FaCheckCircle className='text-green-600 text-[20px]' />
                        <p className='text-[16px] flex flex-wrap w-fit'>{item}</p>
                    </div>
                ))}
            </div>
            <div className='flex-[1] flex gap-4 flex-col md:gap-[2vh] pb-[10vh]'>
                {donts.map((item:any,index:any)=>(
                    <div className='flex gap-4' key={index}>
                        < MdCancel className='text-red-600 text-[20px]' />
                        <p className='text-[16px] flex flex-wrap w-fit'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default DoandDont
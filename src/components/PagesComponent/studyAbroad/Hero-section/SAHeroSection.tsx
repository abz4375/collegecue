import React from 'react';
import TopCollegeStepper from './TopCollegeStepper';
import Image from 'next/image';
import patterns from "../../../../assets/studyAbroad/HeroIamges/banner-book.png";
import bannerCap from "../../../../assets/studyAbroad/HeroIamges/banner-cap.png";
import blob from "../../../../assets/studyAbroad/HeroIamges/bliob.svg"
import heroImg from "../../../../assets/studyAbroad/HeroIamges/studyHero.png";

const SAHeroSection = () => {
  return (
    <div className='max-h-[100vh] h-auto relative z-[2] overflow-hidden bg-[#313893] mb-20'>
        <div className='h-auto z-[2] w-full flex justify-around items-center flex-wrap'>
            <div className='flex flex-col gap-[15px] h-auto text-[#ffffff] w-full max-w-[40rem] basis-[45%] p-8'>
                <p className='text-[#fff] text-[2.5rem] font-bold md:text-[1.2rem]'>
                Find Study Abroad Universities and Programs
                </p>
                <p className='text-[#F8FAFB] text-2xl'>
                Discover Your Global Potential: Step into Your Future with Study
              Abroad!
                </p>
                <TopCollegeStepper />
            </div>
            <div className='h-auto text-[#fff] w-full max-w-[40rem] text-center basis-[45%]'>
                <div className='relative w-full'>
                    <Image src={patterns} alt="..."
                    className="absolute top-6 -left-[18%] z-[-1] object-cover max-w-2/5 animate-bounce-moderate" />
                    <Image src={blob} alt="..."
                    className='absolute top-0 left-0 z-[-1] object-cover animate-spin-super-slow' />
                    <Image src={bannerCap} alt='...'
                    className='absolute top-[80%] right-0 z-[-1] object-cover animate-bounce-moderate'/>
                    <Image src={heroImg} alt="..."
                    className='z-[1] object-cover object-center' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SAHeroSection
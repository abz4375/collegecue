import React from 'react'
import Image from 'next/image'
import needle from "../../assets/Countrycomponent/CountriiesHero/needle-underline.svg"
import studygirl from "../../assets/Countrycomponent/CountriiesHero/study.png"
import pattern from "../../assets/Countrycomponent/CountriiesHero/Patterns.svg"

const CountryHero = ({country}:any) => {
  return (
    <div className='h-[80vh] bg-[#313893] relative z-[2] w-full pt-20 md:pt-6 lg:pt-6 sm:h-auto sm:pb-10 md:h-auto md:pb-14'>
        <div className='h-auto z-[2] max-w-full flex justify-around items-center lg:mx-8 md:flex-wrap'>
            <div className='flex items-center justify-center flex-wrap'>
                <div className='max-w-[45rem] lg:w-2/3 md:w-full sm:w-full sm:mx-4 md:mx-4'>
                    <p className='text-[5rem] font-bold text-left text-[#a27fff] 
                    md:text-[2.5rem] md:text-center lg:text-[2rem] sm:text-[2rem] sm:text-center'>
                        Study in <span className='text-[#F8DE22]'>{country}</span>
                    </p>
                    <p className='text-[#FFFFFF] text-left text-[3rem] lg:text-[2rem]
                    md:text-[1.5rem] md:text-center sm:text-[1rem] sm:text-center'>
                        Build a dream career
                    </p>
                    <p className='text-[#FFFFFF] text-left text-[1.2rem]
                    md:text-[1rem] md:text-center sm:text-[0.9rem] sm:text-center'>
                        International students prefer to study in {country}. The country
                        hosts more than a million international students and is one of the
                        most popular global educational hubs
                    </p>
                    <div className='p-[2%] flex justify-center md:justify-end sm:justify-end'>
                        <Image src={needle} alt="..." className='w-[20rem]' />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end'>
                <div className='md:justify-center md:w-full md:overflow-hidden'>
                    <Image src={studygirl} alt="..." className='max-w-[25rem] object-cover xl:w-[20rem] lg:w-[17rem] md:w-[14rem]' />
                </div>
            </div>
        </div>
        <div className='md:hidden sm:hidden lg:hidden'>
            <Image src={pattern} alt="..." className='absolute top-16 right-[16%] z-[-1]' />
        </div>
    </div>

  )
}

export default CountryHero
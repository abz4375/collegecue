import BoldHeading from '@/components/Heading/BoldHeading'
import Earnupto from '@/components/PagesComponent/Write-Review/Earnupto'
import LeaderBoard from '@/components/PagesComponent/Write-Review/Leaderboard'
import React from 'react'
import Image from 'next/image'
import cactus from "../../assets/writeareview/courses-shape.png"
import { FaqData } from "../../components/PagesComponent/Write-Review/Faqdata";
import Faq from '@/components/Faq/Faq'
import DoandDont from '@/components/PagesComponent/Write-Review/DoandDont'
import OfferTable from '@/components/PagesComponent/Write-Review/OfferTable'

const page = () => {
  return (
    <div className="mb-20">
      <Earnupto />
      <div className='max-w-[1536px] mx-auto'>
        <div className='flex flex-col  bg-[#ebfaff] mx-6 justify-center items-center mb-12 pt-16 pb-4 pl-16 pr-16
        md:pl-[2vw] md:pr-[2vw]'>
          <BoldHeading textAlign="center" color="#1F305E" heading='What Do we offer' />
          <OfferTable />
        </div>
        <div className='flex flex-col  bg-[#ebfaff] mx-6 justify-center items-center mb-12 pt-16 pb-8 pl-16 pr-16
        md:pl-[2vw] md:pr-[2vw]'>
          <BoldHeading heading=' Collegecue Reviews Leaderboard- This Month' />
          <LeaderBoard />
        </div>
        <div className='bg-[#ebfaff] mt-20 pt-20 pb-20 mx-auto max-w-[1480px] flex flex-col justify-center 
        items-center w-full gap-8 relative
        md:pl-[2vw] md:w-full md:pr-[2vw]'>
          <BoldHeading textAlign="center" color="#1F305E" heading=' Do’s & Dont’s - Points to Consider While Writing a Review' />
          <DoandDont />
          <div className='absolute -top-[50px] right-[150px]'>
            <Image src={cactus} alt="..." className='max-w-full h-auto' />
          </div>
          <BoldHeading textAlign="center" color="#1F305E" heading='Frequently Asked Questions (FAQs)' />
          <Faq faqs={FaqData} />
        </div>
      </div>
    </div>
  )
}

export default page
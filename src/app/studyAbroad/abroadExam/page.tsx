import React from 'react'
import StudyData from '@/components/DummyData/studyabraoddummy/StudyData';
import {ExamNews} from "@/components/PagesComponent/ExamPage/ExamNews";
import {Subscribe} from "@/components/PagesComponent/ExamPage/SubscribeNews/Subscribe";
import {ExamNotificationRender} from "@/components/PagesComponent/ExamPage/ExamNotificationRender";
import Image from "next/image";
import exam from "../../../assets/studyAbroad/abroadExam/exam.svg";


const page = () => {
  return (
    <>
        <div className='max-w-[1340px] mx-auto my-12'>
            <div className='w-full mx-auto my-10'>
                <div className='flex justify-between items-start gap-10'>
                    <div className='flex justify-between items-start mx-auto my-auto'>
                        <h1 className='px-[32px] py-[16px] text-5xl font-bold text-[#210366] '>Abroad Exams</h1>
                    </div>
                    <div>
                        <Image src={exam} alt="@bharat" className="w-[380px] h-auto"/>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-start gap-20 md:justify-center  md:flex-col '>
                <div>
                    <StudyData />
                </div>
                <div>
                    <div className='flex flex-1 flex-col gap-10 pb-[7px] justify-end md:justify-center px-4'>
                    <Subscribe />
                    <ExamNews />     
                    <ExamNotificationRender />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page
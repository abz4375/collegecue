import React from "react";
import ExamCardRender from "@/components/PagesComponent/ExamPage/ExamCardRender";
import {ExamNews} from "@/components/PagesComponent/ExamPage/ExamNews";
import {Subscribe} from "@/components/PagesComponent/ExamPage/SubscribeNews/Subscribe";
import {ExamNotificationRender} from "@/components/PagesComponent/ExamPage/ExamNotificationRender";
import {UpcomingExamRender} from "@/components/PagesComponent/ExamPage/UpcomingExamRender";
import {ExamSyllabusCard} from "@/components/PagesComponent/ExamPage/ExamSyllabusCard";
import {ConceptRender} from "@/components/PagesComponent/ExamPage/ConceptRender";
import {ExamJeeMainRender} from "@/components/PagesComponent/ExamPage/ExamJeeMainRender";
import {ExamHero} from "@/components/PagesComponent/ExamPage/ExamHero";

const Exam = () => {
  return (
    <div className="flex flex-col  mx-auto mb-20 items-center">
      <ExamHero />
      <div className=" flex max-w-[1340px] flex-col items-center justify-between lg:max-w-full mb-2 gap-16 md:p-0 p-5 sm:gap-8">
        <div className="w-full flex justify-between items-start gap-20 md:justify-center  md:flex-col ">
          <div className="w-full flex justify-between">
            <ExamCardRender />
          </div>
          <div className="flex flex-1 flex-col gap-10 pb-[7px] justify-end md:justify-center w-full px-4 ">
            <ExamNews />
            <Subscribe />
            <ExamNotificationRender />
            <UpcomingExamRender />
            <ExamSyllabusCard />
          </div>
        </div>
        <div className="flex w-full mx-auto flex-col mb-2 gap-16 md:p-4 max-sm:gap-8 ">
          <ConceptRender />
          <ExamJeeMainRender />
        </div>
      </div>
    </div>
  );
};

export default Exam;

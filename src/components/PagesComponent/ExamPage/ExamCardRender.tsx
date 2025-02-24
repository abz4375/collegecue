"use client";
import React, { useState, useRef } from "react";
import ExamComponentCard from "../../Reusable_cards/ExamComponentCard";
import ExamCard1 from "@/assets/ExamPage/ExamCard/ExamCard1.png";
import ExamCard2 from "@/assets/ExamPage/ExamCard/ExamCard2.png"
import ExamCard3 from "@/assets/ExamPage/ExamCard/ExamCard3.png"
import ExamCard4 from "@/assets/ExamPage/ExamCard/ExamCard4.png"
import ExamCard5 from "@/assets/ExamPage/ExamCard/ExamCard5.png";
import ExamCard6 from "@/assets/ExamPage/ExamCard/ExamCard6.png"
import ExamCard7 from "@/assets/ExamPage/ExamCard/ExamCard7.png"
import ExamCard8 from "@/assets/ExamPage/ExamCard/ExamCard8.png"


import { StaticImageData } from "next/image";
interface ExamData {
  name: string;
  examFullForm: string;
  modeOfExam: string;
  examDate: string;
  applicationDate: string;
  announceDate: string;
  image: StaticImageData;
}
const data = [
  {
    id: 1,
    name: "JEE Main 2023",
    title: "Joint Entrance Exam Main",
    examDate: "10 Apr 23",
    applicationDate: "14 Feb 23",
    announceDate: "24 Apr 23",
    mode: 'online',
    image: ExamCard1,
  },
  {
    id: 2,
    name: "JEE Advanced 2023",
    title: "Joint Entrance Exam Advanced",
    examDate: "04 Jun 23",
    applicationDate: "30 Apr 23",
    announceDate: "18 Jun 23",
    mode: 'online',
    image: ExamCard2,
  },
  {
    id: 3,
    name: "GATE 2023",
    title: "Graduate Aptitude Test in Engineering",
    examDate: "04 Feb 23",
    applicationDate: "09 Jan 23",
    announceDate: "21 Feb 23",
    mode: 'online',
    image: ExamCard3,
  },
  {
    id: 4,
    name: "BITSAT 2023",
    title: "Birla Institute of Technology...",
    examDate: "21 May 23",
    applicationDate: "10 May 23",
    announceDate: "01 Jul 23",
    mode: 'online',
    image: ExamCard4,
  },
  {
    id: 5,
    name: "WBJEE 2023",
    title: "West Bengal Joint Entrance Exam",
    examDate: "30 Apr 23",
    applicationDate: "23 Dec 22",
    announceDate: "15 Jun 23",
    mode: 'online',
    image: ExamCard5,
  },
  {
    id: 6,
    name: "KEAM 2023",
    title: "West Bengal Joint Entrance Exam",
    examDate: "07 May 23",
    applicationDate: "20 Feb 23",
    announceDate: "28 May 23",
    mode: 'online',
    image: ExamCard6,
  },
  {
    id: 7,
    name: "TE EAMCET 2023",
    title: "West Bengal Joint Entrance Exam",
    examDate: "07 May 23",
    applicationDate: "03 Mar 23",
    announceDate: "22 Jun 23",
    mode: 'online',
    image: ExamCard7,
  },
  {
    id: 8,
    name: "COMEDK UGET 2023",
    title: "West Bengal Joint Entrance Exam",
    examDate: "28 May 23",
    applicationDate: "15 Feb 23",
    announceDate: "10 Jun 23",
    mode: 'online',
    image: ExamCard8,
  },
  {
    id: 7,
    name: "TE EAMCET 2023",
    title: "West Bengal Joint Entrance Exam",
    examDate: "07 May 23",
    applicationDate: "03 Mar 23",
    announceDate: "22 Jun 23",
    mode: 'online',
    image: ExamCard7,
  },
  {
    id: 6,
    name: "KEAM 2023",
    title: "West Bengal Joint Entrance Exam",
    examDate: "07 May 23",
    applicationDate: "20 Feb 23",
    announceDate: "28 May 23",
    mode: 'online',
    image: ExamCard6,
  },
];

const ExamCardRender = () => {
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <div className="">
      <div className=" w-full flex flex-wrap justify-between md:justify-center items-center gap-8 px-4 ">
       
        {data.map((exam, id) => (
          <div className="" key={id}>
            <ExamComponentCard
              name={exam.name}
              image={exam.image}
              examFullForm= {exam.title}
              mode={exam.mode}
              examDate={exam.examDate}
              applicationDate= {exam.applicationDate}
              announceDate= {exam.announceDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamCardRender;

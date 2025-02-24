'use client';
import React, { useState } from "react";
import { MdOutlineEngineering, MdOutlineManageAccounts, MdOutlineMedicalServices, MdOutlineShoppingCart, MdOutlineDesignServices, MdArchitecture } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { GiWorld } from "react-icons/gi";
import { BiLogoKubernetes } from "react-icons/bi";

import Card from "../../../Reusable_cards/StudyGoalCard";
import Modal from "./Modal";

interface StudyGoal {
  label: string;
  imagePath: any;
  course1: string;
  course2?: string;
  course3?: string;
}

const StudyGoals: React.FC = () => {
  const [selectedStudyGoal, setSelectedStudyGoal] = useState<StudyGoal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const results: StudyGoal[] = [
    {
      label: "Engineering",
      imagePath: <MdOutlineEngineering/>,
      course1: "BE/B.Tech",
      course2: "Diploma in Engineering",
      course3: "ME/M.Tech",
    },
    {
      label: "Management",
      imagePath: <MdOutlineManageAccounts/>,
      course1: "MBA/PGDM",
      course2: "BBA/BBM",
      course3: "BBA/BBM",
    },
    {
      label: "Medical",
      imagePath: <MdOutlineMedicalServices/>,
      course1: "MBBS",
      course2: "PG Medical",
    },
    {
      label: "Commerce",
      imagePath: <MdOutlineShoppingCart/>,
      course1: "B.Com",
      course2: "M.Com",
    },
    {
      label: "Design",
      imagePath: < MdOutlineDesignServices/>,
      course1: "B.Des",
      course2: "M.Des",
    },
    {
      label: "Law",
      imagePath: <GoLaw/>,
      course1: "LLB",
      course2: "LLM",
    },
    {
      label: "Architecture",
      imagePath: <MdArchitecture/>,
      course1: "B.Arch",
      course2: "M.Arch",
    },
    {
      label: "Animation",
      imagePath: <BiLogoKubernetes/>,
      course1: "Bachelor of Animation",
      course2: "Diploma in Animation",
      course3: "Certificate in Animation",
    },
    {
      label: "Aviation",
      imagePath: <GiWorld/>,
      course1: "BBA (Aviation)",
    },
  ];

  const handleCardClick = (studyGoal: StudyGoal) => {
    setSelectedStudyGoal(studyGoal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudyGoal(null);
  };

  return (
    <section className="max-w-[1536px] px-4 my-20  mx-auto w-full">
      <div className="flex flex-wrap items-center justify-around flex-1 ml-7">
        {results.map((result, index) => (
          <Card key={index} StudyGoalData={result} id={index} onClick={handleCardClick} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} studyGoalData={selectedStudyGoal} />
    </section>
  );
};

export default StudyGoals;
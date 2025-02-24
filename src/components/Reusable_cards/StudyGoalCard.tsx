import React from "react";
import Image from "next/image";

interface StudyGoal {
  label: string;
  imagePath: string;
  course1: string;
  course2?: string;
  course3?: string;
}

type StudyGoalCardProps = {
  StudyGoalData: StudyGoal;
  id: number;
  onClick: (studyGoal: StudyGoal) => void;
};

const Card: React.FC<StudyGoalCardProps> = ({ StudyGoalData, id, onClick }) => {
  return (
    <div 
      className="m-2 flex cursor-pointer transform transition-all duration-300 ease-in-out border-2 rounded-xl hover:bg-gray-200 border-gray-300 hover:shadow-lg  hover:-translate-y-[0.25rem]" 
      onClick={() => onClick(StudyGoalData)}
    >
      <div className="flex justify-center w-[118px] h-[129px] items-center mb-2 p-1 rounded-xl text-[#002366]  transition-colors duration-200">
        <div className="flex flex-col items-center justify-center w-[118px] h-[129px]  px-4 pt-1 pb-2">
          <p className="text-5xl font-light">
            {StudyGoalData.imagePath}
          </p>
          <p>{StudyGoalData.label}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
"use client";
import React, { useState } from "react";
import CollegePredictorCard from "@/components/Reusable_cards/CollegePredictorCard";
import { Data } from "../../DummyData/CollegePredictorData";

interface CardData {
  id: number;
  CollegeParticipating:any;
  examDate: any;
  examLevel: string;
  imgContent:any;
  imgLogo: any;
  Images:any
}

interface CardsProps {
  data: CardData[];
}

const Cards: React.FC<CardsProps> = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowCards = () => {
    setShowAllCards((prevShowAllCards) => !prevShowAllCards);
  };

  return (
    <div className="flex flex-wrap items-center justify-between md:justify-center mx-auto gap-4 max-w-[1200px]">
      {Data.slice(0, showAllCards ? Data.length : 9).map((card, index) => (
        <CollegePredictorCard
          key={index} // Use index as key if id is not available
          collegeParticipating={card.CollegeParticiapting}
          examDate={card.examdate}
          examLevel={card.examlevel}
          imgContent={card.imgcontent}
          imgLogo={card.Imglogo}
          images={card.Images} // Assuming you want to pass image source to Card component
        />
      ))}
      <div className="col-span-3  mt-[-28px]  sm:col-span-1 flex justify-center mr-8 sm:w-[400px] sm:ml-2 ">
        <button
          className="px-4 py-2 bg-[#313893] mb-12 text-[0.8rem] font-bold text-white rounded-[12px] hover:bg-blue-600"
          onClick={toggleShowCards}
        >
          {showAllCards ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Cards;

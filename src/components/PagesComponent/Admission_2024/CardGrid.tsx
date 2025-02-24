import React from "react";
import AddmissionCard from "../../Reusable_cards/AddmissionCard";
import { StaticImageData } from "next/image";

interface CardData {
  imag: string | StaticImageData;
  course: string;
  datee: string;
  data: string;
  about: string;
}

interface CardGridProps {
  cardsData: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cardsData }) => {
  return (
    <div className="flex flex-wrap justify-between w-full sm:justify-center items-center gap-8 ">
    
    {cardsData.map((data, index) => (
      <div key={index}>
        <AddmissionCard {...data} />
      </div>
      ))}
    </div>
  );
};

export default CardGrid;

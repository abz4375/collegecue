import React from "react";
import LowerCard from "../../Reusable_cards/LowerCard"; 
import { Card2 } from "../../DummyData/CollegePredictorData";

const ShowCard2: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between md:justify-center mb-20 mx-auto gap-4 max-w-[1200px]">
      {Card2.map((card, index) => (
        <LowerCard
          key={index} 
          Images={card.Images}
          collegeName={card.collegeName}
          collegeLocation={card.collegeLocation}
          collegeParticipating={card.collegeParticipating}
        />
      ))}
    </div>
  );
};

export default ShowCard2;

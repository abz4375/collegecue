import React from 'react';
import Heading from '../../Heading/Heading';
import OurSuggestionData from "../../DummyData/OurSuggestionData";
import SuggestionCard from '../../Reusable_cards/SuggestionCard';

const Suggestion: React.FC = () => {
  return (
    <div className="p-4 w-[1100px]">
      <div className='ml-[50px] sm:ml-[75px] '>
        <Heading heading_name="Our Suggestion" />
      </div>
      <div className='grid  sm:grid-cols-1 grid-cols-3 gap-12 mt-6  ml-[50px] sm:ml-[13px]  '>
        {OurSuggestionData.map((card, index) => (
          <SuggestionCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Suggestion;

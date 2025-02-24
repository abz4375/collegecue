import React from 'react';
import reviews from '../../DummyData/DataCol';
import CardCol from '../../Reusable_cards/CardCol';

interface Review {
  title: string;
  description: string;
  // Add other properties as needed
}

interface AllAnsColProps {
  getbgColor: (index: number) => string;
}

const AllAnsCol: React.FC<AllAnsColProps> = ({ getbgColor }) => {
  return (
    <div className="flex flex-col h-auto gap-4 mb-8 md:mx-1 md:justify-center md:items-center md:flex-col rounded-tl-[8px] ">
      <div className="mt-8 ">
        <p className="text-[#232020] text-[16px] font-[710] break-words pl-[1rem] ">
          Most Viewed Questions
        </p>
      </div>
      
      <div>
        {reviews.map((answer: any, index: number) => (
          <CardCol key={index} {...answer} getbgColor={() => getbgColor(index)} />
        ))}
      </div>
    </div>
  );
};

export default AllAnsCol;
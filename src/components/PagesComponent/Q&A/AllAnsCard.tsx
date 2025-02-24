import QNACard from "../../Reusable_cards/QNACard";
import React from 'react';
import reviews from '../../DummyData/QnAreviewData';
import Search from './Search';

interface Review {
  title: string;
  description: string;
  // Add other properties as needed
}


interface AllAnsCardProps {
  getbgColor: (index: number) => string;
}

const AllAnsCard: React.FC<AllAnsCardProps> = ({ getbgColor }) => {
  return (
    <div className="flex flex-col gap-4 px-8 md:px-4">
      <Search />
      {reviews.map((answer: any, index: number) => (
        <QNACard key={index} {...answer} getbgColor={() => getbgColor(index)} />
      ))}
    </div>
  );
};

export default AllAnsCard;
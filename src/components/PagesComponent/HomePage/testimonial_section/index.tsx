// pages/index.tsx
import React from 'react';
import {ReviewCard} from './ReviewCard';
import Image from 'next/image';
import bulb from '@/assets/Testimonial_Section/bulb.png';

const Testimonial: React.FC = () => {
  return (
    <div className="mx-auto text-center mb-20">
      <div className="flex items-center justify-center mb-4">
        <Image src={bulb} alt="Testimonial Banner" width={20} height={15} />
        <p className="text-violet-700 ml-2">Student Review</p>
      </div>
      <h1 className="text-4xl font-bold mb-4">Our Students Feedback</h1>
      <p className="text-zinc-500 mb-10">
      You&apos;ll find something to spark your curiosity and enhance
      </p>
      <ReviewCard />
    </div>
  );
};

export default Testimonial;

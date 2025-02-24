// ReviewCard.tsx
'use client';
import React , {useState} from 'react';
import { testimonials } from './TestimonialData';
import renderStars from './star';
import Image from 'next/image';
import Icon from '@/assets/Testimonial_Section/img1.png';

const ReviewCard: React.FC = () => {
  // Split testimonials into two halves
  const [isFirstHalfHovered, setIsFirstHalfHovered] = useState(false);
  const [isSecondHalfHovered, setIsSecondHalfHovered] = useState(false);

  // Split testimonials into two halves
  const half = Math.ceil(testimonials.length / 2);
  const firstHalf = testimonials.slice(0, half);
  const secondHalf = testimonials.slice(half);

  // Inline styles for animation control
  const firstHalfAnimationStyle = {
    animationPlayState: isFirstHalfHovered ? 'paused' : 'running',
  };

  const secondHalfAnimationStyle = {
    animationPlayState: isSecondHalfHovered ? 'paused' : 'running',
  };

  return (
    <div className="flex flex-col">
     
        <div className="flex animate-marqueer2l"
                onMouseEnter={() => setIsFirstHalfHovered(true)}
                onMouseLeave={() => setIsFirstHalfHovered(false)}
                style={firstHalfAnimationStyle}>
          {firstHalf.map((testimonial, index) => (
            <div className='' key={index}>
              <div className="rounded-lg p-8 m-4 w-[460px] h-64 bg-zinc-50 border border-zinc-300">
                <div className="flex items-center mb-5">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 text-base flex text-justify">{testimonial.testimonial}</p>
                <div className="flex mt-5">
                  <div className="w-12 h-12 rounded-full mt-1 overflow-hidden mr-1">
                    <Image src={Icon} alt={`${testimonial.name}'s icon`} width={50} height={42} />
                  </div>
                  <div>
                    <p className="text-xl font-bold flex justify-start ml-3">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 flex justify-start ml-3">
                      {testimonial.program}, {testimonial.batch}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
     {/* animation-left-to-right */}
        <div className="flex animate-marqueenew"
          onMouseEnter={() => setIsSecondHalfHovered(true)}
          onMouseLeave={() => setIsSecondHalfHovered(false)}
          style={secondHalfAnimationStyle}>
          {secondHalf.map((testimonial, index) => (
             <div className='' key={index}>
               <div className="rounded-lg p-8 m-4 w-[460px] h-64 bg-zinc-50 border border-zinc-300">
                 <div className="flex items-center mb-5">
                   {renderStars(testimonial.rating)}
                 </div>
                 <p className="text-gray-600 text-base flex text-justify">{testimonial.testimonial}</p>
                 <div className="flex mt-5">
                   <div className="w-12 h-12 rounded-full overflow-hidden mt-1 mr-1">
                     <Image src={Icon} alt={`${testimonial.name}'s icon`} width={50} height={42} />
                   </div>
                   <div>
                     <p className="text-xl font-bold flex justify-start ml-3">{testimonial.name}</p>
                     <p className="text-sm text-gray-500 flex justify-start ml-3">
                       {testimonial.program}, {testimonial.batch}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
        </div>
  );
};

export {ReviewCard};

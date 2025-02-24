import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  leftContent?: (string | JSX.Element)[];
  rightContent?: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ leftContent = [], rightContent = [] }) => {
  const progressPercentages = [7, 88, 29];

  return (
    <div className="relative flex justify-center items-center ">
      {/* Background Image */}
      <div className="absolute inset-0 md:hidden ">
        <Image
          src="https://i0.wp.com/progrisaas.archiwp.com/wp-content/uploads/2021/04/bg1-philosophy.png?fit=1920%2C991&ssl=1"
          alt="Background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="transform scale-100"
        />
      </div>

      {/* Main Content Container */}
      <div className="mx-auto px-4 py-8 flex md:flex-col md:text-left justify-center h-screen md:max-h-[650px] w-3/4 md:w-full ">
        {/* Left Content */}
        <div className="w-full md:w-full px-4">
          {leftContent.map((item, index) => (
            <div key={index} className="mb-4">
              {index === 0 ? (
                <span className="font-[500] text-[48px] md:text-3xl leading-[1.2] text-gray-800 block mb-8 md:mb-4">
                  {item}
                </span>
              ) : (
                <span className={index < 4 ? 'text-gray-700' : 'font-bold'} key={index.toString()}>{item}</span>
              )}
              {index < progressPercentages.length && (
                <div className="flex items-center mt-2 md:mt-4">
                  <div className="flex-1">
                    <div
                      className={`h-[7px]  ${index === 0 ? 'bg-[#39B14A]' : index === 1 ? 'bg-blue-500' : 'bg-orange-500'}`}
                      style={{ width: `${progressPercentages[index]}%` }}
                    ></div>
                  </div>
                  <span className="md:ml-4 font-[500] md:text-2xl text-[48px]">
                    {progressPercentages[index]}%
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-full md:w-full px-4 md:mt-[45px]">
          {rightContent.map((item, index) => (
            <div key={index} className="mb-4">
              {item === 'These cases are perfectly simple and easy to distinguish' ? (
                <span className="font-bold text-lg md:text-xl" style={{ color: '#223354' }}>
                  {item}
                </span>
              ) : (
                <span className="text-sm md:text-base" style={{ color: '#646e83' }}>{item}</span>
              )}
              {index + leftContent.length < progressPercentages.length && (
                <div className="flex items-center mt-2 md:mt-4">
                  <span className="mr-2 md:mr-4 font-semibold text-sm md:text-lg">
                    {progressPercentages[index + leftContent.length]}%
                  </span>
                  <div className="flex-1">
                    <div className="bg-gray-300 h-2 rounded-full">
                      <div
                        className={`h-full rounded-full ${index + leftContent.length === 1 ? 'bg-[#1080D0]' : 'bg-[#FF6B52]'}`}
                        style={{ width: `${progressPercentages[index + leftContent.length]}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HeroSection.defaultProps = {
  leftContent: [
    'The Results of Our Work are Tailored to the Interests of Each Client',
    <span key="1" style={{ color: '#7A7A7A' }}>Irure dolor in reprehenderit</span>,
    <span key="2" style={{ color: '#7A7A7A' }}>Duis aute irure dolor in reprehenderit</span>,
    <span key="3" style={{ color: '#7A7A7A' }}>Duis aute irure dolor</span>,
  ],
  rightContent: [
    'These cases are perfectly simple and easy to distinguish',
    'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.',
  ],
};

export default HeroSection;

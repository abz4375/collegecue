'use client';
import React, { ReactNode, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import Loader from '@/components/Loader';

interface InViewWrapperProps {
  children: ReactNode;
}

const InViewWrapper: React.FC<InViewWrapperProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <>
          {children}
          </>
      ) : (
        <div className="flex justify-center items-center h-full w-full relative p-8">
          <div className="mt-2.5 ml-5 text-[#313893] text-[1.4rem] font-semibold text-center sm:text-[0.875rem]">
            Loading...
          </div>
        </div>
      )}
    </div>
  );
};

export default InViewWrapper;

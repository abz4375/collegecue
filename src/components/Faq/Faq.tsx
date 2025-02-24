'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ faqs }) => {
  const [activeCollapse, setActiveCollapse] = useState<number | null>(null);

  const toggleCollapse = (panel: number) => {
    setActiveCollapse(activeCollapse === panel ? null : panel);
  };

  return (
    <div className="flex flex-wrap justify-evenly items-center sm:flex-col md:flex-col lg:flex-col xl:flex-col">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="flex-shrink-0 w-full sm:w-full px-2 py-2 focus:bg-blue-100 focus:bg-opacity-75"
        >
          <div
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm "
            onClick={() => toggleCollapse(index)}
          >
            <div className="flex items-center justify-between bg-white px-4 py-3 cursor-pointer text-black transition-all duration-150 hover:text-black">
              <p className="font-semibold">{faq.question}</p>
              {activeCollapse === index ? (
                <AiOutlineMinus className="text-gray-600" />
              ) : (
                <AiOutlinePlus className="text-gray-600" />
              )}
            </div>
            <AnimatePresence>
              {activeCollapse === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-white text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Faq;
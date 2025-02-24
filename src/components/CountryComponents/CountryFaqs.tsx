import React from 'react';
import Faq from '../Faq/Faq';

const CountryFaqs = ({faqs}:any) => {
  return (
    <div className='lg:mx-8 md:mx-4 mx-auto sm:mx-4 xl:mx-6 my-20'>
        <div className='mx-auto'>
            <p className='text-[#1F305E] text-[2.5rem] font-bold text-center'>
            Frequently Asked Questions (FAQs)
            </p>
        </div>
        <div className='flex flex-wrap justify-center items-center sm:flex-col sm:flex-nowrap'>
            
                <Faq faqs={faqs} />
           
        </div>
    </div>
  )
}

export default CountryFaqs
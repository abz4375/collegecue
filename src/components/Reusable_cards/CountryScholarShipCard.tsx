import React from 'react'

interface PopularScholarshipCard{
    heading:string;
    title:string;
    content1:string;
    content2:string;
    content3:string;
    content4:string;
    button:string;
}

const ScholarShipCard:React.FC<PopularScholarshipCard> = ({
    heading,
    title,
    content1,
    content2,
    content3,
    content4,
    button,
}) => {
  return (
    <div className='w-[350px] h-[216px] shadow-newd mt-4 mb-8 ml-4 rounded-[28px] p-[10px]'>
        <div className='font-bold text-[#210366] text-xs'>
            <div className='w-[120px] h-[30px] text-[#FFFFFF] items-center justify-center bg-[#7B90FF] flex rounded mt-1 mb-2'>
                {heading}
            </div>
            <p className='font-bold text-sm mb-2'>{title}</p>
            <hr className='w-[96%] border border-[#7B90FF33]' />
            <div className='flex flex-row mt-4 gap-2 mb-1'>
                <div>
                    <p>International Student Eligible</p>
                    <p>Amount</p>
                    <p>Level of Study</p>
                    <p>Number of Scholarships</p>
                </div>
                <div className='pl-[50px]'>
                    <p>{content1}</p>
                    <p>{content2}</p>
                    <p>{content3}</p>
                    <p>{content4}</p>
               </div>
            </div>
            <hr className='w-[96%] border border-[#7B90FF33]' />
            <div className='flex items-center justify-center mt-2'>
                <button className='w-[100px] h-[30px] capitalize text-[#FFFFFF] bg-[#7B90FF] text-xs'>
                    {button}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ScholarShipCard
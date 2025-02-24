import React from 'react'
import Image from 'next/image'

interface CounsillerCard{
    img:any,
    content:string,
}

const AcademicCounsillercard:React.FC<CounsillerCard> = ({
    img,
    content,
}) => {
  return (
    <div className='mb-[20px]'>
        <div className='flex flex-row items-center justify-start md:justify-center'>
            <button className='rounded-[0.6rem] bg-[#7B90FF] text-white capitalize py-[0.7rem] w-[230px]
            ml-4 text-sm overflow-hidden text-ellipsis flex-nowrap flex items-center'>
                <Image src={img} alt="..." className='w-[30px] h-[30px] mr-4 ml-4' />
                {content}
            </button>
        </div>

    </div>
  )
}

export default AcademicCounsillercard
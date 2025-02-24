import React from 'react'
import border from './border.png'
import Image from 'next/image'



const ChooseCourseHeading = ({heading} : {heading: string}) => {
  return (
    <div className='flex flex-col w-full justify-center items-center pb-8'>
        <div className='flex justify-center w-full'>
            <h4 className='uppercase text-[1.7rem] font-bold text-[#48639e] break-words '>{heading}</h4>
        </div>
        <Image src={border} width={100} height={100} alt='border'/>

    </div>
  )
}

export default ChooseCourseHeading
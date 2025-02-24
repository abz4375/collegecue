import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BtnData{
    image:any,
    name:string,
    link:string
}

const Sqnbtn:React.FC<BtnData> = ({
    image,
    name,
    link,
}) => {
  return (
    <Link href={link} className='no-underline'>
    <div className='flex flex-col items-center justify-center bg-white shadow-5xl h-[150px] w-[170px]
    text-[#323C4F] rounded-tl-[2rem] rounded-tr-[1rem] rounded-br-[2rem] rounded-bl-[1rem]
     hover:shadow-sqbntsh transition duration-300 '>
        <div className='flex items-center justify-center w-full h-[85%]'>
            <Image src={image} alt={name} className='w-full h-full object-contain' />
        </div>
        <p className='h-[27px] pb-6 font-semibold text-ellipsis text-center text-[#323C4F] max-w-[100px]
        mx-auto whitespace-nowrap overflow-hidden uppercase'>
            {name}
        </p>
    </div>
    </Link>
  )
}

export default Sqnbtn
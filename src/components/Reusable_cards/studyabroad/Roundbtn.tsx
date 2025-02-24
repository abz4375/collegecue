import React from 'react';
import Image from 'next/image';

interface RoundbntCard{
    image:any,
    name:string,
}

const Roundbtn:React.FC<RoundbntCard> = ({
    image,
    name
}) => {
  return (
    <div className='flex justify-center items-center flex-col rounded-2xl border-[3px] border-gray-300 p-2 transition-colors
    hover:scale-[1.05] hover:border-[#7B90FF]'>
        <div className='flex justify-center items-center w-[120px] h-[120px] rounded-[50%] overflow-hidden shadow-5xl'>
            <Image src={image} alt={name} className='w-1/2 h-1/2 object-cover' />
        </div>
        <p className='text-base leading-5 font-semibold text-center text-[#210366] 
        uppercase mt-2 max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap'>{name}</p>
    </div>
  )
}

export default Roundbtn
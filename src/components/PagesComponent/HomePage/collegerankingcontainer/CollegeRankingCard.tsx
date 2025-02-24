import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CollegeRankingCard = (props:any) => {
  return (
    <>
    <Link href={`/top-university/${props.city}`}
    className='no-underline'
    >
        <div className='h-40 w-40 bg-[white] border-[2px] transition-all duration-150 border-gray-300 hover:shadow-3xl rounded-xl flex flex-col items-center p-4'>
            <Image src={props.img} alt="..." height={100} width={100} />
            <p className='text-blue-900 font-[Poppins] text-xs font-black text-left py-2 px-0 pt-0 pr-2 pb-0 pl-1 tracking-wide'>
                {props.city}
            </p>
        </div>
    </Link>
    </>
  )
}

export default CollegeRankingCard
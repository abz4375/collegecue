import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Topplacecard{
    img:any,
    place:string,
}

const TopPlaceCard:React.FC<Topplacecard> = ({
    img,
    place
}) => {
  return (
    <div className='mb-5'>
        <Link href={`/studyAbroad/country/${place}`}>
            <div className='mt-5 rounded-xl shadow-newd p-[30px]'>
                <div className='justify-center items-center flex flex-col'>
                    <Image src={img} alt="@bharatTech" className='w-[80px] h-[70px]' />
                    <p className='font-semibold text-xs text-[#210366] mt-4'>
                        {place}
                    </p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default TopPlaceCard
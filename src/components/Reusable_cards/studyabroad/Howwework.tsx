import React from 'react'
import Image from 'next/image'

interface HowWework{
    img:any,
    name:string
}

const Howwework:React.FC<HowWework> = ({
    img,
    name
}) => {
  return (
    <div className='w-[300px] h-auto flex flex-col justify-center my-6 flex-wrap mx-4 gap-4
    hover:scale-[1.02] hover:transition hover:ease-linear hover:duration-300'>
        <div className='w-[100%] h-[200px] bg-white flex items-center justify-center transition duration-300 
        rounded-tl-2xl rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-2xl border-[5px] border-gray-300'>
            <Image src={img} alt={name} className='w-[100px] object-cover' />
        </div>
        <button className='rounded-[0.6rem] bg-[#7B90FF] text-white py-[0.7rem] 
        w-full capitalize mx-auto text-center hover:scale-[1.01] hover:bg-howwebtn'>
            {name}
        </button>
    </div>
  )
}

export default Howwework
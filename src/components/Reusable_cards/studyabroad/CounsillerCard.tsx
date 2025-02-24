'use client';
import React , {useState} from 'react'
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

interface CounsillerCard{
    image:any,
    name:string,
    designation:string,
    exp:string
}

const CounsillerCard:React.FC<CounsillerCard> = ({
    image,
    name,
    designation,
    exp
}) => {
    const [showSocialLinks, setShowSocialLinks] = useState(false);

  return (
    <div className='flex flex-col items-center relative p-[5px] rounded-2xl bg-[#fff] overflow-hidden shadow-5xl 
    transition-transform transition-box-shadow duration-300 ease-in-out
     hover:scale-[1.03] hover:shadow-sqbntsh2 hover:brightness-90'
    onMouseEnter={()=>setShowSocialLinks(true)}
    onMouseLeave={()=>{
        setShowSocialLinks(false);
    }}>
        <div className='absolute top-[18%] left-0 w-full h-4/5 flex flex-col justify-around items-center p-5 z-[2]'>
            {showSocialLinks &&(
                <>
                <div className='w-12 h-20 bg-[#4285F4] rounded-full p-[10px] hover:bg-transparent flex items-center justify-center'>
                    <FaLinkedin className='text-[26px] text-white hover:brightness-100'/>
                </div>
                <div className='flex items-center  justify-center flex-wrap text-center'>
                    <p className='text-white mb-[5px] capitalize font-semibold hover:brightness-200'>{designation}</p>
                    <p className='text-white mb-5 capitalize font-semibold hover:brightness-200'>{exp}</p>
                    <button className='font-semibold rounded-xl capitalize py-[10px] px-[30px]
                    text-white bg-[#7B90FF] hover:bg-[#FF6347]'>
                        Fix an Appointment
                    </button>
                </div>
                </>
            )}
            <div className='text-center mt-[250px] hover:mt-16'>
                <p className='text-[#000] font-semibold  capitalize'>
                    {name}
                </p>
            </div>
        </div>
        <div className='min-w-[350px] w-[500px] h-[400px]'>
            <Image src={image} alt="..." className='w-full h-4/5 object-contain transition-filter' />
        </div>
    </div>
  )
}

export default CounsillerCard
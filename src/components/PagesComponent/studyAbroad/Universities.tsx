import React from 'react'
import img1 from "../../../assets/studyAbroad/collegeimage/agency1.webp";
import img2 from "../../../assets/studyAbroad/collegeimage/agency2.webp";
import img3 from "../../../assets/studyAbroad/collegeimage/agency3.webp"
import Image from 'next/image';
import Studyabroadheading from '../../Heading/Studyabroadheading';

const universitiesData = [
    { name: "Indian Institute of Technology Roorkee", logo: img1, rating: 4.5 },
    {
      name: "School of Planning and Architecture delhi",
      logo: img2,
      rating: 4.2,
    },
    {
      name: "School of Planning and Architecture vijaywada",
      logo: img3,
      rating: 4.7,
    },
  ];

const Universities = () => {
  return (
    <div className='max-w-[1152px] mx-auto flex flex-col justify-start mt-20 mb-20'>
        <Studyabroadheading heading='APPLY TO 5000+ UNIVERSITIES' />
        <div className="w-full mx-auto flex justify-center sm:overflow-x-scroll lg:overflow-x-scroll
         md:overflow-x-scroll rounded-2xl visible">
        <table
              className="min-w-[600px] w-[1152px] rounded-2xl sm:ml-[15rem]"
              aria-label="caption table"
            >
                <tbody>
                    <tr className=' bg-univer flex w-full'>
                        <th className='max-w-[609px] w-full md:w-1/2 h-14 pt-4 pb-4 flex text-sm 
                        items-center justify-center'>Universities</th>
                        <th className='max-w-[252px] w-full md:w-1/2 h-14 flex text-sm items-center justify-center'>College Rating</th>
                        <th className='max-w-[291px] w-full md:w-1/2 h-14 flex text-sm items-center justify-center'>Action</th>
                    </tr>
                    {universitiesData.map((university,index)=>(
                        <tr key={index} className='flex border-b border-gray-200'>
                            <td className='max-w-[609px] w-full md:w-1/2 h-[82px] pt-4 pb-4 
                            flex justify-center items-center text-sm sm:ml-4'>
                                <div className='flex flex-row items-center justify-center gap-4'>
                                    <Image src={university.logo} alt={university.name}
                                     className='h-[50px] w-[50px] md:w-[32px] md:h-[32px] rounded-full' />
                                     <p className='text-sm md:text-xs max-w-52 md:w-1/2 flex flex-wrap text-center'>{university.name}</p>
                                </div>
                            </td>
                        <td className='max-w-[252px] w-full md:w-1/2 h-[82px] flex justify-center items-center text-sm'>{university.rating}</td>
                        <td className='max-w-[291px] w-full h-[82px] md:w-1/2 flex justify-center items-center'>
                            <button className='w-[112px] h-[36px] bg-[#1976D2] text-white text-sm rounded-lg'>
                                APPLY NOW
                            </button>
                        </td>
                        </tr>
                    ))}
                </tbody>
        </table>
        </div>
    </div>
  )
}

export default Universities
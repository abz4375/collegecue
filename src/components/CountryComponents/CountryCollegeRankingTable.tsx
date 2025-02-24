import React from 'react';
import Image from 'next/image';

const CountryCollegeRankingTable = ({clgRnktable}:any) => {
  return (
    <div className='mt-8 overflow-auto'>
      <p className='text-[#41355D] text-[30px] font-bold'>Colleges Ranking 2023</p>
      <div className="sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-scroll w-full flex justify-center">
        <table
        className="min-w-[650px] border border-gray-300 rounded-xl overflow-hidden sm:ml-[20rem]"
        aria-label="caption table"
        >
          <thead className='bg-tablecol'>
          <tr>
            <th className="text-[#000000DE] text-sm w-[766px] h-14 p-4 text-center ">
              College
            </th>
            <th className="items-center text-sm text-[#000000DE] w-[216px] h-14 p-4 text-center ">
              Ranking
            </th>
            <th className="items-center text-sm w-[169px] h-14 p-4 text-center text-[#000000DE] ">
              Streams
            </th>
          </tr>
        </thead>
        <tbody>
          {clgRnktable.map((item:any,index:any)=>(
            <tr key={index}>
              <td className='w-[766px] h-[102px] p-4'>
                <div className='flex flex-row items-center'>
                  <Image src={item.img} alt='..' className='w-[70px] h-[70px] object-contain' />
                  <p className='text-base flex flex-wrap'>{item.college}</p>
                </div>
              </td>
              <td className='w-[216px] h-[102px] p-4 text-center'>
                {item.ranking}
              </td>
              <td className='w-[169px] h-[102px] p-4 text-center'>
                {item.streams}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>    
    </div>
  )
}

export default CountryCollegeRankingTable
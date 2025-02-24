import React from 'react';
import Image from 'next/image';

const Applicationtable = ({appdates}:any) => {
  return (
    <div className='mt-8 overflow-auto mb-20'>
      <p className='text-[#48639e] text-[1.7rem] font-bold'>APPLICATION DATES</p>
      <div className="sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-scroll rounded-xl w-full flex justify-center">
        <table
        className="min-w-[650px] rounded-xl sm:ml-[20rem]"
        aria-label="caption table"
        >
          <thead className='bg-tablecol rounded-xl'>
          <tr>
            <th className="text-[#000000DE] text-sm w-[541px] h-[80px] p-4 text-center ">
              University
            </th>
            <th className="items-center text-sm text-[#000000DE] w-[280px] h-[80px] p-4 text-center ">
              Events
            </th>
            <th className="items-center text-sm text-[#000000DE] w-[168px] h-[80px] p-4 text-center ">
              Application Start Date
            </th>
            <th className="items-center text-sm w-[162px] h-[80px] p-4 text-center text-[#000000DE] ">
              Application End Date
            </th>
          </tr>
        </thead>
        <tbody>
          {appdates.map((item:any,index:any)=>(
            <tr key={index} className='border-r border-l border-b border-gray-300'>
              <td className='w-[541px] h-[102px] p-4 '>
                <div className='flex flex-row items-center'>
                  <Image src={item.img} alt='..' className='w-[70px] h-[70px] object-contain' />
                  <p className='text-base flex flex-wrap'>{item.university}</p>
                </div>
              </td>
              <td className='w-[280px] h-[102px] p-4 text-center'>
                {item.events}
              </td>
              <td className='w-[168px] h-[102px] p-4 text-center'>
                {item.start}
              </td>
              <td className='w-[162px] h-[102px] p-4 text-center'>
                {item.end}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>    
    </div>
  )
}

export default Applicationtable
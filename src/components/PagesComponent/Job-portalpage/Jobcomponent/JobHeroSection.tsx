"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const JobHeroSection = () => {
  const [selectedJob, setSelectedJob] = useState();
  const [selectJobs, setSelectJobs] = useState([
    { value: 1, label: "Developer" },
    { value: 2, label: "Coder" },
    { value: 3, label: "Finance" },
    { value: 4, label: "Accounting" },
    { value: 5, label: "Design" },
    { value: 6, label: "Artist" },
    { value: 7, label: "Application" },
    // Add more countries as needed
  ]);

  const handleJobChange = (event: any) => {
    setSelectedJob(event.target.value);
  };

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectLoctaion, setSelectLoctaion] = useState([
    { value: 21, label: "Mumbai" },
    { value: 22, label: "Banglore" },
    { value: 23, label: "Delhi" },
    { value: 24, label: "Heyderabad" },
    { value: 25, label: "Pune" },
    { value: 26, label: "Luckhnow" },
    { value: 27, label: "Jaipur" },
    // Add more countries as needed
  ]);

  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 bg-cover bg-no-repeat py-20 sm:py-12">
      <div className="bg- rounded-2xl px-10 py-12 w-full h-auto text-center sm:w-full md:w-3/4 lg:w-full ">
        <h1 className="flex justify-center gap-4">
          <span className="text-blue-500 text-4xl font-semibold sm:text-2xl">
            Job
          </span>
          <span className="text-gray-900 text-4xl font-semibold sm:text-2xl">
            Listing!!
          </span>
        </h1>
        <p className="text-[22px] text-gray-700 font-light w-full mt-4 sm:text-[18px]">
          We deliver blazing fast & striking work solutions
        </p>
      </div>
      {/* </div> */}

      {/* <div className='sm:mt-56'>
                        <div className='w-full block mx-auto mt-4 '>
                            <div className='flex flex-wrap flex-shrink-0 w-full max-w-full justify-center'>
                                <div className='w-[57vw] max-w-[57vw] bg-[#fff] flex flex-row sm:flex-col rounded-xl items-center sm:pb-8'>
                                    <div className='flex flex-col pt-8 pb-8 px-8 sm:w-full w-1/4 
                                    sm:pt-4 sm:pb-4 sm:border-b-2 sm:border-gray-300'>
                                        <p className='text-base font-bold'>Job Categories</p>
                                        <form className="max-w-full relative mt-4 py-2 px-2 rounded-xl sm:px-0">
                                            <select id="job-select" onChange={handleJobChange}
                                                className="border-none text-base font-light">
                                                {selectJobs.map((job) => (
                                                    <option
                                                        key={job.value}
                                                        value={job.value}
                                                        className="relative tracking-wider leading-6 text-[16px] font-light max-w-full outline-none text-left">
                                                        {job.label}
                                                    </option>
                                                ))
                                                }
                                            </select>
                                        </form>
                                    </div> */}
      {/* <div className='flex flex-col pt-8 pb-8 px-8 sm:w-full w-1/4
                                        sm:pt-4 sm:pb-4 sm:border-b-2 sm:border-gray-300'>
                                        <p className='text-base font-bold'>Location</p>
                                        <form className="max-w-full relative mt-4  sm:px-0">
                                            <select id="job-select" onChange={handleLocationChange}
                                                className="border-none text-base font-light">
                                                {selectLoctaion.map((loca) => (
                                                    <option
                                                        key={loca.value}
                                                        value={loca.value}
                                                        className="relative tracking-wider leading-6 text-[16px] font-light max-w-full outline-none text-left">
                                                        {loca.label}
                                                    </option>
                                                ))
                                                }
                                            </select>
                                        </form>
                                    </div>
                                    <div className='flex flex-col pt-8 pb-8 px-8 w-1/4 sm:w-full
                                        sm:pt-4 sm:pb-4 sm:border-b-2 sm:border-gray-300'>
                                        <p className='text-base font-normal'>Keywords or Title</p>
                                        <input type="text"  placeholder='Skills...' className='mt-4 outline-none'/>
                                    </div>
                                    <div className='ml-10 sm:ml-0 sm:pt-8'>
                                        <Link href="/jobportal/job" >
                                        <button type="button" className='flex items-center justify-center bg-[#7F29CF]
                                         text-white px-5 py-3 w-28 h-11 rounded-xl hover:bg-[#fba862]'>
                                            SEARCH
                                        </button>
                                        </Link>
                                    </div>*/}
      {/* </div> 
                            </div>
                        </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* <Image
            src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_10.9b4a1e76.png&w=128&q=75"
            alt="..."
            loading="lazy"
            width={114}
            height={96}
            decoding="async"
            data-nimg="1"
            className='top-[20%] left-[6%] absolute animate-bounce-slow md:hidden sm:hidden'
            />
             <Image
            src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_11.a550bf48.png&w=256&q=75"
            alt="..."
            loading="lazy"
            width={82}
            height={71}
            decoding="async"
            data-nimg="1"
            className='top-[40%] left-[3%] absolute animate-bounce-slow md:hidden sm:hidden'
            />
             <Image
            src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_12.249998d2.png&w=256&q=75"
            alt="..."
            loading="lazy"
            width={78}
            height={63}
            decoding="async"
            data-nimg="1"
            className='top-[22%] right-[8%] absolute animate-bounce-slow md:hidden sm:hidden'
            />
             <Image
            src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_13.c1c3ecd6.png&w=256&q=75"
            alt="..."
            loading="lazy"
            width={108}
            height={87}
            decoding="async"
            data-nimg="1"
            className='top-[38%] right-[4%] absolute animate-bounce-slow md:hidden sm:hidden'
            /> */}
    </div>
  );
};

export default JobHeroSection;

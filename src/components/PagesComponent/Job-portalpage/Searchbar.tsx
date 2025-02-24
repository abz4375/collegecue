"use client";
import React, { useState } from "react";
import Image from "next/image";
import searchIcn from "../../../assets/Job-Portal-Page/searchbox/searchoutlined.svg";
import closeIcn from "../../../assets/Job-Portal-Page/searchbox/close.svg";
import Link from "next/link";

const Searchbar = () => {
  const [selectedExp, setSelectedExp] = useState("Freelancer");
  const [selectExp] = useState([
    { value: 1, label: "Freelancer" },
    { value: 2, label: "Fresher" },
    { value: 3, label: "Contract" },
    { value: 4, label: "Mid-Senior" },
    { value: 5, label: "Associate" },
  ]);

  const handleExpChange = (event: any) => {
    setSelectedExp(event.target.value);
  };
  return (
    <></>
    // <div className="max-w-[66.25rem] m-0 relative -mt-12 mx-auto bg-[#fff] rounded-xl shadow-newd 
    // overflow-hidden flex-shrink-0 flex flex-row items-end justify-evenly pt-[1.563rem] pr-[1.5rem] xl:relative
    // pl-[2rem] pb-[1.625rem] md:flex md:flex-col xl:right-0  md:w-2/3
    // box-border  gap-5 z-[4] xl:my-12">
    //   <div className="max-w-[60.938rem] flex flex-row md:flex-col md:items-center md:justify-center items-start justify-evenly gap-14">
    //     <div className="h-[2.25rem] flex flex-col items-start justify-start box-border pb-3 -mt-6">
    //       <div className="flex-1 flex flex-row items-center justify-start gap-4">
    //         <Image src={searchIcn} alt="..." className="h-6 w-6 relative top-10 overflow-hidden flex-shrink-0 min-h-6 ml-2" />
    //         <div className="relative tracking-wider leading-6 text-[20px] font-light inline-block min-w-[10.188rem]">
    //           <form className="max-w-[5rem] relative top-[2.25rem]">
    //             <select id="job-select" onChange={handleExpChange}
    //               className="border-0 text-base font-light">
    //               {selectExp.map((job) => (
    //                 <option
    //                   key={job.value}
    //                   value={job.value}
    //                   className="relative tracking-wider leading-6 text-[16px] font-light max-w-[5.188rem] outline-none text-left">
    //                   {job.label}
    //                 </option>
    //               ))
    //               }
    //             </select>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-1 flex-row md:flex-col items-center justify-start gap-6 max-w-fit">
    //       <div className="border-r-2 border-gray-300 flex h-12 w-0 md:hidden" />
    //       <div className="h-12 max-w-28 flex flex-row md:flex-col items-end justify-start gap-5 md:hidden">
    //         <div className="w-6 h-9 flex flex-col items-start justify-end pb-3 box-border md:hidden">
    //           <Image src={searchIcn} alt="..." className="h-6 w-6 relative overflow-hidden flex-shrink-0 " />
    //         </div>
    //       </div>
    //       <div className=" box-border ">
    //         <button className="self normal-case px-6 py-4  text-[#0146b1] text-base bg-[#e4eefc] rounded-[60px] hover:bg-[#e4eefc] flex items-center justify-evenly"
    //         >Web Design
    //           <Image className="h-4 w-4" src={closeIcn} alt="close icon" />
    //         </button>
    //       </div>
    //       <div className="  box-border  ">
    //         <button className="self normal-case px-6 py-4   text-[#0146b1] text-base bg-[#e4eefc] rounded-[60px] hover:bg-[#e4eefc] flex items-center justify-evenly"
    //         >UI/UX Design
    //           <Image className="h-4 w-4" src={closeIcn} alt="close icon" />
    //         </button>
    //       </div>
    //     </div>
    //     <div className="h-auto max-w-[10rem] flex items-end justify-end md:justify-center md:items-center">
    //       <button className="py-3 px-6 normal-case text-[#fff] text-[18px] bg-[#7f29cf] rounded-lg hover:bg-[#fba862]">
    //         <Link href="/jobportal/job" >Search</Link>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Searchbar
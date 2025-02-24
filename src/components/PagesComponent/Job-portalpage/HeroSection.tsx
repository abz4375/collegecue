import React from "react";
import Image from "next/image";
import Link from "next/link";
import switchbtn from "../../../assets/Job-Portal-Page/Herosection/switchbtn.svg";
import grpprofile from "../../../assets/Job-Portal-Page/Herosection/group-1.svg";
import plusIcon from "../../../assets/Job-Portal-Page/Herosection/plus.svg";
import breifcase from "../../../assets/Job-Portal-Page/Herosection/briefcase.svg";
import wavimg from "../../../assets/Job-Portal-Page/Herosection/blackwave.svg";
import laptopgirl from "../../../assets/Job-Portal-Page/Herosection/freepik_br_38a049e5-dff3-43af-a4d6-916db755cf74.png";
import startimg from "../../../assets/Job-Portal-Page/Herosection/star1.svg";
import { BsPlus } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="flex flex-row rounded-[24px]  overflow-hidden max-w-[1280px] ml-24 mr-20 mx-4 my-20 h-[300px] bg-[#fcfdfd] sm:w-full sm:ml-0 sm:mr-0 sm:h-1/2">
      
  {/* Left Section - Text Content */}
  <div className="w-1/2 flex flex-col justify-center px-10 py-8 gap-2">
    <h2 className="text-4xl md:text-3xl font-bold text-start">
      <span className="text-blue-600">Unlock</span> <span className="text-gray-700">Ambition</span>
    </h2>
    <p className="text-start text-gray-600">
      Apply to a plethora of hiring opportunities & work with your dream companies!
    </p>

    {/* Buttons Container - Closer Together */}
    <div className="mt-4 flex gap-2 flex-wrap " >
     <Link href="/jobportal/job">
     <button className="bg-[#0146b1] text-white rounded-full h-[48px] px-6 text-base flex justify-center items-center  md:hidden">
        Find Job
      </button>
     </Link>
      <button className="bg-[#f4f5f7] text-blue-500 border border-blue-500 rounded-full h-[48px] px-6 text-base flex justify-center items-center md:hidden">
      <BsPlus className="text-lg" />
        Post Jobs
      </button>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="w-1/2 flex justify-end items-center relative">
    <Image 
      src={laptopgirl} 
      alt="Woman with Tablet" 
      className="w-full h-[350px] sm:h-full object-cover mb-14"
    />
  </div>

</div>

    // <div className='max-w-full bg-[#e8ecff] h-[90vh] mx-auto flex justify-center items-center overflow-hidden relative z-0 pt-20'>
    //     <div className='w-[20rem] h-[20rem] border-[3.5rem] -top-[2%] -mr-44 right-0 border-white absolute rounded-[50%] md:hidden' />
    //     <div className='w-[20rem] h-[20rem] border-[3.5rem] bottom-0 right-0 border-white absolute rounded-[50%] md:hidden' />
    //     <div className='w-[30rem] h-[30rem] border-[5rem] -top-[24%] left-[0] -ml-44 border-white absolute rounded-[50%] md:hidden' />
    //     <div className='flex flex-col justify-center items-start gap-8 ml-10 max-w-[500px] mt-10 top-0 mx-auto absolute'>
    //         <div className='flex flex-row flex-wrap box-border  justify-start items-center gap-8 '>
    //             <Image src={switchbtn} alt="..." />
    //             <p className='relative tracking-wider leading-6 font-medium'>Find Your Dream Job</p>
    //         </div>
    //         <div className=' flex flex-col flex-wrap justify-center items-start gap-4'>
    //             <p className='relative text-5xl text-wrap font-normal tracking-wider sm:text-3xl'>
    //                 Find your job without any hassle.
    //             </p>
    //             <p className='relative text-2xl flex-wrap flex tracking-wide font-light text-[#24282d] sm:text-xl text-wrap'>
    //                 Jobs &amp; Job search. Find jobs in global. Executive jobs &amp; work.
    //             </p>
    //         </div>
    //         <div className='h-auto w-60 mx-auto flex flex-col items-start justify-start box-border pr-6 gap-4 mt-8 sm:gap-2'>
    //             {/* <Image src={grpprofile} alt="..." className='h-auto w-auto' /> */}
    //             <div className='flex flex-row relative'>
    //                 <p className='text-base font-semibold'>
    //                     Over <span className='text-[#0146b1]'>12800+</span> freelancers to complete your projects
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    //     {/* <Image src={laptopgirl} alt=".."  className='z-10 bottom-0 mt-[6rem] w-full h-full mx-auto object-cover md:hidden'/> */}
    // </div>
    //        <div className='max-w-full flex flex-row items-center justity-center pt-20 pr-0 pb-0 pl-40 box-border gap-36
    //    text-left flex-shrink-0 text-base text-[#131517] bg-[#f3f7fa] mx-auto
    //    sm:pt-4 sm:pl-4 sm:max-w-full sm:w-fit md:flex-col sm:gap-8 sm:text-2xl sm:overflow-hidden
    //    xl:flex xl:gap-24 xl:pt-10 xl:pl-10'>
    //            {/*-------------------------------------------Box One--------------------------------------Box One--------------------------------------------------------*/}
    //            <div className='max-w-[28.66rem] flex flex-col items-start justify-center gap-8  flex-shrink-0 mt-10'>
    //                <div className='flex items-start self-stretch flex-col justify-start flex-wrap '>
    //                    <div className='flex flex-row flex-wrap box-border  justify-start items-center gap-8 '>
    //                        <Image src={switchbtn} alt="..." />
    //                        <p className='relative tracking-wider leading-6 font-medium'>Find Your Dream Job</p>
    //                    </div>
    //                    <div className=' flex flex-col flex-wrap justify-center items-start gap-4'>
    //                        <p className='relative text-5xl text-wrap font-normal tracking-wider sm:text-3xl'>
    //                            Find your job without any hassle.
    //                        </p>
    //                        <p className='relative text-2xl flex-wrap flex tracking-wide font-light text-[#24282d] sm:text-xl text-wrap'>
    //                            Jobs &amp; Job search. Find jobs in global. Executive jobs &amp; work.
    //                        </p>
    //                    </div>
    //                    <div className='h-auto w-60 flex flex-col items-start justify-start box-border pr-6 gap-4 mt-8 sm:gap-2'>
    //                        <Image src={grpprofile} alt="..." className='h-auto w-auto' />
    //                        <div className='flex flex-row relative'>
    //                            <p className='text-base font-semibold'>
    //                                Over <span className='text-[#0146b1]'>12800+</span> freelancers to complete your projects
    //                            </p>
    //                        </div>
    //                    </div>
    //                </div>
    //            </div>
    //            {/*--------------------------------------------Box Two-------------------------------Box Two--------------------------------------------------------*/}
    //            <div className='w-[44.88rem] flex flex-col items-start justify-start pt-28 text-2xl box-border'>
    //                <div className='flex flex-col flex-shrink-0 items-start justify-start gap-8 '>
    //                    {/*----------30+ people hired--------------------------------------------------------------*/}
    //                    <div className='flex flex-row items-start max-w-full box-border justify-center z-[1] ml-24 md:ml-32'>
    //                        <div className='flex flex-col gap-4 w-48 pb-6 pt-4 px-1 bg-[#fff] rounded-2xl justify-end ml-60 sm:ml-24 sm:w-24 '>
    //                            <div className='flex flex-row items-center justify-center '>
    //                                <span className='font-bold text-2xl sm:text-xl'>30K</span>
    //                                <div className='flex flex-row items-start'>
    //                                    <Image src={plusIcon} alt="..." />
    //                                    <Image src={breifcase} alt="..." />
    //                                </div>
    //                            </div>
    //                            <span className='text-base font-medium tracking-wide text-center'>People got hired</span>
    //                        </div>
    //                    </div>
    //                    {/*-----------------------------------------GIRL WITH LAPTOP__________---------------------------------------------------------------*/}
    //                    <div className='flex flex-col flex-shrink-0 justify-start items-start -mt-72 z-0'>
    //                        <div className='flex flex-row items-center'>
    //                            <div className='flex flex-col gap-1 items-end mt-40 md:hidden '>
    //                                <Image src={wavimg} alt="..." className='w-3/4' />
    //                                <Image src={wavimg} alt="..." className='w-3/4' />
    //                                <Image src={wavimg} alt="..." className='w-3/4' />
    //                                <Image src={wavimg} alt="..." className='w-3/4' />
    //                            </div>
    //                            <Image src={laptopgirl} alt="..." className='max-w-[45%] max-h-[45%]  -ml-44 z-[1] md:ml-0' />
    //                            <div className='flex flex-col gap-1 items-start mt-40  z-0 -ml-40 md:hidden'>
    //                                <Image src={wavimg} alt="..." className='w-3/4' />
    //                                <Image src={wavimg} alt="..." className='w-3/4' />
    //                                <Image src={wavimg} alt="..." className='w-3/4' />
    //                                <Image src={wavimg} alt="..." className='w-3/4' />
    //                            </div>
    //                        </div>
    //                    </div>
    //                </div>
    //            </div>
    //        </div>
  );
};

export default HeroSection;

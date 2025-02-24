'use client';
import React from 'react';
import Image from 'next/image';
import mg from "../../../assets/writeareview/image1-process.webp";
import BoldHeading from '../../Heading/BoldHeading';
import border from "../../../assets/writeareview/border.png";
import Link from 'next/link';
import Orangespan from '../../Heading/Orangespan';
import { MdOutlineRateReview } from "react-icons/md";
import wheel from "../../../assets/writeareview/illustration-cogwheel.png"


const Earnupto = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='flex gap-4 text-[#2F1370] w-full bg-white'>
            <div className='mb-8 flex flex-row justify-center items-center w-full md:gap-20 p-16 md:flex-col md:mx-4 md:p-0 relative'>
                <div className='mb-2 flex w-full md:mx-4 p-16 md:p-0 relative md:justify-center'>
                    <Image src={mg} alt="..." className='h-auto md:w-[80%] w-full mx-auto md:ml-4 z-10' />
                    <div className='w-full -ml-20 md:mx-12 absolute flex items-center md:mt-8'>
                        <div className='w-1/2'>
                            <div className='w-[22rem] h-[25rem] md:hidden lg:w-[16rem] lg:h-[16rem] rounded-[50%] blur-3xl bg-orange-200 absolute z-0' />
                        </div>
                        <div className='w-1/2'>
                            <div className='w-[22rem] h-[25rem] md:hidden lg:w-[16rem] lg:h-[16rem] rounded-[50%] blur-3xl bg-blue-200 absolute z-0' />
                        </div>
                    </div>
                </div>
                <div className='mb-8 flex flex-col justify-center items-center w-full p-16 md:p-0'>
                <Image src={wheel} alt=".." className=' z-[0] absolute opacity-25 w-[20rem] h-[20rem] md:h-[10rem]  md:w-[10rem] md:left-[24%] -top-[6%] right-[6%] animate-spin-slow'/>
                <Image src={wheel} alt=".." className=' z-[0] absolute opacity-25 w-[20rem] h-[20rem] top-[46%] right-[8%] animate-spin-slow navmd:hidden'/>
                    <div className='z-10 flex flex-col justify-center items-center'>
                    <BoldHeading color='black' heading='Write a review' />
                    <Image src={border} alt="..." className='-mt-2 mb-6' />
                    <button className='bg-[#160048] text-[#ff9e00] border border-white rounded-[15px] py-[15px] px-[29px] 
                                        capitalize  w-fit inline-flex gap-2 text-[20px] items-center hover:text-[#cc5500] hover:border-[#cc5500]
                                       hover:bg-white'
                        onClick={handleOpen}>
                        Start Writing
                    </button>
                    <div className='mt-8 p-4 flex flex-row items-center justify-center w-full gap-8'>
                        <button className='text-[24px] cursor-pointer'>
                            <Link href="/" className=' underline text-blue-500'>
                                <Orangespan>Read Guidelines</Orangespan>
                            </Link>
                        </button>
                        <div className='flex gap-[1%]'>
                            <div className='p-4 flex flex-row text-center'>
                                <p className='flex items-center text-black text-[24px]'>
                                    <MdOutlineRateReview className='text-[#FFA500] mr-4' />
                                    13.1K+ Reviews
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full text-center p-8 text-black'>
                        <p className='text-[24px] tracking-wide'>
                            We have <Orangespan>400+</Orangespan> courses and{" "}
                            <Orangespan>15k+ </Orangespan>registered Students
                        </p>
                        <p className='text-[16px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            bibendum justo sit amet lacus fermentum, id suscipit urna
                            ultrices. Etiam euismod hendrerit aliquam.
                        </p>
                    </div>
                    </div>
                </div>
                <Image src={wheel} alt=".." className=' z-[0] absolute opacity-25 max-w-[20rem] max-h-[20rem] md:h-[10rem] md:w-[10rem] animate-spin-slow'/>
            </div>
        </div>
    )
}

export default Earnupto
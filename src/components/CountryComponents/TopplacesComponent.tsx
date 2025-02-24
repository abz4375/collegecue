'use client';
import React from 'react'
import TopPlaceCard from '../Reusable_cards/TopPlaceCard';
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

const TopplacesComponent = ({ topplace }: any, { country }: any) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(6);
    const totalPages = topplace.length;

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 639) {
                setItemsPerPage(1); 
            } else if (window.innerWidth < 786) {
                setItemsPerPage(2); 
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(3); 
            } else {
                setItemsPerPage(6); 
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % totalPages);
    };

    const handleBack = () => {
        setActiveStep(
            (prevActiveStep) => (prevActiveStep - 1 + totalPages) % totalPages
        );
    };

    const displayedItems = [];
    for (let i = 0; i < itemsPerPage; i++) {
        displayedItems.push(topplace[(activeStep + i) % totalPages]);
    }

    return (
        <div className='mt-8'>
            <p className='font-bold text-[30px] text-[#210366] ml-4 capitalize'>
                Top places to study in {country}
            </p>
            <div className='flex justify-between items-center max-w-full mt-5'>
                <button className="p-2" onClick={handleBack}>
                    <AiFillLeftCircle className='text-[32px] text-blue-700' />
                </button>
                <div className='flex flex-wrap justify-center flex-row gap-4'>
                    {displayedItems.map((item, id) => {
                        return <TopPlaceCard key={id} {...item} />;
                    })}
                </div>
                <button className="p-2" onClick={handleNext}>
                    <AiFillRightCircle className='text-[32px] text-blue-700' />
                </button>
            </div>
        </div>
    )
}

export default TopplacesComponent
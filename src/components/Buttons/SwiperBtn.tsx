'use client';
import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const SwiperBtn = () => {
    const swiper = useSwiper();

    return (
        <div className="flex gap-8">
            <button
                onClick={() => swiper.slidePrev()}
                className="bg-transparent border border-[#160048] p-2 rounded"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="bg-transparent border border-[#160048] p-2 rounded"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}

export default SwiperBtn;

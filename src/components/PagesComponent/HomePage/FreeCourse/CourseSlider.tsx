"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface CourseData {
  img: StaticImageData; // Use StaticImageData from next/image
  name: string;
  link: string;
}

type FreeCourseProps = {
  FreeCourseData: readonly CourseData[];
};

const CourseSlider: React.FC<FreeCourseProps> = ({ FreeCourseData }) => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        breakpoints={{
          648: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true, // Enable clickable pagination
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        style={{
          paddingBottom: "20px",
        }}
      >
        {FreeCourseData.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="flex  justify-center item-center mx-auto mb-2  p-1">
              <div className=" border-solid flex flex-col items-center justify-center w-[100px] h-[100px]	border-2 border-gray-200 rounded-lg px-3">
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={course.img}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    alt={course.name}
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export {CourseSlider};

'use client';
import React from "react";
import Image from "next/image";
import Quot from "../../../assets/Testimonial_Section/quot2.png";
import testimonialGirl from "../../../assets/Testimonial_Section/ReviewGirl.svg";
import testimonialCard from "../../../assets/Testimonial_Section/ReviewPosters.svg";
import Circle from "../../../assets/Testimonial_Section/circle.svg";
import CircleBlue from "../../../assets/Testimonial_Section/circle-blue.svg";
import Heading from "../../../Heading/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

interface Testimonial {
  name: string;
  program: string;
  batch: string;
  testimonial: string;
  rating: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    program: "Computer Science",
    batch: "2023",
    testimonial:
      "My experience at XYZ College was fantastic. The faculty members are highly knowledgeable and supportive. The curriculum is up-to-date and relevant to the industry standards. I feel well-prepared for my career in computer science.",
    rating: "5",
  },
  {
    name: "Jane Smith",
    program: "Business Administration",
    batch: "2022",
    testimonial:
      "Choosing XYZ College for my business administration degree was one of the best decisions I've made. The professors are not only experts in their field but also caring mentors who guide you every step of the way. The internship opportunities provided by the college were invaluable in shaping my career.",
    rating: "3",
  },
  {
    name: "Michael Johnson",
    program: "Engineering",
    batch: "2024",
    testimonial:
      "XYZ College offers an unparalleled engineering program. The hands-on approach to learning coupled with state-of-the-art facilities ensures that students are well-prepared for the challenges of the industry. The supportive environment fostered by both faculty and peers creates a conducive atmosphere for learning and growth.",
    rating: "4",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-full mx-auto mt-20 mb-20 px-4">
      <div className="w-fit my-4">
        <Heading heading_name="Testimonials" />
        </div>

        <div className="py-4 w-full h-[500px] rounded-2xl overflow-hidden z-[2] relative
      flex flex-row gap-3 justify-around items-center">
          <div className="w-fit ml-48 sm:hidden mr-auto">
            <Image src={testimonialCard} alt=".." className="w-[40vw] h-auto" />
          </div>
          <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true, // Enable clickable pagination
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {testimonials.map((testimonial, index) => (
              <>
                <SwiperSlide key={index}>
                  <div className="mx-auto w-80 mb-2 sm:w-auto p-5">
                    <p className="text-justify font-[italic] font-light">
                      {testimonial.testimonial}
                    </p>
                    <div className="flex flex-row">
                      <div>
                        <p className="font-normal">
                          Year:<span className="font-bold ml-1">{testimonial.batch}</span>
                        </p>
                        <div className="flex flex-col items-start">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="font-normal">{testimonial.program}</p>
                        </div>
                      </div>
                      <Image src={Quot} alt="Quot" width={20} className="ml-1 object-contain w-[5vw] h-auto" />
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))
            }
          </Swiper>
        <div className="w-fit ml-auto mr-48 sm:hidden">
          <Image src={testimonialGirl} alt="..." className="w-[40vw] h-auto" />
        </div>
        <div className="sm:hidden">
          <Image src={Circle} alt="shape" height={300} className="absolute top-[-40%] left-[-15%] -z-[1]" />
          <Image src={CircleBlue} alt="shape" height={300} className="absolute bottom-[-40%] right-[-15%] -z-[1] text-[blue]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

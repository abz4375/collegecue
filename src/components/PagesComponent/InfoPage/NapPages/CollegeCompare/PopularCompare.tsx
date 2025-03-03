import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SuggestionCard from "../../../../Reusable_cards/SuggestionCard";
import { Card2 } from "../../../../DummyData/Datalanding";
import SwiperBtn from "./SwiperBtn";
import "swiper/swiper-bundle.css";
import {
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectFade,
  EffectFlip,
  Navigation,
  Pagination,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PopularCompare() {
  const cardData = Card2;

  const swiperRef = useRef<any>(null);
  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="  mx-auto rounded-xl bg-white w-full">
      <div className="font-bold sm:text-center text-[30px] text-gray-800">
        Popular Compare
      </div>
      <div className="relative px-8 lg:px-0 max-w-[900px] lg:max-w-[720px] md:max-w-[700px] mx-auto">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
          onClick={handlePrevClick}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <Swiper
          // effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards' | string;
          effect={"creative"}
          fadeEffect={{ crossFade: true }}
          ref={swiperRef}
          watchOverflow={true}
          centeredSlides={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1096: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            enabled: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          creativeEffect={{
            prev: {
              translate: ["-100%", 0, 0], // Move previous slides fully left
              opacity: 1, // Fade out previous slides
            },
            next: {
              translate: ["100%", 0, 0], // Move next slides fully right
              opacity: 1, // Fade out next slides
            },
            // Ensure current slides (the two visible ones) stay fully opaque
            limitProgress: 2, // Limits effect to one slide transition at a time
          }}
          modules={[Pagination, Navigation, EffectCreative]}
          className="w-full"
        >
          {cardData.map((item: any, index) => {
            return (
              <SwiperSlide key={index} className="mb-8 ">
                <div className=" max-w-[320px] border-2 border-gray-300 rounded-xl overflow-hidden shadow-md mx-auto">
                  <SuggestionCard {...item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
          onClick={handleNextClick}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="  mx-auto rounded-xl bg-white ">
      <div className="font-bold sm:text-center text-[30px] text-gray-800">
        Popular Compare
      </div>
      <Swiper className="max-w-[700px] sm:max-w-[300px] ">
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="flex my-8 ">
              <SuggestionCard
                image={card.image}
                review_icon={card.review_icon}
                img_logo={card.img_logo}
                card_title={card.card_title}
                title_text={card.title_text}
                review_rate={card.review_rate}
                review_cnt={card.review_cnt}
                btn_contents={card.btn_contents}
                btn2={card.btn2}
                btn3={card.btn3}
                btn4={card.btn4}
                img_title={card.img_title}
                img_body={card.img_body}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="flex mb-8">
          <SwiperBtn />
        </div>
      </Swiper>
    </div>
  );
}

export default PopularCompare;

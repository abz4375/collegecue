"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArticleCard from "../../Reusable_cards/ArticleCard";

interface Article {
  img: StaticImageData;
  contents: string;
  date: string;
  content_link: string;
}
interface ArticleSliderProps {
  articles: Article[];
  slidesToShow?: number; // Optional prop for customizing number of slides
  autoplaySpeed?: number; // Optional prop for customizing autoplay speed
  onArticleClick?: (article: Article) => void; // Optional prop for handling article clicks
}

const ArticleSlider: React.FC<ArticleSliderProps> = ({
  articles,
  slidesToShow = 3,
  autoplaySpeed = 2000,
}) => {
 

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        centeredSlides={true}
        breakpoints={{
          648: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: slidesToShow,
            spaceBetween: 35,
          },
        }}
        loop={true}
        autoplay={{
          delay: autoplaySpeed,
          disableOnInteraction: true,
        }}
        // navigation
        pagination={{ clickable: true }}
        spaceBetween={60}
        style={{
          paddingBottom: "20px",
        }}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <ArticleCard key={index} article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArticleSlider;

import Image, { StaticImageData } from "next/image";
import React from "react";
interface SuggestionCardProps {
  image?: StaticImageData;
  review_icon?: StaticImageData;
  img_logo?: StaticImageData;
  card_title?: string;
  title_text?: string;
  review_rate?: string;
  review_cnt?: string;
  btn_contents?: string;
  btn2?: string;
  btn3?: string;
  btn4?: string;
  img_title?: string;
  img_body?: string;
}

const SuggestionCard: React.FC<SuggestionCardProps> = (props: any) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg transition-shadow duration-300 mb-0">
      <div className="relative">
        {/* Image Container */}
        <div className="relative h-40 sm:h-48">
          <Image
            src={props.image}
            alt="Poster"
            className="w-full h-full object-cover rounded-t-lg"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
            <div className="flex items-center gap-3">
              <Image
                src={props.img_logo}
                alt="logo"
                width={50}
                height={50}
                className="w-12 sm:w-16"
              />
              <div className="text-white">
                <h3 className="font-bold text-sm sm:text-base line-clamp-2">
                  {props.img_title}
                </h3>
                <p className="text-xs sm:text-sm line-clamp-2">
                  {props.img_body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-4">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="font-bold text-gray-900 line-clamp-2">
              {props.card_title}
            </h4>
            <p className="text-xs text-gray-600">{props.title_text}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={props.review_icon}
              alt="Review"
              width={24}
              height={24}
              className="invert"
            />
            <div className="text-xs font-semibold text-black text-opacity-50 hover:text-opacity-80 transition duration-300 cursor-pointer">
              <div>{props.review_rate}</div>
              <div>{props.review_cnt}</div>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="space-y-3">
          {[
            props.btn_contents.slice(0, 25) + "...",
            props.btn2,
            props.btn3,
          ].map((text, index) => (
            <button
              key={index}
              className="w-full py-2 px-4 text-xs font-semibold text-gray-700 bg-gray-200 rounded-xl  hover:text-amber-700 transition-colors duration-200"
            >
              {text}
            </button>
          ))}

          <button className="w-full py-2 px-4 text-xs font-semibold text-blue-500 border-2 border-blue-100 active:border-white bg-blue-100 bg-opacity-80 rounded-xl hover:bg-opacity-100 transition-colors duration-200">
            {props.btn4}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;

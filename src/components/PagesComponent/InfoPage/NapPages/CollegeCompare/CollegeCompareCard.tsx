import React from "react";
import SuggestionCard from "../../../../Reusable_cards/SuggestionCard";
import { Card2 } from "../../../../DummyData/Datalanding";
import { FaSearch } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
const CollegeCompareCard: React.FC = () => {
  const {
    image,
    review_icon,
    img_logo,
    card_title,
    title_text,
    review_rate,
    review_cnt,
    btn_contents,
    btn2,
    btn3,
    btn4,
    img_title,
    img_body,
  } = Card2[0];

  return (
    <SuggestionCard
      image={image}
      review_icon={review_icon}
      img_logo={img_logo}
      card_title={card_title}
      title_text={title_text}
      review_rate={review_rate}
      review_cnt={review_cnt}
      btn_contents={btn_contents}
      btn2={btn2}
      btn3={btn3}
      btn4={btn4}
      img_title={img_title}
      img_body={img_body}
    />
  );
};

interface CollegeCompareCard2Props {
  img_logo: StaticImageData;       // URL or path to the logo image
  img_title: string;      // Title text
  img_body: string;       // Body text
}

const CollegeCompareCard2: React.FC<CollegeCompareCard2Props> = (props: any) => {
  const handleCompare = () => {
    console.log("Comparing...");
  };
  return (
    <div className="w-[320px]  rounded-[15px]  p-[5px] box-border border-solid border-2 border-[lightgrey] shadow-md transition delay-90 bg-white">
      {/* Existing card content */}
      <div
        className="w-full max-w-md h-fit bg-cover bg-center rounded-md 
        "
      >
        <div className="flex items-center justify-center mx-8 my-4">
          <Image src={props.img_logo} alt="Logo" className="w-16 h-16 mr-2" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg font-semibold text-gray-800">
              {props.img_title}
            </p>
            <p className="text-sm font-medium text-gray-800">{props.img_body}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit  flex flex-col justify-center mt-8 box-border ">
        <div className="  ">
          <div className="  mx-5 p-2 flex justify-center items-center border-t-2   ">
            {" "}
            <div className="  text-sm text-center  ">
              <FaSearch className="text-[#757575] " />
            </div>
            <input
              type="text"
              placeholder="Search College"
              className="w-full  text-sm text-center outline-none "
            />
          </div>

          <div className=" mx-5 p-2 flex items-center border-t-2   ">
            {" "}
            <div className="  text-sm">
              <FaGraduationCap className="text-[#757575]" />
            </div>
            <input
              type="text"
              placeholder="Select Courses"
              className="w-full  text-sm  text-center outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
          <button
            className="border border-blue-500 hover:bg-blue-100 hover:border-blue-100 hover:bg-opacity-75 hover:border-opacity-75 text-blue-500 font-semibold py-2 px-4 rounded-full transition-all duration-150 focus-within:brightness-[97.5%]"
            onClick={handleCompare}
          >
            Compare Now
          </button>
        </div>
    </div>
  );
};

export { CollegeCompareCard, CollegeCompareCard2 };

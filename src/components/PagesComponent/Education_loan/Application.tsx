'use client';
import React from "react";
import Image from "next/image";
import letter2 from "@/assets/Education_Loan/letter 2.png";
import form from "@/assets/Education_Loan/form 1.png";
import document from "@/assets/Education_Loan/document.png";
import demand from "@/assets/Education_Loan/demard.png";


const Application = () => {
  const cardData = [
    {
      title: letter2,
      description: "Collect letter of admission",
    },
    {
      title: form,
      description: "Fill the loan Application form",
    },
    {
      title: document,
      description: "Submit Documents in correct scheme",
    },
    {
      title: demand,
      description: "Approved/collect demand draft",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center flex-col mt-20">
        <div className=" items-center md:w-[72%] w-full">
          <h1 className="text- text-center font-bold text-2xl md:text-4xl break-words justify-center items-center ">
            HOW TO PROCEED WITH YOUR APPLICATION
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-10 my-8 ml-4 mr-4 mt-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-60 md:w-30 h-40 rounded-2xl flex justify-center items-center flex-col bg-blue-100 shadow-md"
                style={{ width: "200px", height: "200px" }}
              >
                <Image src={card.title} alt="@bharatTech" className="w-[40%] h-auto object-contain" />
                <p className="text-center text-gray-600 font-semibold text-lg mt-2 px-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;

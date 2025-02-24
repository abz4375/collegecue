import React from "react";
import MyButton from "../../Buttons/MyButton";
import Question from "./Question";
import QuestionCol from "./QuestionCol";
const StudyAbroad: React.FC = () => {
  const buttons = [
    { label: "NEW ZEALAND", link: "#" },
    { label: "UK", link: "#" },
    { label: "CANADA", link: "#" },
    { label: "USA", link: "#" },
    { label: "HONGKONG", link: "#" },
    { label: "SWEDEN", link: "#" },
    { label: "FRANCE", link: "#" },
    { label: "UAE", link: "#" },
    { label: "NETHERLANDS", link: "#" },
    { label: "FRANCE", link: "#" },
    { label: "ITALY", link: "#" },
    { label: "AUSTRALIA", link: "#" },
    { label: "IRELAND", link: "#" },
    { label: "MALAYSIA", link: "#" },
    { label: "SINGAPORE", link: "#" },
  ];

  return (
    <div className="flex md:flex-col gap-4 md:justify-center md:items-center">
      <div className="flex flex-row  md:items-center sm:max-w-[400px] md:justify-center">
        <div className="w-full p-4 border-[1px] border-gray-300 rounded-lg flex flex-col  h-[280px] sm:h-[240px]  mt-4 mx-3  ">
          <p className="text-purple-600 text-xl font-semibold mt-0 ">Study Abroad Countries</p>
          <div className="flex flex-wrap mt-0 mb-0">
            {buttons.map((button, index) => (
              <div key={index}>
              <MyButton
                label={button.label}
                link={button.link}
                isqna={true}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Question />
      </div>
      <div className="col-span-12 md:col-span-3">
        <QuestionCol />
      </div>
    </div>
  );
};

export default StudyAbroad;
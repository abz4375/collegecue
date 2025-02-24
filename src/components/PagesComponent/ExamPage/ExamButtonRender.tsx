import React from "react";

const ExamButtonRender = () => {
  const buttons = [
    {exam:"JEE Main"},
    {exam:"NEET"},
    {exam:"CAT"},
   {exam:"GATE"},
    {exam:"CLAT"},
    {exam:"JEE Advanced"},
    {exam:"COMEDK UGET"},
    {exam:"AP EAPCET"},
    {exam:"WBJEE"},
    {exam:"KCET"},
  ];

  return (
    <div className="w-full relative">
      <div className="flex-wrap flex gap-[20px] flex-row">
         {buttons.map((label, index) => (
          <div key={index}>
            <p className=" text-[16px] border-2 border-transparent p-2 rounded-lg hover:scale-105 duration-300 ease-in-out transition-all hover:brightness-105 hover:border-[#312E81] font-bold text-[#312E81] cursor-pointer">{label.exam}</p>
            </div>
         ))}
      </div>
    </div>
  );
};

export {ExamButtonRender};

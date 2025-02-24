import React from "react";
import Link from "next/link";
interface Props {
  label: string;
  link: string;
}
const ExamCategoryButton: React.FC<Props> = ({ label, link }) => {
  return (
    <Link
      href={label}
    ><p className=" text-[16px] border-2 border-transparent p-2 rounded-lg hover:scale-105 duration-300 ease-in-out transition-all hover:brightness-105 hover:border-[#312E81] font-bold text-[#312E81] cursor-pointer">
      {label}
    </p>
    </Link>
  );
};

export {ExamCategoryButton};

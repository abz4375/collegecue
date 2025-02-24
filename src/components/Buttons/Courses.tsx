import React from "react";
import Link from "next/link";

const Courses = (props: any) => {
  return (
    <button className=" border-2 border-gray-200 bg-gray-200 rounded-[10px] my-2 py-1 px-6 text-center normal-case mr-2 lg:mr-3 justify-center text-sm font-bold  tracking-normal text-[black] hover:bg-blue-100 hover:border-blue-100 hover:text-black transition duration-150 hover:shadow-md ">
      <Link href={props.link}>{props.dt}</Link>
    </button>
  );
};

export default Courses;

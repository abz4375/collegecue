import React from "react";
import Image from "next/image";

interface NewApplicationCardProps {
  img: any;
  name: string;
  recruits: string;
  ctc: string;
  about: string;
  link: string;
}

const NewApplication: React.FC<NewApplicationCardProps> = (props) => {
  return (
    <div className="border-[1px] flex flex-col  border-solid border-[#553CDF]  box-borde  p-5 rounded-[15px]  w-full my-2">
      <h1 className="font-bold sm:text-center text-[#210366] sm:text-[15px] mb-4">
        {props.name}
      </h1>
      <div className="flex flex-row items-center gap-4 mb-4 p-4 justify-start  md:justify-center">
        <Image
          src={props.img}
          alt={props.name}
          className="h-16 w-16 p-2 bg-white border border-purple-600 rounded-full md:w-20"
        />
        <div className="flex flex-col">
          <p className="font-medium md:text-[12px] md:text-center text-[#210366]">
            {props.recruits}
          </p>
          <p className="font-medium text-sm md:text-[12px] md:text-center text-[#210366]">
            Highest CTC - {props.ctc} g
          </p>
          <p className="text-sm md:text-[12px] md:text-center text-[#210366] ">
            {props.about}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2 py-2 mt-2 border-t">
        <button className="font-bold  py-2 px-3  rounded-[10px]  border border-[#F05E23] border-1  hover:bg-[#210366] hover:text-white transition duration-200 text-[14px] w-[150px] ">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default NewApplication;

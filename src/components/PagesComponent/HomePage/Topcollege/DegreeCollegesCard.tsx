import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface DegreeCollegesCardProps {
  img: StaticImageData;
  icon: StaticImageData;
  bgColor: string;
  titles: string;
  contents: string;
  contents_body: string;
  content_link: string;
}

const DegreeCollegesCard: React.FC<DegreeCollegesCardProps> = (props: any) => {
  return (
    <div className="w-100 h-[400px] md:h-[450px] mx-0 bg-white rounded-lg border-0 border-black">
      <div className="relative">
        <div className="relative w-full h-32 rounded-t-lg overflow-hidden">
          <Image
            src={props.img}
            alt={`${"description"} Logo`}
            className="w-full h-40 object-cover bg-blue-400 bg-opacity-30 rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black opacity-[25%]"></div>
        </div>
        <div className=" absolute mx-auto w-full top-[8.75rem]"></div>
      </div>
      <div className="p-4 border-2 border-t-0 border-gray-300 h-[60%] rounded-b-lg flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <div className="">
            <p className="text-black my-2 text-normal font-bold text-center">
              {props.contents}
            </p>
            <p className="text-gray-500 mb-4  text-center">
              {props.contents_body}
            </p>
          </div>
        </div>
        <p className="text-blue-500 text-center w-full mx-auto relative bottom-0">
          <Link href={`/top-universities/${props.titles}`}>View Colleges</Link>
        </p>
      </div>
    </div>
  );
};

export default DegreeCollegesCard;

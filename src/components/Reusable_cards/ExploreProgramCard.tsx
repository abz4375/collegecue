import Image, { StaticImageData } from "next/image";
import React from "react";

interface ExploreProgramCardProps {
  heading: string;
  desc: string;
  views: number;
  daysLeft: number;
  logoSrc: string;
  logoAlt: string;
  location: string;
  image: StaticImageData;
  compare?: {
    college1: { logo: StaticImageData; name: string; course: string };
    college2: { logo: StaticImageData; name: string; course: string };
  }[];
  subs?: Subs[];
  link: string;
}

interface Subs {
  id: number;
  sub: string;
}

const ExploreProgramCard: React.FC<ExploreProgramCardProps> = ({
  heading,
  desc,
  image, // Add this line to receive the company logo source
  compare,
  subs,
  link,
}) => {
  return (
    <div className="w-100 h-[420px] md:h-[450px] mx-0 bg-white rounded-lg ">
      <div className="relative">
        <Image
          src={image}
          alt={`${desc} Logo`}
          className="w-[7rem] h-[7rem] absolute right-4 top-[3.5rem] border-0 rounded-md border-black"
        />

        <div className="w-full h-32 object-cover bg-blue-950 bg-opacity-30 rounded-t-lg">
          <img
            src="https://media.istockphoto.com/id/2038556812/vector/gradient-blue-background-geometric-texture-of-light-dark-blue-squares-the-substrate-for.jpg?s=612x612&w=0&k=20&c=-jDseqxblQ-OvF3uNPDxih9-XrRBQqjOZnsQT5YzKoI="
            alt=""
            className="w-full h-32 object-cover bg-white rounded-t-lg"
          />
        </div>
      </div>
      <div className="p-4 border-2 border-t-0 border-gray-300 h-[256px] md:h-72 rounded-b-lg flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <div className="">
            <h3 className="text-lg font-semibold mb-1 max-w-[100%] relative top-0">
              {heading}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">{desc}</p>

            <div className="flex flex-wrap gap-2 my-2 items-center justify-center flex-1">
              {subs?.map((sub: Subs, id: number) => (
                <div key={id} className="px-2 py-1 cursor-pointer text-xs w-fit border-[2px] border-gray-200 hover:border-orange-200 hover:bg-orange-50 bg-gray-200 hover:bg-opacity-50 rounded-full transition-all duration-150">
                  {sub.sub}
                </div>
              ))}

              {compare?.map((college, id) => (
                <div
                  className=" text-[#666] text-[14px] flex-1 font-medium w-full leading-[18px] py-[6px] px-[12px]
                            flex border-gray-400 items-center gap-4 justify-between mx-auto"
                  key={id}
                >
                  <div className="flex flex-col space-y-2 items-center">
                    <Image
                      src={college.college1.logo}
                      alt=""
                      className="w-[25px] h-[25px]"
                    />
                    <div className="flex flex-col  ml-2">
                      <h1> {college.college1.name}</h1>
                      <p className=" text-[#4FB8DD]">
                        {college.college2.course}
                      </p>
                    </div>
                  </div>
                  <div className=" rounded-[99px] bg-black text-white text-[8px] px-2 py-1">
                    VS
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col space-y-2 items-center">
                      <Image
                        src={college.college2.logo}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <div className="flex flex-col ml-2">
                        <h1> {college.college2.name}</h1>
                        <p className=" text-[#4FB8DD]">
                          {college.college2.course}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-center w-full mx-auto relative bottom-0">
          {link}
        </p>
      </div>
    </div>
  );
};

export default ExploreProgramCard;

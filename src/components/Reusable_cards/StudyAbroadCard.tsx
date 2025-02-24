import Image from "next/image";
import React from "react";

interface Subs {
  id: number;
  sub: string;
}

const StudyAbroadCard = (props: any) => {
  return (
    <div className="w-full max-w-[360px] h-fit md:h-fit mx-0 bg-white rounded-lg  hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <Image
          src={props.image}
          alt={`${props.desc} Logo`}
          className="w-[3.5rem] h-[3.5rem] absolute right-4 top-[6rem] border-b-2 rounded-full border-gray-300 z-[1]"
        />

        <div className="w-full h-32 object-cover bg-blue-600 bg-opacity-30 rounded-t-lg overflow-hidden">
          <img
            src="https://www.jeduka.com/storage/newsletter/1600409205_colleges_in_usa.jpg"
            alt=""
            className="w-full h-32 object-cover bg-white rounded-t-lg"
          />

          <div className="absolute inset-0 bg-black opacity-[65%] rounded-t-lg "></div>
        </div>
      </div>
      <div className="p-4 border-2 border-t-0 border-gray-300 h-fit rounded-b-lg flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <div className=" w-full">
            <h3 className="text-lg font-semibold mb-1 max-w-[100%] relative top-0">
              {props.heading}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">{props.desc}</p>

            <div className="flex flex-wrap justify-between mt-6 mb-8">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <p className=" w-[17.07px] h-2 left-[64.19px]  text-gray-500 text-[12px] font-black font-['Roboto'] leading-none tracking-tight">
                    {props.no}
                  </p>
                  <p className=" w-auto mt-2 h-4  text-gray-500 text-[12px] font-black font-['Roboto'] leading-none tracking-tight">
                    No. of colleges
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-4">
                <div className="flex flex-col gap-1">
                  <p className=" text-gray-500 text-[12px] font-black font-['Roboto'] leading-[8px]">
                    {props.fee}
                  </p>
                  <p className=" w-[57.93px] h-4 left-[195.72px] text-gray-500 text-[12px] mt-2 font-bold font-['Roboto'] leading-none tracking-tight">
                    Avg study cost
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className=" mt-3  flex flex-col">
                  <p className="text-gray-500 text-[12px] font-black font-['Roboto'] leading-none tracking-tight">
                    Avg. Living Cost
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 my-2 items-center justify-center flex-1">
              <div className="px-2 py-1 cursor-pointer text-sm w-[100%] text-center border-[2px] border-gray-200 hover:border-orange-200 hover:bg-orange-50 bg-gray-200 hover:bg-opacity-50 rounded-full transition-all duration-150 font-bold mb-1">
                <span className="font-normal">Ranking : </span>
                {props.rank}
              </div>

              <hr className="border-b-2 border-opacity-75 border-gray-300 w-full" />
              <div className="w-full text-left text-sm text-gray-600 mt-2">
                Key Features -
              </div>

              <div className="px-2 py-1 items-center cursor-pointer text-sm w-[100%] text- border-[2px] border-gray-200 hover:border-orange-200 hover:bg-orange-50 bg-gray-200 hover:bg-opacity-50 rounded-lg transition-all duration-150 font- mb-1">
                {"🔹 " + props.keyFact1}
              </div>
              <div className="px-2 py-1 items-center cursor-pointer text-sm w-[100%] text- border-[2px] border-gray-200 hover:border-orange-200 hover:bg-orange-50 bg-gray-200 hover:bg-opacity-50 rounded-lg transition-all duration-150 font- mb-1">
                {"🔹 " + props.keyFact2}
              </div>
              <div className="px-2 py-1 items-center cursor-pointer text-sm w-[100%] text- border-[2px] border-gray-200 hover:border-orange-200 hover:bg-orange-50 bg-gray-200 hover:bg-opacity-50 rounded-lg transition-all duration-150 font- mb-1">
                {"🔹 " + props.keyFact3}
              </div>

              {props.subs?.map((sub: Subs, id: number) => (
                <div key={id} className="px-2 py-1 cursor-pointer text-xs w-fit border-[2px] border-gray-200 hover:border-orange-200 hover:bg-orange-50 bg-gray-200 hover:bg-opacity-50 rounded-full transition-all duration-150">
                  {sub.sub}
                </div>
              ))}

              {props.compare?.map((college:any, id:any) => (
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
          {props.link}
        </p>
      </div>
    </div>
  );
};

export default StudyAbroadCard;

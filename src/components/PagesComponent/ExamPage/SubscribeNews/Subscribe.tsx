import Image from "next/image";
import React from "react";
import messageIcon from './message-icon.png'

const Subscribe = () => {
  return (
    <div>
      <div className="rounded-[20px] border border-solid border-black-900_1e bg-red-50">
        <div className="p-4">
          <div className="mb-2 flex flex-col items-start">
            <h3 className=" text-purple-800 text-2xl font-bold max-md:text-[22px]">
              Subscribe to Newsletter
            </h3>
            <p className="mt-3.5 tracking-[0.15px] !text-black">
              Stay updated with our latest news and{" "}
            </p>
            <p className="mt-3.5 tracking-[0.15px] !text-black">
              updates by subscribing to our{" "}
            </p>
            <p className="mt-3.5 tracking-[0.15px] !text-black">newsletter.</p>
            <div className="mt-[13px] flex items-start justify-between gap-5 self-stretch">
              <button className="mt-[5px] min-w-[146px] rounded uppercase  tracking-[0.40px]">
                Subscribe Now
              </button>
              <Image src={messageIcon} alt="messageIcon" width={50} height={50} className="h-[50px] w-[50px] object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Subscribe};

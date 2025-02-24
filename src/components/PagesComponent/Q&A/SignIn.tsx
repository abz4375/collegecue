import React from "react";
import gift from "@/assets/Q&A/gift.png";
import Image from "next/image";

const SignIn: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl text-sm text-indigo-900 flex flex-col items-center gap-4 max-w-sm mx-auto p-4">
      <div className="w-full">
        <Image
          src={gift}
          alt="gift.png"
          className="w-full h-auto rounded-xl"
        />
      </div>
      <h1 className="text-indigo-900 text-center text-[20px] md:text-3xl font-normal">
        ANSWER THE FOLLOWING
      </h1>
      <div className="flex flex-row items-center justify-center w-full">
        <button className="bg-orange-500 text-white text-sm font-normal w-2/5 py-2.5 rounded-l-[2px] border border-orange-500 hover:bg-orange-800 active:bg-orange-800">
          Sign In
        </button>
        <button className="bg-white text-indigo-900 text-sm font-normal w-2/5 py-2.5 rounded-r-[2px] border border-gray-300">
          Sign Up
        </button>
      </div>
      <div className="w-full">
        <p className="text-indigo-900 text-right text-[0.6875rem] font-normal mr-8">
          Check Terms and Conditions*
        </p>
      </div>
    </div>
  );
};

export default SignIn;

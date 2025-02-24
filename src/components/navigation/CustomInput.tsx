"use client";
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

function CustomInput() {
  const [email, setEmail] = useState("");

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Email:", email);
    setEmail("");
  };

  return (
    <div className="flex flex-col justify-end pb-10 [@media_(max-width:_1080px)]:justify-start [@media_(max-width:_1080px)]:h-fit items-start [@media_(max-width:_1080px)]:items-center  min-h-[12rem] w-1/4 [@media_(max-width:_1080px)]:w-full p-2 [@media_(min-width:_1080px)]:pl-8">
      <p className=" text-2xl font-bold text-[white] my-2">Get in touch</p>
      <p className="my-0 mb-4 text-[#dee9ff] text-[0.9rem]">
        We don&apos;t send spam so don&apos;t worry
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center bg-[white] border border-gray-400 rounded-lg justify-center w-full [@media_(max-width:_1080px)]:w-full px-3 pr-0">
          <input
            value={email}
            onChange={handleChange}
            required
            className="flex-1 h-8 border-none rounded-none outline-none pl-0 placeholder:text-sm"
            type="text"
            placeholder="Enter your Email"
          />
          <button
            type="submit"
            className="bg-[#FA4003] bg-opacity-0 h-10 w-10  rounded-xl mx-0 hover:bg-[#FA4003] hover:bg-opacity-0 flex justify-center items-center"
          >
            <IoMdSend className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomInput;

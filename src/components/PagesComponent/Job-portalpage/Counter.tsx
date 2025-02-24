'use client';
import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, symbol,title }:any) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <CountUp duration={10} className="text-4xl font-semibold text-green-500" end={number} />
        <span className="text-4xl font-semibold text-green-500">{symbol}</span>
      </div>
      <span className="text-base text-black">{title}</span>
    </div>
  );
}
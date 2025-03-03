import React from "react";

const CounterFilterBtn = ({ name }: { name: string }) => {
  return (
    <div className=" [@media_(min-width:_640px)]:rounded-full rounded-xl py-2 px-[19px] items-center font-semibold text-gray-600 transition-all duration-300 hover:text-blue-600 hover:border hover:border-blue-500 border border-gray-300 ">
      {name}
    </div>
  );
};

export default CounterFilterBtn;

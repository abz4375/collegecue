import React from "react";

const CounterFilterBtn = ({ name }: { name: string }) => {
  return (
    <div className=" rounded-md py-2 px-[19px] items-center font-semibold text-gray-600 transition-all duration-200 hover:text-blue-600 hover:border border-blue-500">
      {name}
    </div>
  );
};

export default CounterFilterBtn;

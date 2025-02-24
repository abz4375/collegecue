import React from "react";

const Button = (props: any) => {
  return (
    <button className="text-[#210366] bg-white border border-[#7B90FF] rounded-[0.8rem] px-8 py-2 font-semibold hover:bg-[#7B90FF] hover:text-white transition duration-300">
      {props.name}
    </button>
  );
};

export default Button;

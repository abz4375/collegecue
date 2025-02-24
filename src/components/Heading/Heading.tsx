import React from "react";

const Heading = ({ heading_name }: { heading_name: any }) => {
  return (
    <div className="w-fit mb-4 group">
      <p className="text-3xl sm:text-2xl sm:text-center font-bold text-left leading-[3rem] tracking-normal inline text-[black]">
        {heading_name}
      </p>
    </div>
  );
};

export default Heading;

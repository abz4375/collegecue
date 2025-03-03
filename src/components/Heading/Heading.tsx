import React from "react";

const Heading = ({ heading_name }: { heading_name: any }) => {
  return (
    <div className="w-fit  group">
      <p className="text-2xl sm:text-2xl sm:text-center font-semibold text-left leading-[2rem] tracking-normal inline text-gray-900 ml-6 sm:ml-10 md:ml-7">
        {heading_name}
      </p>
      
    </div>
  );
};

export default Heading;

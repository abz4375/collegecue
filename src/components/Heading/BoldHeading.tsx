import React from "react";

const BoldHeading = ({  heading, textAlign, color }: { heading?: string, textAlign?: string, color?: string }) => {
  return (
    <>
      <p className={`text-[2.5rem] font-bold leading-9 mb-6 text-${color || "black"} ${textAlign ? `text-${textAlign}` : "text-left"}`}>
        {heading}
      </p>
    </>
  );
};

export default BoldHeading;

'use client'
import React from "react";
import Link from "next/link";
interface BlueButtonProps {
  text: string;
  link: string;
}

const BlueButton: React.FC<BlueButtonProps> = ({ text, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`h-9 px-4 rounded-lg font-semibold text-sm text-[#5A4FCF] border border-[#B0C4DE] transition-colors duration-300 ${
          isHovered
            ? "bg-[#FFCC99] hover:bg-[#FFC87C] hover:text-[#CC7711] hover:border-transparent"
            : "bg-white"
        }`}
      >
        {text}
      </button>
    </Link>
  );
};

export default BlueButton;
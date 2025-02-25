import React from "react";
import ReviewHero from "@/assets/Hero_Section/Review.webp";
// import DOTS from "@/assets/Hero_Section/DOTS-bg-hero.png";
// import Star from "@/assets/Hero_Section/star.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex container mx-auto items-center justify-between py-24 md:flex-col   px-10  relative z-[2] overflow-hidden">
      <div className="flex items-center  w-2/4 md:w-full  py-8 md:flex-col md:h-[70%]">
        <p className=" z-[3] xl:text-5xl text-6xl md:text-3xl text-[#002366] md:text-center font-semibold">
          Find reviews for over 25000 colleges
        </p>
      </div>
      <div className="relative block ">
        <Image
          src={ReviewHero}
          alt="Review"
          width={300}
          height={600}
          sizes="(min-width:837px) 50vw, 100vw "
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Hero;

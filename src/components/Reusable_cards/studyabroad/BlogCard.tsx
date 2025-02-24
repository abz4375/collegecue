'use client';
import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


interface Blog {
    image: any,
    date: string,
    title: string,
    description: string,
    readMoreLink: string,
}

const BlogCard: React.FC<Blog> = ({
    image, date, title, description, readMoreLink
}) => {
    const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

    return (
        <div className="h-[480px] w-[350px] flex rounded-[10px] my-8 mx-0 flex-col overflow-hidden relative shadow-9xl 
        transition-shadow ease-in-out duration-300 hover:scale-[1.01] hover:shadow-2x9xl">
            <div className="relative h-[180px] w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
                <Image src={image} alt={title} className="w-full h-full object-cover rounded-tl-[10px] rounded-tr-[10px]" />
                <p className="absolute bottom-[10px] left-[10px] rounded-lg p-[5px] text-black">
                    {date}
                </p>
                <button className={`absolute bottom-[10px] right-[10px] w-10 h-10 flex justify-center items-center
                 transition-colors duration-300 bg-white border-gray-300 
                rounded-[50%] hover:bg-[#FF8811]`}
                onClick={toggleLike}>
                    <FaHeart className={`text-[#333333] ${liked?'text-[#FF0811]':'text-[#333333]'}`} />
                </button>
            </div>
            <div className="bg-white rounded-br-[10px] rounded-bl-[10px] p-5 flex flex-col items-center justify-center flex-grow">
                <p className="text-[1.2rem] font-bold leading-6 tracking-wide text-center text-[#210366] mb-[10px]">
                    {title}
                </p>
                <p className="text-[#333333] text-[0.9rem] font-medium leading-5 text-center mb-[10px]">
                {description ? description.slice(0, 135) + "..." : ""}
                </p>
                <hr className="w-[90%] my-[10px]" />
                
                <button className="text-[#ffffff] bg-[#FF8811] rounded-md p-[5px] text-center normal-case 
                mx-auto my-auto hover:bg-[#333333]"><Link href={readMoreLink}>
                    Read More</Link>
                </button>
                
            </div>
        </div>
    )
}

export default BlogCard;
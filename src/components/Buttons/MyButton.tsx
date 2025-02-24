"use client";
import Link from "next/link";
const MyButton = ({
  label,
  link,
  isqna,
}: {
  label: string;
  link: string;
  isqna?: boolean;
}) => {
  return (
    <>
    {isqna?(
      <Link
      href={link}>
        <button
      className='inline-block text-center py-1 px-2 rounded-full mt-3 mr-2 sm:py-1 sm:px-2 sm:text-[10px]
        bg-blue-500 hover:bg-orange-400  text-white font-semibold text-sm'>
      {label}
      </button>
    </Link>
    ):(
      <Link
      href={link}>
        <button
      className='inline-block px-6 py-0 rounded-lg font-semibold bg-gray-300 text-black transition-colors duration-150 border-gray-300 hover:bg-blue-100 hover:border-blue-100 h-8
      border-2 hover:shadow-md'
    >
      {label}
      </button>
    </Link>
    )}
    </>
  );
};

export default MyButton;

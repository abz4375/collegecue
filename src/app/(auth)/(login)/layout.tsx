import Left from "@/components/Auth/Left";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col md:flex-col-reverse justify-center items-center mt-4">
      <div className=" my-16 items-center flex gap-0  lg:flex-col lg:h-full shadow-sm rounded-xl border-gray-300 border-2 px-2 py-2">
        <div className="rounded-none ">{children} </div>
        <div className="bg-gray-200 rounded-xl [@media_(max-width:_1080px)]:hidden">
          <Left />
        </div>
      </div>
    </div>
  );
};

export default layout;

import Left from "@/components/Auth/Left";
import Loader from "@/components/Loader";
import ClientButton from "@/components/PagesComponent/Login/ClientButton";
import Link from "next/link";
import React, { Suspense } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col md:flex-col-reverse justify-center items-center mt-4">
      <div className=" my-16 items-center flex gap-0  lg:flex-col lg:h-full shadow-sm rounded-xl border-gray-300 border-2 px-2 py-2">
        <div className=" rounded-none ">
          <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-col items-center justify-center w-[22rem] h-[612px] gap-4 text-black text-center text-[1rem]  ">
              <div className="mx-auto max-w-xs">
                <h1 className=" font-bold text-center text-[1.5rem] ">
                  Register
                </h1>
                <div className=" w-full flex items-center justify-between my-1 px-[1px]">
                  <ClientButton login={false} />
                </div>
                <Suspense fallback={<Loader />}>{children}</Suspense>
              </div>
              <div className="text-xs text-gray-800">
                Already registered? <Link href="/login">Sign In</Link>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className=" bg-gray-200 rounded-xl [@media_(max-width:_1080px)]:hidden">
          <Left />
        </div>
      </div>
    </div>
  );
};

export default layout;

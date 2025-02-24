import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import LoginForm from "./Form/LoginForm";
import Link from "next/link";
import ClientButton from "../PagesComponent/Login/ClientButton";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-[22rem]    h-[612px] gap-4 text-black text-center text-[1rem]  ">
      <div className=" w-full flex items-end px-4 mt-4"></div>
      <h1 className=" font-bold text-center text-[1.5rem] ">Login</h1>
      <div className=" w-full flex items-center justify-between px-4 ">
       
        <ClientButton login />
      </div>
     
      <div className="w-full flex-1 mt-4">
        <div className="flex flex-col items-center">
          Sign In with
          <div className="flex flex-row mt-4 h-full w-full items-center justify-center gap-4">
            <button className="w-fit max-w-xs font-semibold text-sm shadow-sm rounded-lg py-0 bg-gray-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
              <div className="bg-white bg-opacity-0 p-1 rounded-full">
                <svg className="w-[1.25rem]" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
            </button>

            <button className="w-fit max-w-xs font-semibold text-sm shadow-sm rounded-lg py-0 bg-gray-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
              <div className="bg-white bg-opacity-0 p-1 rounded-full">
                <RxLinkedinLogo className="text-[1.25rem]" />
              </div>
            </button>

            <button className="w-fit max-w-xs font-semibold text-sm shadow-sm rounded-lg py-0 bg-gray-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
              <div className="bg-white bg-opacity-0 p-1 rounded-full">
                <FaFacebook className="text-[1.25rem]" />
              </div>
            </button>

          </div>
        </div>

        <div className="my-4 border-b text-center">
          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
            Or sign In with e-mail
          </div>
        </div>

        <LoginForm />
        <br />
        <div className="text-xs text-gray-800 mt-8">
          New to CollegeCue? <Link href="/register">Register</Link>
        </div>
      </div>

   
    </div>
  );
};

export default Login;

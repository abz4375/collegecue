import React from "react";
import RegisterForm from "./Form/RegisterForm";
import Link from "next/link";
import ClientButton from "../PagesComponent/Login/ClientButton";

const Register = () => {
  return (

    <div className=" flex flex-col items-center justify-center w-[22rem]    h-[612px] gap-4 text-black text-center text-[1rem]  ">
      <div className="mx-auto max-w-xs">
        <h1 className=" font-bold text-center text-[1.5rem] ">Register</h1>
        <div className=" w-full flex items-center justify-between  my-1 px-[1px]">
          <ClientButton login={false} />
        </div>
        <RegisterForm />
      </div>
      <div className="text-xs text-gray-800">
        Already registered? <Link href="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default Register;

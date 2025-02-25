"use client";
import React, { useState, useEffect } from "react";
import RegisterForm from "./Form/RegisterForm";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/Navbar-logos/collegecue.png";
import Image from "next/image";
import ConsultantRegistrationForm from "./Form/ConsultantRegistrationForm";
import LoginForm from "./Form/LoginForm";
const RegisterModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastModalTime: any | null = localStorage.getItem("lastModalTime");
    const currentTime = new Date().getTime();
    const elapsed = currentTime - parseInt(lastModalTime, 10);

    const delay = 12000; // Delay of 5 seconds

    const shouldOpenModal = !lastModalTime || elapsed > delay;

    if (shouldOpenModal) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("lastModalTime", currentTime.toString());
      }, delay);
      return () => clearTimeout(timer);
    }
  }, []);

  if (open) {
    return (
      <dialog className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur flex justify-center items-center z-50">
        <div className=" bg-white rounded-2xl shadow-lg p-6 sm:w-[80%]">
          <div className="flex items-center justify-between mb-4">
            <Image src={logo} alt="Collagecue.com" className="w-40 h-auto invert" />
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <IoClose size={24} className={'text-black rounded-full p-[1px] bg-black bg-opacity-10'} />
            </button>
          </div>
          <span className=" ">Register!</span>
          <RegisterForm />
        </div>
      </dialog>
    );
  }

  return <></>;
};

export default RegisterModal;

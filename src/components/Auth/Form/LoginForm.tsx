"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("HTTP Error! status " + response.status);
      } else {
        console.log("Login successful");
      }
      reset();
    } catch (error) {
      let errorMessage;

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      } else {
        errorMessage = "An unknown error occurred";
      }
      console.error(
        "There is a problem with the login API. Please try again later. " +
          errorMessage
      );
    }
  };

  return (
    <div className="mx-auto max-w-xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:border-2 border-2 focus:bg-white"
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}

        <div className="relative mt-5">
          <input
            className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:border-2 border-2 focus:bg-white"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        <div className="mt-2 text-right">
          <Link href="/forgot-password" className="text-xs text-gray-500">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className={`mt-5 tracking-wide font-normal bg-gray-800 text-gray-100 w-full py-2 rounded-lg active:bg-opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${
            !isChecked ? "opacity-50 cursor-not-allowed" : ""
          }`}
          // disabled={}
        >
          <span className="ml-0">Login</span>
        </button>
        {/* <div className="mt-4 flex items-start">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className={`mr-2 form-checkbox h-4 w-4 text-black border-black bg-white fill-black appearance-none hidden`}
          />
          <button
            type="button"
            className="text-gray-900 mr-[2px]"
            onClick={() => setIsChecked(!isChecked)}
          >
            {isChecked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
          </button>
          <label htmlFor="agree" className="text-xs text-gray-600">
            &nbsp;I agree to abide by CollegeCue&apos;s
            <a href="#" className="border-b border-gray-500 border-opacity-25">
              &nbsp;Terms of Service &nbsp;
            </a>
            and its
            <a href="#" className="border-b border-gray-500 border-opacity-25">
              &nbsp; Privacy Policy&nbsp;
            </a>
          </label>
        </div> */}
      </form>
    </div>
  );
};

export default LoginForm;

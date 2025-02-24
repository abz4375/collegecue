"use client";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { useForm } from "react-hook-form";

type FormData = {
  collegeName: string;
  officialEmail: string;
  phone: string;
  designation: string;
  linkedin: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+81", name: "Japan" },
  { code: "+86", name: "China" },
  { code: "+7", name: "Russia" },
  { code: "+39", name: "Italy" },
  { code: "+34", name: "Spain" },
  { code: "+55", name: "Brazil" },
  { code: "+92", name: "Pakistan" },
  { code: "+82", name: "South Korea" },
  { code: "+31", name: "Netherlands" },
  { code: "+48", name: "Poland" },
  { code: "+27", name: "South Africa" },
  { code: "+64", name: "New Zealand" },
  { code: "+90", name: "Turkey" },
  { code: "+52", name: "Mexico" },
];

const CollegeRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0].code
  );

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          phone: `${selectedCountryCode} ${data.phone}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("HTTP Error! status " + response.status);
      } else {
        console.log("Registration successful");
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
        "There is a problem with the registration API. Please try again later. " +
          errorMessage
      );
    }
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" w-full flex items-end px-4 mt-4"></div>
      <div className="w-full flex gap-2">
        <input
          className="w-full px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white mt-3"
          type="text"
          placeholder="University Name"
          {...register("collegeName", { required: "College Name is required" })}
        />
      </div>
      {errors.collegeName && (
        <p className="text-red-500 text-xs mt-1">
          {errors.collegeName.message}
        </p>
      )}

      <input
        className="w-full px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white mt-3"
        type="official-email"
        placeholder="Official Email"
        {...register("officialEmail", {
          required: "Company Email is required",
        })}
      />
      {errors.officialEmail && (
        <p className="text-red-500 text-xs mt-1">
          {errors.officialEmail.message}
        </p>
      )}

      <div className="w-full flex gap-2 mt-3">
        <select
          className="w-1/4 px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white"
          value={selectedCountryCode}
          onChange={(e) => setSelectedCountryCode(e.target.value)}
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code + " - " + country.name}
            </option>
          ))}
        </select>
        <input
          className="w-3/4 px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white"
          type="tel"
          placeholder="Phone"
          {...register("phone", { required: "Phone is required" })}
        />
      </div>
      {errors.phone && (
        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
      )}

      <div className="w-full flex gap-2">
        <input
          className="w-full px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white mt-3"
          type="text"
          placeholder="Designation"
          {...register("designation", { required: "Designation is required" })}
        />
      </div>
      {errors.designation && (
        <p className="text-red-500 text-xs mt-1">
          {errors.designation.message}
        </p>
      )}

      <div className="w-full flex gap-2">
        <input
          className="w-full px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white mt-3"
          type="text"
          placeholder="Name of Person"
          {...register("name", { required: "Name of Person is required" })}
        />
      </div>
      {errors.name && (
        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
      )}

      <div className="w-full flex gap-2">
        <input
          className="w-full px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white mt-3"
          type="text"
          placeholder="Linkedin Profile"
          {...register("linkedin", {
            required: "LinkedIn profile link is required",
          })}
        />
      </div>
      {errors.linkedin && (
        <p className="text-red-500 text-xs mt-1">{errors.linkedin.message}</p>
      )}

      <div className="flex">
        <div className="relative mt-3 w-1/2">
          <input
            className="w-full px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white"
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
            className="absolute right-2.5 top-2.5 text-gray-800 text-lg"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        <div className="relative mt-3 w-1/2">
          <input
            className="w-full px-2 py-[0.5rem] rounded-md font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:border-2 border-2 focus:bg-white"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            autoComplete="off"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-start">
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
          I agree to abide by CollegeCue&apos;s
          <a href="#" className="border-b border-gray-500 border-opacity-25">
            &nbsp;Terms of Service &nbsp;
          </a>
          and its
          <a href="#" className="border-b border-gray-500 border-opacity-25">
            &nbsp; Privacy Policy&nbsp;
          </a>
        </label>
      </div>

      <button
        type="submit"
        className={`mt-3 tracking-wide font-normal bg-gray-800 text-gray-100 w-full py-2 rounded-lg active:bg-opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${
          !isChecked ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!isChecked}
      >
        <span className="ml-0">Register</span>
      </button>
    </form>
  );
};

export default CollegeRegistrationForm;

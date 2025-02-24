'use client';
import React, { useState } from "react";
import ToggleTextField from "./components/ToggleTextField";
import { useSelector } from "react-redux";
import { actions } from "../../../app/GlobalReduxStore/regSlice";
import { useDispatch } from "react-redux";

const StepOne = () => {

  const dispacth = useDispatch();
  const [countryCode, setCountryCode] = useState("+91");
  const [isFocused, setIsFocused] = useState(false);

  const reduxStep1 = useSelector((state: any) => state.register.step1);
  console.log(reduxStep1);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Generate a list of years (e.g., from 1900 to current year)
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, index) => currentYear - index
  );

  const handleApply = () => {
    // Handle apply button click, e.g., send data to backend or perform an action
    console.log("Referral code:", reduxStep1.referral);
  };

  const handleReferral = (event: any) => {
    // setReferral(event.target.value);
    dispacth(actions.updateStep1({ ...reduxStep1, referral: event.target.value }));
  };

  const handleYearChange = (e: any) => {
    dispacth(
      actions.updateStep1({ ...reduxStep1, selectedYear: e.target.value })
    );
  };

  const handleCourseFees = (e: any) => {
    dispacth(
      actions.updateStep1({ ...reduxStep1, courseFees: e.target.value })
    );
  };
  const handleLinkedin = (e: any) => {
    dispacth(actions.updateStep1({ ...reduxStep1, linkedin: e.target.value }));
  };
  const handlePhoneNumberChange = (e: any) => {
    dispacth(
      actions.updateStep1({ ...reduxStep1, phoneNumber: e.target.value })
    );
  };
  const handleGender = (e: any) => {
    dispacth(actions.updateStep1({ ...reduxStep1, gender: e.target.value }));
  };
  const handleCountryCodeChange = (event: any) => {
    setCountryCode(event.target.value);
  };
  const handleCollegeNameChange = (e: any) => {
    dispacth(
      actions.updateStep1({ ...reduxStep1, college_name: e.target.value })
    );
  };
  const handleCourseNameChange = (e: any) => {
    dispacth(
      actions.updateStep1({ ...reduxStep1, courseName: e.target.value })
    );
  };
  const handleYourNameChange = (e: any) => {
    dispacth(actions.updateStep1({ ...reduxStep1, yourName: e.target.value }));
  };
  const handleCollegeEmailChange = (e: any) => {
    dispacth(
      actions.updateStep1({ ...reduxStep1, collegeEmail: e.target.value })
    );
  };
  return (
    <div className="px-8">
      <p className="text-[#7B90FF] mt-4 text-center font-semibold">
        Start Filling Form to Submit your Review
      </p>
      <div className="flex flex-col mx-8 justify-center">
        <div className="flex flex-wrap items-center justify-start gap-12">
          <div className="w-[302px] flex justify-end items-end">
            <input type="text"
              placeholder="College name"
              className="border border-black w-[262px] p-[10px] h-[50px] rounded-2xl focus:outline-none"
              value={reduxStep1.college_name}
              onChange={handleCollegeNameChange} />
          </div>
          <div className="w-[302px] flex justify-end items-end">
            <input type="text"
              placeholder="Course name"
              className="border border-black w-[262px] p-[10px] h-[50px] rounded-2xl focus:outline-none"
              value={reduxStep1.courseName}
              onChange={handleCourseNameChange} />
          </div>
          <div className="w-[302px] flex justify-end items-end focus:outline-none">
            <input type="text"
              placeholder="Your name"
              className="border border-black w-[262px] p-[10px] h-[50px] rounded-2xl"
              value={reduxStep1.yourName}
              onChange={handleYourNameChange} />
          </div>
          <div className="w-[302px] flex justify-end items-end">
            <input type="text"
              placeholder="Email Address"
              className="border border-black w-[262px] p-[10px] h-[50px] rounded-2xl focus:outline-none"
              value={reduxStep1.collegeEmail}
              onChange={handleCollegeEmailChange} />
          </div>
          <div className="w-[302px] flex justify-end items-end">
            <select
              value={countryCode}
              onChange={handleCountryCodeChange}
              className="w-20 h-[50px] mr-2 border rounded-2xl border-black  px-2 py-1 focus:outline-none"
            >
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              <option value="+61">+61</option>
              <option value="+12">+12</option>
              <option value="+81">+81</option>
            </select>
            <input type="text"
              placeholder="Phone Number"
              className="border border-black w-[152px] p-[10px] h-[50px] rounded-2xl focus:outline-none"
              value={reduxStep1.collegeEmail}
              onChange={handleCollegeEmailChange} />
          </div>
          <div className="w-[302px] flex justify-center pr-6 items-center">
            <select
              value={reduxStep1.gender}
              onChange={handleGender}
              className="w-[200px] h-[50px] rounded-2xl border border-black px-4 py-1 focus:outline-none"
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="w-[302px] flex justify-end items-end focus:outline-none">
            <input type="text"
              placeholder="LinkedinProfile"
              className="border border-black w-[262px] p-[10px] h-[50px] rounded-2xl"
              value={reduxStep1.linkedin}
              onChange={handleLinkedin} />
          </div>
          <div className="w-[302px] flex justify-end items-end">
            <input type="text"
              placeholder="Course Fees"
              className="border border-black w-[262px] p-[10px] h-[50px] rounded-2xl focus:outline-none"
              value={reduxStep1.courseFees}
              onChange={handleCourseFees} />
          </div>
          <div className="w-[302px] flex justify-center items-end">
            <select
              value={reduxStep1.selectedYear}
              onChange={handleYearChange}
              className="w-[180px] h-[50px] rounded-xl border border-black px-4 py-1 focus:outline-none"
            >
              <option value="" disabled>
                Select Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[302px] pl-4 flex justify-end items-center gap-4 focus:outline-none">
            <input type="text"
              placeholder="Referral code"
              className="border border-black w-[182px] p-[10px] h-[50px] rounded-2xl"
              value={reduxStep1.referral}
              onChange={handleReferral} />
            <button className="w-[76px] h-[36px] rounded-xl bg-[#1976D2] hover:bg-[#5586ee] text-white
              py-[6px] px-[16px] text-base">
              Apply
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-20">
          <div className="flex flex-wrap max-w-full gap-8">
            <div>
              <ToggleTextField
                title="Did you Anvil Reservation Benefits?"
                label="Give one"
                initialValue={false}
              />
            </div>
            <div>
              <ToggleTextField
                title="Was there any GD/PI for the admission?"
                label="What was the class Size"
                initialValue={false}
              />
            </div>
            <div>
              <ToggleTextField
                title="Did you opt for hostel?"
                label="Hostel fees"
                initialValue={false}
              />
            </div>
            <div>
              <ToggleTextField
                title="Does your college provide placements?"
                label="Average Package"
                initialValue={false}
              />
            </div>
          </div>
          <div className="my-8 flex flex-col gap-8">
            <p className="text-[1.2rem] font-semibold">Name the other colleges & courses you have applied</p>
            <div className="flex flex-wrap items-center gap-12">
              <input
              type="text"
              placeholder="College / University name"
              className="w-[400px] h-[50px] rounded-xl border border-black focus:outline-none p-[10px]"
              value={reduxStep1.courseName}
              onChange={handleCourseNameChange} />
               <input
              type="text"
              placeholder="Course Name"
              className="w-[400px] h-[50px] rounded-xl border border-black focus:outline-none p-[10px]"
              value={reduxStep1.courseName}
              onChange={handleCourseNameChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StepOne
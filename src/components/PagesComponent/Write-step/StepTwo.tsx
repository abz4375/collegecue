'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../app/GlobalReduxStore/regSlice";


const StepTwo = ({ handlePrevious, handleNext }: any) => {
  const [errorMessage, setErrorMessage] = useState('');
  const reduxStep2 = useSelector((state: any) => state.register.step2);
  console.log(reduxStep2)
  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    // const value = event.target.value;
    dispatch(
      actions.updateStep2({ ...reduxStep2, userInfo: e.target.value }));

    // Check if the input meets the minimum character limit
    if (e.target.value.length < 200) {
      setErrorMessage('Minimum 200 characters required');
    } else {
      setErrorMessage('');
    }
  };
  return (
    <div className="max-w-[900px] mx-auto flex flex-col gap-16">
      <div>
      <p className="text-[#7B90FF] font-semibold">
        Q. How was the admission process? If you took any entrance exam, discuss
        the application process and cut off.
      </p>
      <p className="text-[#210366] text-[14px] font-semibold">
        <span className="text-base mr-[3px] text-[#E4441A]">
          •
        </span>{" "}
        Eligibility of the Course
      </p>
      <p className="text-[#210366] text-[14px] font-semibold">
        <span className="text-base mr-[3px] text-[#E4441A]">
          •
        </span>{" "}
        Where to Find the Application Form
      </p>
      <p className="text-[#210366] text-[14px] font-semibold">
        <span className="text-base mr-[3px] text-[#E4441A]">
          •
        </span>{" "}
        Details of Reservation Benefits
      </p>
      <p className="text-[#210366] text-[14px] font-semibold">
        <span className="text-base mr-[3px] text-[#E4441A]">
          •
        </span>{" "}
        Improvements for the Admission Process
      </p>
      <textarea
        name="text"
        placeholder="Type your info (Minimum 200 characters)"
        value={reduxStep2.userInfo}
        onChange={handleInputChange}
        rows={5}
        className="w-full p-[10px] rounded-2xl shadow-5xl hover:shadow-2x9xl focus:outline-none border-none mt-4"
      ></textarea>
      {errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
      </div>
      <div>
      <p className="text-[#7B90FF] font-semibold">
      Q.How is the Course Curriculum and Faculty Members?
      </p>
      <p className="text-[#210366] text-[14px] font-semibold">
        <span className="text-base mr-[3px] text-[#E4441A]">
          •
        </span>{" "}
        What to include?
      </p>
      <textarea
        name="text"
        placeholder="Type your info (Minimum 200 characters)"
        value={reduxStep2.userInfo}
        onChange={handleInputChange}
        rows={5}
        className="w-full p-[10px] rounded-2xl shadow-5xl hover:shadow-2x9xl focus:outline-none border-none mt-4"
      ></textarea>
      {errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
      </div>

    </div>
  )
}

export default StepTwo
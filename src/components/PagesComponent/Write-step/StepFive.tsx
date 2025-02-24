'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../app/GlobalReduxStore/regSlice";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


const StepFive = () => {
  const dispatch = useDispatch();
  const reduxStep6 = useSelector((state: any) => state.register.step6);
  console.log(reduxStep6);
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = (event: any) => {
    setAgree(event.target.checked);
  };

  const handleChange = (e: any) => {
    const files = e.target.files;
    dispatch(actions.updateStep6(files));
  };

  return (
    <div className="mt-[3px]">
      <p className="text-[30px] ml-48 font-bold text-[#7B90FF] md:ml-2">Upload Photos</p>
      <p className="text-[#210366] ml-48 font-bold mt-[3px] md:ml-2">
        Maximum limit: 5MB per image. Upload photos of the college, campus, hostels, events photos, etc.
      </p>
      <div className="flex flex-wrap items-center mt-8 gap-4 md:mx-auto">
        <div className="w-[512px] min-h-[250px] ml-48 flex flex-col justify-center items-center border-2 
        border-dashed border-[#210366] cursor-pointer rounded shadow-md hover:bg-[#EEECFE] md:ml-0">
          <input
            accept="image/*"
            id="profile-pic-upload"
            multiple={false}
            type="file"
            className="hidden"
            onChange={handleChange}
          />
          <label htmlFor="profile-pic-upload">
            <CgProfile className="text-[80px] text-[#210366]" />
          </label>
          <p className="text-[10px] font-bold text-[#210366]">
            Upload your profile photo and get a chance to feature on the Collegecue Leaderboard
          </p>
          <button className="mt-[10px] text-[#1976D2] normal-case">
            Upload Profile Pic
          </button>
        </div>
        <div className="w-[512px] min-h-[250px] ml-48 flex flex-col justify-center items-center border-2 
        border-dashed border-[#210366] cursor-pointer rounded shadow-md hover:bg-[#EEECFE] md:ml-0">
          <input
            accept="image/*"
            id="photos-upload"
            multiple={false}
            type="file"
            className="hidden"
            onChange={handleChange}
          />
          <label htmlFor="photos-upload">
            <MdOutlineAddPhotoAlternate className="text-[80px] text-[#210366]" />
          </label>
          <p className="text-[10px] font-bold text-[#210366]">
            Drag & drop files here or
          </p>
          <button className="mt-[10px] text-[#1976D2] normal-case">
            Upload Photos
          </button>
        </div>
      </div>
      <div className="w-3/4 shadow-24xl ml-48 rounded-xl mt-12 md:ml-8 pr-4">
        <p className="text-[#210366] p-4 text-[20px]">
          Your photos might get rejected
        </p>
        <p className="text-[#210366] p-4 -mt-8">
          Do not share personal photographs. Share Photos of Campus, Fests, Sports and Academic Infrastructure etc
        </p>
      </div>
      <div className="mt-12 ml-48 text-[#210366] md:ml-8">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={agree}
            onChange={handleAgreeChange}
            className="form-checkbox text-blue-600"
          />
          <span className="ml-2">I Agree with Above mentioned T&C</span>
        </label>
      </div>
      <div className="w-3/4 shadow-24xl ml-48 rounded-xl mt-12 mb-8 pb-6 md:ml-8 pr-4">
        <p className="text-[#210366] p-4 text-[20px]">
          Before uploading, please ensure that you agree to the following:
        </p>
        <ul className="pl-8 list-disc">
          <li className="text-[#210366] text-base">
            Impersonate another person or his or her email address, or misrepresent your current or former affiliation with an institution.
          </li>
          <li className="text-[#210366] text-base">
            Create user accounts under false or fraudulent pretences, create or use an account for anyone other than yourself.
          </li>
          <li className="text-[#210366] text-base">
            Post content that is defamatory, libelous or fraudulent, that you know to be false or misleading or that does not reflect your honest.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StepFive
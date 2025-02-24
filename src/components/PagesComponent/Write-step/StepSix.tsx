'use client';
import React, {  useRef  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../app/GlobalReduxStore/regSlice";
import axios from "axios";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdVerified } from "react-icons/md";


const StepSix = () => {
  const fileUploader = useRef<HTMLInputElement>(null);
  const uploadImage = (e:any) => {
    const data = createFormData(e);
    axios
      .post(
        "https://us-central1-billing-app-959e7.cloudfunctions.net/api/contacts/Ij9z23XkcF7iL5VlGDGk/image",
        data,
        {
          headers: {
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
            "Access-Control-Allow-Headers": "*",
            Accept: "*",
            Authorization: "Bearer token",
          },
        }
      )
      .then(() => {
        console.log("Hurrey success");
      })
      .catch((err) => console.log(err));
  };

  const createFormData = (e:any) => {
    let data = new FormData();
    const image = e.target.files[0];
    data.append("image", image, image.name);
    for (var pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return data;
  };
  const handleFileUploadClick = () => {
    if (fileUploader.current) {
      fileUploader.current.click();
    }};

  return (
    <div className="max-w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full items-center justify-center pb-4">
          <MdVerified className="text-[#038C09] text-[6rem]" />
          <p className="text-[#7B90FF] text-[1.5rem] font-semibold">
          Upload Certificate and ID Card to help us verify your review
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-center">
          Thank you for Submitting the review. Upload your documents for more to get featured in leader board!!!
          </p>
          <div className="mt-4">
            <p>Upload Certificate/ID Card</p>
            <div className="flex flex-wrap justify-start">
            <input
                accept="application/pdf/*"
                id="graduation-upload"
                multiple
                type="file"
                style={{ display: "none" }}
                ref={fileUploader}
                onChange={(e) => uploadImage(e)}
              />
              <label htmlFor="graduation-upload">
                <div className="w-[13rem] h-[13rem] bg-[#ffffff] border-4 border-dotted border-[#4F5DE4] flex rounded-[2rem] 
                flex-col justify-center items-center m-4">
                  <MdOutlineAddPhotoAlternate className="text-[3rem] text-[#FF7900] cursor-pointer"/>
                  <p className="text-[#4F5DE4] font-semibold text-[1.2rem]">Graduation</p>
                  <p>Click to Select File</p>
                </div>
                  </label>
                  <input
                accept="application/pdf/*"
                id="college-id-upload"
                multiple
                type="file"
                style={{ display: "none" }}
                ref={fileUploader}
                onChange={(e) => uploadImage(e)}
              />
              <label htmlFor="college-id-upload">
              <div className="w-[13rem] h-[13rem] bg-[#ffffff] border-4 border-dotted border-[#4F5DE4] flex rounded-[2rem] 
                flex-col justify-center items-center m-4">
                  <MdOutlineAddPhotoAlternate className="text-[3rem] text-[#FF7900] cursor-pointer"/>
                  <p className="text-[#4F5DE4] font-semibold text-[1.2rem]">College Id Card</p>
                  <p>Click to Select File</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepSix
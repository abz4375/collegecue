'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../app/GlobalReduxStore/regSlice";

const StepThree = () => {

  const dispatch = useDispatch();

  // redux
  const reduxStep4 =useSelector((state:any)=>state.register.step4)
  console.log(reduxStep4)
  // const [userInfo, setUserInfo] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e:any) => {
   
dispatch(
  actions.updateStep4({...reduxStep4,userInfo: e.target.value})
)

    // Check if the input meets the minimum character limit
    if (e.target.value.length > 200) {
      setErrorMessage('Max 200 characters required');
    } else {
      setErrorMessage('');
    }
  };

  // Define your list items here
  const listItems = [
    "Your text goes here",
    "Name of Scholarship, Financial Assistance & Job you got on campus with stipend",
    "Name the annual fest & tech fest and month in which they are conducted",
    "Availability of books & journals in the library",
    "Amenities in classrooms",
    "Brief of sports & extra curricular activities on the campus",
    "Mention any social group, clubs or website for students run by students",
  ];

  return (
    <div className='flex flex-col max-w-[1152px] mx-auto'>
      <div className="my-8">
        <p className="text-[#7B90FF] text-[1.5rem] font-bold">
        How is the fees structure & discuss the opportunity of scholarship,
          financial assistance or campus jobs?
        </p>
        <p className="mt-4">
        What to include?
        </p>
      </div>
      <div>
        {listItems.map((item:any,index:any)=>(
          <div className={`bg-[#ebefff] rounded-[1rem] mb-${index === listItems.length - 1 ? '0' : '8'}`}
          key={index}>
            <p className="text-[1rem] font-semibold py-3 px-4 -mt-6">{`• ${item}`}</p>
          </div>
        ))}
        <textarea
        name="text"
        placeholder="Type your info (Minimum 200 characters)"
        value={reduxStep4.userInfo}
        onChange={handleInputChange}
        rows={5}
        className="w-full p-[10px] rounded-2xl shadow-5xl hover:shadow-2x9xl hover:border-black hover:border border-none mt-4"
      ></textarea>
       {errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
      </div>
    </div>
  )
}

export default StepThree
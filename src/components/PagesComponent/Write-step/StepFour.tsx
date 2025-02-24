'use client';
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../app/GlobalReduxStore/regSlice";


const StepFour = () => {

  const dispatch = useDispatch();
  const reduxStep5 = useSelector((state:any) => state.register.step5);
  console.log(reduxStep5);
  const [likedFields, setLikedFields] = useState(
    reduxStep5.likedFields || [""]
  );
  const [dislikedFields, setDislikedFields] = useState(
    reduxStep5.dislikedFields || [""]
  );

  const updateStep5 = ({updatedFields, isLiked}:any) => {
    dispatch(
      actions.updateStep5({
        ...reduxStep5,
        [isLiked ? "likedFields" : "dislikedFields"]: updatedFields,
      })
    );
  };

  const addField = ({ isLiked }: any) => {
    const fields = isLiked ? likedFields : dislikedFields;
    const updatedFields = [...fields, ""];
    
    updateStep5(updatedFields); // Pass only one argument
    isLiked ? setLikedFields(updatedFields) : setDislikedFields(updatedFields);
  };
  

  const deleteField = (index:any, isLiked:any) => {
    const fields = isLiked ? likedFields : dislikedFields;
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    updateStep5({updatedFields, isLiked});
    isLiked ? setLikedFields(updatedFields) : setDislikedFields(updatedFields);
  };

  const handleChange = (index:any, value:any, isLiked:any) => {
    const fields = isLiked ? likedFields : dislikedFields;
    const updatedFields = [...fields];
    updatedFields[index] = value;
    updateStep5({updatedFields, isLiked});
    isLiked ? setLikedFields(updatedFields) : setDislikedFields(updatedFields);
  };


  return (
   <div className="p-8">
    <p className="text-[#7B90FF] text-[24px] mt-4 text-center font-semibold">
    How Was Your Overall Experience at Chandigarh University?
    </p>
    <p className="my-8 text-center font-normal">
    What to include: Things You Liked & Disliked About Your College, Campus
        Life, Faculty, Placement, Infrastructure & Course?
    </p>
    {[
        { fields: likedFields, title: "Things You Liked" },
        { fields: dislikedFields, title: "Things You Disliked" },
      ].map((item:any,index:any)=>(
        <div className="mx-[20%] flex flex-col gap-5 mb-8" key={index}>
          <p className="my-4">{item.title}</p>
          <div className="flex flex-col gap-[10px] justify-start">
            {item.fields.map((value:any,idx:any)=>(
              <div className="flex flex-row items-center" key={idx}>
                <input 
                name="text"
                value={value}
                onChange={(e) =>
                handleChange(idx, e.target.value, index === 0)
                }
                placeholder={`Things You ${
                  index === 0 ? "Like" : "Dislike"
                } ${idx + 1}`}
                className="w-full min-w-[150px] rounded-xl border pl-4 py-3"
                />
                <button className="ml-[10px]" onClick={() => deleteField(idx, index === 0)}>
                <MdDelete size={24} className="text-[#E4441A]" />
                </button>
                </div>
            ))}
            </div>
            <button
               onClick={() => addField(index === 0)}
               className="flex flex-row items-center w-fit gap-[10px] text-[#313893]">
                 Add More <IoMdAddCircle size={24} />
            </button>
        </div>
      ))}
   </div>
  )
}

export default StepFour
import React from "react";

const Comment: React.FC = () => {
  return (
    <>
      <div className=" mx-auto w-full rounded-[15px] mb-0 box-border ">
        <div className="flex items-center justify-between p-4">
          <p className="text-xl font-bold text-gray-800  mb-4">Comments</p>
          <p className="text-sm font-semibold text-blue-600 cursor-pointer">
            VIEW ALL
          </p>
        </div>

        <hr className="border-gray-300 mb-4 " />
        <textarea
          className="w-full p-4 mb-0  rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-800 bg-slate-100 text-gray-800 placeholder-gray-400 font-bold "
          rows={5}
          placeholder="Write Your Comments"
        />
      </div>
      <div className="container mx-auto text-right mb-10">
        <button className="px-4 py-2 rounded-lg font-medium text-blue-500 bg-white border-gray-300 border hover:bg-blue-100 duration-300">
          {" "}
          Login to add Comments
        </button>
      </div>
    </>
  );
};

export default Comment;

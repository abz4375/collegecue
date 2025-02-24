'use client';
import React, { useState } from 'react';

const Search: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Your form submission logic here
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center md:flex-col gap-2">
      <div>
        <input
          className="border-gray-300 rounded-[10px] px-3 py-2.5 sm:w-[380px] w-[325px] border-[1px] text-gray-500 font-[400] text-[16px]"
          type="text"
          placeholder="Search Questions"
          value={question}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-12 md:col-span-4">
        <button
          className="bg-orange-500 text-white text-[0.875rem] py-3 px-2 md:w-[380px] rounded-[30px] w-[120px]  p-[0.5rem] hover:bg-orange-800"
          onClick={handleOpen}
        >
          Add Question
        </button>
      </div>
      <div className="col-span-12 md:col-span-4">
        <select
          className=" border-gray-400 rounded-[2rem] px-2 py-2 w-[175px] md:w-[380px]  cursor-pointer font-sans border-[1.5px] bg-white text-[0.875rem] text-[#444444]"
          value={question}
          onChange={handleChange}
          aria-label="Sort By"
        >
          <option value="">Sort By: Most Relevant</option>
          <option value="lastYear">Last Year</option>
          <option value="mostCommon">Most Common</option>
          <option value="mostFrequent">Most Frequent</option>
        </select>
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Write a question</h2>
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-between space-x-2"
            >
              <input
                type="text"
                placeholder="Write here"
                className="flex-grow p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded"
              >
                Send
              </button>
            </form>
            <button
              type="button"
              onClick={handleClose}
              className="mt-4 p-2 bg-red-500 text-white rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;











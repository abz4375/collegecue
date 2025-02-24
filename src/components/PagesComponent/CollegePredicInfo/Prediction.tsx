'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { exams, degrees, reservationCategories } from '../../DummyData/PredictorInfoData'; 

const Prediction: React.FC = () => {
    const [formData, setFormData] = useState({ examRank: '', selectedExam: '', selectedDegree: '', selectedCategory: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="w-[1400px] sm:w-full ml-[55px] sm:ml-0 ">
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full p-8">
                <div className="flex justify-between md:flex-col md:justify-center md:items-center md:gap-4 items-end w-full my-8">
                    <div className='w-[30%] md:w-full'>
                    <input
                        name="examRank"
                        placeholder="Exam Rank"
                        type="text"
                        onChange={handleChange}
                        value={formData.examRank}
                        className="w-full h-14  mr-5 p-2 border border-gray-300 rounded-[24px]"
                    />
                    </div>
                    <div className="w-[30%] md:w-full">
                        <label className="block text-gray-700">Select Exam</label>
                        <select
                            name="selectedExam"
                            value={formData.selectedExam}
                            onChange={handleChange}
                            className="w-full h-14 rounded-[24px] p-2 border border-gray-300"
                        >
                            <option value="" disabled>Select Exam</option>
                            {exams.map((exam) => (
                                <option key={exam.id} value={exam.id}>
                                    {exam.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-[30%] md:w-full">
                        <label className="block text-gray-700">Select Reservation Category</label>
                        <select
                            name="selectedCategory"
                            value={formData.selectedCategory}
                            onChange={handleChange}
                            className="w-full h-14 rounded-[24px] p-2 border border-gray-300"
                        >
                            <option value="" disabled>Select Category</option>
                            {reservationCategories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="w-full text-center">
                    <button
                        type="submit"
                        className="bg-[#1877D2] text-white py-1 px-4 rounded-full"
                    >
                        Check Result
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Prediction;

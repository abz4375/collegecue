'use client'
import React, { useState } from "react";
import CourseModal from "./CourseModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  studyGoalData: {
    label: string;
    imagePath: any;
    course1: string;
    course2?: string;
    course3?: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, studyGoalData }) => {
  const [isCourseModalOpen, setCourseModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  if (!isOpen || !studyGoalData) return null;

  const handleCourseClick = (course: string) => {
    setSelectedCourse(course);
    setCourseModalOpen(true);
  };

  const closeCourseModal = () => {
    setCourseModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-20">
        <div className="bg-white rounded-3xl p-4 w-[440px] sm:w-full h-auto relative border-8 border-indigo-600">
          <button className="absolute top-3 right-6 text-3xl text-violet-800" onClick={onClose}>
            &times;
          </button>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-4 text-violet-800">Select Your Study Preference</h1>
            <div className="flex flex-row sm:flex-row items-center gap-4 text-violet-800">
              {studyGoalData.imagePath.src}
              <h2 className="text-xl font-bold">{studyGoalData.label}</h2>
            </div>
            <ul className="mt-4 cursor-pointer space-y-2 w-full font-semibold">
              <li
                className="p-3 w-full sm:w-90 h-14 text-xl border-2 hover:border-blue-400 hover:bg-blue-300 hover:bg-opacity-20 hover:text-blue-700 flex justify-between items-center"
                onClick={() => handleCourseClick(studyGoalData.course1)}
              >
                {studyGoalData.course1}
                <span className="mr-5 text-2xl">&rarr;</span>
              </li>
              {studyGoalData.course2 && (
                <li
                  className="p-3 w-full sm:w-90 h-14 text-xl border-2 hover:border-blue-400 hover:bg-blue-300 hover:bg-opacity-20 hover:text-blue-700 flex justify-between items-center"
                  onClick={() => handleCourseClick(studyGoalData.course2!)}
                >
                  {studyGoalData.course2}
                  <span className="mr-5 text-2xl">&rarr;</span>
                </li>
              )}
              {studyGoalData.course3 && (
                <li
                  className="p-3 w-full sm:w-90 h-14 text-xl border-2 hover:border-blue-400 hover:bg-blue-300 hover:bg-opacity-20 hover:text-blue-700 flex justify-between items-center"
                  onClick={() => handleCourseClick(studyGoalData.course3!)}
                >
                  {studyGoalData.course3}
                  <span className="mr-5 text-2xl">&rarr;</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal
          isOpen={isCourseModalOpen}
          onClose={closeCourseModal}
          course={selectedCourse}
        />
      )}
    </>
  );
};

export default Modal

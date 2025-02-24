import React from "react";
import JEEMain1 from "@/Assets/ExamPage/ExamSyllabus/JEEMain1.png";
import JEEMain2 from "@/Assets/ExamPage/ExamSyllabus/JEEMain2.png";
import JEEMain3 from "@/Assets/ExamPage/ExamSyllabus/JEEMain3.png";
import {ExamSyllabusSub} from "../../Reusable_cards/ExamSyllabusSub";
const ExamSyllabus = [
  {
    examName: "GATE",
    modeOfExam: "online",
    examPattern: "#",
    paperAnalysis: "#",
    syllabusLink: "#",
    img: JEEMain1,
  },
  {
    examName: "JEE Main",
    modeOfExam: "offline",
    examPattern: "#",
    paperAnalysis: "#",
    syllabusLink: "#",
    img: JEEMain2,
  },
  {
    examName: "CAT",
    modeOfExam: "online",
    examPattern: "#",
    paperAnalysis: "#",
    syllabusLink: "#",
    img: JEEMain3,
  },
];
const ExamSyllabusCard = () => {
  return (
    <div className="w-full sm:px-5 text-center pt-2 bg-white">
      <div className="font-bold border-b-2 border-x border-t rounded-t-[20px] border-b-[#7B90FF] border-solid border-gray-600 tracking-[0.23px] text-center">
        Exam Syllabus 2023
      </div>
      <div className="shadow-md  pb-2 border-[1px] border-solid border-t-0 rounded-b-[20px] w-full">
        {ExamSyllabus.map((data, id) => (
          <>
            <ExamSyllabusSub
              key={id}
              name={data.examName}
              mode={data.modeOfExam}
              pattern={data.examPattern}
              analysis={data.paperAnalysis}
              syllabus={data.syllabusLink}
              img={data.img}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export {ExamSyllabusCard};

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BiCalendar, BiDetail } from "react-icons/bi";

interface ExamComponentCardProps {
  name: string;
  examFullForm?: string;
  mode?: string;
  examDate?: string;
  applicationDate?: string;
  announceDate?: string;

  image: StaticImageData;
}
const ExamComponentCard: React.FC<ExamComponentCardProps> = ({
  name,
  examFullForm,
  mode,
  examDate,
  applicationDate,
  announceDate,
  image,
}) => {
  return (
    <div className="w-[376px] lg:w-full md:w-full sm:w-full">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="  text-left rounded-[20px]   p-4 w-full min-h-[300px] text-lg border"
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-center mb-2">
            <Image
              src={image}
              alt="image"
              width={60}
              height={60}
              className=" mr-2.5"
            />
            <div className="flex flex-col min-h-[80px] mb-[10px] space-y-4 ">
              <h6 className="text-[#210366] text-[1.25rem] font-bold leading-6 break-words">
                {name}
              </h6>
              <h6 className="text-[#210366] font-bold text-[15px] leading-6 break-words">
                {examFullForm}
              </h6>
            </div>
          </div>
          <div className="h-px bg-blue-500/20 mb-2.5"></div>
          <div className="pb-6">
            <h6 className="text-lg text-[#210366] font-bold capitalize text-bold text-center mb-2.5">
              {mode}
            </h6>
            <div className="grid space-x-2 grid-cols-3">
              <div className="text-center  text-[11px]">
                <p className="text-[#210366] font-medium   ">
                  Exam Date
                  <br />
                  {examDate}
                </p>
              </div>

              <div className="text-center  text-[11px]">
                <p className="text-[#210366] font-medium    ">
                  Application Form
                  <br />
                  {applicationDate}
                </p>
              </div>
              <div className="text-center  text-[11px]">
                <p className="text-[#210366] font-medium   ">
                  Result Announce
                  <br />
                  {announceDate}
                </p>
              </div>
            </div>
          </div>
          <div className="h-px bg-blue-500/20 mb-2.5"></div>
          <div className="flex flex-col pb-6 text-[16px]">
            <div className="flex  items-center  space-x-2 text-[#210366] font-medium ">
              <p>Application Process{" "}</p>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                  fill="#210366"
                />
              </svg>
            </div>
            <div className="h-px bg-blue-500/20 mb-2.5"></div>
            <div className="flex space-x-2 items-center  text-[#210366] font-medium ">
              <p>Previous Year Paper{" "}</p>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                  fill="#210366"
                />
              </svg>
            </div>
            <div className="h-px bg-blue-500/20 mb-2.5"></div>
            <div className="flex  items-center space-x-2 text-[#210366] font-medium ">
              <p>Exam Pattern{" "}</p>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                  fill="#210366"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <button className=" flex items-center rounded-[50rem]  py-[6px] px-[16px] space-x-2  text-[#007aff] w-[45%] hover:bg-[#ff7900] border-solid border-[1px] border-[#007aff] hover:text-[white] ">
              <BiCalendar />
              <p className="text-[14px]">Apply Now</p>
            </button>
            <button className=" flex items-center rounded-[50rem]  py-[6px] px-[16px] space-x-2  text-[#007aff] w-[45%] hover:bg-[#ff7900] border-[1px] border-[#007aff] hover:text-[white] ">
              <BiDetail />
              <p className="text-[14px]">Get Details</p>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExamComponentCard;

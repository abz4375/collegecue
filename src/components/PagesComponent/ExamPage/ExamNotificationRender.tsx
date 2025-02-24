"use client";
import React, { useState, useEffect } from "react";
import { ExamNewsCard } from "../../Reusable_cards/ExamNewsCard";

const ExamNotificationRender = () => {
  const [examNotificationData, setExamNotificationData] = useState([]);

  const apiKey = "8ddafd59dcfb40a698ed9cf39b4df2ea";

  const fetchExamNewsData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=exams%20notification&lang=en&apiKey=${apiKey}`
      );
      const data = await response.json();
      if (data.status === "ok") {
        const filteredData = data.articles.slice(0, 5);

        setExamNotificationData(filteredData);
      } else {
        console.error("Error fetching data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchExamNewsData();
  }, []);
  return (
    <div className="drop-shadow-sm mb-10 w-[350px]  bg-white lg:w-full md:w-full sm:w-full">
      <div className="font-bold border-b-2 border-x border-t rounded-t-[20px] border-b-[#7B90FF] border-solid border-gray-600 tracking-[0.23px] text-center">
        Exam Notification
      </div>
      <div className="shadow-md w-full pb-2 border-[1px] border-solid border-t-0 rounded-b-[20px] text-left">
        {examNotificationData.map((article, id) => (
          <div key={id}>
            <ExamNewsCard NewsCard={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export {ExamNotificationRender};

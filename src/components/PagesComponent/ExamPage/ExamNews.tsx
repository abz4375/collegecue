"use client";
import React, { useState, useEffect } from "react";
import { ExamNewsCard } from "../../Reusable_cards/ExamNewsCard";

const ExamNews = () => {
  const [examNewsData, setExamNewsData] = useState([]);
  const apiKey = "8ddafd59dcfb40a698ed9cf39b4df2ea";

  const fetchExamNewsData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=exams%20question%20paper%20answer%20key&lang=en&apiKey=${apiKey}`
      );
      const data = await response.json();

      if (data.status === "ok") {
        const filteredData = data.articles.slice(0, 5);

        setExamNewsData(filteredData);
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
    <div className="drop-shadow-sm mb-10 w-[350px] bg-white lg:w-full md:w-full sm:w-full">
      <div className="w-full  border-b-2 border-x border-t rounded-t-[20px] !border-b-[#7B90FF] 
      border-solid border-gray-600 font-bold tracking-[0.23px] sm:px-5  pt-2">
        <h4 className=" font-semibold text-[#210366] text-center ">Exam News</h4>
      </div>
      <div className="rounded-b-[20px] border-x border-b border-solid w-full border-gray-300 ">
        {examNewsData.map((article, id) => (
          <div key={id}>
            <ExamNewsCard NewsCard={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ExamNews };

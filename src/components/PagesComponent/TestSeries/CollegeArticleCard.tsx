import { wrap } from "framer-motion";

const CollegeArticleCard = () => {
  const buttons = [
    {
      label: "BE/B.Tech Exams",
      link: "#",
    },
    {
      label: "Medical (UG) Exams",
      link: "#",
    },
    {
      label: "State Exam B.e/B.Tech",
      link: "#",
    },
    {
      label: "Placement Test",
      link: "#",
    },
    {
      label: "CBSE Class XII",
      link: "#",
    },
  ];

  return (
    <div className="text-center m-5">
      <div className="text-center text-[#2E1065]">
        <h1 className="font-medium text-2xl md:text-xl mb-4 mt-12">Select Your Exam Categories</h1>
      </div>
      <div className="flex md:flex-col justify-center gap-6 text-center mx-auto w-[65%]  border-b-4 border-[#3B82F0]">
        <button className="text-xl md:text-lg text-nowrap hover:border-b-4 hover:border-[#3B82F6] transition duration-300 ease-in-out">All Exams</button>
        <button className="text-xl md:text-lg text-nowrap hover:border-b-4 hover:border-[#3B82F6] transition duration-300 ease-in-out">BE/B.tech Exam</button>
        <button className="text-xl md:text-lg text-nowrap hover:border-b-4 hover:border-[#3B82F6] transition duration-300 ease-in-out">JEE Exam</button>
        <button className="text-xl md:text-lg text-nowrap hover:border-b-4 hover:border-[#3B82F6] transition duration-300 ease-in-out">Neet Exam</button>
        <button className="text-xl md:text-lg text-nowrap hover:border-b-4 hover:border-[#3B82F6] transition duration-300 ease-in-out">CAT Exam</button>
        <button className="text-xl md:text-lg text-nowrap hover:border-b-4 hover:border-[#3B82F6] transition duration-300 ease-in-out">Others</button>
      </div>
  </div>
  );
};

export default CollegeArticleCard;

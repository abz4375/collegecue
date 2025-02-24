"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Heading from "../Heading/Heading";

interface BankData {
  image: string;
  name: string;
  interestRates: { amount: string; rate: string }[];
  tenure: string;
  loanType: string;
  scheme: string;
}

interface BankDetailCardProps {
  bankDetails?: BankData[];
}

const BankdetailCard: React.FC<BankDetailCardProps> = ({ bankDetails }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const headingRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    router.push("?showBankDetails=true", { scroll: false });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // useEffect to scroll on component mount/update
  useEffect(() => {
    if (searchParams.get('scrollTo') === 'heading' && headingRef.current) {
      headingRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [searchParams]);

  if (!bankDetails || bankDetails.length === 0) {
    return <div>No bank details available.</div>;
  }

  const totalPages = Math.ceil(bankDetails.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bankDetails.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
     // Scroll to the heading
     if (headingRef.current) {
      headingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex justify-center mt-10" id="heading" ref={headingRef}>
      <div className="w-full max-w-[1380px] px-4 lg:px-8 mx-auto">
        <center >
          <Heading heading_name="Bank Details" />
        </center>
        <div className="overflow-x-auto  shadow-none mt-2 rounded-none border-b border-t border-gray-300">
          <table className="min-w-full bg-white rounded-lg text-sm">
            <thead>
              <tr className="bg-blue-100 bg-opacity-75">
                <th className=" min-w-[200px] w-1/5 text-center  border-gray-300 p-4 text-base font-[550]">
                  Bank Name
                </th>
                <th className=" min-w-[200px] w-1/5 text-center  border-gray-300 p-4 text-base font-[550]">
                  Interest Rate
                </th>
                <th className=" min-w-[200px] w-1/5 text-center  border-gray-300 p-4 text-base font-[550]">
                  Max Time
                </th>
                <th className=" min-w-[200px] w-1/5 text-center  border-gray-300 p-4 text-base font-[550]">
                  Loan Type
                </th>
                <th className=" min-w-[200px] w-1/5 text-center  border-gray-300 p-4 text-base font-[550]">
                  Scheme
                </th>
                <th className=" min-w-[200px] w-1/5 text-center  border-gray-300 p-4 text-base font-[550]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((bankdata, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100"
                >
                  <td className="text-center  border-gray-300 p-2">
                    <div className="flex flex-col items-center">
                      <Image
                        src={bankdata.image}
                        alt={bankdata.name}
                        width={96}
                        height={96}
                        className="w-max h-auto object-contain mx-auto"
                      />
                    </div>
                  </td>
                  <td className="text-center  border-gray-300 p-2">
                    {bankdata.interestRates.map((rate, i) => (
                      <div key={i}>
                        {rate.amount} {rate.rate}
                      </div>
                    ))}
                  </td>
                  <td className="text-center  border-gray-300 p-2">
                    {bankdata.tenure}
                  </td>
                  <td className="text-center  border-gray-300 p-2">
                    {bankdata.loanType}
                  </td>
                  <td className="text-center  border-gray-300 p-2">
                    {bankdata.scheme}
                  </td>
                  <td className="text-center  border-gray-300 p-2 px-4 py-4">
                    <div
                      className="flex flex-col items-center gap-2 cursor-pointer"
                      onClick={openModal}
                    >
                      <div className="w-32 h-9 bg-white text-gray-600 hover:text-red-500 border border-black border-opacity-20 rounded-full flex items-center justify-center active:bg-gray-200 transition-all duration-300">
                        Details
                      </div>
                      <button
                        onClick={() => {}}
                        className="w-32 h-9 bg-white border border-blue-500 text-blue-500 hover:border-blue-100 hover:bg-blue-100 hover:text-blue-500 rounded-full  focus:brightness-[95%] transition-all duration-300"
                      >
                        Apply Now
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          aria-label="pagination navigation"
          className="flex justify-center mt-4"
        >
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`block mx-2 p-1 ml-0 leading-tight text-gray-500 bg-white border-2 border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === 1 ? "cursor-not-allowed" : ""
                }`}
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li key={i}>
                <button
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-2 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 ${
                    currentPage === i + 1 ? "text-blue-600 bg-blue-50" : ""
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`block mx-2 p-1 leading-tight text-gray-500 bg-white  border-2 border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === totalPages ? "cursor-not-allowed" : ""
                }`}
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Sample Data
const bankDetails: BankData[] = [
  {
    image:
      "https://images.collegedunia.com/public/college_data/images/bank-horizontal/SBI-logo_4.png?mode=stretch",
    name: "State Bank of India",
    interestRates: [
      { amount: "Up to INR 7.50 Lacs", rate: "10.55%" },
      { amount: "Above INR 7.50 Lacs", rate: "10.80%" },
    ],
    tenure: "15 years",
    loanType: "Student",
    scheme: "Padho Pardesh CSIS Skill Loan Scheme",
  },
  {
    image:
      "https://images.collegedunia.com/public/college_data/images/bank-horizontal/PNB-logo_3.png?mode=stretch",
    name: "Punjab National Bank",
    interestRates: [
      { amount: "Up to INR 7.5 Lacs", rate: "MCLR + 2.00%" },
      { amount: "Above INR 7.5 Lacs", rate: "2.60%" },
    ],
    tenure: "15 years",
    loanType: "Saraswat",
    scheme: "Padho Pardesh CSIS Skill Loan Scheme",
  },
  {
    image:
      "https://images.collegedunia.com/public/college_data/images/bank-horizontal/HDFC-logo_2.png?mode=stretch",
    name: "HDFC Bank",
    interestRates: [
      {
        amount: "12.10%+",
        rate: "floating rate(depends on the risks points of the applicant)",
      },
    ],
    tenure:
      "Loan amount upto INR 7.5 Lacs: 10 years; Loan amount above INR 7.5 Lacs: 15 years",
    loanType: "HDFC Education",
    scheme: "CSIS",
  },
  {
    image:
      "https://images.collegedunia.com/public/college_data/images/bank-horizontal/AXIS-logo_1.png?mode=stretch",
    name: "AXIS Bank",
    interestRates: [
      { amount: "Up to INR 7.5 Lacs-", rate: "16.50%" },
      { amount: "Above INR 7.5 Lacs", rate: "2.60%" },
    ],
    tenure: "7 Years",
    loanType: "Axis Education",
    scheme: "CSIS",
  },
  {
    image:
      "https://images.collegedunia.com/public/college_data/images/bank-horizontal/ICICI-logo_5.png?mode=stretch",
    name: "ICICI Bank",
    interestRates: [
      {
        amount: "12.10%+",
        rate: "floating rate(depends on the risks points of the applicant)",
      },
    ],
    tenure:
      "Loan amount upto INR 7.5 Lacs: 10 years; Loan amount above INR 7.5 Lacs: 15 years",
    loanType: "HDFC Education",
    scheme: "CSIS",
  },
  {
    image:
      "https://images.collegedunia.com/public/college_data/images/bank-horizontal/Canara-logo_6.png?mode=stretch",
    name: "CANARA Bank",
    interestRates: [
      {
        amount: "12.10%+",
        rate: "floating rate(depends on the risks points of the applicant)",
      },
    ],
    tenure:
      "Loan amount upto INR 7.5 Lacs: 10 years; Loan amount above INR 7.5 Lacs: 15 years",
    loanType: "HDFC Education",
    scheme: "CSIS",
  },
];

// Render the component with the sample data
const App = () => {
  return <BankdetailCard bankDetails={bankDetails} />;
};

export default App;

"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import logo from "../../../assets/logo-removebg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const bankDetails = [
  {
    bankName: "SBI",
    interestRate: "Up to INR 7.50 Lacs: 10.55%\nAbove INR 7.50 Lacs: 10.80%",
    loanType: "Student",
    repaymentPeriod: "15 years",
    scheme: "Padho Pardesh\nCSIS\nSkill Loan Scheme"
  },
  {
    bankName: "PNB",
    interestRate: "Up to INR 7.5 Lacs: MCLR + 2.00%\nAbove INR 7.5 Lacs: 2.60%",
    loanType: "Saraswat",
    repaymentPeriod: "15 years",
    scheme: "Padho Pardesh\nCSIS\nSkill Loan Scheme"
  },
  {
    bankName: "HDFC",
    interestRate: "12.10% + floating rate (depends on the risk points of the applicant)",
    loanType: "HDFC Education",
    repaymentPeriod: "Loan amount up to INR 7.5 Lacs: 10 years\nLoan amount above INR 7.5 Lacs: 15 years",
    scheme: "CSIS"
  }
];

const BankDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showModal = searchParams.get('showBankDetails') === 'true';

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';  
    }
    return () => {
      document.body.style.overflow = ''; 
    };
  }, [showModal]);

  const closeModal = () => {
    router.push('?showBankDetails=false', { scroll: false });
  };

  if (showModal) {
    return (
      <dialog className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-4 w-[80vw] sm:w-[90vw]  max-w-full overflow-x-auto">
          <div className="flex items-center justify-between mb-">
            <Image src={logo} alt="Collegecue.com" className="h-12 object-contain object-left" />
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 transition focus:outline-none"
              aria-label="Close"
            >
              <IoClose size={24}  />
            </button>
          </div>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full leading-normal border-0 rounded-lg">
              <thead>
                <tr>
                  <th className="min-w-[200px] px-5 py-3 max-w-[200px] border-b border-gray-200 bg-blue-100 bg-opacity-75 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Bank / Financer
                  </th>
                  {bankDetails.map((bank, index) => (
                    <th key={index} className="px-5 py-3 min-w-[200px] border-b border-gray-200 bg-blue-100 bg-opacity-75 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>{bank.bankName}</option>
                        {/* Add other options if needed */}
                      </select>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["interestRate", "loanType", "repaymentPeriod", "scheme"].map((key:any, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-100">
                    <td className="px-5 py-5 border-b max-w-[200px] font-bold border-gray-200 text-sm capitalize">{key.split(/(?=[A-Z])/).join(' ')}</td>
                    {bankDetails.map((bank:any, colIndex) => (
                      <td key={colIndex} className="px-5 py-5 border-b max-w-[200px] border-gray-200 text-sm text-center">
                        {bank[key].split('\n').map((line:any, lineIndex:any) => (
                          <React.Fragment key={lineIndex}>
                            {line}<br />
                          </React.Fragment>
                        ))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </dialog>
    );
  }

  return null;
};

export default BankDetails;
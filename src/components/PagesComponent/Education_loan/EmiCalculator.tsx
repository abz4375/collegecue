"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const EmiCalculator: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [principal, setPrincipal] = useState<string>("100000");
  const [interestRate, setInterestRate] = useState<string>("3.7");
  const [loanTenure, setLoanTenure] = useState<string>("5");
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [pieChartData, setPieChartData] = useState<
    { name: string; value: number; fill: string }[]
  >([
    { name: "Principal", value: 0, fill: "#337ab7" },
    { name: "Total Interest", value: 0, fill: "#4db6ac" },
  ]);

  useEffect(() => {
    setMounted(true);
    calculateEMI();
  }, []);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // Convert annual rate to monthly
    const n = parseFloat(loanTenure) * 12; // Convert years to months

    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
      setEmi(0);
      setTotalInterest(0);
      setTotalAmount(0);
      setPieChartData([
        { name: "Principal", value: 0, fill: "#337ab7" },
        { name: "Total Interest", value: 0, fill: "#4db6ac" },
      ]);
      return;
    }

    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalInterestValue = emiValue * n - p;
    const totalAmountValue = p + totalInterestValue;

    setEmi(parseFloat(emiValue.toFixed(2)));
    setTotalInterest(parseFloat(totalInterestValue.toFixed(2)));
    setTotalAmount(parseFloat(totalAmountValue.toFixed(2)));

    setPieChartData([
      {
        name: "Principal",
        value: p,
        fill: "#337ab7",
      },
      {
        name: "Total Interest",
        value: totalInterestValue,
        fill: "#4db6ac",
      },
    ]);
  };

  const handleInputChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
    setTimeout(calculateEMI, 0); // Defer calculation to next tick
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex justify-center ">
      <div className="max-w-6xl w-full">
        <div className="m-8 mt-20">
          <h2 className="text-2xl font-bold text-center my-6 mb-10">
            CALCULATE YOUR EDUCATION{" "}
            <span className="text-[#002366]">LOAN EMI</span>
          </h2>

          <div className="flex md:flex-col [@media_(max-width:_1020px)]:flex-col gap-8 px-4 w-full border- border-black justify-center">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Principal Amount */}
              <div className="space-y-2">
                <label className="text-black font-semibold block">
                  Loan Amount
                </label>
                <input
                  value={principal}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setPrincipal)
                  }
                  type="number"
                  min="0"
                  placeholder="Enter loan amount"
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-[1px] focus:ring-black"
                />
                <input
                  type="range"
                  value={principal}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setPrincipal)
                  }
                  min="0"
                  max="10000000"
                  step="10000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <label className="text-black font-semibold block">
                  Interest Rate (% per annum)
                </label>
                <input
                  value={interestRate}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setInterestRate)
                  }
                  type="number"
                  step="0.1"
                  min="0"
                  max="30"
                  placeholder="Enter interest rate"
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-[1px] focus:ring-black"
                />
                <input
                  type="range"
                  value={interestRate}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setInterestRate)
                  }
                  min="0"
                  max="30"
                  step="0.1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Loan Tenure */}
              <div className="space-y-2">
                <label className="text-black font-semibold block">
                  Loan Tenure (in years)
                </label>
                <input
                  value={loanTenure}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setLoanTenure)
                  }
                  type="number"
                  min="1"
                  max="30"
                  placeholder="Enter loan tenure"
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-[1px] focus:ring-black"
                />
                <input
                  type="range"
                  value={loanTenure}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setLoanTenure)
                  }
                  min="1"
                  max="30"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="flex items-center justify-center space-y-6 gap-4">
              <div className="space-y-4 w-full ">
                <div className="bg-blue-100 bg-opacity-75 p-4 rounded-lg">
                  <p className="text-blue-900 text-opacity-60 flex items-center justify-center text-lg font-semibold">
                    Monthly EMI
                  </p>
                  <p className="text-2xl font-bold flex items-center justify-center">
                    {emi ? formatCurrency(emi) : "₹0"}
                  </p>
                </div>

                <div className="bg-blue-100 bg-opacity-75 p-4 rounded-lg">
                  <p className="text-blue-900 text-opacity-60 flex items-center justify-center text-lg font-semibold">
                    Total Interest
                  </p>
                  <p className="text-2xl font-bold flex items-center justify-center">
                    {totalInterest ? formatCurrency(totalInterest) : "₹0"}
                  </p>
                </div>

                <div className="bg-blue-100 bg-opacity-75 p-4 rounded-lg">
                  <p className="text-blue-900 text-opacity-60 flex items-center justify-center text-lg font-semibold">
                    Total Amount Payable
                  </p>
                  <p className="text-2xl font-bold flex items-center justify-center">
                    {totalAmount ? formatCurrency(totalAmount) : "₹0"}
                  </p>
                </div>
              </div>
            </div>
            <div className="scale-105 flex justify-center items-center ">
              {/* Pie Chart */}
              {mounted && (
                <PieChart
                  width={600}
                  height={300}
                  className="border border-gray-400 rounded-lg shadow-md bg-slate-100"
                >
                  <Pie
                    dataKey="value"
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, value }) =>
                      `${name}: ${formatCurrency(value)}`
                    }
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => formatCurrency(Number(value))}
                    labelStyle={{ fontWeight: "bold", color: "#333" }}
                    cursorStyle={{ stroke: "#ccc", strokeWidth: 1 }}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "10px 15px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                    wrapperStyle={{}}
                    itemStyle={{
                      marginTop: "5px",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  />
                </PieChart>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;

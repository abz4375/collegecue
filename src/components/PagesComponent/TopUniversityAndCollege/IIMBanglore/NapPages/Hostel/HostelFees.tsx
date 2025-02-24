import Image from "next/image";
import React from "react";

interface HostelFee {
  title: string;
  cost: string;
}

interface HostelFeesProps {
  Hostelfees: {
    title: string;
    description: string;
    tableData: HostelFee[];
    linkText: string;
    linkDestination: string;
    image: any;
  };
  name: string;
}

const HostelFees: React.FC<HostelFeesProps> = ({ Hostelfees, name }) => {
  const {description, tableData, linkText, linkDestination, image } =
    Hostelfees;

  return (
    <>
      <p className="font-bold text-2xl text-gray-800 my-4">
        {name} Fee structure
      </p>
      <p className="font- text-gray-600 text-base my-4">
        {description}
      </p>
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className=" text-white">
            <tr>
              <th className="px-6 py-3 bg-blue-200 text-black text-center font-semibold text-sm">
                Sample Costs for On-Campus Housing
              </th>
              <th className="px-6 py-3 text-center bg-blue-950 font-semibold text-sm">
                Cost
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-blue-100 bg-opacity-55 shadow-md" : "bg-blue-100 bg-opacity-55"} h-[3rem] shadow-sm`}>
                <td className="px-6 py-4 text-center text-[13px]">
                  {row.title}
                </td>
                <td className="px-6 py-4 text-center text-[13px]">
                  {row.cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-4">
        <div className="bg-transparent rounded-lg overflow-hidden ">
          <div className="p-4 flex items-center gap-1 ">
            <p className="font-semibold text-gray-600">{linkText}</p>
            <p className="font-semibold text-blue-500">{linkDestination}</p>
          </div>
          <div className="p-2 ">
            <Image
              src={image}
              alt="hostel"
              className="w-auto max-h-[75vh] block object-fit mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelFees;

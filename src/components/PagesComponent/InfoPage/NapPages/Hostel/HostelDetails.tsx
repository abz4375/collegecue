import Link from "next/link";
import React from "react";
import { IoMdLink } from "react-icons/io";

interface HostelDetailsDataItem {
  id: number;
  heading: string;
  content: string;
  link?: string;
}

interface HostelDetailItem {
  component: string;
  availability: number;
}

interface HostelDetailsProps {
  HostelDetailsData: HostelDetailsDataItem[];
  HostelDetail: HostelDetailItem[];
  name: string;
}

const HostelDetails: React.FC<HostelDetailsProps> = ({
  HostelDetailsData,
  HostelDetail,
  name,
}) => {
  return (
    <>
      <div>
        <p className="font-bold text-2xl text-gray-800 pt-6 pb-4">
          {name} Hostel Details
        </p>
        <div className="bg-white shadow-md rounded-lg overflow-hidden border-2 border-gray-300">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="px-6 py-3 text-center font-semibold text-sm">
                  Hostel Component
                </th>
                <th className="px-6 py-3 text-center font-semibold text-sm">
                  Availability (in number)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {HostelDetail.map((row, index) => (
                <tr key={index} className="bg-blue-100 bg-opacity-55 shadow-md">
                  <td className="px-6 py-4 text-center">{row.component}</td>
                  <td className="px-6 py-4 text-center">{row.availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 ml-2">
        {HostelDetailsData.map((item) => (
          <div key={item.id} className="mb-4">
            <p className="font-bold text-lg text-gray-800">{item.heading}</p>
            <p className="text-gray-800">{item.content}</p>
            {item.link && (
              <Link href={'#'} className="text-blue-500 no-underline cursor-pointer flex items-center">
                <IoMdLink /> &nbsp; {item.link}
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HostelDetails;

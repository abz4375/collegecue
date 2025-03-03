"use client";
import React from "react";

interface PlacementData {
  batchName: string;
  placementStatistics: {
    year: string;
    statistics: {
      category: string;
      value: string;
    }[];
  }[];
}

interface Props {
  placementsData: PlacementData[];
}

const Table: React.FC<Props> = ({ placementsData }) => {
  return (
    <>
      <div className="max-w-screen-md mx-auto">
        {placementsData.map((batch, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-[0px_0px_2.5rem_rgba(123,144,255,0.15)] mb-6 mt-2"
          >
            <p className="text-xl text-gray-800  font-semibold mb-5">
              Placement Information Till {batch.batchName}
            </p>
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-blue-100 bg-opacity-75 text-base">
                    <th className="font-[600] text-start py-5 pl-4">
                      Category
                    </th>
                    {batch.placementStatistics.map((stats, statsIndex) => (
                      <th key={statsIndex} className="font-[600] ">
                        {stats.year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {batch.placementStatistics[0].statistics.map(
                    (stat, statIndex) => (
                      <tr
                        key={statIndex}
                        className={" hover:bg-gray-200 hover:bg-opacity-75 "+
                          (statIndex % 2 === 0 ? "bg-gray-100 " : "bg-white ")
                        }
                      >
                        <td className="py-5 pl-4 text-sm">
                          {stat.category}
                        </td>
                        {batch.placementStatistics.map((stats, statsIndex) => (
                          <td
                            key={statsIndex}
                            className="p-5 text-center text-sm"
                          >
                            {stats.statistics[statIndex].value}
                          </td>
                        ))}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;

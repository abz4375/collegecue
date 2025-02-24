import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const OfferTable = () => {
    const data=[
        {
            feature:"More than 400+ Best courses",
            collgecue:<FaCheckCircle />,
            others:<MdCancel />
        },
        {
            feature:"Placement guarentee",
            collgecue:<FaCheckCircle />,
            others:<MdCancel />
        },
        {
            feature:"Studying in abroad",
            collgecue:<FaCheckCircle />,
            others:<MdCancel />
        },
        {
            feature:"personal doubt assistance with courses",
            collgecue:<FaCheckCircle />,
            others:<MdCancel />
        },
        {
            feature:"Unlimited material",
            collgecue:<FaCheckCircle />,
            others:<MdCancel />
        },
        {
            feature:"Free Certificaion",
            collgecue:<FaCheckCircle />,
            others:<MdCancel />
        },
        {
            feature:"Test series and practice guide for your exam",
            collgecue:<FaCheckCircle />,
            others:<MdCancel />
        },

    ]
    return (
        <div className="flex flex-col w-full justify-center sm:overflow-x-scroll mt-4 rounded-2xl overflow-hidden mb-8">
            <table>
                <thead>
                    <tr className="w-[1300x] min-w-[600px] p-8 flex justify-evenly items-center bg-gray-50 text-lg font-semibold gap-4 md:px-8">
                        <td className="font-bold w-[50%] text-xl text-center text-[#4C516D] md:text-lg">Features</td>
                        <td className="font-bold w-[25%] text-xl  text-[#4C516D] md:text-lg">Collegecue</td>
                        <td className="font-bold w-[25%] text-xl  text-[#4C516D] md:text-lg">Others</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index} className="w-[1300x] min-w-[600px] p-8 bg-gray-50 flex justify-around items-center text-lg font-semibold md:px-8">
                             <td className="font-bold w-[50%] text-xl text-center text-[#4C516D] md:text-lg">{item.feature}</td>
                        <td className="font-bold w-[25%] text-xl text-center text-green-500 md:text-lg">{item.collgecue}</td>
                        <td className="font-bold w-[25%] text-xl text-center text-red-500 md:text-lg">{item.others}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OfferTable
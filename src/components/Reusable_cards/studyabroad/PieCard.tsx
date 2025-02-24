'use client';
import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import Image from 'next/image';

interface PieData {
    img: any,
    country: string,
    fields: object,
}

const PieCard: React.FC<PieData> = ({
    img,
    country,
    fields,
}) => {
    const colors = [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
        "#e377c2",
        "#7f7f7f",
        "#bcbd22",
        "#17becf",
        "#aec7e8",
        "#ffbb78",
        "#98df8a",
        "#ff9896",
        "#c5b0d5",
        "#c49c94",
        "#f7b6d2",
        "#c7c7c7",
        "#dbdb8d",
        "#9edae5",
    ];

    const pieChartData = Object.entries(fields).map(
        ([fields, percentage], index) => ({
            name: fields,
            value: percentage,
            fill: colors[index % colors.length],
        })
    );

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (

        <div className='h-auto w-auto m-4 justify-start items-center flex flex-col bg-white rounded-[20px] p-[15px] sm:mx-4 shadow-5xl'>
            <div className='flex flex-row items-center justify-between mt-[1.3rem]'>
                <Image src={img} alt={country} className='h-12 w-12 bg-white m-0 p-0 rounded-[50%]' />
                <div className='bg-[#7b90ff]/20 rounded-tr-[10px] rounded-br-[10px] overflow-hidden flex flex-col shadow-3xl'>
                    <p className='text-[#210366] text-[1.2rem] font-bold leading-[1.2rem] tracking-wide whitespace-nowrap text-left p-2'>
                        {country}
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                {isClient && (
                    <div className='flex-[1] text-center'>
                        <PieChart width={200} height={200}>
                            <Pie
                                dataKey="value"
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={80}
                                fill="#82ca9d"
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                )}
                <div className='flex-[1]'>
                    <ul>
                        {pieChartData.map(({ name, value, fill }, index) => (
                            <li className='flex items-center' key={index}>
                                <span className='w-2 h-2 rounded-full mr-3' style={{ backgroundColor: fill }}></span>
                                <span className='mr-2 capitalize'>{name}</span>
                                {value}%
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PieCard
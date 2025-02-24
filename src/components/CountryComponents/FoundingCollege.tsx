import React from 'react';
import Button from "../Buttons/Courses"
import TopuniversityCollageCard from "../Reusable_cards/TopuniversityCollageCard";


const FoundingCollege = ({ FC }: any) => {
    return (
        <div className='flex flex-col justify-start max-w-full items-start'>
            <div className='flex flex-wrap flex-row justify-start items-center'>
                <div className="font-medium text-[2rem] text-[#41355D] ">
                    Found 19030 Colleges
                </div>
                <div className=" flex items-center flex-wrap gap-2 p-2">
                    <Button dt={"IIT"} link={""} />
                    <Button dt={"IIIT"} link={""} />
                    <Button dt={"IIM"} link={""} />
                    <Button dt={"NIT"} link={""} />
                </div>
            </div>
            <div className='mx-auto gap-4 flex flex-col my-8'>
                {FC.map((item:any,index:any)=>(
                    <TopuniversityCollageCard
                    key={index}
                   name={item.heading}
                   location={item.subheading}
                   stars={item.rating}
                   fees={item.body1}
                   otherfee={item.body2}
                   brochure={""}
                   enquire={""}
                   isStydyAbroad={true}
                   {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default FoundingCollege
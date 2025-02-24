import React from 'react'
import Image from "next/image";
import mission from "../../../assets/About/collogecue_mission.png";

const AboutCollegecue = () => {
  return (
    <>
        <div className="container mx-auto text-center py-8">
            <h2 className="text-4xl sm:text-3xl font-bold text-purple-900 mb-4">
                About Collegecue.com
            </h2>
            <p className="text-gray-700 text-2xl sm:text-lg">
                Collegecue is your ultimate destination for simplifying the course and college selection process, whether <br/> you&apos;re a student seeking undergraduate (UG) or postgraduate (PG) degrees in India or beyond.
            </p>
        </div>
        <div className="container mx-auto text-center py-8">
          <div className="flex justify-center items-center mb-4">
            <Image src={mission} alt="@bharat" className="w-[120px] h-auto"/>
          </div>
          <h2 className="text-4xl sm:text-3xl font-bold text-purple-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-2xl sm:text-lg">At Collegecue, we aim to empower students and parents with comprehensive and reliable information about <br /> higher education choices, career options, admission processes, and more. We believe that making informed <br /> decisions about education is crucial for a successful career path.</p>
        </div>
    </>
  )
}

export default AboutCollegecue
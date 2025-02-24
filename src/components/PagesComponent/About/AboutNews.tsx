import React from 'react'
import Image from "next/image";
import news from "../../../assets/About/collogecue_news.png";

const AboutNews = () => {
  return (
    <>
        <div className="container mx-auto text-center py-8">
          <div className="flex justify-center items-center mb-4">
            <Image src={news} alt="@bharat" className="w-[120px] h-auto"/>
          </div>
          <h2 className="text-4xl sm:text-3xl font-bold text-purple-900 mb-4">Collegecue News</h2>
          <p className="text-gray-700 text-xl sm:text-md">Stay updated with the latest news and information on examinations, college applications, course releases, scholarships, placement reports, and more <br /> through our dedicated Education News section.</p>
        </div>
        <div className="container mx-auto text-center py-8">
          <h2 className="text-4xl sm:text-3xl font-bold text-purple-900 mb-4">Our Team</h2>
          <p className="text-gray-700 text-xl sm:text-md">Our team consists of experienced educators, industry experts, and dedicated professionals who are committed to supporting you in making the best <br />education decisions.</p>
        </div>
    </>
  )
}

export default AboutNews
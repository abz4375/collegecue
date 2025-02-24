import Image from "next/image";
import React from "react";
import Prmotion from "../../../assets/Prmotion.svg"; 
import Heading from "../../Heading/Heading";

const Promotion = () => {
  return (
    <div className="text-gray-900 max-w-[1340px] mx-auto my-20">
      <Heading heading_name={"Promote with Collegecue"} />
      <p className="mb-6">
        We are the most cutting-edge and engaging educational portal in India,
        with an experience that is ergonomically intended to maximize
        conversion. Students, parents, and instructors looking for information
        about higher education can find what they need on Collegecue.com. The
        website offers mailers services on our opt-in mailer database, text
        links, side bar banners, and footer banners.
      </p>
      <div className="flex flex-wrap">
        <div className=" float-left">
          <h4 className="font-semibold mb-2">What do we provide?</h4>
          <h5 className="font-semibold mb-2">Academic Institutions:</h5>
          <ul className="list-disc list-inside mb-6 pl-4 md:pl-6">
            <li className="mb-2">
              Building an independent website for the organization
            </li>
            <li className="mb-2">
              Adaptive display of images and other creative
            </li>
            <li className="mb-2">
              Increased user engagement and click-through rate are assured
            </li>
            <li className="mb-2">
              Choice to switch to referral links for traffic
            </li>
            <li className="mb-2">
              Integrate your own API to receive real-time alerts when candidates
              request information
            </li>
          </ul>
          <h5 className="font-semibold mb-2">Promoters:</h5>
          <ul className="list-disc list-inside mb-6 pl-4">
            <li className="mb-2">
              Lots of room for banners from other parties
            </li>
            <li className="mb-2">
              Algorithm to modify banner placement only on pertinent pages
            </li>
            <li className="mb-2">
              Ad Rotation Policy to guarantee long-term advertisement reach and
              frequency of ad viewing
            </li>
          </ul>
        </div>
        <Image
          width={600}
          height={600}
          src={Prmotion}
          alt="Promoters Image"
          className="float-right ml-6 mb-5"
        />
      </div>

      <p className="mb-6">
        To learn more, send us an email at:
        <a
          href="mailto:promotion@collegecue.com"
          className="text-blue-800 ml-2 font-medium"
        >
          promotion@collegecue.com
        </a>
      </p>
    </div>
  );
};

export default Promotion;

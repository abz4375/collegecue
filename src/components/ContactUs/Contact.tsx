import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1340px] mx-auto my-20">
      <div className="flex gap-2 w-full justify-center items-center text-[#58468c] sm:flex-col">
        <Card 
          title="Contact Number"    
          imgSrc={require("@/assets/ContactUs/Untitled.png")} 
          content="(+91) 9345678900" 
          innerWidth="350px" 
          innerHeight="201.9px"  
        />
        <Card 
          title="Office Location" 
          imgSrc={require("@/assets/ContactUs/Untitled1.png")} 
          content="BharatTech TechEcosystem Pvt. Ltd. 67/68 Daulat Ganj, Kanpur, Uttar Pradesh, 208001, Near Canal Road" 
          innerWidth="350px" 
          innerHeight="252.9px" 
        />
        <Card 
          title="Mail Support" 
          imgSrc={require("@/assets/ContactUs/Untitled2.png")} 
          content="scontact@collegecue.com" 
          innerWidth="350px" 
          innerHeight="201.9px" 
        />
      </div>

      <div className="flex flex-col items-center gap-4 text-[#58468c]">
        <div className="text-4xl font-semibold text-[#ff4800] mt-5 text-center">GET IN TOUCH WITH US</div>
        <div className="text-[25px] font-semibold text-[#58468c] flex items-center justify-center max-w-[836px] max-h-[65px] text-center sm:mt-10 sm:text-[30px]">
          Got a query? Do You Need Assistance? or simply wish to greet someone? We hope to hear from you soon.
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[836px]">
          <div className="flex gap-4 sm:w-full sm:flex-col w-full">
            <InputField placeholder="Name" customWidth="100%" />
            <InputField placeholder="Email" customWidth="100%" />
          </div>
          <div className="flex gap-4 sm:w-full sm:flex-col">
            <InputField placeholder="Subject" />
            <InputField placeholder="Website" />
          </div>
          <textarea
            placeholder="Message"
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <div className="flex justify-center items-center"> 
            <button
              type="submit"
              className="w-[180px] px-4 py-2 font-semibold text-white bg-[#ff4800] rounded hover:bg-[#58468c] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  content: string;
  imgSrc: string;
  innerWidth: string;
  innerHeight: string;
}

const Card: React.FC<CardProps> = ({ title, content, imgSrc, innerWidth, innerHeight }) => {
  return (
    <div className="flex justify-center items-center" style={{ width: '380px', height: '282.9px' }}>
      <div
        className="flex flex-col justify-center items-center bg-white p-6 rounded-3xl transition-all duration-300 transform hover:translate-y-2 shadow-md hover:shadow-2xl"
        style={{ width: innerWidth, height: innerHeight, margin: '0 auto' }}
      >
        <Image 
          src={imgSrc} 
          alt={`${title} image`} 
          width={40} 
          height={40} 
          className="rounded-3xl mb-4"
        />
        <div className="text-center text-purple-700">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-[#58468c] text-base">{content}</p>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label?: string;
  placeholder: string;
  customWidth?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, customWidth }) => {
  return (
    <div className="flex flex-col" style={{ width: customWidth || '100%' }}>
      {label && (
        <label htmlFor={label} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="text"
        id={label}
        name={label?.toLowerCase()}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default Contact;

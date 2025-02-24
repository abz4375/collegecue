import React from 'react';
import company1 from "../../../assets/Job-Portal-Page/trustedcompany/company1.svg";
import company2 from "../../../assets/Job-Portal-Page/trustedcompany/company2.svg";
import company3 from "../../../assets/Job-Portal-Page/trustedcompany/company3.svg";
import company4 from "../../../assets/Job-Portal-Page/trustedcompany/company4.svg";
import company5 from "../../../assets/Job-Portal-Page/trustedcompany/company5.svg";
import company6 from "../../../assets/Job-Portal-Page/trustedcompany/company6.svg";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";

const companylogo = [
  { width: "8.438rem", src: company1 },
  { width: "8.75rem", src: company2 },
  { width: "7.563rem", src: company3 },
  { width: "8.313rem", src: company4 },
  { width: "7.25rem", src: company5 },
  { width: "6.125rem", src: company6 },
];

const TrustedCompnay = () => {
  return (
    <></>
    // <div className='max-w-[1216px] flex flex-col justify-center items-center my-32 gap-16 mx-auto md:mt-[10rem] xl:mt-[4rem]'>
    //   <p className='text-3xl font-light sm:text-center'>Trusted by 4,000+ companies</p>
    //   <div className='relative w-full overflow-hidden'>
    //     <div className='flex items-center gap-20 animate-marqueenew'>
    //       {companylogo.map((logo, index) => (
    //         <div key={index} className='mx-4'>
    //           <Image
    //             className='aspect-[3/2] object-contain w-[200px]'
    //             loading="lazy"
    //             alt={`Company logo ${index + 1}`}
    //             src={logo.src}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default TrustedCompnay;

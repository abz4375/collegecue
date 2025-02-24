import React from 'react'
import img1business from "../../../../assets/studyAbroad/futureBtn/business2.png";
import img2science from "../../../../assets/studyAbroad/futureBtn/data-science.png";
import img3accounting from "../../../../assets/studyAbroad/futureBtn/accounting2.png";
import img4finance from "../../../../assets/studyAbroad/futureBtn/finance2.png";
import img5humanities from "../../../../assets/studyAbroad/futureBtn/humanities2.png";
import img6eco from "../../../../assets/studyAbroad/futureBtn/eco2.png";
import img7env from "../../../../assets/studyAbroad/futureBtn/env2.png";
import img8math from "../../../../assets/studyAbroad/futureBtn/math.png";
import img9history from "../../../../assets/studyAbroad/futureBtn/history2.png";
import img10chemistary from "../../../../assets/studyAbroad/futureBtn/chemistary2.png";
import Sqnbtn from '@/components/Reusable_cards/studyabroad/Sqnbtn';


const AllSqaurebtn = () => {
    const data = [
        {
          image: img1business,
          name: "Business",
          noOfCollege: "1577 Colleges",
          link: "#",
        },
        {
          image: img2science,
          name: "science",
          noOfCollege: "1369 Colleges",
          link: "#",
        },
        {
          image: img3accounting,
          name: "Accounting ",
          noOfCollege: "1369 Colleges",
          link: "#",
        },
        {
          image: img4finance,
          name: "finance",
          noOfCollege: "1577 Colleges",
          link: "#",
        },
        {
          image: img5humanities,
          name: "humanities",
          noOfCollege: "1256 Colleges",
          link: "#",
        },
        {
          image: img6eco,
          name: "economics",
          noOfCollege: "1242 colleges",
          link: "#",
        },
        {
          image: img7env,
          name: "environmental ",
          noOfCollege: "1577 Colleges",
          link: "#",
        },
    
        {
          image: img8math,
          name: "Math",
          noOfCollege: "1577 Colleges",
          link: "#",
        },
        {
          image: img9history,
          name: "history",
          noOfCollege: "1256 Colleges",
          link: "#",
        },
        {
          image: img10chemistary,
          name: "chemistry",
          noOfCollege: "1242 colleges",
          link: "#",
        },
      ];
  return (
    <div className='flex flex-row flex-wrap items-center my-5 gap-16'>
        {data.map((item,index)=>(
            <Sqnbtn key={index} {...item} />
        ))}
    </div>
  )
}

export default AllSqaurebtn
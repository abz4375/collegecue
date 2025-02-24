import React from 'react';
import TrendingCard from '../../Reusable_cards/TrendingCard';
import News1 from "../../../assets/News/News1.png";
import News2 from "../../../assets/News/News2.png";
import News3 from "../../../assets/News/News3.png";
import Heading from '../../Heading/Heading';

const TrendingNews: React.FC = () => {
  const news1 = [
    "NIT Arunachal Pradesh Courses Admissions 2023: Dates, Eligibility, Cutoff, Selection,...",
    "VNIT Nagpur Course Admissions 2023 (Started): UG & PG, Eligibility, Selection Criteri...",
    "MNNIT Allahabad Admission 2023: Dates, Eligibility, Cut Off, Fees, Selection Criteria...",
    "SVNIT Surat Admission 2023: Dates, Cutoff, Eligibility, Selection Criteria, Applicati...",
    "MNIT Jaipur Admission 2023: Dates, Cutoff, Eligibility, Selection Criteria, Applicati..."
  ];

  const news2 = [
    "Tezpur University MDes Admission 2023 Open",
    "AM Jain College Admission 2023 Open For UG PG PhD Programs Check Direct Lin...",
    "Interview Mr J Prakash HOD at Chennais Amirta International Institute of Ho...",
    "AM Jain College Admission 2023 Open For UG PG PhD Programs Check Direct Lin...",
    "Interview Mr J Prakash HOD at Chennais Amirta International Institute of Hotel Manage...",
    "IIT Patna JRF Registration 2023 Open Last Date to Apply is May 14"
  ];

  const news3 = [
    "AP Intermediate 2nd year Geography Telugu Question Paper 2018 with Answer K...",
    "CUET PG 2022 Material Science and Technology Question Paper",
    "CUET PG 2022 Geophysics Question Paper",
    "AM Jain College Admission 2023 Open For UG PG PhD Programs Check Direct Lin...",
    "AP Intermediate 2nd year Geography Question Paper 2018 with Answer Key Marc...",
    "CUET PG 2022 Food Technology Question Paper"
  ];

  return (
   
      <div className='max-w-[1320px] mx-auto mb-20 mt-20'>
        <Heading heading_name={"Trending News"} />
      
      <div className="flex flex-wrap items-center justify-center gap-12 mt-10">
        <TrendingCard
          image={News1}
          content1={news1[0]}
          content2={news1[1]}
          content3={news1[2]}
          content4={news1[3]}
          content5={news1[4]}
        />
        <TrendingCard
          image={News2}
          content1={news2[0]}
          content2={news2[1]}
          content3={news2[2]}
          content4={news2[3]}
          content5={news2[4]}
        />
        <TrendingCard
          image={News3}
          content1={news3[0]}
          content2={news3[1]}
          content3={news3[2]}
          content4={news3[3]}
          content5={news3[4]}
        />
      </div>
   </div>
  );
}

export default TrendingNews;

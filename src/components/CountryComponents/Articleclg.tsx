import React from 'react'
import CollegeArticleCard from '../Reusable_cards/CollegeArticleCard'
import CollegeCard from '../Reusable_cards/CountryCollegeCard'

const Articleclg = ({article}:any) => {
  return (
    <div className='mt-5'>
        <p className='font-bold text-[30px] text-[#41355D]'>Article Section</p>
        <CollegeArticleCard />
        <div className='flex flex-row justify-center items-center mt-8 flex-wrap'>
            {article.map((item:any,index:any)=>(
                <CollegeCard key={index} 
                img={item.img}
                date={item.date}
                {...item} />
            ))}
        </div>

    </div>
  )
}

export default Articleclg
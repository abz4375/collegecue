import React from 'react';
import { MoreNews } from "../../DummyData/NewsData";
import MoreNewsCard from './MoreNewsCard';
import Heading from '../../Heading/Heading';

interface MoreNewsItem {
  moreNewsImg: any;
  date: any;
  heading: string;
  content: string;
  read_link: string;
}

const MoreNewses: React.FC = () => {
  return (
    <>
      <div className='max-w-[1320px] mx-auto mb-20 mt-20' >

        <div className="h-[41.99px] max-w-full mb-14">
          <Heading heading_name={"More News"} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {MoreNews.map((item: any, index: number) => (
            <div key={index} >
              <MoreNewsCard
                 moreNewsImg={item.moreNewsImg}
                date={item.date}
                heading={item.heading}
                content={item.content}
                readLink={item.read_link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoreNewses;
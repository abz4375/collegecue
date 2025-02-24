import React from 'react';
import img1 from   '../../../../assets/studyAbroad/blogsection/findcourse3.png'
import img2 from '../../../../assets/studyAbroad/blogsection/testprep2.png'
import img3 from '../../../../assets/studyAbroad/blogsection/application.png'
import img4 from '../../../../assets/studyAbroad/blogsection/funding2.png'
import img5 from '../../../../assets/studyAbroad/blogsection/visa2.png'
import img6 from '../../../../assets/studyAbroad/blogsection/travel2.png'
import img7 from '../../../../assets/studyAbroad/blogsection/postdegree2.png'
import Roundbtn from '@/components/Reusable_cards/studyabroad/Roundbtn';

const AllRndBtn = () => {
    const data = [
        {
          image: img1,
          name: 'Find Course/ University',
          link: '#',
        },
        {
          image: img2,
          name: 'TEST PREP',
          link: '#',
        },
        {
          image: img3,
          name: 'Application ',
          link: '#',
        },
        {
          image: img4,
          name: 'Funding',
          link: '#',
        },
        {
          image: img5,
          name: 'Visa',
          link: '#',
        },
        {
          image: img6,
          name: 'Travel and Stay',
          link: '#',
        },
        {
          image: img7,
          name: 'Post Degree',
          link: '#',
        },
    ]
  return (
    <div className='flex flex-row flex-wrap gap-4 justify-around items-center'>
        {data.map((item,index)=>(
            <Roundbtn key={index} {...item} />
        ))}
    </div>
  )
}

export default AllRndBtn
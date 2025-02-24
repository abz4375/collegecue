import React from 'react'
import AboutCollegecue from "./AboutCollegecue";
import WhatWeOffer from "./WhatWeOffer";
import AboutNews from "./AboutNews";

const About = () => {
  return (
    <>
      <div className='max-w-[1340px] my-20 mx-auto'>
        <AboutCollegecue/>
        <WhatWeOffer/>
        <AboutNews/>
      </div>
    </>
  )
}

export default About
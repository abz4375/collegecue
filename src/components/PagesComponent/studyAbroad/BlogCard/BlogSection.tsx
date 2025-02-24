import Studyabroadheading from '@/components/Heading/Studyabroadheading'
import React from 'react'
import AllRndBtn from './AllRndBtn'
import AllBlogCard from './AllBlogCard'

const BlogSection = () => {
  return (
    <div className='my-20'>
        <Studyabroadheading heading='Blog Section' />
        <AllRndBtn />
        <AllBlogCard />
    </div>
  )
}

export default BlogSection
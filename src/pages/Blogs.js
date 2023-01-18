import React from 'react'
 
// importing images
import nodemcu from '../images/nodmcu.png'
import openAI from '../images/openAI.webp'
import programming from '../images/programming.jpg'
import Internships from '../images/internships.jpg'

import {BlogComponenent} from './BlogComponent';

export const Blogs = () => {

    const BlogsContent =[
        {blogSrc:openAI,blogtext:'What is Chat GPT ? 10 things to know about Chat GPT in 2023 ',likes:'09',views:'130',date:'Jan 2023',duration:'5 mins'},
        {blogSrc:programming,blogtext:'How to start coding ? Guide to become best programmers by experts ',likes:'22',views:'132',date:'Dec 2022',duration:'3 mins'},
        {blogSrc:Internships,blogtext:'Important advices to get paid Internships in 2023  ? ',likes:'53',views:'156',date:'Nov 2022',duration:'7 mins'},
        {blogSrc:nodemcu,blogtext:'5 Intresting facts about Node MCU which will help you to make mini projects ? ',likes:'20',views:'182',date:'Aug 2022',duration:'10 mins'}
    ]
  return (
    <>
    <div className="Blogheading reveal" id="blog">
        <img src="https://img.icons8.com/fluency/80/000000/blog.png" alt="blogsicon" />
        <h2 className="HowerMe ">Most Recent Blogs</h2>
    </div>
    
    <div className='blogs reveal'>
    {BlogsContent.map(val =>{
        return <BlogComponenent key={val.date} {...val} />
    })}
    </div>

    <div className='viewBlogs'>
                View More
    </div>
    </>
  )
}

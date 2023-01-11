import React from 'react'


export const Blogs = () => {
  return (
<>
        <div className="Blogheading" id="blog">
            <img src="https://img.icons8.com/fluency/80/000000/blog.png" alt="blogsicon" />
            <h2 className="HowerMe ">Most Recent Blogs</h2>
        </div>
        <div className="blogs reveal">
            <div className="blog_representation">
                <div id="blog_img" className="blog_img">

                    <section className="few_Words"> <a href="#" target="_blank" id="blog1">
                        <h3>Few important things that you need to know about NodeMCU that can save your life ?</h3>
                    </a></section>
                </div>
            </div>

            <div className="blog_representation">
                <div id="blog_img2">
                    <section className="few_Words"> <a
                        href="https://github.com/Pursottam6003/Ekarigari/blob/main/assignment2/about_bci.md"
                        target="_blank" id="blog1">
                        <h3>What is BCU and how it is helping in Medical Science in Detecting Crimes and Diseases ?
                        </h3>
                    </a></section>
                </div>
            </div>
            <div className="blog_representation">
                <div id="blog_img3">

                    <section className="few_Words"> <a
                        href="https://github.com/Pursottam6003/Ekarigari/blob/main/assignment1/Lidar_blog.md"
                        target="_blank" id="blog1">
                        <h3> How Tesla Works ? what special behind the scenes of Sensors -Autonomous Cars ?</h3>
                    </a></section>
                </div>
            </div>
        </div>
        <a href="./blog.html"><button type="button" className="viewBlogs">View More</button></a>
        <br />

        <br />
    </>
  )
}

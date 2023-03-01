import "./style.css"
// import "./index.css"
import { Hero } from "./pages/Hero"
import { Blogs } from "./pages/Blogs"
import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"
import { Experience } from "./pages/Experience"
import CodingProfile from "./pages/CodingProfile"
import {Hobbies} from "./pages/Hobbies"
import { Achivements } from "./pages/Achivements"
import { Contact } from "./pages/Contact"
import { Footer } from "./pages/Footer"
import Education from "./pages/Education"

import React from "react"
export default function App() {
    let mybody = document.getElementById('mybody');
    function reveal()
    {
        var reveals=document.querySelectorAll(".reveal");
        // it selects all the elements with .reveal class and simply togles the opticity
        for(var i=0;i<reveals.length;i++)
        {   // to get height
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible=150;
            if(elementTop < windowHeight - elementVisible){
                // toggling the css property by changing the class
                reveals[i].classList.add("active");   
            }
            else {
                reveals[i].classList.remove("active"); 
            }
        }
    }
    window.addEventListener("scroll",reveal);
    return (

        <div id="mybody">
            <Hero/>
            <Education/>
            <CodingProfile/>
            <Blogs/>
            <Skills/>
            <Hobbies/>
            <Projects/>
            <Experience/>
            <Achivements/>
            <Contact/>
            <Footer/>
        </div>
    )
}
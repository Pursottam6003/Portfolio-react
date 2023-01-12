import "./style.css"
import { Hero } from "./pages/Hero"
import { Blogs } from "./pages/Blogs"
import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"
import { Experience } from "./pages/Experience"
import { Achivements } from "./pages/Achivements"
import { Contact } from "./pages/Contact"
import { Footer } from "./pages/Footer"
import CardComponent from "./pages/CardComponent"
import {React,useState,useEffect} from "react"
export default function App() {
    const [whatIAm, setWhatIAm] = useState("software Developer");
    const whomi =['Music Lover','Tech Geek','Programmer','Enterpreneur','Coder']
    let i = 0;

    useEffect(() => {
        setInterval(() => {
            setWhatIAm(whomi[i]);
            i = (i+1) % whomi.length
        }, 3000);
     
    },[])

    let mybody = document.getElementById('mybody');

    function loading() {
        console.log('inside the load');
    
        mybody.style.display = 'block';
        window.onscroll = function () { window.scrollTo(0, 0); };
        setTimeout(function () {

            window.onscroll = 'enabled';

        }, 1100);
    }

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
            <Blogs/>
            <Skills/>
            {/* <Projects/> */}
            <CardComponent/>
            <Experience/>
            <Achivements/>
            <Contact/>
            <Footer/>
        </div>
    )
}
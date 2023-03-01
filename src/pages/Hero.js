import {React,useState,useEffect} from 'react'
import welcome from "../images/welcome.svg"
import Namaste from '../images/namaste.webp'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import FullImage from '../images/image.jpg'
import Resume from "../offerLetters/Pursottam.pdf"
import Profile from '../images/Profile.png'

export const Hero = () => {
    const [whatIAm, setWhatIAm] = useState("software Developer");
    const whomi =['Music Lover','Tech Geek','Programmer','Enterpreneur','Coder']
    let i = 0; 

    useEffect(() => {
        setInterval(() => {
            setWhatIAm(whomi[i]);
            i = (i+1) % whomi.length
        }, 3000);
     
    },[])

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
    <>       
        <div className="container" id="home">
            <div>
                <div className="image">
                    <img src={Profile} alt="img" id="profile" />
                </div>

                <div className="description">
                <h2 className="name">Pursottam Sah</h2>

                <a href="https://www.github.com/Pursottam6003" aria-label="github" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24"
                        transform="translate(9,0)" >
                        <path
                            d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z">

                        </path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/pursottam-sah-78aa4a1bb/" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" id="" x="0px" y="0px" width="25" height="25" viewBox="0 0 45 45"
                        transform="translate(16,0)" style={{ fill: "var(--varln)" }}>
                        <path
                            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z">
                        </path>
                    </svg>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100034293845796" aria-label="fb" rel="noopener noreferrer" target="_blank">

                    <img src={Facebook} width="25px" height="25px" alt="fb" id="facebook" />

                </a>
                <a href="https://www.instagram.com/rahulsah6003/" aria-label="insta" target="_blank" rel="noopener noreferrer">

                    <img src={Instagram} width="25px" height="25px" alt="insta" id="insta" />

                </a>
                {/* <p className="designation">I am <span id="p1" >{whatIAm}</span></p> */}
                <div className="Polyheadings">
                
                <div className="wrapper">
                    <div className="static-txt"> I am</div>
                        <ul className="dynamic-txts">
                            <li><span>Youtuber</span></li>
                            <li><span>Designer</span></li>
                            <li><span>Freelancer</span></li>
                            <li><span>Programmer</span></li> 
                        </ul>
                    </div>
                </div>
            </div>
            </div>

            <div>
                <img src={welcome} alt="welcome" className="weclome" id="welcome" />
            </div>

            <div className="NamasteImg">
                <img src={Namaste} alt="namaste" id="namaste" />
            </div>

            
        </div>

        <ul className="navigationbar">
            <li className="navigation_hover"><a href="#home" aria-label="home">Home</a></li>
            <li className="navigation_hover"><a href="#about" aria-label="about">About</a></li>
            <li className="navigation_hover"><a href="#myprojects" aria-label="projects">Projects</a></li>
            <li className="navigation_hover"><a href="#myexperience">Experience</a></li>
            <li className="navigation_hover"><a href="#blog">Blogs</a></li>
            <li className="navigation_hover"><a href="#contact">Contact us</a></li>
        </ul>


        <ul className="mobilenav">
            <li id="HomeNav">
                <a href="#home">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>Home</title>
                        <linearGradient id="jv689zNUBazMNK6AOyXtga_wFfu6zXx15Yk_gr1" x1="6" x2="42" y1="41" y2="41"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#c8d3de"></stop>
                            <stop offset="1" stopColor="#c8d3de"></stop>
                        </linearGradient>
                        <path fill="url(#jv689zNUBazMNK6AOyXtga_wFfu6zXx15Yk_gr1)"
                            d="M42,39H6v2c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V39z"></path>
                        <linearGradient id="jv689zNUBazMNK6AOyXtgb_wFfu6zXx15Yk_gr2" x1="14.095" x2="31.385" y1="10.338"
                            y2="43.787" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#fcfcfc"></stop>
                            <stop offset=".495" stopColor="#f4f4f4"></stop>
                            <stop offset=".946" stopColor="#e8e8e8"></stop>
                            <stop offset="1" stopColor="#e8e8e8"></stop>
                        </linearGradient>
                        <path fill="url(#jv689zNUBazMNK6AOyXtgb_wFfu6zXx15Yk_gr2)" d="M42,39H6V20L24,3l18,17V39z"></path>
                        <path fill="#de490d" d="M13,25h10c0.552,0,1,0.448,1,1v17H12V26C12,25.448,12.448,25,13,25z"></path>
                        <path
                            d="M24,4c-0.474,0-0.948,0.168-1.326,0.503l-5.359,4.811L6,20v5.39L24,9.428L42,25.39V20L30.685,9.314	l-5.359-4.811C24.948,4.168,24.474,4,24,4z"
                            opacity=".05"></path>
                        <path
                            d="M24,3c-0.474,0-0.948,0.167-1.326,0.5l-5.359,4.784L6,18.909v5.359L24,8.397l18,15.871v-5.359	L30.685,8.284L25.326,3.5C24.948,3.167,24.474,3,24,3z"
                            opacity=".07"></path>
                        <linearGradient id="jv689zNUBazMNK6AOyXtgc_wFfu6zXx15Yk_gr3" x1="24" x2="24" y1="1.684" y2="23.696"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#d43a02"></stop>
                            <stop offset="1" stopColor="#b9360c"></stop>
                        </linearGradient>
                        <path fill="url(#jv689zNUBazMNK6AOyXtgc_wFfu6zXx15Yk_gr3)"
                            d="M44.495,19.507L25.326,2.503C24.948,2.168,24.474,2,24,2s-0.948,0.168-1.326,0.503	L3.505,19.507c-0.42,0.374-0.449,1.02-0.064,1.43l1.636,1.745c0.369,0.394,0.984,0.424,1.39,0.067L24,7.428L41.533,22.75	c0.405,0.356,1.021,0.327,1.39-0.067l1.636-1.745C44.944,20.527,44.915,19.881,44.495,19.507z">
                        </path>
                        <linearGradient id="jv689zNUBazMNK6AOyXtgd_wFfu6zXx15Yk_gr4" x1="28.05" x2="35.614" y1="25.05"
                            y2="32.614" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#33bef0"></stop>
                            <stop offset="1" stopColor="#0a85d9"></stop>
                        </linearGradient>
                        <path fill="url(#jv689zNUBazMNK6AOyXtgd_wFfu6zXx15Yk_gr4)"
                            d="M29,25h6c0.552,0,1,0.448,1,1v6c0,0.552-0.448,1-1,1h-6c-0.552,0-1-0.448-1-1v-6	C28,25.448,28.448,25,29,25z">
                        </path>
                    </svg>
                </a>
            </li>

            <li>
                <a href="#about">
                    <img src="https://img.icons8.com/office/30/000000/about-us-male--v2.png" alt="about" />
                </a>
            </li>

            <li>
                <a href="#myprojects">
                    <img src="https://img.icons8.com/external-itim2101-flat-itim2101/30/000000/external-clipboard-project-management-itim2101-flat-itim2101.png"
                        alt="myproject" />
                </a>
            </li>

            <li>
                <a href="#myexperience">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>Experiences</title>
                        <path fill="#FFF59D" d="M24 2A20 20 0 1 0 24 42A20 20 0 1 0 24 2Z"></path>
                        <path fill="#FBC02D"
                            d="M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z">
                        </path>
                        <path fill="#FFF59D"
                            d="M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z">
                        </path>
                        <path fill="#5C6BC0" d="M24 41A3 3 0 1 0 24 47A3 3 0 1 0 24 41Z"></path>
                        <path fill="#9FA8DA" d="M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"></path>
                        <path fill="#5C6BC0"
                            d="M30 41l-11.6 1.6c.3.7.9 1.4 1.6 1.8l9.4-1.3C29.8 42.5 30 41.8 30 41zM18 38.7L18 40.7 30 39 30 37z">
                        </path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="#blog">
                    <img src="https://img.icons8.com/fluency/30/000000/blog.png" alt="blog_nav" />
                </a>
            </li>

            <li>
                <a href="#contact">
                    <img src="https://img.icons8.com/color/30/000000/contact-card.png" alt="contact" />
                </a>
            </li>

        </ul>
        <div className="IntroSection">
            <p className="first">HI THERE 👋</p>
            <h2 className="name">I'AM <span id="myname">PURSOTTAM SAH</span></h2>
            <div className="detailsinfo">
                <p><strong>I am a</strong> Prefinal-Year <strong>Computer Science UG Student</strong> from <strong><a
                    href="http://nitap.ac.in/" target="_blank" rel="noopener noreferrer">NIT Arunachal Pradesh</a></strong> I am
                    currently exploring all the fields of Computer Science Such as <strong>Web Development,App
                        Development,Competitive Programming , Machine Learning etc </strong>
                    <strong>I am interested</strong> in working in the progressive environment that is <strong>Open
                        Source Development.</strong> I am a <strong>team player</strong> and proactive while working in
                    a <strong>cooperative environment.</strong>
                </p>
                <div className="buttons">
                    <a href="#myprojects"><button id="mycv">My Project</button></a>
                    <a href="#about" className="scrollDown"></a>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <button id="resume">Resume</button>
                    </a>
                </div>
            </div>
        </div>

        {/* <div className="animationBox">
            Hello!
        </div> */}
        <div className="About" id="about">
            <img src="https://img.icons8.com/bubbles/50/000000/administrator-male.png" alt="about" />
            <h2 className="HowerMe">About Me</h2>

            <div className="imageAbout reveal">
                <img src={FullImage} width="270px" height="auto" id="imageAbout" alt="About Pursottam " />
            </div>
            <article className="reveal">
                Hello! My name is <strong>Pursottam Sah</strong> and I am from <strong>Assam, India.</strong>I am a
                Computer Science Undergraduate student at <strong>NIT Arunachal Pradesh, </strong>graduating in 2024.
        
                Working as an <strong>intern</strong> in the field of <strong>open source development</strong> would be interesting to me. By doing so, I will have the <strong>opportunity</strong> to develop my technical skills and gain a better understanding of the <strong>work culture</strong> at a company or organization.
                <br/>
                 Traveling, eating traditional, delicious foods, and understanding an area's traditional culture are some of my favorite hobbies. At times, I've even attempted to speak their language.
            </article>
            <br />
        </div>
        <br />
        <br />
    
    </>
  )
}

import "./style.css"
import Profile from "./images/Profile.png"
import welcome from "./images/welcome.svg"
import Namaste from './images/namaste.webp'
import Facebook from './images/facebook.svg'
import Instagram from './images/instagram.svg'
import FullImage from './images/Full.png'
import Hobby from './images/daily-tasks.png'

import Calculator from './images/calculator.webp'
import DesktopAssistent from './images/assistent.png'
import BakewithLove from './images/comming_soon.webp'
import Encourager from './images/Discord-bot.png'
import ToDoList from './images/todolist.webp'
import TypingGame from './images/typingmbl.png'
import BankManagement from './images/bank.png'
import RockPaperScissor from './images/rock_paper_ssr.webp'
import GCloud from './images/googlecloud.webp'

import Jquerry from './images/jquery.svg'
import php from './images/php.svg'


import Book from './images/book.png'
import Kickstart from './images/google_kickstart.png'
import hashcode from './images/google_hashcode.png'
import YuvaHackathon from './images/yuva_innovation.png'
import Snakedown from './images/snakdown.png'
import TopGrade from './images/top_grade.png'
import Falicitation from './images/laptop_fallitation.jpeg'
import Bye from './images/bye.svg'

export default function App() {
    return (

        <div>
            <div className="container" id="home">
                <div className="image">
                    <img src={Profile} alt="img" id="profile" />
                </div>
                <img src={welcome} alt="welcomeImg" className="weclome" id="welcome" />
                <span className="namasteimg">
                    <img src={Namaste} alt="img" id="namaste" />
                </span>

                <div className="description">
                    <h2 className="name">Pursottam Sah</h2>

                    <a href="https://www.github.com/Pursottam6003" aria-label="github" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24"
                            transform="translate(9,0)" style={{ fill: "#000000" }}>
                            <path
                                d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z">

                            </path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/pursottam-sah-78aa4a1bb/" aria-label="linkedin" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" id="" x="0px" y="0px" width="25" height="25" viewBox="0 0 45 45"
                            transform="translate(16,0)" style={{ fill: "var(--varln)" }}>
                            <path
                                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z">
                            </path>
                        </svg>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100034293845796" aria-label="fb" target="_blank">

                        <img src={Facebook} width="25px" height="25px" alt="fb" id="facebook" />

                    </a>
                    <a href="https://www.instagram.com/rahulsah6003/" aria-label="insta" target="_blank">

                        <img src={Instagram} width="25px" height="25px" alt="insta" id="insta" />

                    </a>
                    <p className="position">I am <span id="p1"></span></p>
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

            <div className="mainbody">
                <p className="first">HI THERE 👋</p>
                <h2 className="name">I'AM <span id="myname">PURSOTTAM SAH</span></h2>
                <div className="detailsinfo">
                    <p><strong>I am a</strong> Prefinal-Year <strong>Computer Science UG Student</strong> from <strong><a
                        href="http://nitap.ac.in/" target="_blank">NIT Arunachal Pradesh</a></strong> I am
                        currently exploring all the fields of Computer Science Such as <strong>Web Development,App
                            Development,Competitive Programming , AI and ML etc</strong> Under the guidence of
                        <strong>Mentors and Educators</strong>.
                        <strong>I am interested</strong> in working in the progressive environment that is <strong>Open
                            Source Development.</strong> I am a <strong>team player</strong> and proactive while working in
                        a <strong>cooperative environment.</strong>
                    </p>
                    <div className="buttons">

                        <button id="mycv"><a href="#myprojects">My Project</a></button>
                        <button id="resume"><a href="./offerLetters/Pursottam's Resume.pdf"
                            target="_blank">Resume</a></button>

                    </div>
                </div>
            </div>

            <div className="content">
                Hello!
            </div>
            <div className="About" id="about">
                <img src="https://img.icons8.com/bubbles/50/000000/administrator-male.png" alt="about" />
                <h2 className="HowerMe">About Me</h2>

                <div className="imageAbout">
                    <img src={FullImage} width="auto" height="260px" id="imageAbout" alt="About Pursottam " />
                </div>
                <article className="reveal">
                    Hello! My name is <strong>Pursottam Sah</strong> and I am from <strong>Assam, India.</strong>I am a
                    Computer Science Undergraduate student at <strong>NIT Arunachal Pradesh,</strong>graduating in 2024.
                </article>
                <article className="reveal">
                    I am interested in open source development and would like to work as an <strong>intern </strong>to help
                    me develop my technical skills and understand the work culture of a company or organization. my hobbies
                    are travelling and eating traditional, delicious food and being able to understand the
                    <strong>traditional culture </strong>of a particular area. Sometimes I even try to speak their <strong>
                        local languages.</strong>
                </article>
                <br />


            </div>
            <br />
            <br />



            <div className="Blogheading" id="blog">
                <img src="https://img.icons8.com/fluency/80/000000/blog.png" alt="blogsicon" />
                <h2 className="HowerMe ">Most Recent Blogs</h2>
            </div>
            <div className="blogs">
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


            <div className="bound">My Skills</div>
            <div className="skills">

                <div className="skill" id="c">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>skills C</title>
                        <path fill="#283593" fillRule="evenodd"
                            d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                            clipRule="evenodd"></path>
                        <path fill="#5c6bc0" fillRule="evenodd"
                            d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                            clipRule="evenodd"></path>
                        <path fill="#fff" fillRule="evenodd"
                            d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                            clipRule="evenodd"></path>
                        <path fill="#3949ab" fillRule="evenodd"
                            d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>


                <div className="skill" id="cpp">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>Home cpp</title>
                        <path fill="#00549d" fillRule="evenodd"
                            d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                            clipRule="evenodd"></path>
                        <path fill="#0086d4" fillRule="evenodd"
                            d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                            clipRule="evenodd"></path>
                        <path fill="#fff" fillRule="evenodd"
                            d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                            clipRule="evenodd"></path>
                        <path fill="#0075c0" fillRule="evenodd"
                            d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                            clipRule="evenodd"></path>
                        <path fill="#fff" fillRule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clipRule="evenodd">
                        </path>
                        <path fill="#fff" fillRule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clipRule="evenodd">
                        </path>
                    </svg>
                </div>

                <div className="skill" id="html">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>html skills</title>
                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                        <path fill="#FFF"
                            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                        <path fill="#EEE"
                            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z">
                        </path>
                    </svg>
                </div>

                <div className="skill" id="css">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>skills css</title>
                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                        <path fill="#FFF"
                            d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z">
                        </path>
                        <path fill="#EEE"
                            d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z">
                        </path>
                    </svg>
                </div>
                <div className="skill" id="javascirpt">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>skills javascirpt</title>
                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                        <path fill="#000001"
                            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z">
                        </path>
                    </svg>
                </div>

                <div className="skill" id="java">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>java skills</title>
                        <path fill="#F44336"
                            d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z">
                        </path>
                        <path fill="#F44336"
                            d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z">
                        </path>
                        <g>
                            <path fill="#1565C0"
                                d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z">
                            </path>
                            <path fill="#1565C0"
                                d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z">
                            </path>
                            <path fill="#1565C0"
                                d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z">
                            </path>
                            <path fill="#1565C0"
                                d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z">
                            </path>
                            <path fill="#1565C0"
                                d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z">
                            </path>
                        </g>
                    </svg>
                </div>


                <div className="skill" id="python">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>skills python</title>
                        <path fill="#0277BD"
                            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z">
                        </path>
                        <path fill="#FFC107"
                            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z">
                        </path>
                    </svg>
                </div>

                <div className="php">
                    <img src={php} aria-label="php" id="php" alt="php" />
                </div>

                <div className="jquery">
                    <img src={Jquerry} alt="jqery" aria-label="jquery" id="jquery" />

                </div>
                <div className="skill" id="git">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"
                        style={{ fill: "#000000" }}>
                        <title>skills git</title>
                        <path fill="#F4511E"
                            d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z">
                        </path>
                    </svg>
                </div>

                <div className="skill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="32.163 68.509 203.691 228.155">
                        <path
                            d="M101.885 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24z"
                            fill="#a4c639" />
                        <path
                            d="M69.374 133.645c-.047.54-.088 1.086-.088 1.638v92.557c0 9.954 7.879 17.973 17.66 17.973h94.124c9.782 0 17.661-8.02 17.661-17.973v-92.557c0-.552-.02-1.1-.066-1.638H69.374z"
                            fill="#a4c639" />
                        <title>skills android</title>
                        <path
                            d="M166.133 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24zM46.405 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c-.001-7.865 6.375-14.242 14.241-14.242zM221.614 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c0-7.865 6.376-14.242 14.241-14.242zM69.79 127.565c.396-28.43 25.21-51.74 57.062-54.812h14.312c31.854 3.073 56.666 26.384 57.062 54.812H69.79z"
                            fill="#a4c639" />
                        <path d="M74.743 70.009l15.022 26.02M193.276 70.009l-15.023 26.02" fill="none" stroke="#a4c639"
                            strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M114.878 102.087c.012 3.974-3.277 7.205-7.347 7.216-4.068.01-7.376-3.202-7.388-7.176v-.04c-.011-3.975 3.278-7.205 7.347-7.216 4.068-.011 7.376 3.2 7.388 7.176v.04zM169.874 102.087c.012 3.974-3.277 7.205-7.347 7.216-4.068.01-7.376-3.202-7.388-7.176v-.04c-.011-3.975 3.278-7.205 7.347-7.216 4.068-.011 7.376 3.2 7.388 7.176v.04z"
                            fill="#fff" />
                    </svg>
                </div>


                <div className="skill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 282"
                        preserveAspectRatio="xMinYMin meet">
                        <title>skills nodejs</title>
                        <g fill="#8CC84B">
                            <path
                                d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                            <path
                                d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                        </g>
                    </svg>
                </div>

                <div className="skill">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                        <title>skills Angular</title>
                        <path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z" />
                        <path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z" />
                        <path fill="#dd2c00"
                            d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z" />
                        <path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z" />
                        <path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z" />
                        <path fill="#bdbdbd" d="M24 24H30V28H24z" />
                        <path fill="#eee" d="M18 24H24V28H18z" />
                    </svg>
                </div>

                <div className="skill">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                        <title>skills firebase</title>
                        <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z" />
                        <path fill="#ffa000"
                            d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z" />
                        <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z" />
                        <path fill="#ffc400"
                            d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z" />
                    </svg>
                </div>


            </div>
            <br />
            <br />


            <div className="hobbies">
                <h3 className="HowerMe">My Hobbies</h3>
                <img src={Hobby} style={{ width: "80px" }} alt="hobbies" />
            </div>

            <div className="hobbiesList">

                <div>
                    <img src="https://img.icons8.com/fluency/48/000000/listening-to-music-on-headphones.png" alt="music" />
                    <p className="hobbies_title">
                        Listening Music
                    </p>
                </div>
                <div>
                    <img src="https://img.icons8.com/fluency/48/000000/reading.png" alt="reading-books" />
                    <p className="hobbies_title">
                        Reading Novels
                    </p>

                </div>

                <div>
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/000000/external-photography-media-agency-flaticons-lineal-color-flat-icons-2.png"
                        alt="photography" />
                    <p className="hobbies_title">
                        Photography
                    </p>

                </div>

                <div>
                    <img src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/48/000000/external-discussion-home-office-photo3ideastudio-flat-photo3ideastudio.png"
                        alt="discussion-with friends" />

                    <p className="hobbies_title">
                        Discussion
                    </p>
                </div>

            </div>

            <div className="experience" id="myprojects">
                <img src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-project-project-management-itim2101-flat-itim2101-1.png"
                    id="projecticon" alt="exper" />
                <h2>My Projects</h2>
                <div className="ani">
                    <div className="bar"></div>
                </div>
                <br />
                <br />
                <br />
                <div className="learn">

                    <div className="exp">
                        <div className="imageexp6">
                            <a href="#" target="_blank"><img src={BakewithLove} alt="calculator img"
                                id="exp6" /></a>
                        </div>
                        <div className="info1">
                            <a href="#" target="_blank">
                                <h3>Upcomming Project</h3>
                            </a>
                            <p>⚡ Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse veritatis id voluptates
                                cupiditate quidem aliquid
                            </p>
                            <p>
                                ⚡Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint ab harum tempore placeat?
                            </p>
                            <a href="#"><button type="button" className="Readmore">Read More</button></a>

                            <br />
                        </div>
                    </div>


                    <div className="exp">
                        <div className="imageexp7">
                            <a href="https://github.com/Pursottam6003/Provoitus001-Desktop-Assistence-" target="_blank"><img
                                src={DesktopAssistent} alt="Desktop Assistent" id="exp7" /></a>
                        </div>
                        <div className="info1">
                            <a href="https://github.com/Pursottam6003/Provoitus001-Desktop-Assistence-" target="_blank">
                                <h4>Provitous-001 (Desktop Assistent)</h4>
                            </a>
                            <p>⚡ My Personal Virtual Desktop Assistent capable to perfoming all the daily tasks and helps in
                                saving precious time
                            </p>
                            <p>
                                ⚡It can perform tasks such as Opening/Closeing apps,schdule tasks,read news,read books,play
                                music bhajans etc
                            </p>
                            <a href="https://github.com/Pursottam6003/Provoitus001-Desktop-Assistence-"><button
                                type="button" className="Readmore">Read More</button></a>
                            <br />
                        </div>
                    </div>

                    <div className="exp">
                        <div className="imageexp8">
                            <a href="https://github.com/Pursottam6003/Discord-Bot-" target="_blank"><img
                                src={Encourager} alt="calculator img" id="exp8" /></a>
                        </div>
                        <div className="info1">
                            <a href="https://github.com/Pursottam6003/Discord-Bot-" target="_blank">
                                <h4>Encourager (Discord-Bot)</h4>
                            </a>
                            <p>⚡ It is a Discord Meme Bot designed for the School and College Students for having fun and
                                healthy communication.
                            </p>
                            <p>
                                ⚡ It Encourages users and on the basis of their chat keywords replies to them within the
                                server
                            </p>
                            <a href="https://github.com/Pursottam6003/Discord-Bot-"><button type="button"
                                className="Readmore">Read More</button></a>
                            <br />
                        </div>
                    </div>

                    <div className="exp">
                        <div className="imageexp1">
                            <a href="https://pursottam6003.github.io/project-internship/" target="_blank"><img
                                src={Calculator} alt="calculator img" id="exp1"
                                style={{ margin: "auto", display: "block" }} /></a>
                        </div>
                        <div className="info1">
                            <a href="https://pursottam6003.github.io/project-internship/" target="_blank">
                                <h4>Calculator</h4>
                            </a>
                            <p>⚡ A simple calculator created with the help of HTML, CSS
                                and JavaScript.
                            </p>
                            <p>
                                ⚡It can calculate up to 12 digits numbers and
                                perform basic operation like addition, subtraction, multiplication, division ,square
                                root,logrithemic calculation etc
                            </p>
                            <a href="https://pursottam6003.github.io/project-internship/"><button type="button"
                                className="Readmore">Read More</button></a>
                            <br />
                        </div>
                    </div>


                    <div className="exp">
                        <div className="imageexp2">
                            <a href="https://github.com/Pursottam6003/project-internship/tree/main/To-do-list"
                                target="_blank"><img src={ToDoList}  alt="image todolist" id="exp2" /></a>
                        </div>
                        <div className="info2">
                            <a href="https://github.com/Pursottam6003/project-internship/tree/main/To-do-list"
                                target="_blank">
                                <h4>To-Do-List</h4>
                            </a>
                            <p>⚡ Command Line intregrated Java Program implemented for To-do-list memo
                                application ,this can perform addition,removal and completion tasks
                                on the basis of priority given by user.
                            </p>
                            <p>
                                ⚡ Also it provides the status of tasks completed and whole record of
                                data can be stored into the CSV file.
                            </p>
                            <a href="https://github.com/Pursottam6003/project-internship/tree/main/To-do-list"><button
                                type="button" className="Readmore">Read More</button></a>
                            <br />
                        </div>
                    </div>


                    <div className="exp">
                        <div className="imageexp3">
                            <a href="https://pursottam6003.github.io/TypingGame/" target="_blank"><img
                                src={TypingGame} alt="image typing " id="exp3" /></a>
                        </div>
                        <div className="info3">
                            <a href="https://pursottam6003.github.io/TypingGame/" target="_blank">
                                <h4>Typing Game</h4>
                            </a>
                            <p>⚡ In this game, I had explored how events work in JavaScript. My game is going to test a
                                player's typing skill, which is one of
                                the most underrated skills all developers should have.
                            </p>
                            <p>
                                ⚡ Player types the quote as quickly as they can if the word is
                                correct then the next word will be highlighted.If wrong or mistake in typing it will show
                                error and at the end
                                show accuracy and time taken
                            </p>
                            <a href="https://pursottam6003.github.io/TypingGame/"><button type="button"
                                className="Readmore">Read More</button></a>
                            <br />
                        </div>

                    </div>

                    <div className="exp">
                        <div className="imageexp4">
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/bank_management.c"
                                target="_blank"><img src={BankManagement} alt="Bank Management" id="exp4" /></a>
                        </div>
                        <div className="info4">
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/bank_management.c"
                                target="_blank">
                                <h4>Bank Management</h4>
                            </a>
                            <p>⚡ This program is solely dedicated for bank employees for registration of people in a village
                                area.

                            </p>
                            <p>
                                ⚡ After registration if they got tired then the browser will open automatically and the
                                employee coould open Whats App,Instagram,Facebook,LinkdIn or Youtube and relax their leisure
                                time.
                            </p>
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/bank_management.c"><button
                                type="button" className="Readmore">Read More</button></a>
                        </div>
                    </div>

                    <div className="exp">
                        <div className="imageexp5">
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/Rock_ppr_ssr_game.c"
                                target="_blank"><img src={RockPaperScissor} alt="Bank Management"
                                    id="exp5" /></a>
                        </div>
                        <div className="info5">
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/Rock_ppr_ssr_game.c"
                                target="_blank">
                                <h4>Rock Paper Scissor</h4>
                            </a>
                            <p>⚡ This was my first project of my life 'The Rock-paper_scissor Game'.
                            </p>
                            <p>
                                ⚡ From nursury we are famaliar with this game and i had just implemented this game in C
                                Programming Language hope you all may like.
                            </p>
                            <a href="https://github.com/Pursottam6003/C-Programming--games/blob/main/Rock_ppr_ssr_game.c"><button
                                type="button" className="Readmore">Read More</button></a>
                        </div>
                    </div>
                </div>


            </div>

            <div className="Experience" id="myexperience">
                <img src="https://img.icons8.com/external-flat-geotatah/64/000000/external-development-customer-satisfaction-flat-flat-geotatah.png"
                    alt="exp" />
                {/* <h2 className="HowerMe">My Experiences</h2> */}

                <div className="resume-box">
                    <ul style={{ width: "fit-content", margin: "auto" }}>
                        <li className="">
                            <div className="icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <span className="time">July 2022 - Present </span>
                            <a href="https://ekarigari.in/">
                                <h2> Ekarigari Systems Pvt. Limited</h2>
                            </a>
                            <em>
                                <h3>Embeded System (IOT) and ML Trainee </h3>
                            </em>
                            <p>Currently learning IoT and embeded systems and thats helps in understanding core concepts of
                                electronics</p>
                            <a href="./offerLetters/offer_letter_ekarigari.pdf"><button type="button" className="Readmore">View
                                Offer Letter</button></a>
                        </li>

                        <li className="">
                            <div className="icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <span className="time">May 2022 - Present</span>
                            <a href="https://www.businesswebsolutions.in/">
                                <h2>Business Web Solutions Pvt. Limited</h2>
                            </a>
                            <em>
                                <h3>Full Stack Web Development Internship</h3>
                            </em>
                            <p>Become expert in HTML, CSS, and Javascript as well as in scripting languages Such as Python
                            </p>
                            <p>Dedicated to learning, growing and succeeding in MERN Stack Development in BWS</p>
                            <p>Designed implemented and monitored web pages and site for continuous development</p>
                            <a href="./offerLetters/offer_letter_bws.pdf"><button type="button" className="Readmore">View Offer
                                Letter</button></a>
                        </li>
                        <li className="">
                            <div className="icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <span className="time">June 2022 - July 2022</span>
                            <a href="https://www.linkedin.com/company/rebert-tech/about/">
                                <h2>REBERT Technologies Pvt. Limited</h2>
                            </a>
                            <em>
                                <h3>Full Stack Web Developer</h3>
                            </em>
                            <p>Working on the current project of the company ‘DoBuizz’ where my tasks was to first
                                understand the PHP codes </p>
                            <p>Update and modified the admin panel using Javascript functions and fetch the data from
                                Firebase Realtime Database</p>
                            <p> Performed crude operations such as insert,update, delete and displaying the data in Charts ,
                                tables and graphs.</p>
                            <a href="./offerLetters/offer_letter_rebert.pdf"><button type="button" className="Readmore">View
                                Offer Letter</button></a>
                        </li>

                        <li className="">
                            <div className="icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <span className="time">June 2022 - July 2022</span>
                            <a href="http://tathastu.twowaits.in/">
                                <h2>Tathastu Schlors Twowaits</h2>
                            </a>
                            <em>
                                <h3> MERN Stack Trainee</h3>
                            </em>
                            <p>Understood the core concepts of JavaScript and wrote a mini book for students who want to
                                learn Js from scratch </p>
                            <p>Created the Responsive Website using ReactJs and Hosted in the Heroku Platform. </p>
                            <a href="./offerLetters/offer_tathastu.pdf"><button type="button" className="Readmore">View Offer
                                Letter</button></a>
                        </li>
                    </ul>
                </div>

                <h3><a href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125"
                    target="_blank">Google Cloud</a></h3>
                <div className="googlecld">
                    <img src={GCloud} alt="google cloud" id="gcloud" />
                    <p><a href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125"
                        target="_blank">Completed 30 days of Google Cloud Challenge</a></p>
                </div>

                <div className="googlecloud">

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1512645"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge1"
                                src="https://cdn.qwiklabs.com/W0dgzE99xnSKAISSMzB5oc26LS0%2Bovkh0%2B6SrIdp6BI%3D" />
                        </a>
                    </div>

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1509278"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge2"
                                src="https://cdn.qwiklabs.com/i3kI5DADfu8XoQguEoj60FKhmKUmshuiSpVjQMNX9tU%3D" />
                        </a>
                    </div>

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1508188"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge4"
                                src="https://cdn.qwiklabs.com/s2t82amH27Mnb3nUGyvX3PCjz2hPNAAAuy0GGcSUw0o%3D" />
                        </a>
                    </div>

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1505328"
                            aria-label="gclouds-bages" target="_blank"><img alt="badge image" id="badge5"
                                src="https://cdn.qwiklabs.com/Iq6U5qCbrNP0GYjuu3ekilm6w80lPQby%2Be3g4FTAvYw%3D" />
                        </a>
                    </div>
                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1505109"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge6"
                                src="https://cdn.qwiklabs.com/nfpOK9orYE%2BYPBPDaK0OaqsYrl%2Bd8P65%2BuHEM30w6Lc%3D" />
                        </a>
                    </div>

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1500144"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge7"
                                src="https://cdn.qwiklabs.com/07kUwYDVqqrkI1U8YT6HnUqEu2BPap32XKmsObf%2Fr%2FE%3D" />
                        </a>
                    </div>

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1494961"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge8"
                                src="https://cdn.qwiklabs.com/6eEz754j8yLZkBHs0rDYncK6C9USCmW761FhA67hPpY%3D" />
                        </a>
                    </div>

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1488764"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge9"
                                src="https://cdn.qwiklabs.com/xRWHjfezxRYadqVWMp%2F11IJEF3%2BalOKZ2lozMw0AP0I%3D" />
                        </a>
                    </div>

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1487771"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge10"
                                src="https://cdn.qwiklabs.com/znmkTJlD25IshOEeMHKbJMDATKxt6dHxSh9F9ya0lkQ%3D" />
                        </a>
                    </div>

                    <div className="badge">
                        <a className="badge-image"
                            href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1477210"
                            aria-label="gclouds-badges" target="_blank"><img alt="badge image" id="badge11"
                                src="https://cdn.qwiklabs.com/UZLH%2F8n0ULT4OYJPQtS7VD3jfhrtOneTgbB6P5BNrUM%3D" />
                        </a>
                    </div>
                </div>

                <div className="ex2">
                    <h2>HackerRank</h2>
                    <div className="hackerank">
                        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png"
                            alt="logo" />

                        <a href="https://www.hackerrank.com/rahulsah6003?hr_r=1" target="_blank" aria-label="hacker-badges">
                            <h1>HackerRank Practice Skill Badges</h1>
                        </a>
                    </div>

                    <div className="badges">
                        <div className="badge1">
                            <a href="https://www.hackerrank.com/rahulsah6003?hr_r=1" target="_blank"
                                aria-label="hacker-badges">

                                <div className="hbadge-gold">

                                    <svg viewBox="0 0 91.66667 100" className="hexagon has-shadow">
                                        <g>
                                            <defs>
                                                <linearGradient id="badge-gold-gradient" x1="52.5" y1="2.5" x2="52.5"
                                                    y2="102.5" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="#f9d641"></stop>
                                                    <stop offset="1" stopColor="#f8bc36"></stop>
                                                </linearGradient>
                                            </defs>
                                            <path fill="url(#badge-gold-gradient)"
                                                d="M98.28277,47.36h0c-.18459-9.382-.87983-17.797-2.0917-19.8595-1.02214-1.742-6.1721-5.43476-12.6195-9.45853L66.3804,8.23311C59.94162,4.89541,54.4699,2.5,52.49778,2.5c-2.42987,0-10.17687,3.63131-18.49789,8.18049-6.30411,3.44623-12.9328,7.41557-17.83631,10.74623-3.85037,2.61278-6.63864,4.828-7.35893,6.07393-.73574,1.27216-1.28014,4.91124-1.63613,9.67794l-.00014-.00008c-.45195,6.03951-.599,13.88935-.43933,21.10033.20233,9.11082.89243,17.18541,2.07561,19.22049C11.66541,82.42328,46.78277,102.5,52.49778,102.5c2.374,0,9.82245-3.47115,17.92388-7.87722,6.4-3.48081,13.19866-7.5418,18.23618-10.9459l-.00046-.00026c3.93694-2.6605,6.80064-4.91944,7.53385-6.17728.72907-1.2482,1.27024-4.80557,1.62881-9.48065l-.00014-.00008C98.269,62.13222,98.42408,54.47227,98.28277,47.36Z"
                                                transform="translate(-6.66667 -2.5)"></path>
                                        </g>
                                        <image className="badge-icon"
                                            href="https://hrcdn.net/community-frontend/assets/badges/problem-solving-ecaf59a612.svg"
                                            x="50%" y="22" height="27" width="27" transform="translate(-13.5, 0)"></image>
                                        <text className="badge-title" x="20%" y="65.5" fontSize="10">Problem Solving</text>
                                        <g className="star-section" transform="translate(-21.5, 0)"><svg x="50%" y="71"
                                            height="10"><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="0">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7" x="9">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="18">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="27">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="36">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg></svg></g>
                                    </svg>

                                </div>
                                <div className="rectangle3-gold">
                                </div>
                            </a>
                        </div>

                        <div className="badge2">
                            <a href="https://www.hackerrank.com/rahulsah6003?hr_r=1" target="_blank"
                                aria-label="hacker-badges">


                                <div className="rectangel">
                                </div>

                                <div className="hbadge">

                                    <svg viewBox="0 0 91.66667 100" className="hexagon">
                                        <g>
                                            <defs>
                                                <linearGradient id="bdg2" x1="52.5" y1="2.5" x2="52.5" y2="102.5"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="#cee3eb"></stop>
                                                    <stop offset="1" stopColor="#aec8c7"></stop>
                                                </linearGradient>
                                            </defs>
                                            <path fill="url(#badge-silver-gradient)"
                                                d="M98.28277,47.36h0c-.18459-9.382-.87983-17.797-2.0917-19.8595-1.02214-1.742-6.1721-5.43476-12.6195-9.45853L66.3804,8.23311C59.94162,4.89541,54.4699,2.5,52.49778,2.5c-2.42987,0-10.17687,3.63131-18.49789,8.18049-6.30411,3.44623-12.9328,7.41557-17.83631,10.74623-3.85037,2.61278-6.63864,4.828-7.35893,6.07393-.73574,1.27216-1.28014,4.91124-1.63613,9.67794l-.00014-.00008c-.45195,6.03951-.599,13.88935-.43933,21.10033.20233,9.11082.89243,17.18541,2.07561,19.22049C11.66541,82.42328,46.78277,102.5,52.49778,102.5c2.374,0,9.82245-3.47115,17.92388-7.87722,6.4-3.48081,13.19866-7.5418,18.23618-10.9459l-.00046-.00026c3.93694-2.6605,6.80064-4.91944,7.53385-6.17728.72907-1.2482,1.27024-4.80557,1.62881-9.48065l-.00014-.00008C98.269,62.13222,98.42408,54.47227,98.28277,47.36Z"
                                                transform="translate(-6.66667 -2.5)"></path>
                                        </g>
                                        <image className="badge-icon"
                                            href="https://hrcdn.net/community-frontend/assets/badges/python-f70befd824.svg"
                                            x="50%" y="10" height="27" width="27" transform="translate(-13.5, 0)"></image>
                                        <text className="badge-title" x="33%" y="50.5" fontSize="12">Python</text>
                                        <g className="star-section" transform="translate(-12.5, 0)"><svg x="50%" y="57"
                                            height="10"><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="0">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7" x="9">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="18">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg></svg></g>
                                    </svg>

                                </div>

                                <div className="rectangle3">
                                </div>
                            </a>
                        </div>

                        <div className="badge3">
                            <a href="https://www.hackerrank.com/rahulsah6003?hr_r=1" target="_blank"
                                aria-label="hacker-badges">


                                <div className="rectangel">
                                </div>

                                <div className="hbadge">

                                    <svg viewBox="0 0 91.66667 100" className="hexagon">
                                        <g>
                                            <defs>
                                                <linearGradient id="bdg3" x1="52.5" y1="2.5" x2="52.5" y2="102.5"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stopColor="#cee3eb"></stop>
                                                    <stop offset="1" stopColor="#aec8c7"></stop>
                                                </linearGradient>
                                            </defs>
                                            <path fill="url(#badge-silver-gradient)"
                                                d="M98.28277,47.36h0c-.18459-9.382-.87983-17.797-2.0917-19.8595-1.02214-1.742-6.1721-5.43476-12.6195-9.45853L66.3804,8.23311C59.94162,4.89541,54.4699,2.5,52.49778,2.5c-2.42987,0-10.17687,3.63131-18.49789,8.18049-6.30411,3.44623-12.9328,7.41557-17.83631,10.74623-3.85037,2.61278-6.63864,4.828-7.35893,6.07393-.73574,1.27216-1.28014,4.91124-1.63613,9.67794l-.00014-.00008c-.45195,6.03951-.599,13.88935-.43933,21.10033.20233,9.11082.89243,17.18541,2.07561,19.22049C11.66541,82.42328,46.78277,102.5,52.49778,102.5c2.374,0,9.82245-3.47115,17.92388-7.87722,6.4-3.48081,13.19866-7.5418,18.23618-10.9459l-.00046-.00026c3.93694-2.6605,6.80064-4.91944,7.53385-6.17728.72907-1.2482,1.27024-4.80557,1.62881-9.48065l-.00014-.00008C98.269,62.13222,98.42408,54.47227,98.28277,47.36Z"
                                                transform="translate(-6.66667 -2.5)"></path>
                                        </g>
                                        <image className="badge-icon"
                                            href="https://hrcdn.net/community-frontend/assets/badges/c-d1985901e6.svg"
                                            x="50%" y="8" height="27" width="27" transform="translate(-13.5, 0)"></image>
                                        <text className="badge-title" x="27%" y="47.5" fontSize="10">C language</text>
                                        <g className="star-section" transform="translate(-17, 0)"><svg x="50%" y="51"
                                            height="10"><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="0">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7" x="9">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="18">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg><svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                                x="27">
                                                <path className="star"
                                                    d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                    transform="translate(-49.22548 -74.85817)"></path>
                                            </svg></svg></g>
                                    </svg>

                                </div>

                                <div className="rectangle3">
                                </div>
                            </a>
                        </div>


                    </div>
                </div>
                <div className="ex3">
                    <div className="ncc">
                        <br />
                        <br />
                        <h4>Developing official website for NCC NIT Arunachal Pradesh</h4>

                        <a href="https://daknya.github.io/ncc-nit-ap/index.html" target="_blank" aria-label="ncc"></a>
                        <img className="emblem state-emb" id="logo"
                            src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020010996.png"
                            alt="logo" />

                        <div className="kingster-logo kingster-item-pdlr">
                            <div className="">
                                <a className="" href="https://www.nitap.ac.in/index.php" target="_blank"><img
                                    src="https://www.nitap.ac.in/assets/images/mobile.png" aria-label="sbadges"
                                    alt="" /></a>
                            </div>
                        </div>
                        <h3>Role : Front End and Designing Part along with 5 members of Web Development Team</h3>
                        <br />
                        <br />
                    </div>

                </div>
            </div>

            <div className="Achievement">
                <h2>Achievements and Certifications</h2>
                <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/000000/external-achievements-recruitment-agency-flaticons-flat-flat-icons.png" alt="trophy_achievements" />
                <div className="achiementsList">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>JavaScript from Basics to Advance</h2>
                                <p> • Wrote the First Book of My Life</p>
                                <p> • Covered topics of js upto React.js</p>
                                <p> • 2k Views on linkedin in first 24 hrs</p>
                            </div>
                            <div className="flip-card-back">
                                <img src={Book} alt="certificate" style={{ width: "auto", height: "250px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>Participated in Google KickStart 2022 Round C</h2>
                                <p> • Solved 1 questions during the contest</p>
                                <p> • Upsolved 3 questions during practice rounds</p>
                                <p> • Secured the Global rank: 10292 </p>

                            </div>
                            <div className="flip-card-back">
                                <img src={Kickstart} alt="certificate"
                                    style={{ width: "auto", height: "250px" }} />
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>Participated in Google Hashcode 2022 </h2>
                                <p> • Participated in a Team as a Team-Leader</p>
                                <p> • Team Members : Chandrashekhar Tripathi and Hash Tiwari</p>
                                <p> • Our Team secured the rank of 5023/ 10K teams</p>

                            </div>
                            <div className="flip-card-back">
                                <img src={hashcode} alt="certificate"
                                    style={{ width: "auto", height: "250px" }} />
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>Participated in Yuva Innovation Hakathon 2021 </h2>
                                <p> • It was my first Hakathon </p>
                                <p> • Domain of work: security and survillence</p>
                                <p> • Survived upto the 3rd Round of Hakathon</p>

                            </div>
                            <div className="flip-card-back">
                                <img src={YuvaHackathon} alt="certificate"
                                    style={{ width: "auto", height: "250px" }} />
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>Participated in Codechef Snakedown 2021 </h2>
                                <p> • Reached upto the 2rd elimination Round B of contest</p>
                                <p> • Really learnt a lot from this competition</p>


                            </div>
                            <div className="flip-card-back">
                                <img src={Snakedown} alt="certificate" style={{ width: "auto", height: "250px" }} />
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>Secured the 3rd rank in 1st year in Academics</h2>
                                <p> • Top CGPA from Mechaical+Civil+CSE (Group B) </p>
                                <p> • Changed the Branch from Mechanical Engineering to Computer Science</p>


                            </div>
                            <div className="flip-card-back">
                                <img src={TopGrade}  alt="certificate" style={{ width: "auto", height: "250px" }} />
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>Fallicitation from Govt Of Arunachal Pradesh</h2>
                                <p> • Secured 1st rank in District class 10(CBSE) </p>
                                <p> • Secured top 9th rank in State Board (AISSE)</p>
                                <p> • Recieved a hp Laptop in class 12 for outstanding performance</p>
                            </div>
                            <div className="flip-card-back">
                                <img src={Falicitation} alt="certificate"
                                    style={{ width: "auto", height: "250px" }} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <br />
            <br />
            <br />



            <div className="contact" id="contact">
                <div className="futureDetails">
                    <h2 className="HowerMe">Get a quote <img
                        src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-contact-us-contact-and-message-itim2101-flat-itim2101-1.png"
                        alt="contact" />
                    </h2>

                    <p>Fill up the form and we will get back to you within 24 hours</p>
                    <br />

                    <br />
                    <img src="https://img.icons8.com/fluency/24/000000/phone.png" aria-label="contact" alt="contact" />
                    82590 53265
                    <br />
                    <img src="https://img.icons8.com/fluency/24/000000/email-open.png" aria-label="mail" alt="mail" />
                    rahulsah6003@gmail.com
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="24" viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}>
                        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                            strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                            fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                            style={{ mixBlendMode: "normal" }}>
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#3498db">
                                <path
                                    d="M86,3.44c-30.34187,0 -55.04,24.69813 -55.04,55.04c0,48.54969 50.32344,106.45188 52.46,108.8975c0.65844,0.7525 1.58563,1.1825 2.58,1.1825c1.06156,-0.06719 1.92156,-0.43 2.58,-1.1825c2.13656,-2.48594 52.46,-61.3825 52.46,-108.8975c0,-30.34187 -24.69812,-55.04 -55.04,-55.04zM86,41.28c11.395,0 20.64,9.245 20.64,20.64c0,11.395 -9.245,20.64 -20.64,20.64c-11.395,0 -20.64,-9.245 -20.64,-20.64c0,-11.395 9.245,-20.64 20.64,-20.64z">
                                </path>
                            </g>
                        </g>
                    </svg> Tinsukia (Assam) India

                    <br />
                    <br />
                </div>
                <div className="formitems">
                    <label htmlFor="name">Full Name</label>
                    <br />
                    <input type="text" id="name" placeholder="Your Name" autoCapitalize="none" autoComplete="off" required />
                    <br />
                    <br />
                    <label htmlFor="email">Mail</label>
                    <br />
                    <input type="email" placeholder="Your Email" autoCapitalize="none" autoComplete="off" id="email"
                        required />
                    <br />
                    <br />

                    <label htmlFor="comment">Comment</label>
                    <br />
                    <textarea name="comment" id="comment" cols="30" placeholder="Please type your message for me"
                        rows="5"></textarea>
                    <br />
                    <br />
                    <button className="submit" id="InsBtn">Send message</button>
                </div>
            </div>
            <footer>
                <br />
                <br />
                <div className="socialhandles">
                    <div className="footericons">

                        <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" target="_blank"
                            aria-label="social-handles-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" id="gmail" y="0px" width="40" height="40"
                                viewBox="0 0 50 50" style={{ fill: "#000000" }}>
                                <path
                                    d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z">
                                </path>
                            </svg>
                        </a>
                    </div>

                    <div className="footericons">
                        <a href="https://twitter.com/PursottamSah" target="_blank" aria-label="footer-icons-view">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45"
                                viewBox="0 0 50 50" style={{ fill: "#000000" }}>
                                <path
                                    d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div className="footericons">
                        <a href="https://www.github.com/Pursottam6003" target="_blank" aria-label="footer-icons-view">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                viewBox="0 0 64 64" style={{ fill: "#000000" }}>
                                <path
                                    d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="byebye">
                    <img src={Bye}  alt="bye bye" id="bye" />
                </div>
                <div className="externalLinks">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#myproject">Project</a></p>
                    <p><a href="#myexperience">Experience</a></p>
                    <p><a href="#contact">Contact Us</a></p>

                </div>

                <div className="codingID">
                    <p><a href="https://www.hackerrank.com/rahulsah6003" target="_blank">HackerRank</a></p>
                    <p><a href="https://www.codechef.com/users/rahulsah6003" target="_blank">Codechef</a></p>
                    <p><a href="https://codeforces.com/profile/pursottam" target="_blank">Codeforces</a></p>
                    <p><a href="https://auth.geeksforgeeks.org/user/rahulsah6003/practice/"
                        target="_blank">GeeksforGeeks</a></p>
                    <p><a href="https://www.coursera.org/user/d42cf0f8a131946140b56e9439a09b1c" target="_blank">Coursera</a>
                    </p>

                </div>
                <br />
                <span className="copyright">© Policy Pursottam Sah valid upto 2070</span>
                <br />
                <br />

            </footer>
        </div>
    )
}
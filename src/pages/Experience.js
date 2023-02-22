import React from 'react'
import GCloud from '../images/googlecloud.webp'
import iocl from '../offerLetters/iocl.pdf'
import Ekarigari from '../offerLetters/offer_letter_ekarigari.pdf'
import Bws from '../offerLetters/offer_letter_bws.pdf'
import NewtonsSchools from '../offerLetters/offer_letter_newtonSchools.pdf'
import Rebert from '../offerLetters/offer_letter_rebert.pdf'
import Tathastu from '../offerLetters/offer_tathastu.pdf'

const MyExperience =({companyName,InternshipPosition,desc,date,companySrc,pdfLink})=>{
    return (
        <>
            <li className="reveal">
                <div className="icon">
                    <i className="fas fa-briefcase"></i>
                </div>
                <span className="time">{date} </span>
                <a href={companySrc}>
                    <h2>{companyName}</h2>
                </a>
                <em>
                    <h3>{InternshipPosition} </h3>
                </em>
                <p>{desc}</p>
                <a href={pdfLink} rel="noopener noreferrer" target="_blank" ><button type="button" className="Readmore">View
                    Offer Letter</button></a>
            </li>
        </>
    )
}

export const Experience = () => {

    const Experiences =[
        {companyName:'Newtons School Coding Club NITAP',InternshipPosition:'President',desc:"Managing 150 club members and organized coding contests and workshops to improve the coding environment",date:'Aug 2022 - President',companySrc:'https://iocl.com/',pdfLink:NewtonsSchools},
        {companyName:'Technodaya NIT Arunachal Pradesh',InternshipPosition:'Editor',desc:"Developed the Newletter Magazine Website for NIT Arunachal Pradesh",date:'Dec 2022 - Present',companySrc:'https://iocl.com/',pdfLink:'#'},
        {companyName:'Indian Oil Corp. Limited',InternshipPosition:'SDE Internship',desc:"Completed the IOCL Vehicle Tracking and Management and Created the light weight web app using react.Js",date:'Dec 2022 - Jan 2023',companySrc:'https://iocl.com/',pdfLink:iocl},
        {companyName:'Ekarigari Systems Pvt. Limited',InternshipPosition:'Embeded System (IOT) and ML Trainee',desc:"Currently learning IoT and embeded systems and thats helps in understanding core concepts of electronics",date:'July 2022 - Present',companySrc:'https://ekarigari.in/',pdfLink:Ekarigari},
        {companyName:'Business Web Solutions Pvt. Limited',InternshipPosition:'Full Stack Web Development Internship',desc:"Become expert in HTML, CSS, and Javascript as well as in scripting languages Such as Python",date:'May 2022 -July 2022',companySrc:'https://www.businesswebsolutions.in/',pdfLink:Bws},
        {companyName:'REBERT Technologies Pvt. Limited',InternshipPosition:'Full Stack Web Developer',desc:"Working on the current project of the company ‘DoBuizz’ where my tasks was to first understand the PHP codes",date:'June 2022 - July 2022',companySrc:'https://www.linkedin.com/company/rebert-tech/about/',pdfLink:Rebert},
        {companyName:'Tathastu TwoWaits',InternshipPosition:'MERN Stack Trainee',desc:'Understood the core concepts of JavaScript and wrote a mini book for students who want to learn Js from scratch',date:'June 2022 - July 2022',companySrc:'http://tathastu.twowaits.in/',pdfLink:Tathastu},
    ]
  
    return (
    <>
    <div className="Experience" id="myexperience">
            <img src="https://img.icons8.com/external-flat-geotatah/64/000000/external-development-customer-satisfaction-flat-flat-geotatah.png" alt="exprience" />
            <h2 className="HowerMe">My Experiences</h2>

            <div className="resume-box reveal">
                <ul style={{ width: "fit-content", margin: "auto" }}>
                    {Experiences.map(val=>{
                        return <MyExperience key={val.companyName} {...val}/>
                    })
                    }
                </ul>
            </div>

            <h3><a href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125"
                target="_blank">Google Cloud</a></h3>
            <div className="googlecld reveal"><img src={GCloud} alt="google cloud" id="gcloud" />
                <p><a href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125"
                    target="_blank">Completed 30 days of Google Cloud Challenge</a></p>
            </div>

            <div className="googlecloud reveal">

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1512645"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/W0dgzE99xnSKAISSMzB5oc26LS0%2Bovkh0%2B6SrIdp6BI%3D" />
                    </a>
                </div>

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1509278"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/i3kI5DADfu8XoQguEoj60FKhmKUmshuiSpVjQMNX9tU%3D" />
                    </a>
                </div>

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1508188"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/s2t82amH27Mnb3nUGyvX3PCjz2hPNAAAuy0GGcSUw0o%3D" />
                    </a>
                </div>

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1505328"
                        aria-label="gclouds-bages" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/Iq6U5qCbrNP0GYjuu3ekilm6w80lPQby%2Be3g4FTAvYw%3D" />
                    </a>
                </div>
                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1505109"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/nfpOK9orYE%2BYPBPDaK0OaqsYrl%2Bd8P65%2BuHEM30w6Lc%3D" />
                    </a>
                </div>

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1500144"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/07kUwYDVqqrkI1U8YT6HnUqEu2BPap32XKmsObf%2Fr%2FE%3D" />
                    </a>
                </div>

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1494961"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/6eEz754j8yLZkBHs0rDYncK6C9USCmW761FhA67hPpY%3D" />
                    </a>
                </div>

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1488764"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/xRWHjfezxRYadqVWMp%2F11IJEF3%2BalOKZ2lozMw0AP0I%3D" />
                    </a>
                </div>

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1487771"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/znmkTJlD25IshOEeMHKbJMDATKxt6dHxSh9F9ya0lkQ%3D" />
                    </a>
                </div>

                <div className="badge">
                    <a className="badge-image"
                        href="https://www.qwiklabs.com/public_profiles/bd50fe40-e9ba-4a07-b294-761861ed6125/badges/1477210"
                        aria-label="gclouds-badges" target="_blank"><img alt="badge" className='badgeImage'
                            src="https://cdn.qwiklabs.com/UZLH%2F8n0ULT4OYJPQtS7VD3jfhrtOneTgbB6P5BNrUM%3D" />
                    </a>
                </div> 
            </div>

            <div className="reveal">
                <div className="hackerank">
                    <a href="https://www.hackerrank.com/rahulsah6003?hr_r=1" target="_blank" aria-label="hacker-badges">
                        <h1>Coding Practice Platforms Badges</h1>
                    </a>
                </div>

                <div className="badges">
                    
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
                                        height="10">
                                        <svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7" x="0">
                                            <path className="star"
                                                d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                transform="translate(-49.22548 -74.85817)"></path>
                                        </svg>

                                        <svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7" x="9">
                                            <path className="star"
                                                d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                transform="translate(-49.22548 -74.85817)"></path>
                                        </svg>

                                        <svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                            x="18">
                                            <path className="star"
                                                d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                transform="translate(-49.22548 -74.85817)"></path>
                                        </svg>
                                        
                                        <svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                            x="27">
                                            <path className="star"
                                                d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                transform="translate(-49.22548 -74.85817)"></path>
                                        </svg>
                                        <svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7"
                                            x="36">
                                            <path className="star"
                                                d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                transform="translate(-49.22548 -74.85817)"></path>
                                        </svg>
                                        
                                        <svg className="badge-star" viewBox="0 0 6.54904 6.25825" width="7" x="45">
                                            <path className="star"
                                                d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                                                transform="translate(-49.22548 -74.85817)"></path>
                                        </svg>

                                        </svg>
                                    </g>
                                </svg>
                            </div>  
                    </a>
                <img src="https://leetcode.com/static/images/badges/2022/lg/2022-annual-100.png" alt="100 Days Badge 2022" className="h-full w-full cursor-pointer object-contain" width={130}></img>
                </div>
            </div>    
        </div>
  
    </>
  )
}

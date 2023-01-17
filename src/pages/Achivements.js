import React from 'react'

import Book from '../images/book.png'
import Kickstart from '../images/google_kickstart.jpg'
import Addovedi from '../images/addovedi.jpeg'
import IdeaPitching from '../images/startup.jpg'
import Designothon from '../images/designathon.jpg'
import Iocl from '../images/iocl_office.jpg'


const FlipCard =({frontTitle,desc1,desc2,desc3,imgSrc})=>{
    return (
        <>
            <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h2>{frontTitle}</h2>
                    <p>{desc1}</p>
                    <p>{desc2}</p>
                    <p>{desc3}</p>
                </div>
                <div className="flip-card-back">
                    <img src={imgSrc} alt="certificate" style={{ width: "auto", height: "250px" }} />
                </div>
            </div>
        </div>
        </>
    )
}
export const Achivements = () => {

    const AchivementList =[
        {frontTitle:'Indian Oil Corp Ltd SDE Intern',desc1:'• Sucessfully Completed the Winter Internship at IOCL Guwahati',desc2:'• Recieved the internsip Completion certificate & Letter of Recommendation from Guide',desc3:' ',imgSrc:Iocl},
        {frontTitle:'Designathon Hackathon 2022',desc1:'• Won the first Prize 10K',desc2:'• Official Newsletter website of NIT AP',desc3:'• Promoted as the student Editor',imgSrc:Designothon},
        {frontTitle:'Start-Up Idea Pitching 2022',desc1:'• Won the first Prize 3K',desc2:'• Team "For One"',desc3:'• Implemented the same idea in college',imgSrc:IdeaPitching},
        {frontTitle:'Participated in Google KickStart 2022 Round H',desc1:'• Solved 1 questions during the contest',desc2:'• Upsolved 3 questions during practice rounds',desc3:'• Secured the Global rank: 3452',imgSrc:Kickstart},
        {frontTitle:'Addovedi Tech Fest 2022',desc1:'• Hydrollic Arm',desc2:'• Took 31.6 sec to pick-up 5 cans',desc3:'• Our Team won the first Prize',imgSrc:Addovedi},
        {frontTitle:'JavaScript from Basics to Advance',desc1:'• Wrote the First Book of My Life',desc2:'• Covered topics of js upto React.js',desc3:'• 2k Views on linkedin in first 24 hrs',imgSrc:Book},
    ]
  return (
   <>
 <div className="Achievement">
    <h2>Achievements and Certifications</h2>
    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/000000/external-achievements-recruitment-agency-flaticons-flat-flat-icons.png" alt="trophy_achievements" />
    <div className="achiementsList">
        {AchivementList.map(val=>{
           return <FlipCard key={val.desc1} {...val}/>
        })}
    </div>
</div>

<br />
<br />
<br />

   </>
  )
}

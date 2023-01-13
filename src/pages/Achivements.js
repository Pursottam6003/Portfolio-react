import React from 'react'

import Book from '../images/book.png'
import Kickstart from '../images/google_kickstart.png'
import hashcode from '../images/google_hashcode.png'
import YuvaHackathon from '../images/yuva_innovation.png'
import Snakedown from '../images/snakdown.png'
import TopGrade from '../images/top_grade.png'
import Falicitation from '../images/laptop_fallitation.jpeg'


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
        {frontTitle:'JavaScript from Basics to Advance',desc1:'• Wrote the First Book of My Life',desc2:'• Covered topics of js upto React.js',desc3:'• 2k Views on linkedin in first 24 hrs',imgSrc:Book},
        {frontTitle:'Participated in Google KickStart 2022 Round H',desc1:'• Solved 1 questions during the contest',desc2:'• Upsolved 3 questions during practice rounds',desc3:'• Secured the Global rank: 10292',imgSrc:Kickstart},
        {frontTitle:'Participated in Google Hashcode 2022',desc1:'• Participated in a Team as a Team-Leader',desc2:'• Team Members : Chandrashekhar Tripathi and Hash Tiwari',desc3:'• Our Team secured the rank of 5023/ 10K teams',imgSrc:hashcode},
        {frontTitle:'Participated in Google Hashcode 2022',desc1:'• Participated in a Team as a Team-Leader',desc2:'• Team Members : Chandrashekhar Tripathi and Hash Tiwari',desc3:'• Our Team secured the rank of 5023/ 10K teams',imgSrc:hashcode}
    ]
  return (
   <>
 <div className="Achievement">
    <h2>Achievements and Certifications</h2>
    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/000000/external-achievements-recruitment-agency-flaticons-flat-flat-icons.png" alt="trophy_achievements" />
    <div className="achiementsList">
        {AchivementList.map(val=>{
           return <FlipCard key={val.imgSrc} {...val}/>
        })}
    </div>
</div>

<br />
<br />
<br />

   </>
  )
}

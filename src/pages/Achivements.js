import React from 'react'

import Book from '../images/book.png'
import Kickstart from '../images/google_kickstart.png'
import hashcode from '../images/google_hashcode.png'
import YuvaHackathon from '../images/yuva_innovation.png'
import Snakedown from '../images/snakdown.png'
import TopGrade from '../images/top_grade.png'
import Falicitation from '../images/laptop_fallitation.jpeg'

export const Achivements = () => {
  return (
   <>
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

   </>
  )
}

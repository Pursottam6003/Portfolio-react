import React from 'react'
import Hobby from '../images/daily-tasks.png'

export const Hobbies = () => {
  return (
   <>
    <div className="hobbies reveal">
        <h3 className="HowerMe">My Hobbies</h3>
        <img src={Hobby} style={{ width: "80px" }} alt="hobbies" />
    </div>

    <div className="hobbiesList reveal">

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
   </>
  )
}

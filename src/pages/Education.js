import React from 'react'
import nitap from '../images/nitap.png'
import ghss from '../images/ghss.png'

const Education = () => {
  return (
    <div className='EducationSection'>

      <div className='Educationheading'>
        <img src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/null/external-degree-education-vectorslab-flat-vectorslab.png"/>
        <h2>Education</h2> 
      </div>

      <div className='Institutions reveal'>
        <div className='InstitutionLogo'>
            <img src={nitap} style={{width:"80px"}}></img>
        </div>
        <div className='InstitutionName'>
            <p className='InsName'>National Institue of Technology Arunachal Pradesh</p>
            <p className='course'>B Tech in  Computer science and Engineering</p>
            <p className='year'>2020 - 2024 <span className='tag'>In Progress</span></p>
        </div>
        </div>

      <div className='Institutions reveal'>
        <div className='InstitutionLogo'>
            <img src={ghss} style={{width:"80px"}}></img>
        </div>
        <div className='InstitutionName '>
            <p className='InsName'>Govt. Higher Sec. School Roing, Arunachal Pradesh</p>
            <p className='course'>Class 12 Science (PCMB) CBSE</p>
            <p className='year'>2018 - 2020</p>
        </div>
        </div>

        <div className='Institutions reveal'>
        <div className='InstitutionLogo'>
            <img src={ghss} style={{width:"80px"}}></img>
        </div>
        <div className='InstitutionName '>
            <p className='InsName'>Govt. Higher Sec. School Roing, Arunachal Pradesh</p>
            <p className='course'>Class 10  CBSE</p>
            <p className='year'>2016 - 2018</p>
        </div>
        </div>
    </div>


  )
}

export default Education
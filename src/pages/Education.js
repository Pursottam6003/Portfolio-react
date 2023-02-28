import React from 'react'
import nitap from '../images/nitap.png'
import ghss from '../images/ghss.png'
import LinkIcon from '../images/link.svg'
import Chip from '@mui/material/Chip';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const Education = () => {

  const EducationDetails  = [
    {InstName:"National Institue of Technology Arunachal Pradesh",InstSrc:"http://nitap.ac.in/",Imgsrc:nitap,course:"B Tech in  Computer science and Engineering",date:"2020 - 24",marks:"8.84(Upto 5th Semester)",isCompleted:false,},
    {InstName:"Govt. Higher Sec. School Roing, Arunachal Pradesh",InstSrc:"http://www.ghssroing.in/",Imgsrc:ghss,course:"Class 12 Science (PCMB) CBSE",date:"2018 - 20",marks:"Overall 84.8%",isCompleted:true,},
    {InstName:"Govt. Higher Sec. School Roing, Arunachal Pradesh",InstSrc:"http://www.ghssroing.in/",Imgsrc:ghss,course:"Class 10  CBSE",date:"2016 - 18",marks:"Overall 89.4%",isCompleted:true,},
  ]
  
  return (
    <div className='EducationSection'>

      <div className='Educationheading'>
        <img  alt="education" src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/null/external-degree-education-vectorslab-flat-vectorslab.png"/>
        <h2>Education</h2> 
      </div>

      {EducationDetails.map(val =>{
        return (
          <>
          <div className='Institutions reveal' key={val.course}>
          <div className='InstitutionLogo'>
              <img src={val.Imgsrc}  alt={val.InstName} style={{width:"80px"}}></img>
          </div>
          <div className='InstitutionName'>
              <p className='InsName'>{val.InstName}</p>
              <p className='course'>{val.course}</p>
              <div style={{display:"flex",gap:"20px",padding:"5px"}}>

              <div className='year'>{val.date} </div>
              {val.isCompleted ? <><div className='tag' style={{background:"green"
              }}>Completed</div> </> : <> <div className='tag' >In Progress</div></>}
             
              <div> 
              <a href={val.InstSrc} target="_blank"><img src={LinkIcon}/></a></div>
              <div style={{fontSize:"18px",fontStyle:'italic',paddingTop:"5px"}}>
                {val.marks}
              </div>
              </div>
          </div>
          </div>
          </>
        )
      })}
    </div>


  )
}

export default Education
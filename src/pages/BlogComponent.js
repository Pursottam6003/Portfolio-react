import React from 'react'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Chip from '@mui/material/Chip';

 

export const BlogComponenent=({blogSrc,blogtext,likes,views,date,duration}) => {
  return (
     <>
        <div className='BlogContent'>
            <div className='BlogImage'>
                <img src={blogSrc} alt="blog" width="200px"></img>
            </div>
            <div className='textContent'>
            {blogtext}
            
            <div className='blogFooter'>
                <Chip  icon=<ThumbUpIcon sx={{color:"#1976D2"}}/> sx={{background:"white"}} label={likes} />
                <Chip  icon= <VisibilityIcon/> sx={{background:"white"}} label={views} />
                <Chip  icon=  <OpenInNewIcon/> sx={{background:"white"}} label="Open" />
                <Chip  icon =<EditIcon/> sx ={{background:"white"}} label={date}/>
                <Chip sx ={{background:"white"}} label={duration}/>
            </div>  

            </div>
        </div>

     </>
  );
}

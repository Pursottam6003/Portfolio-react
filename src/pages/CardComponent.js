import React from 'react';
import { styled } from '@mui/material/styles';

import {CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Card } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import BakewithLove from '../images/bakeWithLove.jpg'
import Technodaya from '../images/technodaya.jpg'
import IoclTracker from '../images/iocl.jpeg'
import Airavat from '../images/airavat.jpg'
import SmartNaka from '../images/apsn.jpeg'
import HousePricePrediction from '../images/housePricePrediction.webp'
// import Calculator from '../images/calculator.webp'
// import DesktopAssistent from '../images/assistent.png'
// import Encourager from '../images/Discord-bot.png'
// import ToDoList from '../images/todolist.webp'
// import TypingGame from '../images/typingmbl.png'
// import BankManagement from '../images/bank.png'
// import RockPaperScissor from '../images/rock_paper_ssr.webp'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MyCardComponent = ({ projectTitle, imgsrc,period, shortDesc, codeSrc, demoSrc, para1, para2 }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className='Projtitle'>
          {projectTitle}
        </div>
        <div style={{ padding: 4, textAlign: "center", background: "#fc5356", color: "#ffffff", fontSize: 12, display: "inline-block", marginBottom:5, borderRadius: 16, fontWeight: 600 }}>{period} </div>
      </div>
      <div />
      <CardMedia
        component="img"
        height="194"
        image={imgsrc}
        alt="cake"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {shortDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
        <IconButton aria-label="share">
          <a href={codeSrc}>
            <LinkIcon />
          </a>
        </IconButton>
        <a href={codeSrc}>
          <div className="source">Source Code</div>
        </a>
        <a href={demoSrc}>
          <div className="demo">View Demo</div>
        </a>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {para1}
          </Typography>

          <Typography paragraph>
            {para2}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default function CardComponent() {
  const projectDetails = [
    { projectTitle: 'IOCL Tracker', imgsrc: IoclTracker,period:'Dec 2022 - Jan 2023', shortDesc: 'MERN application:  Vehicle Tracking and Management System ', codeSrc: 'https://github.com/tripathics/iocl-tracker', demoSrc: 'https://github.com/tripathics/iocl-tracker', para1: 'ReactJs is used in the frontend and Firebase is used at the backend for server authentication, Databases, and Cart Products.', para2: 'Stripe Payment gateway is used for online payment which improves business sales by about 200%.' },
    { projectTitle: 'Ethos: Smart-Naka', imgsrc: SmartNaka,period:'Dec 2022 - Jan 2023',  shortDesc: 'A react Native application which helps Assam Police to catch thiefts at Naka', codeSrc: 'https://github.com/Pursottam6003/Designathon-for-one', demoSrc: 'https://technodaya.netlify.app/', para1: 'ReactJs is used in the frontend and Firebase is used at the backend for server authentication, Databases, and Cart Products.', para2: 'Stripe Payment gateway is used for online payment which improves business sales by about 200%.' },
    { projectTitle: 'House Price Prediction', imgsrc: HousePricePrediction, period:'Dec 2022',  shortDesc: 'Developed E-Commerce Web application Bake with Love', codeSrc: 'https://github.com/Pursottam6003/bake_with_love', demoSrc: 'https://pursottam6003bakewithlove.netlify.app/', para1: 'ReactJs is used in the frontend and Firebase is used at the backend for server authentication, Databases, and Cart Products.', para2: 'Stripe Payment gateway is used for online payment which improves business sales by about 200%.' },
    { projectTitle: 'Technodaya Magazine', imgsrc: Technodaya,period:'Aug 2022 - Oct 2023',  shortDesc: 'Technodaya NIT Arunachal Pradesh Web Magazine ', codeSrc: 'https://github.com/Pursottam6003/Designathon-for-one', demoSrc: 'https://technodaya.netlify.app/', para1: 'ReactJs is used in the frontend and Firebase is used at the backend for server authentication, Databases, and Cart Products.', para2: 'Stripe Payment gateway is used for online payment which improves business sales by about 200%.' },
    { projectTitle: 'Airavat', imgsrc: Airavat,period:'Sept 2022 - Oct 2022',  shortDesc: 'Bus Tracking and Management System for NIT AP Students', codeSrc: 'https://github.com/Pursottam6003/Designathon-for-one', demoSrc: 'https://technodaya.netlify.app/', para1: 'ReactJs is used in the frontend and Firebase is used at the backend for server authentication, Databases, and Cart Products.', para2: 'Stripe Payment gateway is used for online payment which improves business sales by about 200%.' },
    { projectTitle: 'E Commerce Website', imgsrc: BakewithLove, period:'July 2022 - Aug 2022',  shortDesc: 'Developed E-Commerce Web application Bake with Love', codeSrc: 'https://github.com/Pursottam6003/bake_with_love', demoSrc: 'https://pursottam6003bakewithlove.netlify.app/', para1: 'ReactJs is used in the frontend and Firebase is used at the backend for server authentication, Databases, and Cart Products.', para2: 'Stripe Payment gateway is used for online payment which improves business sales by about 200%.' },
  ]
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>

    <div className="Projects reveal">
      {projectDetails.map(val => {
        return <MyCardComponent key={val.projectTitle} {...val} />
      })}
    </div>
    </>
  )
}

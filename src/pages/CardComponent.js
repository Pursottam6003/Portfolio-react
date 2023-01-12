import React from 'react';
import { styled } from '@mui/material/styles';

import {CardHeader,CardMedia,CardContent,CardActions,Collapse,IconButton,Typography,Card} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BakewithLove from '../images/bakeWithLove.jpg'

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

export default function CardComponent() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>Ecommerce App</div>
          <div  style={{ padding:4, textAlign:"center",  background: "#fc5356",color: "#ffffff",fontSize:12 ,display: "inline-block",borderRadius: 16,fontWeight: 600}}>July 2022 - Aug 2022 </div>
        </div>
      <div/>
      <CardMedia
        component="img"
        height="194"
        image={BakewithLove}
        alt="cake"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">   
        Developed E-Commerce Web application Bake with Love
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  sx={{color:"red"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <LinkIcon/>
        </IconButton>
          <div className="source">Source Code</div>
          <div className="demo">View Demo</div>

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
          ReactJs is used in the frontend and Firebase is used at
          the backend for server authentication, Databases, and Cart
          Products.
          </Typography>

          <Typography paragraph>
          Stripe Payment gateway is used for online payment which improves business sales by about 200%.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'center',
          alignItems:'center'
        }}
        title=<div>Ecommerce App</div>
        subheader={
          <div  style={{ padding:4, textAlign:"center",  background: "#fc5356",color: "#ffffff",fontSize:12 ,display: "inline-block",borderRadius: 16,fontWeight: 600}}>July 2022 - Aug 2022 </div>}
       />
       
      <CardMedia
        component="img"
        height="194"
        image={BakewithLove}
        alt="cake"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">   
        Developed E-Commerce Web application Bake with Love
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  sx={{color:"red"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <LinkIcon/>
        </IconButton>
          <div className="source">Source Code</div>
          <div className="demo">View Demo</div>

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
          ReactJs is used in the frontend and Firebase is used at
          the backend for server authentication, Databases, and Cart
          Products.
          </Typography>

          <Typography paragraph>
          Stripe Payment gateway is used for online payment which improves business sales by about 200%.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Card>

    </Card>
    </>
  );
}

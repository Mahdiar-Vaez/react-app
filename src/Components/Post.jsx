import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { HeartIcon,ShareIcon } from './Icons' 
import AvatarImage from '../assets/IMG_20240316_220148_000.jpg'

export default function Post({like,handleLike,image}) {
  return (
    <Card sx={{
        marginTop:'20px !important',
        maxHeight:"1000px"
      }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={AvatarImage}/>
        
    }
    
    title="Mahdiyar Vaez"
    subheader="September 14, 2024"
  />
  <CardMedia
    component="img"
    sx={{height:{xs:'20%',sm:'500px!important'}}}
    image={image}
    alt="nature"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton onClick={handleLike} aria-label="add to favorites">
      <HeartIcon  sx={{
        color:like?'red':''
      }} />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
   </CardActions>
</Card>
  )
}

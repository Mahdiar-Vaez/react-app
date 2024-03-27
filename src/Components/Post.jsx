import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { HeartIcon,ShareIcon } from './Icons' 

export default function Post({like,handleLike}) {
  return (
    <Card sx={{
        maxHeight:"1000px"
      }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
        R
      </Avatar>
    }
    
    title="Mahdiyar Vaez"
    subheaderader="September 14, 2016"
  />
  <CardMedia
    component="img"
    sx={{height:{xs:'20%',sm:'500px!important'}}}
    image="https://source.unsplash.com/random"
    alt="Paella dish"
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

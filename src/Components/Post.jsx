import React, { useState } from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Drawer, IconButton, Typography } from '@mui/material'
import { HeartIcon,ShareIcon,TelegramIcon,WhatsAppIcon,InstagramIcon,EmailIcon,FacebookIcon } from './Icons' 
import AvatarImage from '../assets/IMG_20240316_220148_000.jpg'
import { findAllByTestId } from '@testing-library/react'

export default function Post({like,handleLike,image}) {
  const [open,setOpen]=useState(false)
  const styledDrawer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:'200px',
    width:'100%',
    gap:'20px'
  };
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
    <IconButton onClick={()=>setOpen(true)} aria-label="share">
      <ShareIcon />
    </IconButton>
   </CardActions>
   <Drawer open={open} onClose={()=>setOpen(false)} anchor='bottom'>
    <Box sx={styledDrawer}>
      <IconButton color='primary'><TelegramIcon/></IconButton>
      <IconButton color='secondary'><InstagramIcon/></IconButton>
      <IconButton color='warning' ><EmailIcon/></IconButton>
      <IconButton color='success'><WhatsAppIcon/></IconButton>
      <IconButton color='primary'><FacebookIcon/></IconButton>
    </Box>
   </Drawer>
</Card>
  )
}

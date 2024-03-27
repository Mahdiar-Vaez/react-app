import { Box } from '@mui/material'
import React, { useState } from 'react'
import Post from './Post'
export default function Feed() {
  const [like,setLike]=useState(false)
  const handleLike=()=>{
    setLike(!like)
  }
  return (
    <Box  p={2} flex={4} bgcolor={'pink'}>
      <Post like={like} handleLike={handleLike}/>
      <Post like={like} handleLike={handleLike}/>
      <Post like={like} handleLike={handleLike}/>
     

    </Box>
  )
}

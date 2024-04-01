import { Box } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import image1 from '../assets/2.jpg'
import image2 from '../assets/3.jpg'
import image3 from '../assets/4.jpg'
export default function Feed({friends}) {

  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  return (
    <Box  sx={{display:!friends?'block':'none'}} flexDirection={'column'} p={2} flex={4} >
      <Post like={like} image={image1} handleLike={handleLike} />
      <Post like={like} image={image2} handleLike={handleLike} />
      <Post like={like} image={image3} handleLike={handleLike} />
    </Box>
  );
}

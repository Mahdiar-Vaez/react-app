import React from "react";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'} >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

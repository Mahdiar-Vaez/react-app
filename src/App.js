import React, { useEffect, useState } from "react";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import GroupIcon from "@mui/icons-material/Group";

import {
  Avatar,
  Box,
  Button, Drawer, List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Stack,
  Switch,
  Typography,
  createTheme
} from "@mui/material";
import Navbar from "./Components/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@emotion/react";

export default function App() {
  useEffect(()=>
  setModal(true)
  ,[])
  const [drawer, setDrawer] = useState(false);
  const [friends, setFriends] = useState(false);
  const [mode, setMode] = useState("light");
  const [modal,setModal]=useState(false)
  const darkMode = createTheme({
    palette: {
      mode,
    },
  });
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:250,md:400},
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:'max-content'
  };
   const handlePageProfile=()=>{

    setFriends(false)
   }
   const handlePageFriends=()=>{
    setFriends(true)
 
   }
  return (
    <ThemeProvider theme={darkMode}>
   
      <Modal
        open={modal}
        onClose={()=>setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={'background.default'} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            welcome 
          </Typography>
          <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
            made by Mahdiyar Vaez
          </Typography>
        </Box>
      </Modal>
      
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Button
          onClick={() => setDrawer(true)}
          variant="contained"
          size="small"
          sx={{
            display:{xs:'flex',md:'none'},
            position: "fixed",
            top: "9%",
            right: "2%",
            cursor: "pointer",
            zIndex:1000
          }}
        >
          <MenuIcon sx={{ cursor: "pointer" }} fontSize="small" />
        </Button>

        <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
          <SideBar mode={mode} setMode={setMode} />
          <Feed  friends={friends} />
          <RightBar  friends={friends}  />
        </Stack>
      </Box>
      <Drawer anchor="bottom" onClose={() => setDrawer(false)} open={drawer}>
        <Box>
          <List    sx={{
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }} component="nav" aria-label="main mailbox folders">
            <ListItemButton component={"a"} href="#home">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
            <ListItemButton onClick={handlePageFriends}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText  primary="Friends" />
            </ListItemButton>
            <ListItemButton onClick={handlePageProfile}>
              <ListItemIcon>
                <Avatar sx={{width:24,height:24}} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}

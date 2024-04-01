import React from "react";
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
export default function DrwerBox({mode,setMode,handlePageFriends,handlePageProfile}) {
  return (
    <>
      <Box>
        <List
          sx={{
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          component="nav"
          aria-label="main mailbox folders"
        >
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
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton onClick={handlePageProfile}>
            <ListItemIcon>
              <Avatar sx={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}

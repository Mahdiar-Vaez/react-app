import HomeIcon from "@mui/icons-material/Home";
import DraftsIcon from "@mui/icons-material/Drafts";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Settings, StarBorder } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupIcon from "@mui/icons-material/Group";
export default function SideBar({mode,setMode}) {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} p={2} flex={1}>
      <Box position={'fixed'}>

      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton component={"a"} href="#home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="MarketPlace" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ModeNightIcon />
          </ListItemIcon>
          <Switch onClick={()=>setMode(mode==='light'?'dark':'light')}  />
        </ListItemButton>
      </List>
      </Box>
    </Box>
  );
}

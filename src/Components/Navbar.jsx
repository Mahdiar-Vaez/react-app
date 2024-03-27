import styled from "@emotion/styled";
import MailIcon from "@mui/icons-material/Mail";
import { Menu, MenuItem, Theme } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import JavascriptIcon from "@mui/icons-material/Javascript";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }));
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          variant="h6"
        >
          Vaez Dev
        </Typography>
        <JavascriptIcon
          sx={{
            fontSize: 50,
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons sx={{ display: { xs: "none", md: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <MailIcon color="inherit" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="inherit" />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            alt="V"
            sx={{ width: 24, height: 24 }}
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", md: "none" } }}>
          <Avatar
            onClick={() => setOpen(true)}
            alt="V"
            sx={{ width: 24, height: 24 }}
          />
          <Typography>Vaez</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
      onClose={()=>setOpen(false)}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

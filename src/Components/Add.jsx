import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import avatar from '../assets/IMG_20240316_220148_000.jpg'
import {
    VideoCallIcon,
    CollectionsIcon,
    AddReactionIcon,
    PermContactCalendarIcon
} from "./Icons";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    IconButton,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
export default function Add() {
  const [open, setOpen] = useState(false);
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }));
  const styledModal = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        title="Add"
      >
        <Fab color="primary" aria-label="add">
          <IconButton onClick={() => setOpen(true)}>
            <AddIcon />
          </IconButton>
        </Fab>
      </Tooltip>
      <Modal sx={styledModal} open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: { xs: 280, md: 500 },
            height: 300,
            backgroundColor: "white",
            display: "flex",
            borderRadius: "20px",
            justifyContent: "center",
           
            padding: "10px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <UserBox>
            <Avatar src={avatar}
              onClick={() => setOpen(true)}
              alt="V"
              sx={{ width: 24, height: 24, cursor: "pointer" }}
            />
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => setOpen(true)}
            >
              Vaez
            </Typography>
          </UserBox>
          <TextField focused variant="filled" label="What's on your mind " />
          <Stack direction={'row'}>
            <IconButton color="primary"><VideoCallIcon/></IconButton>
            <IconButton color="secondary"><CollectionsIcon/></IconButton>
            <IconButton color="success"><AddReactionIcon/></IconButton>
            <IconButton color="error"><PermContactCalendarIcon/></IconButton>
          </Stack>
          <ButtonGroup>
            <Button sx={{width:'80%'}}>Post</Button>
            <Button>Tag</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}

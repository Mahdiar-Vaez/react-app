import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import image1 from "../assets/2.jpg";
import image2 from "../assets/3.jpg";
import image3 from "../assets/4.jpg";
import React, { useState } from "react";
import styled from "@emotion/styled";

export default function RightBar({ friends }) {
  const FriendsTrueStyle = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  });
  const itemData = [
    {
      img: image1,
      title: "Breakfast",
    },
    {
      img: image3,
      title: "Burger",
    },
    {
      img: image2,
      title: "Camera",
    },
  ];
  const [see, setSee] = useState(false);
  return !friends ? (
    <Box sx={{ display: { xs: "none", md: "block" } }} flex={2} p={2}>
      <Box position={"fixed"}>
        <Typography fontWeight={400} variant="h6">
          Online Friends
        </Typography>
        <Stack sx={{ width: "100%" }} direction={"row"}>
          <AvatarGroup max={see ? 10 : 5}>
            <Avatar
              alt="Remy Sharp"
              src="https://randomuser.me/api/portraits/men/54.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://randomuser.me/api/portraits/men/52.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://randomuser.me/api/portraits/men/51.jpg"
            />

            <Avatar
              alt="Agnes Walker"
              src="https://randomuser.me/api/portraits/men/56.jpg"
            />

            <Avatar
              alt="Trevor Hendersonjpg"
              src="https://randomuser.me/api/portraits/men/50.jpg"
            />
            <Avatar
              alt="Trevor Hendersonjpg"
              src="https://randomuser.me/api/portraits/men/51.jpg"
            />
            <Avatar
              alt="Trevor Hendersonjpg"
              src="https://randomuser.me/api/portraits/men/53.jpg"
            />
          </AvatarGroup>{" "}
          <Button onClick={() => setSee(!see)}>
            {!see ? "See All" : "Show Less"}
          </Button>
        </Stack>
        <Typography sx={{ marginTop: "5px" }} fontWeight={400} variant="h6">
          Latest Photos
        </Typography>
        <ImageList
          sx={{ marginTop: "5px", height: "200px", width: "400px" }}
          cols={3}
          rowHeight={200}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                style={{ objectFit: "contain" }}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography my={1} fontWeight={400} variant="h6">
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/30.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://randomuser.me/api/portraits/men/51.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://randomuser.me/api/portraits/men/52.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  ) : (
    <FriendsTrueStyle>
      <Typography fontWeight={400} variant="h6">
        Online Friends
      </Typography>
      <Stack sx={{ width: "100%", flexWrap: "wrap" }} direction={"row"}>
        <AvatarGroup max={see ? 7 : 5}>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/54.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://randomuser.me/api/portraits/men/52.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://randomuser.me/api/portraits/men/51.jpg"
          />

          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/men/56.jpg"
          />

          <Avatar
            alt="Trevor Hendersonjpg"
            src="https://randomuser.me/api/portraits/men/50.jpg"
          />
          <Avatar
            alt="Trevor Hendersonjpg"
            src="https://randomuser.me/api/portraits/men/51.jpg"
          />
          <Avatar
            alt="Trevor Hendersonjpg"
            src="https://randomuser.me/api/portraits/men/53.jpg"
          />
        </AvatarGroup>{" "}
        <Button onClick={() => setSee(!see)}>
          {!see ? "See All" : "Show Less"}
        </Button>
      </Stack>
      <Typography sx={{ marginTop: "5px" }} fontWeight={400} variant="h6">
        Latest Photos
      </Typography>
      <ImageList
        sx={{
          marginTop: "5px",
          maxHeight: "max-content",
          width: "100%",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        cols={3}
        rowHeight={200}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ objectFit: "contain" }}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography my={1} fontWeight={400} variant="h6">
        Latest Conversation
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://randomuser.me/api/portraits/men/30.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://randomuser.me/api/portraits/men/51.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://randomuser.me/api/portraits/men/52.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </FriendsTrueStyle>
  );
}

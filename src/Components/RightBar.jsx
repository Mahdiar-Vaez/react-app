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
import image1 from "../assets/1.avif";
import image3 from "../assets/2.avif";
import image2 from "../assets/3.avif";
import React, { useState } from "react";
import styled from "@emotion/styled";

export default function RightBar({ friends }) {
  const FriendsTrueStyle = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: "1000px",
    marginBottom:20,
    justifyContent: "start",
    alignItems: "center",
  });
  const itemData = [
    {
      img: image1,
      title: "nature",
    },
    {
      img: image3,
      title: "nature",
    },
    {
      img:image2,
      title:'nature'
    }

  ];
  const [see, setSee] = useState(false);
  return !friends ? (
    <Box sx={{ display: { xs: "none", md: "block" } }} flex={2} p={2}>
      <Box position={"fixed"}>
        <Typography fontWeight={400} variant="h6">
          Online Friends
        </Typography>
        <Stack sx={{ width: "100%",flexWrap:'wrap' ,display:'flex'}} direction={"row"}>
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
            {!see ? "more" : "Less"}
          </Button>
        </Stack>
        <Typography sx={{ marginTop: "5px" }} fontWeight={400} variant="h6">
          Latest Photos
        </Typography>
        <ImageList
          sx={{ marginTop: "5px", height: "200px", width: "400px" }}
          cols={1}
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
      <Stack sx={{ width: "100%", flexWrap: "wrap",justifyContent:'center' }} direction={"row"}>
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
         
         padding:'10px',
          width: "100%",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
        }}
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
      <List  sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" ,height:'400px'}}>
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

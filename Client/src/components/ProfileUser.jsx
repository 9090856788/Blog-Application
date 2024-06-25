/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid, Box, Avatar, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const ProfileUser = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} alignItems="center">
        {/* Left Column - Profile Information */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#FFE4C4",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Avatar
              sx={{ width: "130px", height: "130px", marginBottom: "10px" }}
              alt="Profile"
              src="./Avatar.jpg"
            />
            <Typography
              sx={{
                color: "brown",
                fontWeight: "bold",
                fontFamily: "Arial",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              Mansi Deshpande
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <SocialLink icon={<FacebookIcon sx={{ fontSize: "30px" }} />} text="Facebook" />
              <SocialLink icon={<YouTubeIcon sx={{ fontSize: "30px" }} />} text="YouTube" />
              <SocialLink icon={<InstagramIcon sx={{ fontSize: "30px" }} />} text="Instagram" />
              <SocialLink icon={<TwitterIcon sx={{ fontSize: "30px" }} />} text="Twitter" />
            </Box>
          </Box>
        </Grid>

        {/* Right Column - Placeholder Boxes */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              height: "230px",
              borderRadius: "10px",
              margin: 3
            }}
          />
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              height: "300px",
              marginTop: "20px",
              borderRadius: "10px",
              margin: 3
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

// Component for rendering each social media link
const SocialLink = ({ icon, text }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      bgcolor: "#FFE4C4",
      borderRadius: "10px",
      padding: "10px",
    }}
  >
    {icon}
    <Typography
      sx={{
        fontFamily: "Arial",
        fontStyle: "italic",
        fontWeight: "bold",
        color: "brown",
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default ProfileUser;

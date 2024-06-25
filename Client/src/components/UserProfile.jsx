import React from "react";
import { Container, Box, Avatar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const UserProfile = () => {
  return (
    <>
      <Container
        sx={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap : "15px",
        }}
      >
        <Box>
          <Box
            sx={{
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "40px",
              bgcolor: "rgb(240, 248, 255)",
              height: "340px",
              width: "330px",
              margin: "10px",
              padding: "5px",
            }}
          >
            <Avatar
              alt="Profile logo"
              src="././public/Avtar.jpg"
              sx={{ width: "120px", height: "auto" }}
            ></Avatar>
            <Typography sx={{ color: "black", fontWeight: "700" }}>
              Suryakanta Maharana
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "10px",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "baseline",
              flexDirection: "column",
              bgcolor: "rgb(240, 248, 255)",
              height: "240px",
              width: "330px",
              margin: "10px",
              padding: "5px",
            }}
          >
            <Typography
              sx={{
                color: "#808080",
                margin: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <InstagramIcon sx={{ fontSize: "35px" }} />{" "}
              <Typography sx={{ fontSize: "18px", fontWeight: "900" }}>
                Instagram{" "}
              </Typography>
            </Typography>

            <Typography
              sx={{
                color: "#808080",
                margin: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <FacebookIcon sx={{ fontSize: "35px" }} />{" "}
              <Typography sx={{ fontSize: "18px", fontWeight: "900" }}>
                Facebook{" "}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#808080",
                margin: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <YouTubeIcon sx={{ fontSize: "35px" }} />{" "}
              <Typography sx={{ fontSize: "18px", fontWeight: "900" }}>
                YouTube{" "}
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Box
            sx={{
              bgcolor: "rgb(240, 248, 255)",
              borderRadius: "10px",
              height: "300px",
              width: "800px",
            }}
          ></Box>
          <Box
            sx={{
              bgcolor: "rgb(240, 248, 255)",
              borderRadius: "10px",
              height: "280px",
              width: "800px",
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default UserProfile;

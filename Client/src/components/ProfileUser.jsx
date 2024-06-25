import React from "react";
import { Container, Box, Avatar, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

const ProfileUser = () => {
  return (
    <>
      <Container
        sx={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Box
            sx={{
              bgcolor: "#FFE4C4",
              height: "230px",
              width: "300px",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            <Avatar
              sx={{ width: "130px", height: "auto" }}
              alt="Profile"
              src="././Avatar.jpg"
            />
            <Typography
              sx={{
                color: "brown",
                fontWeight: "bold",
                fontFamily: "Arial",
                fontStyle: "italic",
              }}
            >
              Mansi Deshpande
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#FFE4C4",
              height: "300px",
              width: "300px",
              margin: "10px",
              padding: "5px",
              display: "flex",
              alignItems: "Baseline",
              justifyContent: "Baseline",
              flexDirection: "column",
              gap: "10px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                margin : '6px'
              }}
            >
              <FacebookIcon sx={{ fontSize: "30px", borderRadius: "50px" }} />
              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "brown",
                }}
              >
                FaceBook
              </Typography>
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                margin : '6px'
              }}
            >
              <YouTubeIcon sx={{ fontSize: "30px", borderRadius: "50px" }} />
              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "brown",
                }}
              >
                Youtube
              </Typography>
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                margin : '6px'
              }}
            >
              <InstagramIcon sx={{ fontSize: "30px", borderRadius: "50px" }} />
              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "brown",
                }}
              >
                Instagram
              </Typography>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                margin : '6px'
              }}
            >
              <XIcon sx={{ fontSize: "30px", borderRadius: "50px" }} />
              <Typography
                sx={{
                  fontFamily: "Arial",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "brown",
                }}
              >
                Twitter
              </Typography>
            </Typography>

            
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              height: "230px",
              width: "750px",
              borderRadius: "10px",
            }}
          />
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              height: "300px",
              width: "750px",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default ProfileUser;

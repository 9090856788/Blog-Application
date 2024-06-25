/* eslint-disable no-unused-vars */
// src/components/PostCard.js
import React from "react";
import { Box, Button, Typography, SvgIcon } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const PostCard = () => {
  return (
    <>
      <Box
        name="Container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          boxShadow: "14 14 15 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          name="Card Container"
          sx={{
            width: "350px",
            // height: "480px",
            boxShadow: "0 1px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            overflow: "hidden",
            background:
              "linear-gradient(to bottom right, #ffcccc, #ccccff, #ccffcc, #ffffcc)",
          }}
        >
          <Box
            sx={{
              left: "20px",
              right: "20px",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="/img/contact.jpg" // Replace with your image URL
              alt="Blog Image"
              style={{
                width: "100%",
                // height: "auto",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: 2,
              left: "20px",
              right: "20px",
              textAlign: "center",
            }}
          >
            <Typography className="title" variant="h5" sx={{ color: "#000" }}>
                How to create a Blog
            </Typography>
            <Typography className="text" sx={{ color: "#000" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nostrum!
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 1,
              }}
            >
              <Button className="social-button social-button1">
                <SvgIcon component={Facebook} sx={{ color: "#000" }} />
              </Button>

              <Button className="social-button social-button1">
                <SvgIcon component={Twitter} sx={{ color: "#000" }} />
              </Button>

              <Button className="social-button social-button1">
                <SvgIcon component={Instagram} sx={{ color: "#000" }} />
              </Button>

              <Button className="social-button social-button1">
                <SvgIcon component={LinkedIn} sx={{ color: "#000" }} />
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                className="view-more-button"
                fullWidth
                variant="outlined"
                sx={{ color: "#000", margin: 2 }}
              >
                Read More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PostCard;

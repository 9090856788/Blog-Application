/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, Typography, SvgIcon } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const PostCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Set minimum height for the container
        padding: "20px",
        background:
          "linear-gradient(to bottom right, #ffcccc, #ccccff, #ccffcc, #ffffcc)",
      }}
    >
      <Box
        sx={{
          width: "100%", // Adjust width as needed
          maxWidth: "400px", // Set max-width for responsiveness
          boxShadow: "0 1px 15px rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <img
            src="/img/contact.jpg" // Replace with your image URL
            alt="Blog Image"
            style={{
              width: "100%",
              height: "auto", // Ensure the image scales properly
              display: "block",
            }}
          />
        </Box>
        <Box sx={{ padding: "20px", textAlign: "center" }}>
          <Typography variant="h5" sx={{ color: "#000", marginBottom: 1 }}>
            How to create a Blog
          </Typography>
          <Typography sx={{ color: "#000", marginBottom: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            nostrum!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            {/* Adjusted social icons */}
            <Button className="social-button" sx={{ p: 1, mr: 1 }}>
              <SvgIcon
                component={Facebook}
                sx={{ fontSize: "2rem", color: "#000" }}
              />
            </Button>
            <Button className="social-button" sx={{ p: 1, mr: 1 }}>
              <SvgIcon
                component={Twitter}
                sx={{ fontSize: "2rem", color: "#000" }}
              />
            </Button>
            <Button className="social-button" sx={{ p: 1, mr: 1 }}>
              <SvgIcon
                component={Instagram}
                sx={{ fontSize: "2rem", color: "#000" }}
              />
            </Button>
            <Button className="social-button" sx={{ p: 1 }}>
              <SvgIcon
                component={LinkedIn}
                sx={{ fontSize: "2rem", color: "#000" }}
              />
            </Button>
          </Box>
          <Button
            className="view-more-button"
            fullWidth
            variant="outlined"
            sx={{ color: "#000" }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;

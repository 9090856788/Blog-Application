/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 2, sm: 3 },
        px: { xs: 1, sm: 2 },
        mt: "auto",
        backgroundColor: "#363a42",
        color: "#fff",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          mb: 1,
          textAlign: "center",
          fontSize: { xs: "0.75rem", sm: "1rem" },
        }}
      >
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <IconButton
          component="a"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff", mx: { xs: 0.5, sm: 1 } }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff", mx: { xs: 0.5, sm: 1 } }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff", mx: { xs: 0.5, sm: 1 } }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff", mx: { xs: 0.5, sm: 1 } }}
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;

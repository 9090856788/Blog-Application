/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#363a9",
          color: "#fff",
          padding: "20px", // Added padding for better spacing
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, color: "#fff391" }}>
          About TechiFy's Blog
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: 800, // Adjusted max width for larger screens
            padding: "20px", // Added padding for better spacing
            textAlign: "center",
          }}
        >
          <Typography sx={{ marginBottom: 2, fontSize: "1.2rem" }}>
            Welcome to TechiFy's Blog! This blog was created by a dynamic Team
            as a blog posting Project to share thoughts and ideas with the
            world. TechiFy team is a passionate developer who loves to write
            about technology, coding, and everything in between.
          </Typography>

          <Typography sx={{ marginBottom: 2, fontSize: "1.2rem" }}>
            On this blog, you'll find weekly articles and tutorials on topics
            such as web development, software engineering, and programming
            languages. TechiFy team is always learning and exploring new
            technologies, so be sure to check back often for new content!
          </Typography>

          <Typography sx={{ fontSize: "1.2rem" }}>
            We encourage you to leave comments on our posts and engage with
            other readers. You can like other people's comments and reply to
            them as well. We believe that a community of learners can help each
            other grow and improve.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import backgroundImage from "../img/contact.jpg";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          backgroundColor: "#ffffff", // Background color for the whole page
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", sm: "block" }, // Hide on small screens
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="sm">
            <Paper
              elevation={3}
              sx={{
                padding: 5,
                maxWidth: 600,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "50px",
                background: "#FFF",
                boxShadow: "20px 20px 60px #646f62 -20px -20px 60px #ffffff",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                align="center"
                sx={{ marginBottom: 2 }}
              >
                Contact Us
              </Typography>
              <Box component="form" sx={{ mt: 1, width: "100%" }}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="email"
                  autoComplete="full name"
                  autoFocus
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="Email Address"
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone number"
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  multiline
                  id="message"
                  label="Message"
                  name="message"
                  autoComplete="message"
                />
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ marginTop: 3 }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;

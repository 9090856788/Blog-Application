/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Avatar,
} from "@mui/material";
import { LockOutlined, Send } from "@mui/icons-material"; // Import the Send icon
import backgroundImage from "../img/login.jpg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          flex: 1,
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
          backgroundColor: "white", // Optional: Adds some transparency to the background
        }}
      >
        <Container>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              backgroundColor: "transparent",
              maxWidth: 400,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ marginBottom: 2, backgroundColor: "blue" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
              Forgot Password
            </Typography>
            <Box component="form" sx={{ mt: 1, width: "100%" }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                endIcon={<Send />}
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Send
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                Back to{" "}
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#1976d2",
                  }}
                >
                  Sign in?
                </Link>
              </Typography>
              <Typography align="center" sx={{ mt: 1 }}>
                Already have an account?{" "}
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#1976d2",
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ForgotPassword;

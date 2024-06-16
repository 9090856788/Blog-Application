/* eslint-disable react/no-unescaped-entities */
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
import { Link } from "react-router-dom"; // Import Link for navigation
import { LockOutlined } from "@mui/icons-material";

// Import your background image
import backgroundImage from "../img/signup.jpg"; // Replace with your actual image path

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          }}
        >
          {" "}
          <Avatar sx={{ marginLeft: 19, background: "green" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            {/* Google Sign-in Button (Replace with your actual Google sign-in implementation) */}
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 1 }}
              onClick={() => {
                alert("Google Sign-in clicked"); // Replace with actual Google sign-in logic
              }}
            >
              Login with Google
            </Button>
            {/* Link to Signup Page */}
            <Typography align="center" sx={{ mt: 2 }}>
              Don't have an account?{" "}
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
  );
};

export default LoginPage;

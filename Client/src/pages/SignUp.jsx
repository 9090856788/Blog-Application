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
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import { Google } from "@mui/icons-material"; // Import Google icon from Material-UI icons
import { LockOutlined } from "@mui/icons-material";

// Import your background image
import backgroundImage from "../img/signup.jpg"; // Replace with your actual image path

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Add your sign-up logic here
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
        height: "90vh", // Full viewport height
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
          <Avatar sx={{ marginLeft: 19, background: "green" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Sign Up
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            {/* Google Sign-in Button with Icon */}
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              startIcon={<Google />}
              sx={{ mt: 1 }}
              onClick={() => {
                alert("Google Sign-in clicked"); // Replace with actual Google sign-in logic
              }}
            >
              Sign Up with Google
            </Button>
            <Typography align="center" sx={{ mt: 1 }}>
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#1976d2",
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;

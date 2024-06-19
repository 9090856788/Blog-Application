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
import { Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import backgroundImage from "../img/forgotpass.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
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
          {" "}
          {/* Limit container width for better readability */}
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              maxWidth: 400,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ marginBottom: 2, backgroundColor: "green" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
              Sign in
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
              <Typography align="end" sx={{ mt: 1 }}>
                <Link
                  to="/forgot"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#1976d2",
                  }}
                >
                  Forgot Password?
                </Link>
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Google />}
                sx={{ mt: 1 }}
                onClick={() => alert("Google Sign-in clicked")}
              >
                Login with Google
              </Button>
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
    </Box>
  );
};

export default LoginPage;

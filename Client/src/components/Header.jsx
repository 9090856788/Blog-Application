/* eslint-disable no-unused-vars */
import React from "react";
import { alpha } from "@mui/material/styles";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#363a42",
        maxHeight: "500px",
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure the header is above other content
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              paddingX: 2,
              paddingY: 1,
              background:
                "linear-gradient(to right, #fecaca, #fda4af, #fde047)",
              "&:hover": {
                background:
                  "linear-gradient(to bottom left, #fecaca, #fda4af, #fde047)",
              },
              outline: "none",
              "&:focus": {
                boxShadow: "0 0 0 4px rgba(254, 202, 202, 0.5)",
                "&.Mui-focused": {
                  boxShadow: "0 0 0 4px rgba(252, 165, 165, 0.5)",
                },
              },
              borderRadius: 1,
              color: "black",
              cursor: "pointer",
              textDecoration: "none", // Ensure textDecoration is none
            }}
            variant="h6"
            component="span"
          >
            TechiFy
          </Typography>
        </Link>
        <Box
          sx={{
            position: "relative",
            marginLeft: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 1,
              backgroundColor: (theme) =>
                alpha(theme.palette.common.white, 0.15),
              marginRight: 2,
              marginLeft: 0,
              width: "100%",
            }}
          >
            <Box
              sx={{
                padding: (theme) => theme.spacing(0, 1), // Adjusted padding to reduce height
                height: "100%", // Adjusted height
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                color: "inherit",
                padding: (theme) => theme.spacing(0.5, 1, 0.5, 0), // Adjusted padding to reduce height
                paddingLeft: (theme) => `calc(1em + ${theme.spacing(3)})`, // Adjusted paddingLeft to align with new height
                transition: (theme) => theme.transitions.create("width"),
                width: "100%",
                height: "32px", // Set a fixed height
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography sx={{ marginLeft: 2, color: "white" }}>Home</Typography>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Typography sx={{ marginLeft: 2, color: "white" }}>
              About
            </Typography>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Typography sx={{ marginLeft: 2, color: "white" }}>
              Contact
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FaMoon />
          <Link to="/login">
            <Button variant="outlined" sx={{ marginLeft: 5, color: "white" }}>
              Login
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

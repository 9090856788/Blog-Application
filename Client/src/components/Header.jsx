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
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#363a42", maxHeight: "500px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
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
              }}
              variant="h6"
              component={Link}
              to="/"
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
                  padding: (theme) => theme.spacing(0, 2),
                  height: "100%",
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
                  padding: (theme) => theme.spacing(1, 1, 1, 0),
                  paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)})`,
                  transition: (theme) => theme.transitions.create("width"),
                  width: "100%",
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ marginLeft: 2, color: "white" }}>
                Home
              </Typography>
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
    </Box>
  );
};

export default Header;

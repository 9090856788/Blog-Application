/* eslint-disable no-unused-vars */
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      "&.Mui-focused fieldset": {
        borderColor: "red", // Border color on focus
      },
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

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
              variant="h5"
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ marginLeft: 2 }}>Home</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography sx={{ marginLeft: 2 }}>About</Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography sx={{ marginLeft: 2 }}>Contact</Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FaMoon />
            <Link to="/login">
              {" "}
              <Button variant="outlined" sx={{ marginLeft: 5 }}>
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

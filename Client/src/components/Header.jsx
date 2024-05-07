/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const path = useLocation.pathname;
  return (
    <>
      <Navbar className="border-b-3">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white "
        >
          <span className="px-2 py-1 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-md text-xl text-center me-1 mb-1 text-black">
            TechiFy
          </span>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search ..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline "
          />
        </form>
        <Button
          className="w-12 h-10 self-center pt-1.5 lg:hidden"
          color="gray"
          pill
        >
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/login">
            <Button gradientDuoTone="purpleToBlue" outline>
              Login
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={path === "/"}>
            <Link to="/">Home</Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/about"}>
            <Link to="/about">About</Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/contact"}>
            <Link to="/contact">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;

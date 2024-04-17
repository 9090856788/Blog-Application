/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <Navbar className="border-b-2">
        <div className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
            ZeroTech
          </span>
          Blog
        </div>
        <form>
          <TextInput
            type="text"
            placeholder="Search blogs here ..."
            rightIcon={AiOutlineSearch}
            required
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-35 h-30 lg:hidden" color="grey" pill>
          <AiOutlineSearch />
        </Button>
      </Navbar>
    </>
  );
};

export default Header;

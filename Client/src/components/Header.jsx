/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar } from "flowbite-react";

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
      </Navbar>
    </>
  );
};

export default Header;

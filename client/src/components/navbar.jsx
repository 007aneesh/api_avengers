import React, { useState } from "react";
import Logo from "../images/logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-10 w-full">
      <nav className="flex justify-between items-center px-4 md:px-10 py-2">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-12 md:w-16" />
          <h1 className="text-2xl font-mono font-bold">Vital Vault</h1>
        </div>
        <div className="flex items-center gap-5">
          <div
            className={`items-center gap-5 hidden md:flex font-semibold text-lg`}
          >
            <a href="/" className="hover:underline">
              <h1>About us</h1>
            </a>
            <a href="/" className="hover:underline">
              <h1>Solutions</h1>
            </a>
            <button className="border-black border-2 px-3 py-1 hover:scale-105 transition transform ease-in-out duration-200 bg-black text-white hover:bg-transparent hover:text-black">
              <a href="/signin">Sign In</a>
            </button>
          </div>
          <div className="flex items-center relative">
            <button
              className="flex items-center justify-center md:hidden"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu className="text-3xl" />
            </button>
            {showMenu && (
              <div className="absolute top-full right-0 w-auto bg-white px-10 py-3 mt-1 shadow-2xl rounded-md">
                <a href="/" className="block mb-2 hover:underline">
                  About us
                </a>
                <a href="/" className="block hover:underline">
                  Solutions
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

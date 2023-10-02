import React from "react";
import Logo from "../images/logo.webp";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={Logo} alt="logo"/>
          <h1>
            Vital Vault
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

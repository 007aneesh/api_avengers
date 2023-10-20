import React, { useState } from "react";
import Logo from "../images/logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = ({ isAuthenticated, isAdmin }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  let patientId;
  let data;
  if(isAdmin){
    data = localStorage.getItem("admin");
  }else{
    patientId = localStorage.getItem("patientId");
  }
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
            <Link to="/about">
              <h1>About us</h1>
            </Link>
            <HashLink smooth to="/#solutions">
              <h1>Solutions</h1>
            </HashLink>
            {isAuthenticated ? (
              isAdmin ? (
                <button
                  onClick={() =>
                    navigate(`/admin/${data}`, {
                      state: data,
                    })
                  }
                  className="border-[#3555ac] rounded-md lg:text-base font-medium border-2 px-3 py-1 hover: bg-[#3555ac] transition transform ease-in-out duration-500 text-white hover:bg-transparent hover:text-[#3555ac]"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={() =>
                    navigate(`/dashboard/patient/${patientId}`, {
                      state: patientId,
                    })
                  }
                  className="border-[#3555ac] rounded-md lg:text-base font-medium border-2 px-3 py-1 hover: bg-[#3555ac] transition transform ease-in-out duration-500 text-white hover:bg-transparent hover:text-[#3555ac]"
                >
                  Sign In
                </button>
              )
            ) : (
              <Link to="/signin">
                <button className="border-[#3555ac] rounded-md lg:text-base font-medium border-2 px-3 py-1 hover: bg-[#3555ac] transition transform ease-in-out duration-500 text-white hover:bg-transparent hover:text-[#3555ac]">
                  Sign In
                </button>
              </Link>
            )}
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
                <Link to="/about" className="block mb-2">
                  About us
                </Link>
                <HashLink smooth to="/#solutions">
                  <h1>Solutions</h1>
                </HashLink>
                <Link to="/signin">
                  <button className="border-[#3555ac] rounded-md lg:text-base font-medium text-[0.9rem] mt-2 border-2 px-2 py-1 hover: bg-[#3555ac] transition transform ease-in-out duration-500 text-white hover:bg-transparent hover:text-[#3555ac]">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

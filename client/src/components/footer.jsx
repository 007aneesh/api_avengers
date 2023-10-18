import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../images/logo2.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="topFooter">
        <div className="logoFooter">
          <img src={logo} alt="logo" />
          <h2>Vital Vault</h2>
          <p>Your Partner in Healthcare Data Solutions.</p>
        </div>
        <div className="rightFooter">
          <div className="linkFooter">
            <div className="linkHeading">
              <h2>Top Links</h2>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
            <div className="links">
              <Link to="/about">
                <i className="bx bx-right-arrow-alt"></i>
                <h2 className="underlin">About</h2>
              </Link>
            </div>
            <div className="links">
              <Link to="/privacy-policy">
                <i className="bx bx-right-arrow-alt"></i>
                <h2 className="underlin">Privacy Policy</h2>
              </Link>
            </div>
            <div className="links">
              <Link to="/privacy-policy">
                <i className="bx bx-right-arrow-alt"></i>
                <h2 className="underlin">License</h2>
              </Link>
            </div>
          </div>
          <div className="socialFooter">
            <div className="socialHeading">
              <h2>Social Links</h2>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
            <div className="socialLinks">
              <div className="social underlin">
                <Link to="/">
                  <i className="bx bxl-instagram"></i>
                </Link>
              </div>
              <div className="social underlin">
                <Link to="/">
                  <i className="bx bxl-facebook"></i>
                </Link>
              </div>
              <div className="social underlin">
                <Link to="/">
                  <i className="bx bxl-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="bottomFooter">
        <p>@copyright | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

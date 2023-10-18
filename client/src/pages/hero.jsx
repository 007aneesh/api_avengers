import React from "react";
import heroImg from '../images/heroImg.webp';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../components/style.css"
const Hero = () => {
  return (
    <div className="pt-20 lg:pt-0 h-screen md:h-auto lg:h-screen flex flex-col items-center justify-start lg:justify-center">
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        className="flex flex-col justify-center"
      >
        <div className="flex flex-col md:flex-row w-full py-4 px-8 gap-8 md:gap-6 md:py-8 md:px-16 lg:p-16 justify-center md:items-center">
          <div className="md:w-1/2 flex flex-col items-start justify-center gap-y-1 lg:pl-5">
            <h1 className="font-bold text-2xl text-[#555] uppercase md:text-3xl lg:text-6xl">
              Your Partner in
            </h1>
            <h1 className="font-bold text-2xl uppercase md:text-3xl lg:text-6xl py-2 text-[#3555ac]">
              Healthcare
            </h1>
            <h1 className="font-bold text-2xl uppercase md:text-3xl lg:text-6xl text-[#3555ac]">
              Data Solutions
            </h1>
            <p className="font-bold text-lg lg:text-xl text-[#555] py-4">
              Unlocking Insights, Driving Innovation
            </p>
            <div className="gap-5 flex items-center py-3">
              <HashLink smooth to="/#solutions">
                <button className="border-[#3555ac] rounded-md lg:text-md font-medium border-2 px-4 py-2 hover: bg-[#3555ac] transition transform ease-in-out duration-500 text-white hover:bg-transparent hover:text-[#3555ac]">
                  Explore our Solutions
                </button>
              </HashLink>

              <Link to="/signup">
                <button className="border-[#3555ac] rounded-md lg:text-md font-medium border-2 px-4 py-2 hover: bg-[#3555ac] transition transform ease-in-out duration-500 text-white hover:bg-transparent hover:text-[#3555ac]">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={heroImg}
              className="select-none pointer-events-none"
              alt="data-security"
            />
          </div>
        </div>
      </div>
      <div className="blink_me absolute bottom-16 md:hidden">
        <h2 className="text-xl lg:text-base  flex items-center justify-center">
          Scroll down to know more!
        </h2>
      </div>
    </div>
  );
};

export default Hero;

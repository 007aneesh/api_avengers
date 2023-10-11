import React from "react";
import heroImg from '../images/heroImg.webp';
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="pt-20 lg:pt-0 lg:h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center">
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
              <button className="border-[#3555ac] rounded-md lg:text-md font-medium border-2 px-4 py-2 hover: bg-[#3555ac] transition transform ease-in-out duration-500 text-white hover:bg-transparent hover:text-[#3555ac]">
                Explore our Solutions
              </button>
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
    </div>
  );
};

export default Hero;

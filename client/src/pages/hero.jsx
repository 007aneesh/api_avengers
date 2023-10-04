import React from "react";

const Hero = () => {
  return (
    <div className="pt-20 lg:h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row w-full py-4 px-8 gap-8 md:gap-6 md:py-8 md:px-16 lg:p-16 justify-center md:items-center">
          <div className="md:w-1/2 flex flex-col items-start gap-y-1 lg:pl-5">
            <h1 className="font-bold text-2xl uppercase md:text-3xl lg:text-5xl">
              Your Partner
            </h1>
            <h1 className="font-bold text-2xl uppercase md:text-3xl lg:text-5xl">
              in Healthcare
            </h1>
            <h1 className="font-bold text-2xl uppercase md:text-3xl lg:text-5xl">
              Data Solutions
            </h1>
            <p className="font-semibold text-lg lg:text-xl py-1">
              Unlocking Insights, Driving Innovation
            </p>
            <div className="gap-5 flex items-center py-3">
              <button className="border-black lg:text-lg border-2 px-3 py-1 hover:scale-105 transition transform ease-in-out duration-200 bg-[#357960] text-white hover:bg-transparent hover:text-black">
                Explore our solutions
              </button>
              <button className="border-black lg:text-lg border-2 px-3 py-1 hover:scale-105 transition transform ease-in-out duration-200 bg-[#357960] text-white hover:bg-transparent hover:text-black">
                Register
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/499/177/non_2x/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png"
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

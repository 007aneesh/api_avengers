import React, { useEffect } from "react";
import aneesh from "../images/aneesh.jpeg";
import akash from "../images/akash.jpeg";
import banner from "../images/about_banner.png";
import Img1 from "../images/aboutimg1.png";
import Img2 from "../images/aboutimg2.png";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img
        src={banner}
        alt="banner"
        className="w-full h-auto lg:h-80 pointer-events-none select-none"
      />
      <div
        data-aos="zoom-in-right"
        className="flex flex-col md:flex-row p-8 lg:px-28 items-start gap-x-10 gap-y-5 lg:-mt-10"
      >
        <div className="w-full md:w-1/2 lg:w-2/3 lg:mt-10">
          <h2 className="text-base">About Vital Vault</h2>
          <h1 className="font-bold text-xl lg:text-2xl pt-1 pb-2 md:pb-3">
            Our <span className="text-[#3555ac]">Mission</span>
          </h1>
          <p className="max-w-2xl text-xs md:text-sm font-medium">
            At Vital Vault, our mission is to revolutionize healthcare by
            providing cutting-edge solutions for patient data management. We are
            committed to ensuring that patient data is not only efficiently
            organized but also kept secure and accessible when needed. Our
            dedication to this mission is driven by the following core
            principles - Patient-Centric Care, Data Security Above All,
            Empowering Patients, Growth and Adaptation and Support and
            Collaboration.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-5 md:px-0">
          <img src={Img1} alt="img1" />
        </div>
      </div>
      <div
        data-aos="zoom-in-left"
        className="flex flex-col md:flex-row-reverse p-8 lg:px-28 items-start gap-x-10 lg:gap-x-12 gap-y-5 lg:-mt-10 mb-3"
      >
        <div className="w-full md:w-1/2 lg:w-2/3 lg:mt-10">
          <h2 className="text-base">Why choose Vital Vault</h2>
          <h1 className="font-bold text-xl lg:text-2xl pt-1 pb-2 md:pb-3">
            Our <span className="text-[#3555ac]">Vision and Goal</span>
          </h1>
          <p className="max-w-2xl text-xs md:text-sm font-medium">
            At Vital Vault, our vision is to be the driving force behind a
            healthcare revolution where data becomes a catalyst for improved
            patient outcomes, enhanced care quality, and streamlined processes.
            We envision a healthcare ecosystem where data is seamlessly
            harnessed, securely managed, and used intelligently for the
            betterment of all stakeholders. Vital Vault's primary goal is to set
            new standards in patient data management.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-5 md:px-0">
          <img src={Img2} alt="img2" />
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        className="flex items-center justify-center mt-5"
      >
        <h1 className="font-bold text-xl lg:text-2xl p-1">
          Our <span className="text-[#3555ac]">Team</span>
        </h1>
      </div>
      <div
        data-aos="zoom-in-up"
        className="flex flex-col md:flex-row p-8 lg:px-[15%] w-full items-center gap-10 lg:gap-20 justify-evenly"
      >
        <div className="w-full md:w-96 px-6 py-10  text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10">
          <div className="space-y-4 xl:space-y-6">
            <img
              className="mx-auto rounded-full select-none pointer-events-none h-36 w-36"
              src={aneesh}
              alt="author avatar"
            />
            <div className="space-y-2">
              <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                <h3 className="text-white">Aneesh Aggarwal</h3>
                <p className="text-indigo-300">Web Developer</p>
                <div className="flex justify-center mt-5 space-x-5">
                  <Link
                    to="https://github.com/007aneesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-400"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 496 512"
                      className="w-6 h-6 text-gray-400 hover:text-gray-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/aneeshaggarwal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-400"
                  >
                    <span className="sr-only">Linkedin</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      className="w-6 h-6 text-gray-400 hover:text-gray-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-96 px-6 py-10  text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10">
          <div className="space-y-4 xl:space-y-6">
            <img
              className="mx-auto rounded-full select-none pointer-events-none h-36 w-36"
              src={akash}
              alt="author avatar"
            />
            <div className="space-y-2">
              <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                <h3 className="text-white">Akash Chakraborty</h3>
                <p className="text-indigo-300">Web Developer</p>
                <div className="flex justify-center mt-5 space-x-5">
                  <Link
                    to="https://github.com/Akash-1627"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-400"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 496 512"
                      className="w-6 h-6 text-gray-400 hover:text-gray-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/akash-chakraborty-463830219/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-400"
                  >
                    <span className="sr-only">Linkedin</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      className="w-6 h-6 text-gray-400 hover:text-gray-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8 lg:px-28 w-full items-center justify-center">
        <h1 className="font-bold md:text-xl pt-1 pb-2 md:pb-3 text-center">
          Welcome to the future of healthcare.
        </h1>
        <p className="text-center max-w-xl text-xs md:text-sm">
          Where you're in control of your health data and well-being. Are you
          ready to experience a new era of personalized care and seamless
          management of your health records? Sign up today and embark on a
          journey of empowerment, security, and excellence in healthcare.
        </p>
        <Link to="/signup">
          <button className="border-2 px-3 py-1 my-4 md:ml-4 md:mr-4 text-white hover:bg-transparent hover:text-black bg-[#3555ac] hover:scale-110 transition duration-300 ease-in-out border-[#3555ac] hover:border-black text-lg font-sans rounded-xl">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

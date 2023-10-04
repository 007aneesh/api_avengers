import React, { useEffect, useState } from "react";
import Logo from "../../../images/logo.webp";
import { AiOutlineClose, AiOutlineFileText } from "react-icons/ai";
import { FaUserCircle, FaPowerOff, FaAngleDoubleRight } from "react-icons/fa";
import { MdDelete, MdSpaceDashboard } from "react-icons/md";
import { BiMenuAltLeft, BiSolidReport } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../images/logo.webp";
import Data from "../userData/userData";
import Prescription from "../prescriptions/prescription";

import Report from "../reports/report";
import Profile from "../profile/profile";
const UserDashboard = () => {
  const navigate = useNavigate();
  const name = 'Aneesh';
  const open = () => {
    document.querySelector(".sidebar").classList.toggle("left-[-300px]");
  };
  const [selectedButton, setSelectedButton] = React.useState("Dashboard");

  const [imgDialog, setImgDialog] = useState(false);

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  const handleSignOut = () => {
    navigate("/");
  };

  const renderComponent = () => {
    switch (selectedButton) {
      case "Dashboard":
        return <Data />;
      case "Prescriptions":
        return <Prescription />;
      case "My Reports":
        return <Report />;
      case "My Profile":
        return <Profile />
      default:
        return <Data />;
    }
  };

  const toggleImage = () => {
    setImgDialog(!imgDialog);
  };

  useEffect(() => {
    if (imgDialog) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [imgDialog]);

  const openFileInput = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      // const apiUrl = "https://example.com/api/upload";
      
    }
  };

  return (
    <>
      <div className="bg-[#ECECEC] w-full h-full min-h-screen">
        <span
          onClick={() => open()}
          className="absolute cursor-pointer text-white w-14 h-14 bg-black flex items-center justify-center top-4 left-4 rounded-md text-4xl"
        >
          <BiMenuAltLeft />
        </span>
        {imgDialog && (
          <div
            className={`fixed img w-full h-screen top-0 left-0 items-center justify-center z-10 bg-black/50 ${
              imgDialog ? "flex" : "hidden"
            }`}
          >
            <div className="flex flex-col relative w-[90%] h-min md:w-1/2 lg:w-[40%] p-4 bg-[#1b1f23] rounded-xl">
              <div className="flex flex-row items-center text-white justify-between w-full">
                <h1>Profile photo</h1>
                <button type="button" onClick={toggleImage}>
                  X
                </button>
              </div>
              <div className="w-full flex justify-center items-center py-3 border-gray-700 border-b-2">
                <img
                  src={img}
                  alt="user"
                  className="h-32 w-32 md:w-36 md:h-36 mb-2"
                />
              </div>
              <div className="mt-2 text-white w-full flex px-5 py-1 justify-between items-center">
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileSelect(e)}
                />

                <button
                  onClick={openFileInput}
                  className="flex flex-col items-center justify-center"
                >
                  <FiEdit3 className="" />
                  <p>Edit</p>
                </button>

                <button className="flex flex-col items-center justify-center">
                  <MdDelete className="" />
                  <p>Delete</p>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="sidebar shadow-2xl transition ease-in-out duration-500 fixed top-0 bottom-0 lg:left-0 left-[-300px]  w-[300px] overflow-y-auto text-center bg-white">
          <div className="text-black text-xl bg-[#ECECEC] px-2">
            <div className="p-2  flex items-center justify-between border-none outline-none">
              <Link to="/" className="flex flex-row items-center">
                <img src={Logo} alt="logo" className="w-20" />
                <h1 className="text-2xl uppercase font-mono font-bold">
                  Vital Vault
                </h1>
              </Link>
              <AiOutlineClose
                onClick={() => open()}
                className="cursor-pointer lg:hidden"
              />
            </div>
            <hr className="my-3 text-gray-800"></hr>
          </div>
          <div className="py-2.5 mt-3 relative flex flex-col items-center justify-center text-xl font-sans font-bold rounded-md px-6">
            <div className="relative mb-1">
              <div className="relative rounded-full w-24 h-24">
                <img src={img} alt="user" className="w-full h-full mb-2" />
              </div>
              <div
                onClick={toggleImage}
                className="w-7 h-7 cursor-pointer hover:scale-105 transition ease-in-out duration-200 flex items-center justify-center rounded-full bg-[#662890] absolute right-0 bottom-1"
              >
                <FiEdit3 className="text-white text-sm" />
              </div>
            </div>
            <div>
              <h1>Hello, {name}</h1>
            </div>
          </div>
          {[
            { text: "Dashboard", icon: <MdSpaceDashboard className="mr-3" /> },
            {
              text: "Prescriptions",
              icon: <AiOutlineFileText className="mr-3" />,
            },
            { text: "My Reports", icon: <BiSolidReport className="mr-3" /> },
            {
              text: "My Profile",
              icon: <FaUserCircle className="mr-3" />,
            },
          ].map(({ icon, text }, index) => (
            <div
              onClick={() => handleButtonClick(text)}
              className={`${
                selectedButton === text
                  ? "border-b-2 text-black"
                  : "text-black/60"
              }  py-2 mt-3 flex items-center mx-4 text-lg  hover:text-[#662890] rounded-md pl-8 cursor-pointer hover:border-b-2 border-b-[#662890]/60`}
            >
              {icon}
              <h1 className=" md:text-base ">{text}</h1>
            </div>
          ))}
          <div
            onClick={handleSignOut}
            className="py-3 mt-1 flex text-black/60 items-center mx-4 text-lg hover:text-red-500 rounded-md pl-8 cursor-pointer hover:border-b-2 border-b-[#662890]/60"
          >
            <FaPowerOff className="mr-3 " />
            <h1 className=" md:text-base hover:text-black/60">Log Out</h1>
          </div>
        </div>
        <div
          className={
            "pt-20 lg:ml-[300px] p-4 md:p-6 md:pt-28 lg:py-4 lg:pl-10 lg:pr-6"
          }
        >
          <div className="w-full h-full my-3 flex flex-row items-center gap-2 ">
            <Link
              to="/"
              className="hover:text-[#662890] font-semibold text-base"
            >
              <h1>Home</h1>
            </Link>
            <FaAngleDoubleRight />
            <h1 className="font-semibold text-lg">{selectedButton}</h1>
          </div>
          <div
            className={`bg-white shadow-xl flex flex-col w-full h-full rounded-lg ${
              selectedButton === "Inbox" ? "p-0" : "p-3 "
            }`}
          >
            {renderComponent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../images/logo.webp";
import { AiOutlineClose, AiFillSetting } from "react-icons/ai";
import { FaPowerOff, FaAngleDoubleRight } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { BiMenuAltLeft, BiSolidReport } from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../images/user.webp";
import Data from "./dashboardData";
import Search from "../search/search";
import List from "../list/list";
import Settings from "../settings/setting";
const UserDashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const registrationNo = location.state?.registrationNo;

  const open = () => {
    document.querySelector(".sidebar").classList.toggle("left-[-300px]");
  };
  const [selectedButton, setSelectedButton] = React.useState("Dashboard");

  const [dataReceived, setData] = useState(null);
  const isDataFetched = useRef(false);

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/admin/${registrationNo}`
      );
      const user = await response.json();
      setData(user);
      isDataFetched.current = true;
    } catch (error) {
      console.log("Error fetching data!");
    }
  };

  useEffect(() => {
    if (!isDataFetched.current) {
      getData();
    }
  });

  const handleButtonClick = (text) => {
    setSelectedButton(text);
  };

  const handleSignOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
  };

  const renderComponent = () => {
    switch (selectedButton) {
      case "Dashboard":
        return <Data dataReceived={dataReceived} />;
      case "Search Patient":
        return <Search dataReceived={dataReceived} />;
      case "Patient List":
        return <List dataReceived={dataReceived} />;
      case "Settings":
        return <Settings />;
      default:
        return <Data />;
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
              <div className="relative rounded-full w-24 h-24 p-3">
                <img src={img} alt="admin" className="w-full h-full mb-2" />
              </div>
            </div>
            <div>
              <h1>
                Welcome,{" "}
                {dataReceived?.userName ? dataReceived?.userName : "Admin"}{" "}
              </h1>
            </div>
          </div>
          {[
            { text: "Dashboard", icon: <MdSpaceDashboard className="mr-3" /> },
            {
              text: "Search Patient",
              icon: <BsSearch className="mr-3" />,
            },
            { text: "Patient List", icon: <BiSolidReport className="mr-3" /> },
            { text: "Settings", icon: <AiFillSetting className="mr-3" /> },
          ].map(({ icon, text }, index) => (
            <div
              onClick={() => handleButtonClick(text)}
              key={index}
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
            <h1 className=" md:text-base">Log Out</h1>
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

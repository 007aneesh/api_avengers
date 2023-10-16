import React, { useState } from "react";
import logo from "../images/logo.webp";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import OtpInput from "react-otp-input";
import "./signup.css";

const Signin = () => {
  const navigate = useNavigate();

  const formArray = [1, 2, 3, 4];

  const [otp, setOtp] = useState("");

  const [formNo, setFormNo] = useState(formArray[0]);

  const pre = () => {
    if (formNo === 1) {
      navigate(-1);
    } else if (formNo === 2) {
      setFormNo(formNo - 1);
    } else if (formNo === 3) {
      setFormNo(formNo - 2);
    } else {
      setFormNo(formNo - 1);
    }
  };
  const submit = (e) => {
    e.preventDefault();
    if (isorgChecked === true) {
      // sendOrgData();
      return;
    } else if (ispatChecked === true) {
      sendPatData();
    }
  };

  const [isorgChecked, setIsorgChecked] = useState(false);
  const [ispatChecked, setIspatChecked] = useState(false);

  const handleorgCheck = () => {
    setIsorgChecked(!isorgChecked);
    setIspatChecked(false);
  };
  const handlepatCheck = () => {
    setIspatChecked(!ispatChecked);
    setIsorgChecked(false);
  };
  const next = (form) => {
    if (isorgChecked === true) {
      setFormNo(form + 1);
    } else if (ispatChecked === true) {
      setFormNo(form + 2);
    }
  };
  const dis = () => {
    if (isorgChecked === false || ispatChecked === false) {
      return false;
    } else {
      return true;
    }
  };

  const getOTP = () => {
    setFormNo(4);

    // if (isorgChecked === true) {
    //   setOrgData({
    //     ...orgData,
    //     verified: true,
    //   });
    // } else if (ispatChecked === true) {
    //   setPatientData({
    //     ...patientData,
    //     verified: true,
    //   });
    // }
  };
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (isorgChecked === true) {
      setOrgData({ ...orgData, [name]: value });
    } else if (ispatChecked === true) {
      setPatientData({ ...patientData, [name]: value });
    }
  };

  const [orgData, setOrgData] = useState({
    registrationNo: "",
    password: "",
  });

  const [patientData, setPatientData] = useState({
    aadharNumber: "",
    password: "",
  });

  const serverUrl =
    process.env.REACT_APP_API_URL || "http://localhost:8000/patLogin";

  // const sendOrgData = async () => {

  //   const { password, registrationNo, verified } = orgData;

  //   const res = await fetch(serverUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       password,
  //       registrationNo,
  //       verified,
  //     }),
  //   });

  //   const data = await res.json();
  //   console.log("OrgData: ", data);

  //   if (res.status === 400 || !data) {
  //     window.alert("Invalid Credentials");
  //   } else {
  //     window.alert("LOGIN Successful");
  //     navigate("/admin", { state: orgData });
  //   }
  // };

  const sendPatData = async (e) => {
    e.preventDefault();
    const { aadharNumber, password } = patientData;

    const res = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aadharNumber,
        password,
      })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("LOGIN Successful");
      navigate(`/dashboard/patient/${data.patientId}`, {
        state: data.patientId,
      });
    }
  };

  

  return (
    <>
      <div className="px-6 py-3  lg:px-20 flex justify-between items-center mb-4 md:mb-1">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20" />
        </Link>
        <button onClick={() => pre()}>
          <IoArrowBackCircleOutline className="text-4xl" />
        </button>
      </div>
      <div className="px-16 mt-3">
        <div className="flex justify-center items-center">
          <form method="POST" action={serverUrl}>
            <div className="">
              <div className="my-5 w-screen flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center mb-8">
                  {formNo === 1 && (
                    <div className="flex flex-col items-center justify-center text-center">
                      <h1 className="text-3xl font-extrabold font-sans text-[#444] text-center md:text-5xl ">
                        Signin to your Managed Data
                      </h1>
                    </div>
                  )}
                  {formNo === 2 && (
                    <div className="flex flex-col items-center justify-center text-center">
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] mt-6 mb-6 text-center md:text-5xl ">
                        Sign in as an Organisation
                      </h1>
                    </div>
                  )}
                  {formNo === 3 && (
                    <div className="flex flex-col items-center justify-center text-center">
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] mt-6 mb-6 text-center md:text-5xl ">
                        Sign in as a Patient
                      </h1>
                    </div>
                  )}
                </div>
                {formNo === 1 && (
                  <div className="formOne">
                    <h1 className="optionTitle">Sign in as </h1>

                    <div className="options">
                      <div
                        className="orgOption"
                        style={{
                          borderColor: isorgChecked ? "#3555ac" : "#888",
                        }}
                        onClick={handleorgCheck}
                      >
                        <p style={{ color: isorgChecked ? "#3555ac" : "#888" }}>
                          Organisation
                        </p>
                      </div>
                      <div
                        className="patOption"
                        style={{
                          borderColor: ispatChecked ? "#3555ac" : "#888",
                        }}
                        onClick={handlepatCheck}
                      >
                        <p style={{ color: ispatChecked ? "#3555ac" : "#888" }}>
                          Patient
                        </p>
                      </div>
                    </div>

                    <div className="changes mt-8">
                      <div className="buttonTwo">
                        <button
                          onClick={() => next(formNo)}
                          disabled={dis()}
                          className={`${
                            isorgChecked || ispatChecked
                              ? "bg-[#3555ac] text-white"
                              : "bg-gray-500"
                          }`}
                        >
                          <p>Next</p>
                          <i className="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 2 && (
                  <div className="formOne">
                    <div className="field">
                      <div className="leftformField mb-6">
                        <div className="formField">
                          <input
                            type="text"
                            name="registrationNo"
                            value={orgData?.registrationNo}
                            onChange={handleChange}
                            placeholder="Organisation Registration Number"
                            required=""
                          />
                        </div>
                        <div className="formField flex flex-col items-center">
                          <input
                            type="password"
                            name="password"
                            value={orgData?.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required=""
                          />
                          <a
                            href="/"
                            className="mt-2 text-base font-medium text-[#3555ac] hover:underline"
                          >
                            Forgot Password
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="formButtons">
                      <div className="buttonOne">
                        <button onClick={() => pre()}>
                          <i className="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className="buttonTwo">
                        <button onClick={() => getOTP()}>
                          <p>getOTP</p>
                          <i className="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 3 && (
                  <div className="formOne">
                    <div className="field">
                      <div className="leftformField mb-6">
                        <div className="formField">
                          <input
                            type="number"
                            name="aadharNumber"
                            value={patientData?.aadharNumber}
                            onChange={handleChange}
                            placeholder="Aadhar Card Number"
                            required=""
                          />
                        </div>
                        <div className="formField flex flex-col items-center">
                          <input
                            type="password"
                            name="password"
                            value={patientData?.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required=""
                          />
                          <a
                            href="/"
                            className="mt-2 text-base font-medium text-[#3555ac] hover:underline"
                          >
                            Forgot Password
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="formButtons">
                      <div className="buttonOne">
                        <button onClick={() => pre()}>
                          <i className="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className="buttonTwo">
                        <button onClick={(e) => sendPatData(e)}>
                          <p>Get OTP</p>
                          <i className="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* {formNo === 4 && (
                  <div className="formOne">
                    <div className="field">
                      <div className="leftformField mb-6">
                        <div className="pb-5">
                          <h1>Verify OTP</h1>
                        </div>
                        <div className="formField flex flex-col items-center py-5">
                          <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span>&emsp;&emsp;</span>}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{
                              width: "3rem",
                              height: "3rem",
                            }}
                            shouldAutoFocus
                          />
                        </div>
                      </div>
                    </div>
                    <div className="formButtons px-5 md:px-10">
                      <div className="buttonOne">
                        <button onClick={() => pre()}>
                          <i className="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className="buttonTwo">
                        <button onClick={() => submit()}>
                          <p>Submit</p>
                          <i className="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;

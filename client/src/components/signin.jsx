import React, { useState } from "react";
import logo from "../images/logo.webp";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import OtpInput from "react-otp-input";
import "./signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const Signin = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const formArray = [1, 2, 3, 4];

  const [otp, setOtp] = useState("");

  const [formNo, setFormNo] = useState(formArray[0]);

  const [loading, setLoading] = useState(false);

  const override = {
    paddingTop: "5px",
  };

  const pre = () => {
    if (formNo === 1) {
      navigate(-1);
    } else if (formNo === 2) {
      setFormNo(formNo - 1);
    } else if (formNo === 3) {
      setFormNo(formNo - 2);
    } else if (formNo === 4) {
      setFormNo(formNo - 3);
    }
  };
  const submit = (e) => {
    e.preventDefault();
    if (isorgChecked === true) {
      sendOrgData();
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
  const checkOrgData = () => {
    if (orgData.registrationNo === "" || orgData.password === "") {
      toast.error("Fields cannot be Empty", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      getOTP();
    }
  };
  const checkPatData = () => {
    if (patientData.aadharNumber === "" || patientData.password === "") {
      toast.error("Fields cannot be Empty", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      getOTP();
    }
  };

  const [patientData, setPatientData] = useState({
    aadharNumber: "",
    password: "",
  });

  const patientUrl = `${process.env.REACT_APP_BASEURL}/patLogin`;

  const adminUrl = `${process.env.REACT_APP_BASEURL}/orgLogin`;

  const sendOrgData = async () => {
    const { registrationNo, password } = orgData;
    setLoading(true);
    const res = await fetch(adminUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registrationNo,
        password,
      }),
    });

    const data = await res.json();

    setIsAuthenticated(true);
    localStorage.setItem("admin", registrationNo);

    if (res.status === 400 || !data) {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setOtp("");
      setLoading(false);
      setFormNo(2);
      setOrgData(
        {
          registrationNo: "",
          password: "",
        }
      )
    } else {
      toast.success("LOGIN Successful", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate(`/admin/${registrationNo}`, { state: registrationNo });
      }, 1000);
    }
  };

  const sendPatData = async () => {
    const { aadharNumber, password } = patientData;
    setLoading(true);
    const res = await fetch(patientUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aadharNumber,
        password,
      }),
    });

    const data = await res.json();
    setIsAuthenticated(true);
    const patientId = data.patientId;
    const token = data.token;

    localStorage.setItem("token", token);
    localStorage.setItem("patientId", patientId);

    if (res.status === 400 || !data) {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setOtp("");
      setLoading(false);
      setFormNo(3);
      setPatientData(
        {
          aadharNumber: "",
          password: "",
        }
      )
    } else {
      toast.success("LOGIN Successful", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate(`/dashboard/patient/${patientId}`, {
          state: patientId,
        });
      }, 1000);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
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
          <form method="POST" action={adminUrl}>
            <div className="">
              <div className="my-5 w-screen flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center mb-8">
                  {formNo === 1 && (
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="300"
                      data-aos-offset="0"
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <h1 className="text-3xl font-extrabold font-sans text-[#444] text-center md:text-5xl ">
                        Signin to your Managed Data
                      </h1>
                    </div>
                  )}
                  {formNo === 2 && (
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="300"
                      data-aos-offset="0"
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] mt-6 mb-6 text-center md:text-5xl ">
                        Sign in as an Organisation
                      </h1>
                    </div>
                  )}
                  {formNo === 3 && (
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="300"
                      data-aos-offset="0"
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] mt-6 mb-6 text-center md:text-5xl ">
                        Sign in as a Patient
                      </h1>
                    </div>
                  )}
                </div>
                {formNo === 1 && (
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    className="formOne"
                  >
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
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    className="formOne"
                  >
                    <div className="field">
                      <div className="leftformField mb-6">
                        <div className="formField">
                          <input
                            type="number"
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
                        <button type="button" onClick={() => checkOrgData()}>
                          <p>Get OTP</p>
                          <i className="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 3 && (
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    className="formOne"
                  >
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
                        <button type="button" onClick={() => checkPatData()}>
                          <p>Get OTP</p>
                          <i className="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 4 && (
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    className="formOne"
                  >
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
                        {loading ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "0.2rem 1rem",
                            }}
                          >
                            <ClipLoader color="#fff" css={override} />
                          </div>
                        ) : (
                          <button disabled={loading} onClick={(e) => submit(e)}>
                            <p>Submit</p>
                            <i className="bx bx-right-arrow-alt"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;

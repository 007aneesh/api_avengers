import React, { useState } from "react";
import logo from "../images/logo.webp";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./signup.css";
const Onboarding = () => {
const navigate = useNavigate();
  const formArray = [1, 2, 3, 4, 5];
  const [formNo, setFormNo] = useState(formArray[0]);
  const next = (form) => {
    setFormNo(form + 1);
  };
  const pre = () => {
    if(formNo === 1) navigate(-1);
    if (formNo >= 2) setFormNo(formNo - 1);
  };
  const submit = () => {
    console.log("Submitted");
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
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-3xl font-extrabold font-sans text-center md:text-5xl ">
          Ready to Manage Your Health Data?
        </h1>
        <h1 className="text-xl mt-2 md:mt-5 font-semibold">
          Let's Get Started!
        </h1>
      </div>
      <div className="px-16 mt-3">
        <div className="flex justify-center items-center">
          <form>
            <div className="">
              <div className="my-5">
                {formNo === 1 && (
                  <div>
                    <div className="formOne">
                      <div className="field">
                        <div className="leftformField">
                          <div className="formField">
                            <input
                              type="text"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                          <div className="formField">
                            <input
                              type="email"
                              placeholder="Your E-Mail"
                              required=""
                            />
                          </div>
                          <div className="formField">
                            <input
                              type="email"
                              placeholder="Your E-Mail"
                              required=""
                            />
                          </div>
                          <div className="formField">
                            <input
                              type="email"
                              placeholder="Your E-Mail"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="rightformField">
                          <div className="formField">
                            <input
                              type="text"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                          <div className="formField">
                            <input
                              type="email"
                              placeholder="Your E-Mail"
                              required=""
                            />
                          </div>
                          <div className="formField">
                            <input
                              type="email"
                              placeholder="Your E-Mail"
                              required=""
                            />
                          </div>
                          <div className="formField">
                            <input
                              type="email"
                              placeholder="Your E-Mail"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="formButtons">
                        <div className="buttonTwo">
                          <button onClick={() => next(formNo)}>
                            <p>Next</p>
                            <i class="bx bx-right-arrow-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 2 && (
                  <div>
                    <div className="formButtons">
                      <div className="buttonOne">
                        <button onClick={() => pre()}>
                          <i class="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className="buttonTwo">
                        <button onClick={() => next(formNo)}>
                          <p>Next</p>
                          <i class="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 3 && (
                  <div>
                    <div className="formButtons">
                      <div className="buttonOne">
                        <button onClick={() => pre()}>
                          <i class="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className="buttonTwo">
                        <button onClick={() => next(formNo)}>
                          <p>Next</p>
                          <i class="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 4 && (
                  <div>
                    <div className="formButtons">
                      <div className="buttonOne">
                        <button onClick={() => pre()}>
                          <i class="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className="buttonTwo">
                        <button onClick={() => next(formNo)}>
                          <p>Next</p>
                          <i class="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 5 && (
                  <div className="flex items-center justify-center my-8">
                    yaha par checkbox dena hai to accept our privacy policy
                    <div className="formButtons">
                      <div className="buttonOne">
                        <button onClick={() => pre()}>
                          <i class="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className="buttonTwo">
                        <button onClick={() => next(formNo)}>
                          <p>Next</p>
                          <i class="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-row justify-center mt-7">
                {formNo === 5 && <div>yaha submit button</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Onboarding;

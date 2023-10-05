import React, { useEffect, useState } from "react";
import logo from "../images/logo.webp";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import './signup.css';

const Onboarding = () => { 
      const [isHidden, setIsHidden] = useState(true); 
    const accessToken = localStorage.getItem("access_token"); 
      const toggleHidden = (e) => { 
        e.preventDefault(); 
        setIsHidden(!isHidden); 
      }; 
      const formArray = [1, 2, 3, 4, 5]; 
      const [formNo, setFormNo] = useState(formArray[0]); 
      const steps = [ 
        "Choose the domain you excel in", 
        "Select your Expertise", 
        "Experience in selected Domain", 
        "How much time can you give", 
        "Terms and Conditions", 
      ]; 
      const step1 = [ 
        "IT", 
        "Medical", 
        "Education", 
        "Law", 
        "Spirituality", 
        "Health and Fitness", 
        "Finance", 
        "Manufacturing", 
        "Marketing", 
      ]; 
      const step2 = ["Data", "Product", "Development"]; 
      const step3 = ["1-3 years", "3-6 years", "6-10 years", "10+ years"]; 
      const step4 = ["1-3 hrs/day", "3-6 hrs/day", "6-8 hrs/day", "8+ hrs/day"]; 
      // eslint-disable-next-line 
      const [selectedOption, setSelectedOption] = useState(null); 
    const config = { 
      headers: { 
        Authorization: `Bearer ${accessToken}`, 
        "Content-Type": "application/json", 
      }, 
    }; 
      const handleKeyPress = async (event) => { 
        if (event.key === "Enter") { 
          event.preventDefault(); 
          setIsHidden(true); 
        //   try { 
        //   await apiService.updateSkill(userData.id, updatedUserData, config); 
        //   console.log("user db updated", updatedUserData); 
        // } catch (error) { 
        //   console.log(error.message); 
        // } 
          next(); 
        } 
      }; 
      const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); 
     
      // ... 
     
      const handleCheckboxChange = (event) => { 
        setIsCheckboxChecked(event.target.checked); 
      }; 
     
      const next = () => { 
        setIsHidden(true); 
        setFormNo(formNo + 1); 
      }; 
      const pre = () => { 
        setIsHidden(true); 
        if (formNo >= 2) setFormNo(formNo - 1); 
      }; 
      const submit = () => { 
        console.log("Submitted"); 
    //     toast.success("Submitted successfully"); 
      }; 
     
      return ( 
        <> 
          <div className="p-6  lg:px-20 flex justify-between items-center mb-8 md:mb-1"> 
            <Link to="/"> 
              <img src={logo} alt="logo" className="w-20 md:w-20" /> 
            </Link> 
            <button onClick={() => pre()}> 
              <IoArrowBackCircleOutline className="text-3xl" /> 
            </button> 
          </div> 
          <div className="flex flex-col justify-center items-center mb-8"> 
            <h1 className="text-3xl font-extrabold font-sans md:text-5xl "> 
              Become a Guru 
            </h1> 
            <h1 className="text-xl mt-1 font-semibold"> 
              At GuruCon<span className="text-[#946AB7]">n</span>ect 
            </h1> 
          </div> 
          <div className="px-16 mt-3"> 
            <div className="flex justify-center items-center"> 
    {/*           <ToastContainer />  */}
              <form> 
                <div className=""> 
                  <div className="flex justify-center items-center"> 
                    {formArray.map((v, i) => ( 
                      <> 
                        <div 
                          onClick={() => setFormNo(v)} 
                          className={`w-[35px] my-3 text-white rounded-full cursor-pointer ${ 
                            formNo - 1 === i || 
                            formNo - 1 === i + 1 || 
                            formNo - 1 === i + 2 || 
                            formNo - 1 === i + 3 || 
                            formNo === formArray.length 
                              ? "bg-[#6DDA3F]" 
                              : "bg-slate-400" 
                          } h-[35px] flex justify-center items-center`} 
                        > 
                          {v} 
                        </div> 
                        {i !== formArray.length - 1 && ( 
                          <div 
                            className={`min-w-[25px] md:w-24 h-[2px] ${ 
                              formNo === i + 4 || formNo === formArray.length 
                                ? "bg-[#6DDA3F]" 
                                : "bg-slate-400" 
                            }`} 
                          ></div> 
                        )} 
                      </> 
                    ))} 
                  </div> 
                  {formNo > 0 && formNo < 6 && ( 
                    <div className="w-full flex flex-row justify-center items-center font-medium mt-4 text-base md:text-xl"> 
                      <span className="text-[#512376] flex flex-row"> 
                        Step&nbsp;{formNo}&nbsp; 
                      </span> 
                      {steps[formNo - 1]} 
                    </div> 
                  )} 
                  <div className="my-5"> 
                    {formNo === 1 && ( 
                      <div> 
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7 my-8"> 
                          {step1.map((item, index) => ( 
                            <button 
                              key={index} 
                              type="button" 
                              value={item} 
                              className={`text-sm focus:bg-[#DDC5F1]/50 font-semibold ${ 
                                selectedOption === item 
                                  ? "checked:border-[#512376] checked:bg-[#DDC5F1]/50" 
                                  : "" 
                              } px-4 py-3 border-2 border-black rounded-xl`} 
                              onClick={() => next()} 
                            > 
                              {item} 
                            </button> 
                          ))} 
     
                          <button 
                            onClick={(event) => { 
                              event.preventDefault(); 
                              toggleHidden(event); 
                            }} 
                            value="Others" 
                            checked={selectedOption === "Others"} 
                            className="text-sm focus:bg-[#DDC5F1]/50 font-semibold checked:border-[#512376] checked:bg-[#DDC5F1]/50 px-4 py-3 border-2 border-black rounded-xl" 
                          > 
                            Others 
                          </button> 
                        </div> 
     
                        <input 
                          type="text" 
                          placeholder="Please Specify" 
                          onKeyPress={handleKeyPress} 
                          className={`${ 
                            isHidden ? "hidden" : "" 
                          }  w-full border-2 rounded-xl px-4 py-1 outline-none`} 
                        ></input> 
                      </div> 
                    )} 
                    {formNo === 2 && ( 
                      <div> 
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 my-8"> 
                          {step2.map((item, index) => ( 
                            <button 
                              key={index} 
                              type="button" 
                              value={item} 
                              className={`text-sm focus:bg-[#DDC5F1]/50 font-semibold ${ 
                                selectedOption === item 
                                  ? "checked:border-[#512376] checked:bg-[#DDC5F1]/50" 
                                  : "" 
                              } px-4 py-3 border-2 border-black rounded-xl`} 
                              onClick={() => next()} 
                            > 
                              {item} 
                            </button> 
                          ))} 
                          <button 
                            onClick={toggleHidden} 
                            className="text-sm focus:bg-[#DDC5F1]/50 font-semibold checked:border-[#512376] checked:bg-[#DDC5F1]/50 px-4 py-3 border-2 border-black rounded-xl" 
                          > 
                            Others 
                          </button> 
                        </div> 
                        <div className="mb-5"> 
                          <input 
                            type="text" 
                            placeholder="Please Specify" 
                            onKeyPress={handleKeyPress} 
                            className={`${ 
                              isHidden ? "hidden" : "" 
                            } w-full border-2 rounded-xl px-4 py-1 outline-none`} 
                          ></input> 
                        </div> 
                      </div> 
                    )} 
                    {formNo === 3 && ( 
                      <div> 
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 my-8"> 
                          {step3.map((item, index) => ( 
                            <button 
                              key={index} 
                              type="button" 
                              value={item} 
                              className={`text-sm focus:bg-[#DDC5F1]/50 font-semibold ${ 
                                selectedOption === item 
                                  ? "checked:border-[#512376] checked:bg-[#DDC5F1]/50" 
                                  : "" 
                              } px-4 py-3 border-2 border-black rounded-xl`} 
                              onClick={() => next()} 
                            > 
                              {item} 
                            </button> 
                          ))} 
                        </div> 
                      </div> 
                    )} 
                    {formNo === 4 && ( 
                      <div> 
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 my-8"> 
                          {step4.map((item, index) => ( 
                            <button 
                              key={index} 
                              type="button" 
                              value={item} 
                              onClick={() => next()} 
                              className="text-sm focus:bg-[#DDC5F1]/50 font-semibold checked:border-[#512376] checked:bg-[#DDC5F1]/50 px-4 py-3 border-2 border-black rounded-xl" 
                            > 
                              {item} 
                            </button> 
                          ))} 
                        </div> 
                      </div> 
                    )} 
                    {formNo === 5 && ( 
                      <div className="flex items-center justify-center my-8"> 
                        <FormGroup> 
                          <FormControlLabel 
                            required 
                            control={<Checkbox onChange={handleCheckboxChange} />} 
                            label="I have read and agreed with the Terms and Conditions " 
                          /> 
                        </FormGroup> 
                      </div> 
                    )} 
                  </div> 
                  <div className="flex flex-row justify-center mt-7"> 
                    {formNo === 5 && ( 
                      <Button 
                        onClick={() => submit()} 
                        variant="outlined" 
                        sx={{ 
                          backgroundColor: isCheckboxChecked 
                            ? "#512376" 
                            : "#DDC5F1", 
                          color: "white", 
                          "&:disabled": { 
                            cursor: "not-allowed", 
                          }, 
                        }} 
                        disabled={!isCheckboxChecked} 
                      > 
                        Submit 
                      </Button> 
                    )} 
                  </div> 
                </div> 
              </form> 
            </div> 
          </div> 
        </> 
      ); 
    }; 
     
    export default Onboarding;
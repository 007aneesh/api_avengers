import React, { useState } from "react";
import logo from "../images/logo.webp";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Plans from "./plans";
import "./signup.css";
import paytm from "../images/paytm.png";
import gpay from "../images/gpay.jpg";
import phonepe from "../images/phonepe.webp";
import bhimupi from "../images/bhimupi.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const Onboarding = () => {
  const navigate = useNavigate();
  const formArray = [1, 2, 3, 4, 5];
  const [formNo, setFormNo] = useState(formArray[0]);

  const [loading, setLoading] = useState(false);

  const override = {
    paddingTop: '5px',
  };


  const next = (form) => {
    setFormNo(form + 1);
  };
  const pre = () => {
    if (formNo === 1) navigate(-1);
    if (formNo >= 2) setFormNo(formNo - 1);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const checkDataOne = (formNo) => {
    if (orgData.userName === "" || orgData.email === "" || orgData.contactNo === "" || orgData.secContact === "" || orgData.password === "" || orgData.cpassword === "") {
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
      next(formNo);
    }
  };

  const checkDataTwo = (formNo) => {
    if (orgData.orgName === "" || orgData.registrationNo === "" || orgData.address === "" || orgData.pinCode === "" || orgData.city === "" || orgData.state === "") {
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
      next(formNo);
    }
  };

  const serverUrl =
    `${process.env.REACT_APP_BASEURL}/orgRegister`;

  const [orgData, setOrgData] = useState({
    userName: "",
    email: "",
    contactNo: "",
    secContact: "",
    password: "",
    cpassword: "",
    orgName: "",
    registrationNo: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    planSelected: "",
  });

  let name, value;
  const handleOrgData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setOrgData({ ...orgData, [name]: value });
  };

  const updateOrgValue = (newValue) => {
    setOrgData({ ...orgData, planSelected: newValue });
  };

  const sendOrgData = async (e) => {
    e.preventDefault();

    const {
      userName,
      email,
      contactNo,
      secContact,
      password,
      cpassword,
      orgName,
      registrationNo,
      address,
      pinCode,
      city,
      state,
      planSelected,
    } = orgData;
    setLoading(true);
    const res = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        contactNo,
        secContact,
        password,
        cpassword,
        orgName,
        registrationNo,
        address,
        pinCode,
        city,
        state,
        planSelected,
      }),
    });

    const data = await res.json();
    setLoading(false);
    if (res.status === 422 || !data) {
      toast.error("Invalid Registration", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Registration Successful", {
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
        navigate(`/admin/${orgData?.registrationNo}`, { state: orgData?.registrationNo });
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
          <form method="POST">
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
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] text-center md:text-5xl ">
                        Ready to Manage Your Health Data?
                      </h1>
                      <h1 className="text-xl mt-2 md:mt-5 font-semibold">
                        Let's Get Started!
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
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] text-center md:text-5xl ">
                        Organisation Details
                      </h1>
                    </div>
                  )}
                  {formNo === 4 && (
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="300"
                      data-aos-offset="0"
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] text-center md:text-5xl ">
                        Terms and Conditions
                      </h1>
                    </div>
                  )}
                  {formNo === 5 && (
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="300"
                      data-aos-offset="0"
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] text-center md:text-5xl ">
                        Review your Details
                      </h1>
                    </div>
                  )}
                  {formNo === 6 && (
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="300"
                      data-aos-offset="0"
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <h1 className="text-3xl font-extrabold font-sans text-[#666] text-center md:text-5xl ">
                        Checkout Details
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
                    <div className="field">
                      <div className="leftformField">
                        <div className="formField">
                          <input
                            type="text"
                            name="userName"
                            value={orgData.userName}
                            onChange={handleOrgData}
                            placeholder="User Name"
                            required=""
                          />
                        </div>
                        <div className="formField">
                          <input
                            type="email"
                            name="email"
                            value={orgData.email}
                            onChange={handleOrgData}
                            placeholder="Organisation E-Mail"
                            required=""
                          />
                        </div>
                        <div className="formField">
                          <input
                            type="number"
                            name="contactNo"
                            value={orgData.contactNo}
                            onChange={handleOrgData}
                            placeholder="Contact Number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="rightformField">
                        <div className="formField">
                          <input
                            type="number"
                            name="secContact"
                            value={orgData.secContact}
                            onChange={handleOrgData}
                            placeholder="secondary Contact Number"
                            required=""
                          />
                        </div>
                        <div className="formField">
                          <input
                            type="password"
                            name="password"
                            value={orgData.password}
                            onChange={handleOrgData}
                            placeholder="Password"
                            required=""
                          />
                        </div>
                        <div className="formField">
                          <input
                            type="password"
                            name="cpassword"
                            value={orgData.cpassword}
                            onChange={handleOrgData}
                            placeholder="Confirm Password"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="formButtons">
                      <div className="buttonOne invisible">
                        <button onClick={() => pre()}>
                          <i className="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className="buttonTwo">
                        <button type="button" onClick={() => checkDataOne(formNo)}>
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
                      <div className="leftformField">
                        <div className="formField">
                          <input
                            type="text"
                            name="orgName"
                            value={orgData.orgName}
                            onChange={handleOrgData}
                            placeholder="Organisation Name"
                            required=""
                          />
                        </div>
                        <div className="formField">
                          <input
                            type="number"
                            name="registrationNo"
                            value={orgData.registrationNo}
                            onChange={handleOrgData}
                            placeholder="Registration Number"
                            required=""
                          />
                        </div>
                        <div className="formField">
                          <input
                            type="text"
                            name="address"
                            value={orgData.address}
                            onChange={handleOrgData}
                            placeholder="Address"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="rightformField">
                        <div className="formField">
                          <input
                            type="text"
                            name="city"
                            value={orgData.city}
                            onChange={handleOrgData}
                            placeholder="City"
                            required=""
                          />
                        </div>
                        <div className="formField">
                          <input
                            type="text"
                            name="state"
                            value={orgData.state}
                            onChange={handleOrgData}
                            placeholder="State"
                            required=""
                          />
                        </div>
                        <div className="formField">
                          <input
                            type="number"
                            name="pinCode"
                            value={orgData.pinCode}
                            onChange={handleOrgData}
                            placeholder="Pin Code"
                            required=""
                          />
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
                        <button type="button" onClick={() => checkDataTwo(formNo)}>
                          <p>Next</p>
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
                  >
                    <Plans
                      next={next}
                      orgData={orgData}
                      updateOrgValue={updateOrgValue}
                    />
                  </div>
                )}
                {formNo === 4 && (
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    className="flex flex-col items-center justify-center w-screen"
                  >
                    <div className="check">
                      <p>
                        Apache License Version 2.0, January 2004
                        http://www.apache.org/licenses/ TERMS AND CONDITIONS FOR
                        USE, REPRODUCTION, AND DISTRIBUTION 1. Definitions.
                        "License" shall mean the terms and conditions for use,
                        reproduction, and distribution as defined by Sections 1
                        through 9 of this document. "Licensor" shall mean the
                        copyright owner or entity authorized by the copyright
                        owner that is granting the License. "Legal Entity" shall
                        mean the union of the acting entity and all other
                        entities that control, are controlled by, or are under
                        common control with that entity. For the purposes of
                        this definition, "control" means (i) the power, direct
                        or indirect, to cause the direction or management of
                        such entity, whether by contract or otherwise, or (ii)
                        ownership of fifty percent (50%) or more of the
                        outstanding shares, or (iii) beneficial ownership of
                        such entity. "You" (or "Your") shall mean an individual
                        or Legal Entity exercising permissions granted by this
                        License. "Source" form shall mean the preferred form for
                        making modifications, including but not limited to
                        software source code, documentation source, and
                        configuration files. "Object" form shall mean any form
                        resulting from mechanical transformation or translation
                        of a Source form, including but not limited to compiled
                        object code, generated documentation, and conversions to
                        other media types. "Work" shall mean the work of
                        authorship, whether in Source or Object form, made
                        available under the License, as indicated by a copyright
                        notice that is included in or attached to the work (an
                        example is provided in the Appendix below). "Derivative
                        Works" shall mean any work, whether in Source or Object
                        form, that is based on (or derived from) the Work and
                        for which the editorial revisions, annotations,
                        elaborations, or other modifications represent, as a
                        whole, an original work of authorship. For the purposes
                        of this License, Derivative Works shall not include
                        works that remain separable from, or merely link (or
                        bind by name) to the interfaces of, the Work and
                        Derivative Works thereof. "Contribution" shall mean any
                        work of authorship, including the original version of
                        the Work and any modifications or additions to that Work
                        or Derivative Works thereof, that is intentionally
                        submitted to Licensor for inclusion in the Work by the
                        copyright owner or by an individual or Legal Entity
                        authorized to submit on behalf of the copyright owner.
                        For the purposes of this definition, "submitted" means
                        any form of electronic, verbal, or written communication
                        sent to the Licensor or its representatives, including
                        but not limited to communication on electronic mailing
                        lists, source code control systems, and issue tracking
                        systems that are managed by, or on behalf of, the
                        Licensor for the purpose of discussing and improving the
                        Work, but excluding communication that is conspicuously
                        marked or otherwise designated in writing by the
                        copyright owner as "Not a Contribution." "Contributor"
                        shall mean Licensor and any individual or Legal Entity
                        on behalf of whom a Contribution has been received by
                        Licensor and subsequently incorporated within the Work.
                        2. Grant of Copyright License. Subject to the terms and
                        conditions of this License, each Contributor hereby
                        grants to You a perpetual, worldwide, non-exclusive,
                        no-charge, royalty-free, irrevocable copyright license
                        to reproduce, prepare Derivative Works of, publicly
                        display, publicly perform, sublicense, and distribute
                        the Work and such Derivative Works in Source or Object
                        form. 3. Grant of Patent License. Subject to the terms
                        and conditions of this License, each Contributor hereby
                        grants to You a perpetual, worldwide, non-exclusive,
                        no-charge, royalty-free, irrevocable (except as stated
                        in this section) patent license to make, have made, use,
                        offer to sell, sell, import, and otherwise transfer the
                        Work, where such license applies only to those patent
                        claims licensable by such Contributor that are
                        necessarily infringed by their Contribution(s) alone or
                        by combination of their Contribution(s) with the Work to
                        which such Contribution(s) was submitted. If You
                        institute patent litigation against any entity
                        (including a cross-claim or counterclaim in a lawsuit)
                        alleging that the Work or a Contribution incorporated
                        within the Work constitutes direct or contributory
                        patent infringement, then any patent licenses granted to
                        You under this License for that Work shall terminate as
                        of the date such litigation is filed. 4. Redistribution.
                        You may reproduce and distribute copies of the Work or
                        Derivative Works thereof in any medium, with or without
                        modifications, and in Source or Object form, provided
                        that You meet the following conditions: (a) You must
                        give any other recipients of the Work or Derivative
                        Works a copy of this License; and (b) You must cause any
                        modified files to carry prominent notices stating that
                        You changed the files; and (c) You must retain, in the
                        Source form of any Derivative Works that You distribute,
                        all copyright, patent, trademark, and attribution
                        notices from the Source form of the Work, excluding
                        those notices that do not pertain to any part of the
                        Derivative Works; and (d) If the Work includes a
                        "NOTICE" text file as part of its distribution, then any
                        Derivative Works that You distribute must include a
                        readable copy of the attribution notices contained
                        within such NOTICE file, excluding those notices that do
                        not pertain to any part of the Derivative Works, in at
                        least one of the following places: within a NOTICE text
                        file distributed as part of the Derivative Works; within
                        the Source form or documentation, if provided along with
                        the Derivative Works; or, within a display generated by
                        the Derivative Works, if and wherever such third-party
                        notices normally appear. The contents of the NOTICE file
                        are for informational purposes only and do not modify
                        the License. You may add Your own attribution notices
                        within Derivative Works that You distribute, alongside
                        or as an addendum to the NOTICE text from the Work,
                        provided that such additional attribution notices cannot
                        be construed as modifying the License. You may add Your
                        own copyright statement to Your modifications and may
                        provide additional or different license terms and
                        conditions for use, reproduction, or distribution of
                        Your modifications, or for any such Derivative Works as
                        a whole, provided Your use, reproduction, and
                        distribution of the Work otherwise complies with the
                        conditions stated in this License. 5. Submission of
                        Contributions. Unless You explicitly state otherwise,
                        any Contribution intentionally submitted for inclusion
                        in the Work by You to the Licensor shall be under the
                        terms and conditions of this License, without any
                        additional terms or conditions. Notwithstanding the
                        above, nothing herein shall supersede or modify the
                        terms of any separate license agreement you may have
                        executed with Licensor regarding such Contributions. 6.
                        Trademarks. This License does not grant permission to
                        use the trade names, trademarks, service marks, or
                        product names of the Licensor, except as required for
                        reasonable and customary use in describing the origin of
                        the Work and reproducing the content of the NOTICE file.
                        7. Disclaimer of Warranty. Unless required by applicable
                        law or agreed to in writing, Licensor provides the Work
                        (and each Contributor provides its Contributions) on an
                        "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                        KIND, either express or implied, including, without
                        limitation, any warranties or conditions of TITLE,
                        NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
                        PARTICULAR PURPOSE. You are solely responsible for
                        determining the appropriateness of using or
                        redistributing the Work and assume any risks associated
                        with Your exercise of permissions under this License. 8.
                        Limitation of Liability. In no event and under no legal
                        theory, whether in tort (including negligence),
                        contract, or otherwise, unless required by applicable
                        law (such as deliberate and grossly negligent acts) or
                        agreed to in writing, shall any Contributor be liable to
                        You for damages, including any direct, indirect,
                        special, incidental, or consequential damages of any
                        character arising as a result of this License or out of
                        the use or inability to use the Work (including but not
                        limited to damages for loss of goodwill, work stoppage,
                        computer failure or malfunction, or any and all other
                        commercial damages or losses), even if such Contributor
                        has been advised of the possibility of such damages. 9.
                        Accepting Warranty or Additional Liability. While
                        redistributing the Work or Derivative Works thereof, You
                        may choose to offer, and charge a fee for, acceptance of
                        support, warranty, indemnity, or other liability
                        obligations and/or rights consistent with this License.
                        However, in accepting such obligations, You may act only
                        on Your own behalf and on Your sole responsibility, not
                        on behalf of any other Contributor, and only if You
                        agree to indemnify, defend, and hold each Contributor
                        harmless for any liability incurred by, or claims
                        asserted against, such Contributor by reason of your
                        accepting any such warranty or additional liability. END
                        OF TERMS AND CONDITIONS APPENDIX: How to apply the
                        Apache License to your work. To apply the Apache License
                        to your work, attach the following boilerplate notice,
                        with the fields enclosed by brackets "[]" replaced with
                        your own identifying information. (Don't include the
                        brackets!) The text should be enclosed in the
                        appropriate comment syntax for the file format. We also
                        recommend that a file or class name and description of
                        purpose be included on the same "printed page" as the
                        copyright notice for easier identification within
                        third-party archives. Copyright [yyyy] [name of
                        copyright owner] Licensed under the Apache License,
                        Version 2.0 (the "License"); you may not use this file
                        except in compliance with the License. You may obtain a
                        copy of the License at
                        http://www.apache.org/licenses/LICENSE-2.0 Unless
                        required by applicable law or agreed to in writing,
                        software distributed under the License is distributed on
                        an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
                        ANY KIND, either express or implied. See the License for
                        the specific language governing permissions and
                        limitations under the License.
                      </p>
                    </div>
                    <div className="box">
                      <input
                        type="checkbox"
                        id="condition"
                        className="checkbox"
                        onClick={handleCheck}
                      ></input>
                      <label htmlFor="condition">
                        I agree to the Terms and Conditions.
                      </label>
                    </div>
                    <div className="formButtons formFour">
                      <div className="buttonOne">
                        <button onClick={() => pre()}>
                          <i className="bx bx-left-arrow-alt"></i>
                          <p>Back</p>
                        </button>
                      </div>
                      <div className={`buttonTwo`}>
                        <button
                          onClick={() => {
                            next(formNo);
                            handleCheck();
                          }}
                          disabled={!isChecked}
                          className={`${isChecked ? "" : "bg-gray-500"}`}
                        >
                          <p>Next</p>
                          <i className="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 5 && (
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    className="formOne"
                  >
                    <div className="field">
                      <div className="leftformField">
                        <div className="formField">
                          <label htmlFor="orgName">User Name</label>
                          <input
                            type="text"
                            placeholder={orgData.userName}
                            id="orgName"
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">Organisation E-Mail</label>
                          <input
                            type="email"
                            placeholder={orgData.email}
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">Contact Number</label>
                          <input
                            type="number"
                            placeholder={orgData.contactNo}
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">
                            Secondary Contact Number
                          </label>
                          <input
                            type="number"
                            placeholder={orgData.secContact}
                            required=""
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="rightformField">
                        <div className="formField">
                          <label htmlFor="orgName">Organisation Name</label>
                          <input
                            type="text"
                            placeholder={orgData.orgName}
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">Registration Number</label>
                          <input
                            type="number"
                            placeholder={orgData.registrationNo}
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">Address</label>
                          <input
                            type="text"
                            placeholder={orgData.address}
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">City</label>
                          <input
                            type="text"
                            placeholder={orgData.city}
                            required=""
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="leftformField">
                        <div className="formField">
                          <label htmlFor="orgName">State</label>
                          <input
                            type="text"
                            placeholder={orgData.state}
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">Pin Code</label>
                          <input
                            type="number"
                            placeholder={orgData.pinCode}
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">Plan Selected</label>
                          <input
                            type="text"
                            placeholder={orgData.planSelected}
                            required=""
                            readOnly
                          />
                        </div>
                        <div className="formField">
                          <label htmlFor="orgName">Terms and Conditions</label>
                          <input
                            type="text"
                            placeholder="Accepted"
                            required=""
                            readOnly
                          />
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
                        <button onClick={() => next(formNo)}>
                          <p>Next</p>
                          <i className="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {formNo === 6 && (
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    className="checkout"
                  >
                    <div className="checkDetails">
                      <div className="leftDetails">
                        <p>Organisation Name</p>
                        <p>Registration Number</p>
                        <p>Chosen Plan</p>
                        <p>Total Amount Payable</p>
                      </div>
                      <div className="rightDetails">
                        <p>{orgData.orgName}</p>
                        <p>{orgData.registrationNo}</p>
                        <p>{orgData.planSelected}</p>
                        <p>Rs. 0</p>
                      </div>
                    </div>
                    <div className="paymentDetails">
                      <h1>Payment Options:</h1>
                      <div className="upi">
                        <img src={paytm} alt="paytm" />
                        <img src={gpay} alt="gpay" />
                        <img src={phonepe} alt="phonePe" />
                        <img src={bhimupi} alt="bhimupi" />
                      </div>
                      <div className="card">
                        <div className="debit">
                          <i className="bx bx-plus-circle"></i>
                          <p>Add new Debit Card</p>
                        </div>
                        <div className="credit">
                          <i className="bx bx-plus-circle"></i>
                          <p>Add new Credit Card</p>
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
                        {loading ? (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.2rem 1rem' }}>
                            <ClipLoader color='#fff' css={override} />
                          </div>
                        ) :
                          <button disabled={loading} onClick={sendOrgData}>
                            <p>Proceed</p>
                            <i className="bx bx-right-arrow-alt"></i>
                          </button>}
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

export default Onboarding;

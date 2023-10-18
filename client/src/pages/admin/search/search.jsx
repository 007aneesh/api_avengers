import React, { useState } from "react";
import img from "../../../images/user.webp";
import Reports from "./reports";
const Search = ({ dataReceived }) => {
  const [data, setData] = useState(null);

  const [aadharNo, setAadhar] = useState("");
  const [repData, setRepData] = useState({
    patientId: "",
    aadharNumber: "",
    image: "",
    description: "",
    dataType: "",
    signedBy: "",
    orgName: "",
  });

  const getData = async (aadharValue) => {
    if (!aadharValue) {
      setData(null);
      setRepData({
        patientId: "",
        aadharNumber: "",
        image: "",
        description: "",
        dataType: "",
        signedBy: "",
        orgName: "",
      });
      return;
    }

    const aadhar = parseInt(aadharValue, 10);

    try {
      const response = await fetch(
        `http://localhost:8000/patientbyaadhar/${aadhar}`
      );
      const patient = await response.json();
      setData(patient);
      setRepData({
        ...repData,
        patientId: patient?._id,
        aadharNumber: patient?.aadharNumber,
        orgName: dataReceived.data.orgName,
      });
    } catch (err) {
      console.error("Error fetching data!");
      setData(null);
      setRepData({
        patientId: "",
        aadharNumber: "",
        image: "",
        description: "",
        dataType: "",
        signedBy: "",
        orgName: "",
      });
      return;
    }
  };
  const search = () => {
    getData(aadharNo);
    setAadhar("");
  };

  // Add Report

  const reportUrl = `${process.env.REACT_APP_BASEURL}/addReport`;

  // const [repImg, setRepImg] = useState();

  let name, value;
  const handleRepData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRepData({ ...repData, [name]: value });
  };

  // Send Report

  const sendReport = async (e) => {
    e.preventDefault();

    const {
      patientId,
      aadharNumber,
      image,
      description,
      dataType,
      signedBy,
      orgName,
    } = repData;

    const res = await fetch("http://localhost:8000/addReport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patientId,
        aadharNumber,
        image,
        description,
        dataType,
        signedBy,
        orgName,
      }),
    });

    const data = await res.json();

    if (!data) {
      window.alert("Invalid data");
    } else {
      window.alert("report added Successful");
      // navigate("/admin", { state: orgData });
    }
  };

  return (
    <div className="p-5">
      <div className="search flex w-full justify-center  items-center mb-10">
        <div className="flex flex-col md:flex-row w-full justify-center gap-5 items-start md:items-center">
          <h1 className="w-1/4 text-lg font-semibold">
            Search&nbsp;Patient&nbsp;Data:
          </h1>
          <div className="flex items-center w-full gap-5">
            <input
              type="text"
              name="aadhar"
              value={aadharNo}
              onChange={(e) => setAadhar(e.target.value)}
              placeholder="Patient Aadhar No."
              className="outline-none rounded-lg w-2/4 px-3 py-2 border-2 bg-transparent border-black"
            ></input>
            <button
              onClick={search}
              className="px-7 bg-[#662890]/80 text-white  py-2 text-lg rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col py-5">
        <h1 className="font-semibold ">Details:</h1>
        <div className="flex items-center justify-center">
          {data == null ? (
            <div>
              <h1 className="font-medium text-lg">
                Nothing to show!! | Please enter valid Aadhar Number!!
              </h1>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <div className="flex flex-col md:flex-row items-center w-full justify-around py-9">
                <div className="flex items-center justify-center p-4">
                  {!data?.image ? (
                    <img
                      src={img}
                      alt="user"
                      className="h-44 w-44 border-black border-2  object-contain p-2 mb-2"
                    />
                  ) : (
                    <img
                      src={data?.image}
                      alt="user"
                      className="h-44 w-44 border-black border-2  object-contain p-2 mb-2"
                    />
                  )}
                </div>
                <div className="flex flex-col md:flex-row gap-y-3 lg:gap-14 md:gap-8 w-full md:w-auto px-4">
                  <div className="flex flex-col gap-y-3">
                    <div key="name" className="flex flex-col w-full gap-y-1">
                      <label className="">Name:</label>
                      <input
                        readOnly
                        name="name"
                        value={data?.name}
                        type="text"
                        className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-black"
                      ></input>
                    </div>
                    <div
                      key="patientId"
                      className="flex flex-col gap-y-1 w-full"
                    >
                      <label className="">Patient Id:</label>
                      <div className="flex flex-row border-black border-2 rounded-lg ">
                        <input
                          name="patientId"
                          type="text"
                          readOnly
                          value={data?._id}
                          id="patientId_input"
                          className="outline-none  w-full px-3 py-2 bg-transparent"
                        ></input>
                      </div>
                    </div>
                    <div
                      key="guardian_name"
                      className="flex flex-col gap-y-1 w-full"
                    >
                      <label className="">Guardian name:</label>
                      <div className="flex flex-row border-black border-2 rounded-lg">
                        <input
                          name="guardianName"
                          type="text"
                          readOnly
                          value={data?.guardianName}
                          id="guardian_name_input"
                          className="outline-none  w-full px-3 py-2 bg-transparent"
                        ></input>
                      </div>
                    </div>
                    <div
                      key="emergency_contact"
                      className="flex flex-col gap-y-1 w-full"
                    >
                      <label className="">Guardian contact:</label>
                      <div className="flex flex-row border-black border-2 rounded-lg">
                        <input
                          name="emergencyContact"
                          type="number"
                          readOnly
                          value={data?.emergencyContact}
                          id="emergency_contact_input"
                          className="outline-none  w-full px-3 py-2 bg-transparent"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <div key="contact" className="flex flex-col w-full gap-y-1">
                      <label className="">Contact:</label>
                      <input
                        readOnly
                        name="contact"
                        value={data?.contact}
                        type="text"
                        className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-black"
                      ></input>
                    </div>
                    <div key="gender" className="flex flex-col gap-y-1 w-full">
                      <label className="">Gender:</label>
                      <div className="flex flex-row border-black border-2 rounded-lg ">
                        <input
                          name="gender"
                          type="text"
                          readOnly
                          value={data?.gender}
                          id="patientId_input"
                          className="outline-none  w-full px-3 py-2 bg-transparent"
                        ></input>
                      </div>
                    </div>
                    <div key="email" className="flex flex-col gap-y-1 w-full">
                      <label className="">Email:</label>
                      <div className="flex flex-row border-black border-2 rounded-lg">
                        <input
                          name="email"
                          type="text"
                          readOnly
                          value={data?.email}
                          id="guardian_name_input"
                          className="outline-none  w-full px-3 py-2 bg-transparent"
                        ></input>
                      </div>
                    </div>
                    <div
                      key="last_login"
                      className="flex flex-col gap-y-1 w-full"
                    >
                      <label className="">Last Login:</label>
                      <div className="flex flex-row border-black border-2 rounded-lg">
                        <input
                          name="emergencyContact"
                          type="text"
                          readOnly
                          value={data?.updatedAt}
                          id="emergency_contact_input"
                          className="outline-none  w-full px-3 py-2 bg-transparent"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="py-7">
                <h1 className="font-semibold">Add new Report:</h1>
                <div className="flex flex-col md:flex-row gap-y-3 lg:gap-14 md:gap-8 w-full md:w-auto px-4 py-4">
                  <div className="flex flex-col w-full gap-y-1">
                    <label className="">Report Type:</label>
                    <select
                      name="dataType"
                      value={repData.dataType}
                      onChange={handleRepData}
                      type="text"
                      className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-black cursor-pointer"
                    >
                      <option value="prescription">Prescription</option>
                      <option value="MRI">MRI</option>
                      <option value="CT Scan">CT Scan</option>
                      <option value="Blood Pressure">Blood Pressure</option>
                      <option value="Covid-19">Covid-19</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full gap-y-1">
                    <label className="">Description:</label>
                    <input
                      name="description"
                      placeholder="Add a description for the Report"
                      value={repData.description}
                      onChange={handleRepData}
                      type="text"
                      className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-black"
                    ></input>
                  </div>

                  <div className="flex flex-col w-full gap-y-1">
                    <label className="">Signed By:</label>
                    <input
                      name="signedBy"
                      placeholder="Name of the Doctor"
                      value={repData.signedBy}
                      onChange={handleRepData}
                      type="text"
                      className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-black"
                    ></input>
                  </div>

                  {/* <div className="flex flex-col w-full gap-y-1">
                    <label className="">Image:</label>
                    <input
                      name="image"
                      type="file"
                      value={repData.image}
                      onChange={handleRepData}
                      className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-none cursor-pointer"
                    ></input>
                  </div> */}
                </div>
                <div className="flex justify-center items-center w-full gap-5 py-4">
                  <button
                    onClick={sendReport}
                    className="px-7 bg-[#662890]/80 text-white  py-2 text-lg rounded-lg"
                  >
                    Add Report
                  </button>
                </div>
              </div>
              <hr />
              <div className="py-7">
                <Reports user={data} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

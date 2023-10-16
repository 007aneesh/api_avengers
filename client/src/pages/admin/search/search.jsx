import React, { useState } from "react";
import img from "../../../images/user.webp"
const Search = () => {
  const [data, setData] = useState(null)
  const [aadharNo, setAadhar] = useState("");
  const getData = async (aadharValue) => {

    if(!aadharValue){
      setData(null);
      return;
    }

    const aadhar = parseInt(aadharValue, 10);

    try {
      const response = await fetch(
        `http://localhost:8000/patientbyaadhar/${aadhar}`
      );
      const patient = await response.json();
      setData(patient);
    } catch (err) {
      console.error("Error fetching data!");
    }
  };
  const search = () =>{
    getData(aadharNo);
    setAadhar("");
  }
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
              <h1 className="font-medium text-lg">Nothing to show!! | Please enter valid Aadhar Number!!</h1>
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
                    <div
                      key="gender"
                      className="flex flex-col gap-y-1 w-full"
                    >
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
                    <div
                      key="email"
                      className="flex flex-col gap-y-1 w-full"
                    >
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
              <hr/>
              <div className="py-7">
                <h1>Place to Add new reports fields</h1>
              </div>
              <hr/>
              <div className="py-7">
                <h1>Place to display previous reports</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

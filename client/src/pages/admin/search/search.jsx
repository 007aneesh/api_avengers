import React, { useState } from "react";

const Search = () => {
  const [data, setData] = useState(null)
  const [aadhar, setAadhar] = useState("");
  const getData = async (aadhar) => {
    console.log("aadhar: "+ typeof(aadhar));
    try {
      const response = await fetch(
        `http:localhost:8000/patient/${aadhar}`
      );
      const patient = await response.json();
      setData(patient);
      console.log("data: ", patient);
    } catch (err) {
      console.error("Error fetching data!");
    }
  };
  const search = () =>{
    getData(aadhar);
    setAadhar("");
  }
  return (
    <div className="p-5">
      <div className="search flex w-full justify-center  items-center mb-10">
        <div className="flex flex-row w-full justify-center gap-5 items-center">
          <h1 className="w-1/4 text-lg font-semibold">
            Search&nbsp;Patient&nbsp;Data:
          </h1>
          <div className="flex items-center w-full gap-5">
            <input
              type="text"
              name="aadhar"
              value={aadhar}
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
              <h1>hi</h1>
            </div>
          ) : (
            <div>
              <h1 className="font-medium text-lg">Nothing to show yet!!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

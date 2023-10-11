import React from "react";
// import { ColumnChart } from "eazychart-react";
// import "eazychart-css";
const DashboardData = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col gap-4 md:w-2/6 h-auto">
          <div className=" rounded-lg p-5 h-2/6 bg-[#ECECEC] flex flex-col items-center justify-center text-center gap-3">
            <h1>Total Patients</h1>
            <p>7,400</p>
          </div>
          <div className="p-5 rounded-lg h-2/6 bg-[#ECECEC] flex flex-col items-center justify-center text-center gap-3">
            <h1>Today's entries</h1>
            <p>1,276</p>
          </div>
          <div className="p-5 rounded-lg h-2/6 bg-[#ECECEC] flex flex-col items-center justify-center text-center gap-3">
            <h1>Today's entries</h1>
            <p>1,276</p>
          </div>
        </div>

        <div className="p-5 rounded-lg md:w-4/6 overflow-hidden bg-[#ECECEC] flex items-center justify-center">
          {/* <ColumnChart
            animationOptions={{
              delay: 0,
              duration: 400,
              easing: "easeBack",
            }}
            colors={["#26547c", "#ef476f", "#ffd166", "#06d6a0", "#06d6d1"]}
            data={[
              {
                id: "1",
                name: "2017",
                v: 2,
                value: 9,
              },
              {
                id: "2",
                name: "2018",
                v: 5,
                value: 45,
              },
              {
                id: "3",
                name: "2019",
                v: 10,
                value: 29,
              },
              {
                id: "4",
                name: "2020",
                v: 4,
                value: 30,
              },
              {
                id: "5",
                name: "2021",
                v: 8,
                value: 50,
              },
            ]}
            dimensions={{
              height: 400,
              width: 500,
            }}
            grid={{
              directions: [],
            }}
            padding={{
              bottom: 100,
              left: 50,
              right: 50,
              top: 50,
            }}
            xAxis={{
              domainKey: "name",
              nice: 0,
              title: "Number of Patients year-wise",
            }}
            yAxis={{
              domainKey: "value",
              nice: 5,
            }}
          /> */}
        </div>
      </div>
      <div className="flex flex-col py-8">
        <div>
          <h1 className="font-bold text-xl">Add new Patient:</h1>
        </div>

        <div className="grid grid-cols-1 p-5 md:grid-cols-2 justify-center items-center w-full gap-5 md:gap-10">
          <input
            type="text"
            name="aadharNumber"
            placeholder="Aadhar Number"
            className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
          ></input>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
          ></input>
          <input
            type="text"
            name="guardianName"
            placeholder="Guardian Name"
            className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
          ></input>
          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact"
            className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
          ></input>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
          ></input>
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
          ></input>
          <input
            type="text"
            name="password"
            placeholder="Set Password"
            className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
          ></input>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => {}}
            className="p-5 bg-[#662890]/80 text-white w-1/3  py-2 text-lg rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;

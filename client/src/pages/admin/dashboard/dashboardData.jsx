import React, { useEffect, useState } from "react";
import { getAllPatients } from "../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ColumnChart } from "eazychart-react";
// import "eazychart-css";
const DashboardData = () => {
  const serverUrl =
    `${process.env.REACT_APP_BASEURL}/patRegister`;

  const [patData, setPatData] = useState({
    aadharNumber: "",
    name: "",
    email: "",
    guardianName: "",
    emergencyContact: "",
    gender: "",
    contact: "",
    password: "",
  });

  let name, value;
  const handlePatData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setPatData({ ...patData, [name]: value });
  };

  const sendPatData = async (e) => {
    e.preventDefault();

    let {
      aadharNumber,
      name,
      email,
      guardianName,
      emergencyContact,
      gender,
      contact,
      password,
    } = patData;

    const res1 = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aadharNumber,
        name,
        email,
        guardianName,
        emergencyContact,
        gender,
        contact,
        password,
      }),
    });

    const data = await res1.json();

    if (res1.status === 422 || !data) {
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
      setPatData({
        aadharNumber: "",
        name: "",
        email: "",
        guardianName: "",
        emergencyContact: "",
        gender: "",
        contact: "",
        password: "",
      });
    }
  };

  const [patients, setPatients] = useState([]);
  const [todayCount, setTodayCount] = useState(0);
  const [yesterdayCount, setYesterdayCount] = useState(0);

  function isYesterday(date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const patients = await getAllPatients();
        setPatients(patients);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, [patData]);

  useEffect(() => {
    let today = 0;
    let yesterday = 0;
    patients.forEach((patient) => {
      const updatedAt = new Date(patient.updatedAt);
      if (isYesterday(updatedAt)) {
        yesterday++;
      }
      if (updatedAt.toDateString() === new Date().toDateString()) {
        today++;
      }
    });
    setYesterdayCount(yesterday);
    setTodayCount(today);
  }, [patients]);

  return (
    <div>
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
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col gap-4 md:w-2/6 h-auto">
          <div className=" rounded-lg p-5 h-2/6 bg-[#ECECEC] flex flex-col items-center justify-center text-center gap-3">
            <h1 className="text-xl font-bold">Total Patients</h1>
            <p className="text-2xl font-semibold py-2">{patients.length}</p>
          </div>
          <div className="p-5 rounded-lg h-2/6 bg-[#ECECEC] flex flex-col items-center justify-center text-center gap-3">
            <h1 className="text-xl font-bold">Today's entries</h1>
            <p className="text-2xl font-semibold py-2">{todayCount}</p>
          </div>
          <div className="p-5 rounded-lg h-2/6 bg-[#ECECEC] flex flex-col items-center justify-center text-center gap-3">
            <h1 className="text-xl font-bold">Yesterday's entries</h1>
            <p className="text-2xl font-semibold py-2">{yesterdayCount}</p>
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
          Coming Soon
        </div>
      </div>
      <form method="POST">
        <div className="flex flex-col py-8">
          <div>
            <h1 className="font-bold text-xl">Add new Patient:</h1>
          </div>

          <div className="grid grid-cols-1 p-5 md:grid-cols-2 justify-center items-center w-full gap-5 md:gap-10">
            <input
              type="number"
              name="aadharNumber"
              value={patData.aadharNumber}
              onChange={handlePatData}
              placeholder="Aadhar Number"
              className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
            ></input>
            <input
              type="text"
              name="name"
              value={patData.name}
              onChange={handlePatData}
              placeholder="Name"
              className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
            ></input>
            <input
              type="email"
              name="email"
              value={patData.email}
              onChange={handlePatData}
              placeholder="Email"
              className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
            ></input>
            <input
              type="text"
              name="guardianName"
              value={patData.guardianName}
              onChange={handlePatData}
              placeholder="Guardian Name"
              className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
            ></input>
            <input
              type="number"
              name="emergencyContact"
              value={patData.emergencyContact}
              onChange={handlePatData}
              placeholder="Emergency Contact"
              className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
            ></input>
            <input
              type="text"
              name="gender"
              value={patData.gender}
              onChange={handlePatData}
              placeholder="Gender"
              className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
            ></input>
            <input
              type="number"
              name="contact"
              value={patData.contact}
              onChange={handlePatData}
              placeholder="Contact"
              className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
            ></input>
            <input
              type="password"
              name="password"
              value={patData.password}
              onChange={handlePatData}
              autoComplete="off"
              placeholder="Set Password"
              className="outline-none rounded-lg  px-3 py-2 border-2 bg-transparent border-black"
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={sendPatData}
              className="p-5 bg-[#662890]/80 text-white w-1/3  py-2 text-lg rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DashboardData;

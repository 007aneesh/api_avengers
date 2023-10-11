import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
const UserData = ({data}) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="p-2 flex flex-col">
      <div className="flex flex-row items-center mt-2 mb-5 justify-between font-semibold">
        <h1>Your Details</h1>
        <button
          type="button"
          onClick={handleEditClick}
          className="hover:text-[#662890]/80 cursor-auto hover:cursor-pointer"
        >
          <h1 className="flex flex-row gap-2 items-center">
            <BsPencilFill />
            {isEditing ? "Cancel" : "Edit"}
          </h1>
        </button>
      </div>
      <form>
        <div className="flex flex-col items-center w-full md:px-20 lg:px-[20%] gap-y-3 mt-3 mb-8">
          <div key="name" className="flex flex-col w-full gap-y-1">
            <label className="">Name:</label>
            <input
              readOnly={!isEditing}
              name="full_name"
              value={data?.name}
              type="text"
              className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-black"
            ></input>
          </div>
          <div key="patientId" className="flex flex-col gap-y-1 w-full">
            <label className="">Patient Id:</label>
            <div className="flex flex-row border-black border-2 rounded-lg px-3">
              <input
                name="patientId"
                type="text"
                readOnly
                value={data?.patientId}
                id="patientId_input"
                className="outline-none  w-full px-3 py-2 bg-transparent"
              ></input>
            </div>
          </div>
          <div key="guardian_name" className="flex flex-col gap-y-1 w-full">
            <label className="">Guardian name:</label>
            <div className="flex flex-row border-black border-2 rounded-lg px-3">
              <input
                name="guardian_name"
                type="text"
                readOnly
                value="Monkey D. Luffy"
                id="guardian_name_input"
                className="outline-none  w-full px-3 py-2 bg-transparent"
              ></input>
            </div>
          </div>
          <div key="emergency_contact" className="flex flex-col gap-y-1 w-full">
            <label className="">Guardian contact:</label>
            <div className="flex flex-row border-black border-2 rounded-lg px-3">
              <input
                name="emergency_contact"
                type="text"
                readOnly
                value="8934257932"
                id="emergency_contact_input"
                className="outline-none  w-full px-3 py-2 bg-transparent"
              ></input>
            </div>
          </div>
        </div>

        <div
          id="Verification and Contact"
          className="flex flex-col items-center w-full md:px-20 lg:px-[20%] mb-8 gap-y-3"
        >
          <div className="w-full">
            <h1 className="text-[#655252] md:text-xl font-bold">
              Verification and Contact
            </h1>
            <div className="flex flex-col my-2 gap-y-1">
              <label className="">Email:</label>
              <input
                readOnly
                name="email"
                type="text"
                className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-black"
              ></input>
            </div>
            <div className="flex flex-col my-3 gap-y-1">
              <label className="">Phone number:</label>
              <input
                readOnly
                name="phone"
                type="text"
                value={data?.contact}
                className="outline-none rounded-lg w-full px-3 py-2 border-2 bg-transparent border-black"
              ></input>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center mt-2">
          <button
            type="button"
            className="px-7 bg-[#662890]/80 text-white  py-2 text-lg rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserData;

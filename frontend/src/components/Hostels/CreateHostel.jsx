import React, { useState } from "react";
import { server } from "../../constants";
import axios, { formToJSON } from "axios";
import { useNavigate } from "react-router-dom";

const CreateHostel = () => {
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = {};

    formData.forEach((value,key) => {
      jsonData[key] = value;
    })
    console.log(jsonData);

    await axios.post(`${server}/hostel/create`,jsonData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <div className="bg-gray-500 h-screen p-5 flex items-center justify-center">
      <form
        className="bg-black text-gray-300 font-semibold text-xl px-10 py-10 rounded-lg max-w-100 w-1/2 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex gap-4">
          <label htmlFor="hostelName" className="block">
            Hostel Name:
          </label>
          <input
            className="text-gray-700 p-2 rounded-xl"
            
            type="text"
            id="hostelName"
            name="hostelName"
            required
          />
        </div>
        <div className="mb-4 flex gap-4">
          <label htmlFor="capacity" className="block">
            Capacity:
          </label>
          <input
            className="text-gray-700 p-2 rounded-xl"
            type="number"
            id="capacity"
            name="capacity"
            min="1"
            required
          />
        </div>
        <div className="mb-4 flex gap-4">
          <label htmlFor="hostelType" className="block">
            Hostel Type:
          </label>
          <select
            className="text-gray-700 p-2 rounded-xl"
            id="hostelType"
            name="hostelType"
            required
          >
            <option value="">Select Type</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="mb-4 flex gap-4">
          <label htmlFor="index" className="block">
            Index:
          </label>
          <input
            className="text-gray-700 p-2 rounded-xl"
            type="number"
            id="index"
            name="index"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Hostel
        </button>
      </form>
    </div>
  );
};

export default CreateHostel;

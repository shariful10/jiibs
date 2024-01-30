"use client";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="mt-16 max-w-4xl mx-auto p-5">
      <div className="flex items-end mb-3">
        <p className="ms-auto">Step {activeTab} of 4</p>
      </div>

      {/* Tab progress indicator Horizontal line */}

      <div className="flex justify-between  mb-4 gap-3">
        <div
          className={`w-1/4 border-b-4 ${
            activeTab === 1 ? "border-[#222222]" : "border-[#D9D9D9]"
          }`}
        ></div>
        <div
          className={`w-1/4 border-b-4 ${
            activeTab === 2 ? "border-[#222222]" : "border-[#D9D9D9]"
          }`}
        ></div>
        <div
          className={`w-1/4 border-b-4 ${
            activeTab === 3 ? "border-[#222222]" : "border-[#D9D9D9]"
          }`}
        ></div>
        <div
          className={`w-1/4 border-b-4 ${
            activeTab === 4 ? "border-[#222222]" : "border-[#D9D9D9]"
          }`}
        ></div>
      </div>
      {/* Tab progress indicator Horizontal line End */}

      {/* Tab content */}
      <div className="text-center my-10">
        <h2 className="text-2xl md:text-4xl font-semibold ">
          Connect your data
        </h2>
        <p className="text-xl text-darkGray">
          Choose the data source to power your first step
        </p>
      </div>
      {/* Tab content End */}

      {/* navigation Button */}
      <div className="flex justify-between">
        {activeTab > 1 && (
          <button
            className="mr-2 bg-softGray text-[#222222] px-6 py-3 rounded-md font-semibold"
            onClick={() => setActiveTab(activeTab - 1)}
          >
            Back
          </button>
        )}

        {activeTab < 4 && (
          <div className="flex gap-5 items-center ms-auto">
            <button>Skip</button>
            <button
              className="bg-primary text-white px-10 py-3 rounded-md"
              onClick={() => setActiveTab(activeTab + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
      {/* navigation Button End */}
    </div>
  );
};

export default page;

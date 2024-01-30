"use client";
import InputProfileCard from "@/Components/Regular/Inputs/InputProfileCard";
import PrioritiesButton from "@/Components/Regular/Inputs/PrioritiesButton";
import InputImage from "@/assets/images/self-employed-1.svg";
import { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectValue, setSelectValue] = useState("");

  const handleCreateProfile = () => {
    let userInfo = JSON.parse(localStorage.getItem("create-profile")) || [];
    if (activeTab === 1) {
      userInfo.push({ employment: selectValue });
    }
    if (activeTab === 2) {
      userInfo.push({ people: selectValue });
    }
    if (activeTab === 3) {
      userInfo.push({ priorities: selectValue });
    }
    if (activeTab === 4) {
      userInfo.push({ info: selectValue });
    }

    localStorage.setItem("create-profile", JSON.stringify(userInfo));
  };

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
      <div className="my-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            Connect your data
          </h2>
          <p className="text-xl text-darkGray">
            Choose the data source to power your first step
          </p>
        </div>

        {/* Tab input items */}
        <div className="my-10">
          {activeTab === 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputProfileCard
                image={InputImage}
                title="Working Professional"
                subTitle="Select an existing data sheet as your synced data source."
                setSelectValue={setSelectValue}
                selectValue={selectValue}
              />
              <InputProfileCard
                image={InputImage}
                title="Student"
                subTitle="Select an existing data sheet as your synced data source."
                setSelectValue={setSelectValue}
                selectValue={selectValue}
              />
              <InputProfileCard
                image={InputImage}
                title="Self-Employed"
                subTitle="Select an existing data sheet as your synced data source."
                setSelectValue={setSelectValue}
                selectValue={selectValue}
              />
              <InputProfileCard
                image={InputImage}
                title="Employed"
                subTitle="Select an existing data sheet as your synced data source."
                setSelectValue={setSelectValue}
                selectValue={selectValue}
              />
            </div>
          ) : activeTab === 2 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <InputProfileCard
                image={InputImage}
                title="Alone"
                subTitle="I plan on primarily living alone."
                setSelectValue={setSelectValue}
                selectValue={selectValue}
              />
              <InputProfileCard
                image={InputImage}
                title="Roommates"
                subTitle="I plan on sharing the space with at least one other person."
                setSelectValue={setSelectValue}
                selectValue={selectValue}
              />
              <InputProfileCard
                image={InputImage}
                title="Family"
                subTitle="I plan on living with a partner or with children."
                setSelectValue={setSelectValue}
                selectValue={selectValue}
              />
            </div>
          ) : activeTab === 3 ? (
            <div className="">
              <p className="text-xl text-primary font-semibold uppercase">
                MY PRIORITIES
              </p>
              <h2 className="text-3xl font-semibold text-blackText my-2">
                Choose What Matters Most For You
              </h2>
              <p className="text-text-darkGray">
                These help us recommend and sort properties{" "}
              </p>
              <div className="flex flex-wrap gap-6 mt-10">
                <PrioritiesButton
                  title="high ceiling"
                  setSelectValue={setSelectValue}
                  selectValue={selectValue}
                />

                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  outdoor space
                </button>
                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  work space
                </button>
                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  pool
                </button>
                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  gym
                </button>
                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  big house
                </button>
                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  kitchen
                </button>
                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  high-end appliances
                </button>
                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  24-7 doorman
                </button>
                <button className="px-5 py-3 rounded-md bg-softGray text-darkGray capitalize hover:bg-darkGray hover:text-white">
                  {" "}
                  in-unit washer/dryer
                </button>
              </div>
            </div>
          ) : (
            <h2>I'm a content from tab 4</h2>
          )}
        </div>
        {/* Tab input items End */}
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
              onClick={() => {
                setActiveTab(activeTab + 1), handleCreateProfile();
              }}
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

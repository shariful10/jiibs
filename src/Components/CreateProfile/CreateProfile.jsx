"use client";
import Employment from "@/Components/CreateProfile/Employment";
import Form from "@/Components/CreateProfile/Form";
import Priorities from "@/Components/CreateProfile/Priorities";
import RoomSize from "@/Components/CreateProfile/RoomSize";
import InputImage from "@/assets/images/self-employed-1.svg";
import { useEffect, useState } from "react";

const CreateUserProfile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // Check if window is defined to ensure code only runs on the client side
    if (typeof window !== "undefined") {
      let currentTab = localStorage.getItem("current-tab");
      setActiveTab(currentTab ? Number(currentTab) : 1);
    }
  }, []);

  const [selectValue, setSelectValue] = useState("");
  const [priorities, setPriorities] = useState({});

  const handleCreateProfile = () => {
    let userData = JSON.parse(localStorage.getItem("create-profile")) || [];

    if (activeTab === 1) {
      userData.push({ employment: selectValue });
    }
    if (activeTab === 2) {
      userData.push({ people: selectValue });
    }
    if (activeTab === 3) {
      userData.push({ priorities: priorities });
    }
    if (activeTab === 4) {
      userData.push({ info: userInfo });
    }

    localStorage.setItem("create-profile", JSON.stringify(userData));
    localStorage.setItem("current-tab", JSON.stringify(activeTab + 1));

    console.log(userData);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 md:p-0">
      <div className="flex items-end mb-3">
        <p className="ms-auto">Step {activeTab} of 4</p>
      </div>

      {/* Tab progress indicator Horizontal line */}

      <div className="flex justify-between  mb-4 gap-3">
        <div
          className={`w-1/4 border-b-4 ${
            activeTab === 1 ? "border-blackText" : "border-softGray"
          }`}
        ></div>
        <div
          className={`w-1/4 border-b-4 ${
            activeTab === 2 ? "border-blackText" : "border-softGray"
          }`}
        ></div>
        <div
          className={`w-1/4 border-b-4 ${
            activeTab === 3 ? "border-blackText" : "border-softGray"
          }`}
        ></div>
        <div
          className={`w-1/4 border-b-4 ${
            activeTab === 4 ? "border-blackText" : "border-softGray"
          }`}
        ></div>
      </div>
      {/* Tab progress indicator Horizontal line End */}
      <div className={`mx-auto ${activeTab === 4 ? "max-w-2xl" : "w-full"}`}>
        {/* Tab content */}
        <div className="mt-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              {activeTab === 4 ? "Welcome to JIBBS" : "Connect your data"}
            </h2>
            <p className="text-xl text-darkGray">
              {activeTab === 4
                ? "First thing first, tell us a bit about yourself"
                : "Choose the data source to power your first step"}
            </p>
          </div>

          {/* Tab input items */}
          <div className="my-10">
            {activeTab === 1 ? (
              <Employment
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                InputImage={InputImage}
              />
            ) : activeTab === 2 ? (
              <RoomSize
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                InputImage={InputImage}
              />
            ) : activeTab === 3 ? (
              <Priorities
                priorities={priorities}
                setPriorities={setPriorities}
              />
            ) : (
              <Form setUserInfo={setUserInfo} />
            )}
          </div>
          {/* Tab input items End */}
        </div>
        {/* Tab content End */}

        {/* navigation Button */}
        <div className="flex justify-between">
          {activeTab > 1 && (
            <button
              className="mr-2 bg-softGray text-blackText px-6 py-3 rounded-md font-semibold"
              onClick={() => setActiveTab(activeTab - 1)}
            >
              Back
            </button>
          )}

          <div className="flex gap-5 items-center ms-auto">
            <button>{activeTab === 1 ? "Skip" : "Skip for now"}</button>
            <button
              className="bg-primary text-white px-10 py-3 rounded-md"
              onClick={() => {
                activeTab < 4 && setActiveTab(activeTab + 1),
                  handleCreateProfile();
              }}
            >
              Next
            </button>
          </div>
        </div>
        {/* navigation Button End */}
      </div>
    </div>
  );
};

export default CreateUserProfile;

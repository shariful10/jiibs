"use client";
import Employment from "@/Components/CreateProfile/Employment";
import Form from "@/Components/CreateProfile/Form";
import Priorities from "@/Components/CreateProfile/Priorities";
import RoomSize from "@/Components/CreateProfile/RoomSize";
import InputImage from "@/assets/images/self-employed-1.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Link from "next/link";

const CreateUserProfile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();
  const [selectValue, setSelectValue] = useState("");
  const [priorities, setPriorities] = useState({});

  const currentYear = new Date().getFullYear();

  let days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  let years = [];
  for (let i = 1950; i <= currentYear; i++) {
    years.push(i);
  }

  useEffect(() => {
    // Check if window is defined to ensure code only runs on the client side
    if (typeof window !== "undefined") {
      let currentTab = localStorage.getItem("current-tab");
      setActiveTab(currentTab ? Number(currentTab) : 1);
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;

    const date = form.date.value;
    const month = form.month.value;
    const year = form.year.value;
    const birthDate = date + ", " + month + ", " + year;

    const phoneNumber = form.phone.value;

    // const userInfo = { firstName, lastName, email, birthDate, phoneNumber };

    setUserInfo({ firstName, lastName, email, birthDate, phoneNumber });
    localStorage.removeItem("current-tab");
    form.reset();
  };

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
    <div
      className={`w-full mx-auto mt-5 mb-10 xxl:mb-28 p-5 md:p-0 ${
        activeTab === 4 ? "max-w-2xl" : " max-w-4xl"
      }`}
    >
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
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              {activeTab === 4 ? "Welcome to JIBBS" : "Connect your data"}
            </h2>
            <p className="text-lg text-darkGray">
              {activeTab === 4
                ? "First thing first, tell us a bit about yourself"
                : "Choose the data source to power your first step"}
            </p>
          </div>

          {/* Tab input items */}
          <div className="my-5">
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
              activeTab === 4 && (
                <form onSubmit={handleOnSubmit}>
                  <div className="md:flex justify-between items-center gap-6 ">
                    <div className="flex flex-col gap-2 w-full">
                      <span className="font-semibold">
                        <label htmlFor="First_Name">First Name</label>
                      </span>
                      <input
                        name="firstName"
                        id="First_Name"
                        type="text"
                        className="rounded-lg py-[13px] xxl:py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray italic"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <span className="font-semibold">
                        <label htmlFor="Last_Name">Last Name</label>
                      </span>
                      <input
                        name="lastName"
                        id="Last_Name"
                        type="text"
                        className="rounded-lg py-[13px] xxl:py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray italic"
                        required
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-2 w-full mt-3">
                    <span className="font-semibold">
                      <label htmlFor="email">Email</label>
                    </span>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      className="rounded-lg py-[13px] xxl:py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray italic"
                      required
                    />
                    <p className="flex items-center gap-1 text-green-500">
                      {" "}
                      <MdOutlineVerifiedUser size={20} /> Verified
                    </p>
                  </div>
                  {/* Birth Date */}
                  <div>
                    <div className="flex flex-col gap-2 w-full mt-3">
                      <span className="font-semibold">
                        <label htmlFor="birth-date">Birth Date</label>
                      </span>
                      <div className="md:flex items-center justify-between gap-5 space-y-5 md:space-y-0">
                        <select
                          name="date"
                          id="date"
                          className="rounded-lg py-[13px] xxl:py-[18px] px-5 border border-[#E4E4E4] focus:outline-none  text-darkGray w-full"
                          required
                        >
                          <option disabled>Day</option>
                          {days?.map((day, index) => (
                            <option key={index} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                        <select
                          name="month"
                          id="month"
                          className="rounded-lg py-[13px] xxl:py-[18px] px-5 border border-[#E4E4E4] focus:outline-none  text-darkGray w-full"
                          required
                        >
                          <option disabled>Month</option>
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="August">August</option>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                        </select>
                        <select
                          name="year"
                          id="year"
                          className="rounded-lg py-[13px] xxl:py-[18px] px-5 border border-[#E4E4E4] focus:outline-none  text-darkGray w-full"
                          required
                        >
                          <option disabled>Year</option>
                          {years?.map((year, index) => (
                            <option key={index} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2 w-full mt-3">
                    <span className="font-semibold">
                      <label htmlFor="phone">Phone Number</label>
                    </span>
                    <div className="flex gap-2 rounded-lg border border-[#E4E4E4] text-darkGray divide-x-2">
                      <select
                        name="country"
                        id="country"
                        className="py-[13px] xxl:py-[18px] px-2 rounded-l-lg"
                        required
                      >
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="AUS">AUS</option>
                        <option value="CA">CA</option>
                        <option value="UAE">UAE</option>
                      </select>
                      <input
                        name="phone"
                        id="phone"
                        type="number"
                        className="py-[13px] xxl:py-[18px] px-5 focus:outline-none w-full rounded-r-lg"
                        required
                      />
                    </div>
                  </div>
                </form>
              )
            )}
          </div>
          {/* Tab input items End */}
        </div>
        {/* Tab content End */}

        {/* navigation Button */}
        <div className="flex justify-between">
          {activeTab > 1 && (
            <button
              className="mr-2 bg-softGray text-blackText px-5 md:px-10 py-3 rounded-md font-semibold"
              onClick={() => setActiveTab(activeTab - 1)}
            >
              Back
            </button>
          )}

          <div className="flex gap-5 items-center ms-auto">
            <div className="text-center md:text-right">
              <Link href="/">{activeTab !== 4 ? "Skip" : "Skip for now"}</Link>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-5 md:px-10 py-3 rounded-md"
              onClick={() => {
                activeTab <= 3 && setActiveTab(activeTab + 1),
                  handleCreateProfile();
                if (activeTab === 4) {
                  handleOnSubmit;
                  localStorage.removeItem("current-tab");
                  router.push("/success");
                }
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

"use client";
import React from "react";
import InputPass from "./InputPass";
import InputField from "./InputField";
import EditFieldLavel from "./EditFieldLavel";
import InputFieldDetails from "./InputFieldDetails";
import ProfileInfoContent from "./ProfileInfoContent";

const ProfileInfoDetails = ({
  rename,
  editPass,
  setRename,
  editEmail,
  editPhone,
  setEditEmail,
  setEditPhone,
  setEditPass,
}) => {
  return (
    <div className="mt-10 md:mt-[60px]">
      {rename ? (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h4 className="text-blackText font-semibold">Legal Name</h4>
            </div>
            <button
              onClick={() => setRename(false)}
              className=" text-blackText font-semibold cursor-pointer"
            >
              Cancel
            </button>
          </div>
          <div className="mt-5">
            <div className="grid md:grid-cols-2 gap-[22px]">
              <InputField
                lavel="First name"
                name="first_name"
                defaultValue="Jane"
              />
              <InputField
                lavel="Last name"
                name="last_name"
                defaultValue="Smith"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <button
                onClick={() => setRename(false)}
                className="text-sm text-white bg-primary font-semibold py-[8px] px-[20px] mt-5 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ProfileInfoContent
          className={`${
            editPass || editEmail || editPhone
              ? "text-[#c9c7c7] hidden"
              : "text-darkGray"
          }`}
          lavel="Legal Name"
          title="Jane Brandson"
        >
          <button
            onClick={() => setRename(true)}
            className="text-blackText font-semibold cursor-pointer"
          >
            Edit
          </button>
        </ProfileInfoContent>
      )}
      {editEmail ? (
        <div>
          <div className="flex justify-between items-center mt-5 md:mt-10">
            <div className="flex flex-col gap-1">
              <h4 className=" text-blackText font-semibold">Email Address</h4>
            </div>
            <button
              onClick={() => setEditEmail(false)}
              className=" text-blackText font-semibold cursor-pointer"
            >
              Cancel
            </button>
          </div>
          <div className="">
            <div className="mt-5">
              <InputField
                lavel="Your email"
                name="email"
                defaultValue="Contact@gmail.com"
              />
            </div>
            <div className="text-center md:text-start">
              <button
                onClick={() => setEditEmail(false)}
                className="text-sm text-white bg-primary font-semibold py-[8px] px-[20px] mt-5 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ProfileInfoContent
          className={`mt-6 ${
            rename || editPass || editPhone
              ? "text-[#c9c7c7] hidden"
              : "text-darkGray"
          }`}
          lavel="Email address"
          title="contact@gmail.com"
        >
          <button
            onClick={() => setEditEmail(true)}
            className="text-blackText font-semibold cursor-pointer"
          >
            Edit
          </button>
        </ProfileInfoContent>
      )}
      {editPhone ? (
        <div className="mt-6">
          <EditFieldLavel heading="Your Phone number">
            <button
              onClick={() => setEditPhone(false)}
              className=" text-blackText font-semibold cursor-pointer"
            >
              Cancel
            </button>
          </EditFieldLavel>
          <div className="mt-5">
            <InputField
              lavel="Phone number"
              name="phone"
              defaultValue="+1*******68"
            />
          </div>
          <button
            onClick={() => setEditPhone(false)}
            className="text-sm text-white bg-primary font-semibold py-[8px] px-[20px] mt-5 rounded-md"
          >
            Save
          </button>
        </div>
      ) : (
        <ProfileInfoContent
          className={`mt-6 ${
            rename || editEmail || editPass
              ? "text-[#c9c7c7] hidden"
              : "text-darkGray"
          }`}
          lavel="Phone number"
          title="+1*******68"
        >
          <button
            onClick={() => setEditPhone(true)}
            className="text-blackText font-semibold cursor-pointer"
          >
            Edit
          </button>
        </ProfileInfoContent>
      )}
      {editPass ? (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h4 className=" text-blackText font-semibold">Password</h4>
            <button
              onClick={() => setEditPass(false)}
              className=" text-blackText font-semibold cursor-pointer"
            >
              Cancel
            </button>
          </div>
          <div className="">
            <InputPass lavel="Current" />
            <InputPass lavel="New" />
            <InputPass lavel="Confirm" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <button
              onClick={() => setEditPass(false)}
              className="text-sm text-white bg-primary font-semibold py-[5px] px-[15px] mt-5 rounded-md"
            >
              Update Password
            </button>
          </div>
        </div>
      ) : (
        <ProfileInfoContent
          className={`mt-6 ${
            rename || editEmail || editPhone
              ? "text-[#c9c7c7] hidden"
              : "text-darkGray"
          }`}
          lavel="Password"
          title="***********"
        >
          <button
            onClick={() => setEditPass(true)}
            className="text-blackText font-semibold cursor-pointer"
          >
            Edit
          </button>
        </ProfileInfoContent>
      )}
    </div>
  );
};

export default ProfileInfoDetails;

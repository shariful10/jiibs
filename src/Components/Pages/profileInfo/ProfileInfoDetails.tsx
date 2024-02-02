"use client";
import React, { useState } from "react";
import ProfileInfoContent from "./ProfileInfoContent";
import InputPass from "./InputPass";
import InputField from "./InputField";
import EditFieldLavel from "./EditFieldLavel";

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
							<h4 className="text-[15px] text-blackText font-semibold">
								Legal Name
							</h4>
							<p className="text-sm text-darkGray">
								Change your current name
							</p>
						</div>
						<button
							onClick={() => setRename(false)}
							className="text-[15px] text-blackText font-semibold cursor-pointer"
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
								lavel="First name"
								name="last_name"
								defaultValue="Smith"
							/>
						</div>
						<div className="flex flex-col items-center md:items-start">
							<button
								onClick={() => setRename(false)}
								className="text-white bg-primary font-semibold py-1 px-3 mt-5 rounded-md"
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
							? "text-[#c9c7c7] hidden md:block"
							: "text-darkGray"
					}`}
					lavel="Lagal name"
					title="Jane Brandson"
				>
					<button onClick={() => setRename(true)} className="font-medium">
						Edit
					</button>
				</ProfileInfoContent>
			)}
			{editEmail ? (
				<div className="mt-6">
					<EditFieldLavel heading="Email address" subHeading="email">
						<button
							onClick={() => setEditEmail(false)}
							className="text-[15px] text-blackText font-semibold cursor-pointer"
						>
							Cancel
						</button>
					</EditFieldLavel>
					<InputField
						lavel="Email"
						name="email"
						defaultValue="contact.gmail.com"
					>
						<button
							onClick={() => setEditEmail(false)}
							className="text-white bg-primary font-semibold py-1 px-3 mt-5 rounded-md"
						>
							Save
						</button>
					</InputField>
				</div>
			) : (
				<ProfileInfoContent
					className={`mt-6 ${
						rename || editPass || editPhone
							? "text-[#c9c7c7] hidden md:block"
							: "text-darkGray"
					}`}
					lavel="Email address"
					title="contact.gmail.com"
				>
					<button
						onClick={() => setEditEmail(true)}
						className="font-medium"
					>
						Edit
					</button>
				</ProfileInfoContent>
			)}
			{editPhone ? (
				<div className="mt-6">
					<EditFieldLavel heading="Phone number" subHeading="phone number">
						<button
							onClick={() => setEditPhone(false)}
							className="text-[15px] text-blackText font-semibold cursor-pointer"
						>
							Cancel
						</button>
					</EditFieldLavel>
					<InputField
						lavel="Phone number"
						name="phone"
						defaultValue="+1*******68"
					>
						<button
							onClick={() => setEditPhone(false)}
							className="text-white bg-primary font-semibold py-1 px-3 mt-5 rounded-md"
						>
							Save
						</button>
					</InputField>
				</div>
			) : (
				<ProfileInfoContent
					className={`mt-6 ${
						rename || editEmail || editPass
							? "text-[#c9c7c7] hidden md:block"
							: "text-darkGray"
					}`}
					lavel="Phone number"
					title="+1*******68"
				>
					<button
						onClick={() => setEditPhone(true)}
						className="font-medium"
					>
						Edit
					</button>
				</ProfileInfoContent>
			)}
			{editPass ? (
				<div className="mt-6">
					<div className="flex items-center justify-between">
						<h4 className="text-[15px] text-blackText font-semibold">
							Password
						</h4>
						<button
							onClick={() => setEditPass(false)}
							className="text-[15px] text-blackText font-semibold cursor-pointer"
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
							className="text-white bg-primary font-semibold py-2 px-3 mt-5 rounded-md"
						>
							Update Password
						</button>
					</div>
				</div>
			) : (
				<ProfileInfoContent
					className={`mt-6 ${
						rename || editEmail || editPhone
							? "text-[#c9c7c7] hidden md:block"
							: "text-darkGray"
					}`}
					lavel="Password"
					title="***********"
				>
					<button
						onClick={() => setEditPass(true)}
						className="font-medium"
					>
						Edit
					</button>
				</ProfileInfoContent>
			)}
		</div>
	);
};

export default ProfileInfoDetails;

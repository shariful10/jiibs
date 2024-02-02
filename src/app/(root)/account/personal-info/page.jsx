"use client";
import Link from "next/link";
import { useState } from "react";
import InputPass from "./InputPass";
import Container from "@/Components/Regular/Container";
import ProfileInfoContent from "@/Components/Pages/profileInfo/ProfileInfoContent";

const PersonalInfo = () => {
   const [rename, setRename] = useState(false)
	const [editPass, setEditPass] = useState(false);
   console.log("rename: ", rename)

   const handleRename = (rename) => {
      setRename(rename)
   };

	return (
		<Container>
			<div className="mt-10 mb-20">
				<h2 className="text-[36px] font-semibold">Account</h2>
				<div className="flex items-center gap-2 text-darkGray text-lg">
					<Link href="/account" className="hover:text-primary">
						Account
					</Link>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
					>
						<path
							d="M13.1685 12.5007L8.21875 7.55093L9.63297 6.13672L15.9969 12.5007L9.63297 18.8646L8.21875 17.4504L13.1685 12.5007Z"
							fill="#626262"
						/>
					</svg>
					<Link
						href="/account/personal-info"
						className="hover:text-primary"
					>
						Personal info
					</Link>
				</div>
				<div className="mt-[60px]">
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
									onClick={() => handleRename(false)}
									className="text-[15px] text-blackText font-semibold cursor-pointer"
								>
									Cancel
								</button>
							</div>
							<div className="mt-5">
								<div className="grid md:grid-cols-2 gap-[22px]">
									<div className="border rounded-md">
										<p className="text-[10px] text-darkGray pt-2 px-3">
											First name
										</p>
										<input
											type="text"
											name="first_name"
											defaultValue={"Jane"}
											className="outline-neme focus-within:outline-none pb-2 px-3 w-full rounded-md"
										/>
									</div>
									<div className="border rounded-md">
										<p className="text-[10px] text-[#626262] pt-2 px-3">
											Last name
										</p>
										<input
											type="text"
											name="last_name"
											defaultValue={"Smith"}
											className="outline-neme focus-within:outline-none pb-2 px-3 w-full rounded-md"
										/>
									</div>
								</div>
								<div className="flex flex-col items-center md:items-start">
									<button
										onClick={() => handleRename(false)}
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
								editPass
									? "text-[#c9c7c7] hidden md:block"
									: "text-darkGray"
							}`}
							lavel="Lagal name"
							title="Jane Brandson"
						>
							<button
                        onClick={() => handleRename(true)}
								className="font-medium"
							>
								Edit
							</button>
						</ProfileInfoContent>
					)}
					<ProfileInfoContent
						className={`mt-6 ${
							rename | editPass
								? "text-[#c9c7c7] hidden md:block"
								: "text-darkGray"
						}`}
						lavel="Email address"
						title="contact.gmail.com"
					>
						<button className="font-medium">Edit</button>
					</ProfileInfoContent>
					<ProfileInfoContent
						className={`mt-6 ${
							rename
								? "text-[#c9c7c7] hidden md:block"
								: "text-darkGray"
						}`}
						lavel="Phone number"
						title="+1*******68"
					>
						<button className="font-medium">Edit</button>
					</ProfileInfoContent>
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
								rename
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
			</div>
		</Container>
	);
};

export default PersonalInfo;
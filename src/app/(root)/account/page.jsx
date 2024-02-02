import AccountPageCard from "@/Components/AccountPageCard";
import Container from "@/Components/Regular/Container";
import Link from "next/link";
import React from "react";


const AccountPage = () => {
	return (
		<Container>
			<div className="mt-10 mb-20">
				<h2 className="text-[36px] font-semibold">Account</h2>
				<div className="flex items-end gap-4 mb-10 text-darkGray">
					<h4 className="text-2xl font-semibold ">Jane smith</h4>
					<Link
						href="#"
						className="text-lg underline hover:text-primary duration-300 cursor-pointer"
					>
						Go to profile
					</Link>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					<AccountPageCard
						url="/account/personal-info"
						title="Personal info"
						subtitle="Edit your personal profiles"
					/>
					<AccountPageCard
						url="/tours-and-open-houses"
						title="Tours & Open Houses"
						subtitle="Manage your schedule"
					/>
					<AccountPageCard
						url="/account"
						title="Inbox"
						subtitle="Check and send all messages"
					/>
					<AccountPageCard
						url="/account"
						title="Liked Properties"
						subtitle="Manage all likes properties"
					/>
					<AccountPageCard
						url="/account"
						title="Custom Optimization"
						subtitle="Edit your personal profiles"
					/>
					<AccountPageCard
						url="/account"
						title="Log Out"
						subtitle="Edit your personal profiles"
					/>
				</div>
			</div>
		</Container>
	);
};

export default AccountPage;

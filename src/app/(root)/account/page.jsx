import AccountPageCard from "@/Components/AccountPageCard";
import Container from "@/Components/Regular/Container";
import React from "react";

const AccountPage = () => {
	return (
		<div className="mt-10">
			<h2 className="text-[36px] font-semibold">Account</h2>
			<div className="flex items-end gap-4 mb-10">
				<h4 className="text-2xl font-semibold">Jane smith</h4>
				<p className="text-lg underline hover:text-blue-600 duration-300 cursor-pointer">Go to profile</p>
			</div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AccountPageCard title="Personal info" subtitle="Edit your personal profiles" />
            <AccountPageCard title="Tours & Open Houses" subtitle="Manage your schedule" />
            <AccountPageCard title="Inbox" subtitle="Check and send all messages" />
            <AccountPageCard title="Liked Properties" subtitle="Manage all likes properties" />
            <AccountPageCard title="Custom Optimization" subtitle="Edit your personal profiles" />
            <AccountPageCard title="Log Out" subtitle="Edit your personal profiles" />
         </div>
		</div>
	);
};

export default AccountPage;

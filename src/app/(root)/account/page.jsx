import Container from "@/Components/Regular/Container";
import AccountPageCard from "@/Components/AccountPageCard";

const AccountPage = () => {
	return (
		<Container className="px-6 md:px-0">
			<div className="mt-10 mb-20">
				<h2 className="text-[36px] font-semibold mb-10">Account</h2>
				{/* <div className="flex items-end gap-4 mb-10 text-darkGray">
					<h4 className="text-2xl font-semibold ">Jane smith</h4>
					<Link
						href="#"
						className="text-lg underline hover:text-primary duration-300 cursor-pointer"
					>
						Go to profile
					</Link>
				</div> */}
				<AccountPageCard />
			</div>
		</Container>
	);
};

export default AccountPage;

import Container from "@/Components/Regular/Container";
import AccountPageCard from "@/Components/AccountPageCard";

const AccountPage = () => {
	return (
		<Container className="px-6 md:px-0">
			<div className="mt-10 mb-20">
				<h2 className="text-[34px] font-semibold mb-10">Account</h2>
				<AccountPageCard />
			</div>
		</Container>
	);
};

export default AccountPage;

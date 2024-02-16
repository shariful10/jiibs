import Container from "@/Components/Regular/Container";
import AccountPageCard from "@/Components/AccountPageCard";

const AccountPage = () => {
  return (
    <Container className="px-6 md:px-0 min-h-[calc(100vh-95px)]">
      <div className="mt-10 mb-20">
        <h2 className="font-semibold text-[26px] xxl:text-3xl text-blackText mb-10">
          Account
        </h2>
        <AccountPageCard />
      </div>
    </Container>
  );
};

export default AccountPage;

import Link from "next/link";
import ProfileInfoContent from "@/Components/Pages/profileInfo/ProfileInfoContent";
import Container from "@/Components/Regular/Container";

const PersonalInfo = () => {
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
               <Link href="/account/personal-info" className="hover:text-primary">
                  Personal info
               </Link>
            </div>
            <div className="mt-[60px]">
               <ProfileInfoContent
                  className="text-darkGray"
                  lavel="Lagal name"
                  title="Jane Brandson"
               />
               <ProfileInfoContent
                  className="mt-6 text-darkGray"
                  lavel="Email address"
                  title="contact.gmail.com"
               />
               <ProfileInfoContent
                  className="mt-6 text-darkGray"
                  lavel="Phone number"
                  title="+1*******68"
               />
               <ProfileInfoContent
                  className="mt-6 text-darkGray"
                  lavel="Password"
                  title="***********"
               />
            </div>
         </div>
      </Container>
	);
};

export default PersonalInfo;

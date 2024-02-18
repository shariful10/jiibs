import Context from "@/Context/Context";
import { useContext } from "react";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/Signup/Signup";
import InputSearchBar from "../Regular/Inputs/InputSearchBar";
import { SIGNIN, SIGNUP } from "../Regular/Utils/constant";
import Logo from "./Logo";

const NavigationBar = () => {
  const { modal, setModal } = useContext(Context);

  const handleModal = ({
    modalType,
    modalLabel,
    isMobileModal,
    isWidth,
    modalContent,
  }) => {
    setModal({
      ...modal,
      isOpen: !modal?.isOpen,
      modalType,
      isMobileModal,
      modalLabel,
      isWidth,
      modalContent,
    });
  };

  return (
    <div className="w-full hidden bg-base-100 md:flex items-center justify-between py-3 ">
      {/* logo */}
      <div className="py-2.5">
        <Logo />
      </div>

      {/* search input */}
      <InputSearchBar />

      {/* user , login , sign up */}
      <div className="flex justify-end items-center gap-4">
        <AuthButton
          icons={loginUserIcon}
          title="Login"
          handleAuthButton={() =>
            handleModal({
              modalType: SIGNIN?.value,
              modalLabel: SIGNIN?.label,
              isMobileModal: false,
              isWidth: "md:max-w-[400px] xxl:max-w-[480px]",
              modalContent: <SignIn />,
            })
          }
        />
        <AuthButton
          icons={signUpIcons}
          title="Sign Up"
          handleAuthButton={() =>
            handleModal({
              modalType: SIGNUP?.value,
              modalLabel: SIGNUP?.label,
              isMobileModal: false,
              isWidth: "md:max-w-[400px] xxl:max-w-[480px]",
              modalContent: <SignUp />,
            })
          }
        />
      </div>
    </div>
  );
};

export default NavigationBar;

// similar components
function AuthButton({ icons, title, handleAuthButton }) {
  return (
    <div
      onClick={handleAuthButton}
      className="py-2.5 px-[15px] gap-[8px] rounded-[100px] flex items-center justify-center bg-lightGray cursor-pointer"
    >
      <figure className="w-5 h-5"> {icons}</figure>
      <span className="text-[14px] font-semibold">{title}</span>
    </div>
  );
}

// icons
const loginUserIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
      fill="#222222"
    />
  </svg>
);
const signUpIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_2047_2026)">
      <path
        d="M12 0.000976562C5.37328 0.000976562 0 5.3732 0 12.0005C0 18.6277 5.37275 23.9999 12 23.9999C18.6278 23.9999 24 18.6277 24 12.0005C24 5.3732 18.6278 0.000976562 12 0.000976562ZM12 3.58896C14.1927 3.58896 15.9696 5.36635 15.9696 7.55804C15.9696 9.75025 14.1927 11.5271 12 11.5271C9.80831 11.5271 8.03145 9.75025 8.03145 7.55804C8.03145 5.36635 9.80831 3.58896 12 3.58896ZM11.9974 20.8626C9.81042 20.8626 7.80743 20.0662 6.2625 18.7479C5.88615 18.4269 5.66898 17.9562 5.66898 17.4623C5.66898 15.2395 7.46798 13.4605 9.69129 13.4605H14.3098C16.5336 13.4605 18.3257 15.2395 18.3257 17.4623C18.3257 17.9567 18.1096 18.4263 17.7328 18.7474C16.1884 20.0662 14.1848 20.8626 11.9974 20.8626Z"
        fill="#222222"
      />
    </g>
    <defs>
      <clipPath id="clip0_2047_2026">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

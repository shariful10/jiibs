const NavigationBar = () => {
  return (
    <div className="bg-base-100 flex items-center justify-between">
      {/* Login */}
      <div className="flex text-[38px] font-semibold text-primary py-3">
        <a>JIBBS.</a>
      </div>

      {/* search input */}
      <div className="flex-none gap-2">
        <div className="form-control m-auto flex flex-row items-center border border-gray-500 rounded-full h-[45px] px-[24px] relative divide-x">
          <div className="flex-1 flex items-center justify-start gap-5">
            <figure>{magnifyGlassIcons}</figure>
            <input
              type="text"
              placeholder="Search Apartments "
              className="outline-none text-[17px] font-normal"
            />
          </div>
          <button className="ml-2 focus:outline-none pl-6 flex items-center justify-end gap-2">
            <span>Units</span>
            <figure>{dropDownIcons}</figure>
          </button>
        </div>
      </div>

      {/* user , login , sign up */}
      <div className="flex justify-end items-center gap-4">
        <AuthButton icons={loginUserIcon} title="Login" />

        <AuthButton icons={signUpIcons} title="Sign Up" />
      </div>
    </div>
  );
};

export default NavigationBar;

// similar components
function AuthButton({ icons, title }) {
  return (
    <button className="py-[7px] px-[15px] gap-2.5 rounded-[100px] flex items-center justify-center bg-lightGray">
      <figure className="w-6 h-6 text-2xl"> {icons}</figure>
      <span className="text-base font-semibold">{title}</span>
    </button>
  );
}

// icons
var loginUserIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
      fill="#222222"
    />
  </svg>
);
var signUpIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
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
var magnifyGlassIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 23 22"
    fill="none"
  >
    <rect
      x="0.719395"
      y="0.00516561"
      width="2.75919"
      height="9.03236"
      rx="0.5"
      transform="matrix(0.724382 -0.689399 0.714407 0.69973 12.7493 14.978)"
      fill="#626262"
      stroke="#626262"
    />
    <path
      d="M16.1755 8.52356C16.1755 12.3697 12.936 15.5471 8.86511 15.5471C4.79427 15.5471 1.55469 12.3697 1.55469 8.52356C1.55469 4.67738 4.79427 1.5 8.86511 1.5C12.936 1.5 16.1755 4.67738 16.1755 8.52356Z"
      stroke="#626262"
      strokeWidth="2"
    />
  </svg>
);
var dropDownIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
  >
    <path d="M7.94531 4.5L4.94531 7.5L1.94531 4.5" fill="#222222" />
    <path
      d="M7.94531 4.5L4.94531 7.5L1.94531 4.5"
      stroke="#222222"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

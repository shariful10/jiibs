import React from "react";
import SquareCheckbox from "../Regular/Toggle/SquareCheckbox";

export default function SignUp() {
  return (
    <div className="p-10">
      <div>
        <h3>Sign up to JIIBS</h3>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center gap-5 rounded-full border border-[#000000] py-2 px-10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
            >
              <path
                d="M8.69177 0C8.72435 0 8.75693 0 8.79136 0C8.87128 0.987309 8.49443 1.72502 8.03643 2.25925C7.58704 2.78979 6.97166 3.30435 5.97636 3.22628C5.90996 2.25311 6.28743 1.5701 6.74481 1.03711C7.169 0.540377 7.94667 0.0983621 8.69177 0Z"
                fill="#222222"
              />
              <path
                d="M11.7067 10.2764C11.7067 10.2862 11.7067 10.2948 11.7067 10.3041C11.4269 11.1512 11.028 11.8772 10.5411 12.551C10.0966 13.1627 9.55192 13.9859 8.57936 13.9859C7.73898 13.9859 7.18077 13.4455 6.31949 13.4307C5.40841 13.416 4.90738 13.8826 4.07438 14C3.97909 14 3.8838 14 3.79036 14C3.17867 13.9115 2.68501 13.427 2.32538 12.9906C1.26491 11.7008 0.44543 10.0348 0.292969 7.90279C0.292969 7.69377 0.292969 7.48536 0.292969 7.27634C0.357519 5.7505 1.09892 4.50991 2.08439 3.90867C2.60448 3.58899 3.31945 3.31665 4.11557 3.43838C4.45676 3.49125 4.80533 3.60805 5.11087 3.72363C5.40042 3.8349 5.76252 4.03224 6.10555 4.02179C6.33793 4.01502 6.56909 3.89392 6.80331 3.80846C7.48939 3.56071 8.16194 3.27669 9.04842 3.4101C10.1138 3.57117 10.87 4.04453 11.3372 4.77487C10.4359 5.34845 9.72343 6.2128 9.84516 7.68885C9.95336 9.02965 10.7329 9.81408 11.7067 10.2764Z"
                fill="#222222"
              />
            </svg>
          </span>
          <span className="font-normal text-base leading-5">
            Continue with Apple
          </span>
        </div>

        <div className="flex justify-between items-center gap-5 rounded-full border bg-[#4285F4] text-white py-2 px-1">
          <span className="w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1443_7767)">
                <path
                  d="M15.8957 6.60871L9.36944 6.6084C9.08125 6.6084 8.84766 6.84196 8.84766 7.13015V9.21499C8.84766 9.50312 9.08125 9.73674 9.36941 9.73674H13.0446C12.6422 10.7811 11.891 11.6558 10.9327 12.2116L12.4998 14.9243C15.0136 13.4705 16.4998 10.9196 16.4998 8.06402C16.4998 7.65743 16.4698 7.36677 16.4099 7.03949C16.3643 6.79084 16.1485 6.60871 15.8957 6.60871Z"
                  fill="#167EE6"
                />
                <path
                  d="M8.49888 12.8695C6.70031 12.8695 5.13019 11.8868 4.28691 10.4326L1.57422 11.9962C2.95469 14.3887 5.54075 15.9999 8.49888 15.9999C9.95003 15.9999 11.3193 15.6092 12.4989 14.9283V14.9246L10.9318 12.2117C10.215 12.6275 9.38547 12.8695 8.49888 12.8695Z"
                  fill="#12B347"
                />
                <path
                  d="M12.5 14.9284V14.9247L10.9329 12.2119C10.2161 12.6276 9.38666 12.8696 8.5 12.8696V16.0001C9.95116 16.0001 11.3205 15.6094 12.5 14.9284Z"
                  fill="#0F993E"
                />
                <path
                  d="M3.63044 8.00019C3.63044 7.11366 3.87238 6.28425 4.28803 5.56747L1.57534 4.00391C0.890687 5.17975 0.5 6.54531 0.5 8.00019C0.5 9.45506 0.890687 10.8206 1.57534 11.9965L4.28803 10.4329C3.87238 9.71612 3.63044 8.88672 3.63044 8.00019Z"
                  fill="#FFD500"
                />
                <path
                  d="M8.49888 3.13044C9.67172 3.13044 10.749 3.54719 11.5905 4.24041C11.7981 4.41141 12.0998 4.39906 12.29 4.20891L13.7672 2.73172C13.9829 2.51597 13.9675 2.16281 13.7371 1.96288C12.3272 0.739781 10.4928 0 8.49888 0C5.54075 0 2.95469 1.61116 1.57422 4.00372L4.28691 5.56728C5.13019 4.11312 6.70031 3.13044 8.49888 3.13044Z"
                  fill="#FF4B26"
                />
                <path
                  d="M11.5916 4.24041C11.7992 4.41141 12.101 4.39906 12.2911 4.20891L13.7683 2.73172C13.984 2.51597 13.9686 2.16281 13.7382 1.96288C12.3283 0.73975 10.494 0 8.5 0V3.13044C9.67281 3.13044 10.7502 3.54719 11.5916 4.24041Z"
                  fill="#D93F21"
                />
              </g>
              <defs>
                <clipPath id="clip0_1443_7767">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="font-normal text-base leading-5">
            Continue with Goggle
          </span>
          <span></span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-2">
          <input
            type="text"
            placeholder="First name"
            className="border border-[#ddd] w-full sm:w-1/2 py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-[#ddd] w-full sm:w-1/2 py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="text"
            placeholder="Email address"
            className="border border-[#ddd] w-full py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="Password"
            placeholder="Email address"
            className="border border-[#ddd] w-full py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-[#ddd] w-full py-[14px] px-4 rounded-md outline-none placeholder:font-normal text-sm leading-5"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <SquareCheckbox label="Agree to Terms & Conditions" />
        <SquareCheckbox
          label="Subscribe to our newsletter for New York City updates and apartment
            searching tips"
        />
      </div>
      <div className="flex justify-center w-full mt-5">
        <button className="w-full font-semibold text-base leading-5 bg-primary py-4 px-8 outline-none border-none rounded-md text-white text-center">
          Create my account
        </button>
      </div>
    </div>
  );
}

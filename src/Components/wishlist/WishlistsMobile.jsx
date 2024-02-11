import Context from "@/Context/Context";
import React, { useContext, useState } from "react";
import WishlistDetailsMobile from "./WishlistDetailsMobile";
import { CREATE_WISHLIST_MOBILE } from "../Regular/Utils/constant";
import AddAlbum from "./AddAlbum";

const newAlbumIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="49"
    height="45"
    viewBox="0 0 49 45"
    fill="none"
  >
    <path
      d="M48.3768 12.752L45.5768 32.772C45.507 33.8298 45.2086 34.8598 44.7023 35.7912C44.1959 36.7225 43.4936 37.533 42.6438 38.1666C42.5368 38.2408 42.4118 38.2849 42.282 38.2941C42.1521 38.3034 42.0222 38.2776 41.9058 38.2194C41.7893 38.1612 41.6907 38.0727 41.6202 37.9632C41.5497 37.8538 41.51 37.7274 41.5051 37.5973V17.5516C41.626 16.2446 41.4573 14.927 41.0112 13.6926C40.5651 12.4581 39.8525 11.3371 38.924 10.4093C37.9955 9.48149 36.874 8.76966 35.6392 8.32444C34.4044 7.87921 33.0867 7.71153 31.7798 7.83331H9.81846C9.11846 7.83331 9.10212 7.20331 9.15112 6.92331C9.3481 5.02522 10.2793 3.27931 11.7458 2.05831C12.5738 1.50332 13.5046 1.11974 14.4832 0.930188C15.4618 0.740637 16.4684 0.748953 17.4438 0.954645L42.0861 4.40798C43.0835 4.48053 44.0563 4.75202 44.9472 5.20646C45.838 5.6609 46.6289 6.28908 47.2731 7.05398C47.8292 7.88147 48.2134 8.81222 48.403 9.79101C48.5926 10.7698 48.5837 11.7767 48.3768 12.752ZM37.9981 17.5516V37.777C38.1184 38.6218 38.0405 39.483 37.7706 40.2925C37.5007 41.1021 37.0462 41.8377 36.443 42.4413C35.8398 43.045 35.1045 43.5 34.2952 43.7705C33.4859 44.041 32.6247 44.1196 31.7798 44H6.88779C6.04243 44.1209 5.18053 44.0433 4.37036 43.7733C3.5602 43.5033 2.82403 43.0484 2.22019 42.4446C1.61635 41.8407 1.16142 41.1046 0.891444 40.2944C0.62147 39.4842 0.54387 38.6223 0.66479 37.777V17.5516C0.544675 16.7066 0.622878 15.8453 0.893211 15.0357C1.16354 14.2262 1.61859 13.4906 2.22233 12.8874C2.82607 12.2841 3.56194 11.8296 4.3717 11.5598C5.18145 11.2901 6.04288 11.2126 6.88779 11.3333H31.7798C32.6243 11.2139 33.4849 11.2924 34.2938 11.5626C35.1028 11.8329 35.8378 12.2875 36.4408 12.8906C37.0439 13.4937 37.4985 14.2287 37.7688 15.0376C38.0391 15.8465 38.1176 16.7072 37.9981 17.5516ZM26.9148 27.6666C26.9148 27.2025 26.7304 26.7574 26.4022 26.4292C26.074 26.101 25.6289 25.9166 25.1648 25.9166H21.0815V21.8333C21.0815 21.3692 20.8971 20.9241 20.5689 20.5959C20.2407 20.2677 19.7956 20.0833 19.3315 20.0833C18.8673 20.0833 18.4222 20.2677 18.094 20.5959C17.7658 20.9241 17.5815 21.3692 17.5815 21.8333V25.9166H13.4981C13.034 25.9166 12.5889 26.101 12.2607 26.4292C11.9325 26.7574 11.7481 27.2025 11.7481 27.6666C11.7481 28.1308 11.9325 28.5759 12.2607 28.9041C12.5889 29.2323 13.034 29.4166 13.4981 29.4166H17.5815V33.5C17.5815 33.9641 17.7658 34.4092 18.094 34.7374C18.4222 35.0656 18.8673 35.25 19.3315 35.25C19.7956 35.25 20.2407 35.0656 20.5689 34.7374C20.8971 34.4092 21.0815 33.9641 21.0815 33.5V29.4166H25.1648C25.6289 29.4166 26.074 29.2323 26.4022 28.9041C26.7304 28.5759 26.9148 28.1308 26.9148 27.6666Z"
      fill="#D1D5DB"
    />
  </svg>
);

export default function WishlistsMobile() {
  const [isEdit, setIsEdit] = useState(false);
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
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center py-5">
          <span
            style={{
              boxShadow: "0px 2px 10px 0px #00000014",
            }}
            className="w-[24px] h-[24px] p-2 flex justify-center items-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="12"
              viewBox="0 0 6 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.04674 5.9357C2.44481 4.35007 3.81129 2.80225 5.14615 1.29361C5.21602 1.21056 5.25498 1.10032 5.25498 0.985691C5.25498 0.871066 5.21602 0.760826 5.14615 0.677776C4.9571 0.439966 4.65804 0.460586 4.52187 0.622791C3.13838 2.19123 1.69107 3.83047 0.179927 5.54118C0.0601782 5.65253 0 5.78449 0 5.9357C0 6.08759 0.0601782 6.22299 0.179927 6.34259L4.72855 11.3641C4.8158 11.4548 4.93092 11.5035 5.04943 11.4998C5.16794 11.4961 5.28049 11.4402 5.36315 11.3441C5.58077 11.0974 5.49688 10.8541 5.39841 10.7386C3.94557 9.14006 2.49542 7.53908 1.04674 5.9357Z"
                fill="#222222"
              />
            </svg>
          </span>
          <h1 className="font-semibold text-[20px] leading-6 text-blackText">
            Add to Wishlist
          </h1>
        </div>
        <p
          className="font-semibold text-base leading-5 text-blackText cursor-pointer"
          onClick={() => setIsEdit(true)}
        >
          {isEdit ? "Done" : "Edit"}
        </p>
      </div>

      <hr />
      <div className="mt-6">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() =>
            handleModal({
              modalType: CREATE_WISHLIST_MOBILE?.value,
              isMobileModal: true,
              modalLabel: CREATE_WISHLIST_MOBILE?.label,
              modalContent: <AddAlbum />,
            })
          }
        >
          <div className="w-[166px] h-[166px] bg-[#E4E4E4] rounded-md flex justify-center items-center">
            <span>{newAlbumIcon}</span>
          </div>

          <p className="font-normal text-xs leading-4 text-darkGray mt-2">
            New List...
          </p>
        </div>
      </div>
      {/* my albums */}
      <div>
        <h2 className="font-semibold text-[20px] leading-6 text-blackText my-6">
          My albums
        </h2>
        {/* albums  */}
        <div className="pt-4 pb-20 grid grid-cols-2 gap-x-3 gap-y-3">
          <div className="flex flex-col">
            <div className="w-full h-[166px] bg-[#E4E4E4] rounded-md relative">
              {isEdit && (
                <div className="w-[20px] h-[20px] absolute top-4 right-4 rounded-full bg-red flex justify-center items-center z-30">
                  <div className="inline-block w-[60%] h-[2px] bg-sky-50"></div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="font-semibold text-base leading-4 text-blackText">
                Building
              </h3>
              <p className="font-normal text-xs leading-4 text-darkGray">23</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full h-[166px] bg-[#E4E4E4] rounded-md relative">
              {isEdit && (
                <div className="w-[20px] h-[20px] absolute top-4 right-4 rounded-full bg-red flex justify-center items-center z-30">
                  <div className="inline-block w-[60%] h-[2px] bg-sky-50"></div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="font-semibold text-base leading-4 text-blackText">
                Building
              </h3>
              <p className="font-normal text-xs leading-4 text-darkGray">23</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full h-[166px] bg-[#E4E4E4] rounded-md relative">
              {isEdit && (
                <div className="w-[20px] h-[20px] absolute top-4 right-4 rounded-full bg-red flex justify-center items-center z-30">
                  <div className="inline-block w-[60%] h-[2px] bg-sky-50"></div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="font-semibold text-base leading-4 text-blackText">
                Building
              </h3>
              <p className="font-normal text-xs leading-4 text-darkGray">23</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full h-[166px] bg-[#E4E4E4] rounded-md relative">
              {isEdit && (
                <div className="w-[20px] h-[20px] absolute top-4 right-4 rounded-full bg-red flex justify-center items-center z-30">
                  <div className="inline-block w-[60%] h-[2px] bg-sky-50"></div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="font-semibold text-base leading-4 text-blackText">
                Building
              </h3>
              <p className="font-normal text-xs leading-4 text-darkGray">23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

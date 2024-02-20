"use client";
import React, { useState } from "react";
import client_Image from "@/assets/images/client.jpg";
import Image from "next/image";
import Conversation from "@/Components/Pages/inbox/Conversation";
import ConversationInbox from "@/Components/Pages/inbox/inbox";

const conversations = [
  {
    isSelectedConversation: false,
  },
  {
    isSelectedConversation: true,
  },
  {
    isSelectedConversation: false,
  },
  {
    isSelectedConversation: false,
  },
  {
    isSelectedConversation: false,
  },
  {
    isSelectedConversation: false,
  },
  {
    isSelectedConversation: false,
  },
  {
    isSelectedConversation: false,
  },
];

export default function Inbox() {
  const [inboxType, setInboxType] = useState("conversations");

  const handleSetInboxType = (value) => {
    setInboxType(value);
  };
  return (
    <div className="flex">
      <div className="max-w-[445px] w-full">
        <div className="flex justify-between items-center py-6 px-8">
          <h2 className="font-semibold text-3xl leading-9 text-blackText">
            Conversation
          </h2>
          <span className="w-[32px] h-[32px] font-semibold text-lg leading-6 bg-softGray rounded-full flex items-center justify-center">
            10
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M1 1.5H17M3 7H15.5M6 12.5H13"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div className="py-4 px-8">
          <div className="flex rounded-full bg-[#F7F7F7] py-[5px] px-2">
            <span
              className={`inline-block py-[5px] px-10 font-normal text-base leading-6 text-blackText  rounded-full cursor-pointer ${
                inboxType === "conversations"
                  ? "bg-white shadow-[2px_2px_4px_0px_#B9B9B940]"
                  : "bg-transparent"
              }`}
              onClick={() => handleSetInboxType("conversations")}
            >
              Conversations
            </span>
            <span
              className={`inline-block py-[5px] px-10 font-normal text-base leading-6 text-blackText  rounded-full cursor-pointer ${
                inboxType === "favorites"
                  ? "bg-white shadow-[2px_2px_4px_0px_#B9B9B940]"
                  : "bg-transparent"
              }`}
              onClick={() => handleSetInboxType("favorites")}
            >
              Favorites
            </span>
          </div>
        </div>

        <div className="py-4 px-8">
          <div className="flex items-center gap-4 py-3 px-5 border border-softGray rounded-full bg-lightGray">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search conversation"
              className="bg-transparent outline-none border-none"
            />
          </div>
        </div>

        <div className="py-4 flex flex-col">
          {conversations?.map((conversation, index) => (
            <Conversation
              key={index}
              isSelectedConversation={conversation?.isSelectedConversation}
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="w-full flex items-center gap-5 py-4 px-8">
          <div className="max-w-[58px] w-full h-[58px] rounded-full overflow-hidden">
            <Image
              src={client_Image}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex justify-between">
            <div>
              <h4 className="font-semibold text-2xl leading-6 text-blackText">
                Amelia Green
              </h4>
              <p className="font-normal text-base leading-5 text-darkGray">
                Address
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="py-[6px] px-6 rounded-full bg-white font-normal text-base leading-5 text-blackText border-[4px] border-lightGray">
                Book a Tour
              </button>
              <button className="py-[6px] px-6 rounded-full bg-white font-normal text-base leading-5 text-blackText border-[4px] border-lightGray">
                Book a Tour
              </button>
              <span className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M13.165 17.7382L8.21496 20.7454L9.51829 15.0755L5.14751 11.2603L10.9138 10.7701L13.165 5.41817L15.4162 10.7701L21.1825 11.2603L16.8117 15.0755L18.115 20.7454M26.33 9.59109L16.8644 8.78301L13.165 0L9.46563 8.78301L0 9.59109L7.17492 15.8571L5.02903 25.17L13.165 20.2287L21.301 25.17L19.1419 15.8571L26.33 9.59109Z"
                    fill="#626262"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <ConversationInbox />
      </div>
    </div>
  );
}

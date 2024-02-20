import React from "react";
import client_Image from "@/assets/images/client.jpg";
import Image from "next/image";

export default function Conversation({ isSelectedConversation }) {
  return (
    <div
      className={`w-full flex gap-5 py-6 px-8 border-b-[1px] border-softGray ${
        isSelectedConversation ? "bg-lightGray" : "bg-white"
      }`}
    >
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
          <h4 className="font-semibold text-xl leading-6 text-blackText">
            Amelia Green
          </h4>
          <p className="font-normal text-lg leading-5 text-darkGray">
            See you soon
          </p>
        </div>
        <span className="font-normal text-lg leading-5 text-darkGray">12h</span>
      </div>
    </div>
  );
}

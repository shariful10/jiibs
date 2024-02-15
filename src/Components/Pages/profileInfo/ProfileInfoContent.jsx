import React from "react";

const ProfileInfoContent = ({ className, lavel, title, children }) => {
  return (
    <div
      className={`flex justify-between items-start border-b pb-6 ${className}`}
    >
      <div className="flex flex-col gap-1 ">
        <h4 className="font-semibold text-blackText">{lavel}</h4>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default ProfileInfoContent;

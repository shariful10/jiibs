import React from "react";

const ProfileInfoContent = ({ className, lavel, title, children, lavelColor }) => {
  return (
    <div
      className={`md:flex justify-between items-start border-b pb-6 ${className}`}
    >
      <div className="flex flex-col gap-1 ">
        <h4 className={`font-semibold ${lavelColor}`}>{lavel}</h4>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default ProfileInfoContent;

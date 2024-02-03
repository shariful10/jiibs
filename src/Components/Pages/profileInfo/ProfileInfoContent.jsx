import React from "react";

const ProfileInfoContent = ({ className, lavel, title, children }) => {
	return (
		<div
			className={`flex justify-between items-center border-b pb-6 text-lg ${className}`}
		>
			<div className="flex flex-col gap-1">
				<h4 className="font-semibold">{lavel}</h4>
				<p>{title}</p>
			</div>
			{children}
		</div>
	);
};

export default ProfileInfoContent;

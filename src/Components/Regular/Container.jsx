import React from "react";

export default function Container({ children, className }) {
	return (
		<div
			className={`w-full px-4 max-[1128px]:max-w-[1024px] max-[1368px]:max-w-[1120px] xl:max-w-[1380px] max-[1920px]:max-w-[1520px] mx-auto ${
				className ? className : null
			}`}
		>
			{children}
		</div>
	);
}

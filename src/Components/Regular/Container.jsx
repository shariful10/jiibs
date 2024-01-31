import React from "react";

export default function Container({ children, className }) {
	return (
		<>
			<section>
				<div
					className={` w-full max-w-[1520px] mx-auto ${
						className ? className : null
					}`}
				>
					{children}
				</div>
			</section>
		</>
	);
}

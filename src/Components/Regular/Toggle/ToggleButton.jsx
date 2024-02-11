import React from "react";

const ToggleButton = (props) => {
	const { isToggled, onToggle } = props;

	return (
		<div className={`flex items-center cursor-pointer`} onClick={onToggle}>
			<div
				className={`w-[51px] h-[31px] rounded-full p-[2px] transition ${
					isToggled ? "bg-primary" : "bg-softGray"
				} overflow-hidden`}
			>
				<div
					style={{ boxShadow: "0px 1px 12px 0px #A6A6A6" }}
					className={`w-[27px] h-full bg-white rounded-full transform ${
						isToggled ? "translate-x-[20px]" : ""
					} transition`}
				></div>
			</div>
		</div>
	);
};

export default ToggleButton;

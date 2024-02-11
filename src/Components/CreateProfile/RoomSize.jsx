import React from "react";
import InputProfileCard from "../Regular/Inputs/InputProfileCard";

const RoomSize = ({ InputImage, selectValue, setSelectValue }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			<InputProfileCard
				image={InputImage}
				title="Alone"
				subTitle="I plan on primarily living alone."
				setSelectValue={setSelectValue}
				selectValue={selectValue}
			/>
			<InputProfileCard
				image={InputImage}
				title="Roommates"
				subTitle="I plan on sharing the space with at least one other person."
				setSelectValue={setSelectValue}
				selectValue={selectValue}
			/>
			<InputProfileCard
				image={InputImage}
				title="Family"
				subTitle="I plan on living with a partner or with children."
				setSelectValue={setSelectValue}
				selectValue={selectValue}
			/>
		</div>
	);
};

export default RoomSize;

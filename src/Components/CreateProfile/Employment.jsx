import React from "react";
import InputProfileCard from "../Regular/Inputs/InputProfileCard";

const Employment = ({ InputImage, selectValue, setSelectValue }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<InputProfileCard
				image={InputImage}
				title="Working Professional"
				subTitle="Select an existing data sheet as your synced data source."
				setSelectValue={setSelectValue}
				selectValue={selectValue}
			/>
			<InputProfileCard
				image={InputImage}
				title="Student"
				subTitle="Select an existing data sheet as your synced data source."
				setSelectValue={setSelectValue}
				selectValue={selectValue}
			/>
			<InputProfileCard
				image={InputImage}
				title="Self-Employed"
				subTitle="Select an existing data sheet as your synced data source."
				setSelectValue={setSelectValue}
				selectValue={selectValue}
			/>
			<InputProfileCard
				image={InputImage}
				title="Employed"
				subTitle="Select an existing data sheet as your synced data source."
				setSelectValue={setSelectValue}
				selectValue={selectValue}
			/>
		</div>
	);
};

export default Employment;

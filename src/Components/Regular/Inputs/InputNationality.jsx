import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// nationality?.name?.common
export default function InputNationality({
	id = "",
	name = "",
	handle,
	dValue = {},
	valid = [],
}) {
	const [searchingData, setSearchingData] = useState([]);
	const [Input, setInput] = useState([]);
	const [showName, setShowName] = useState(dValue?.name?.common || "");
	const [nationality, setNationality] = useState({});

	useEffect(() => {
		if (Input?.length) {
			// console.log("Input 2", Input);
			const api = `https://restcountries.com/v3.1/name/${Input}`;
			fetch(api)
				.then((res) => res.json())
				.then((data) => {
					setSearchingData(data);
				})
				.catch((err) => {
					// console.log("err -> ", err)
				});
		}
	}, [Input]);

	const handleSelectedNationality = (value) => {
		setShowName("");
		const { flags, name, continents, timezones } = value;
		setNationality({ flags, name, continents, timezones });
		setSearchingData([]);
		setShowName(name?.common);
	};

	useEffect(() => {
		handle({
			name: name,
			value: nationality,
		});
	}, [nationality]);

	console.log("nationality errors", valid);

	return (
		<>
			<div>
				<label
					htmlFor={id}
					className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:border-blue-500 focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue ${
						valid?.some((err) => err == name)
							? "!border-red-400 shadow-sm !shadow-red-300"
							: ""
					}`}
				>
					<input
						id={id}
						placeholder="Nationality"
						defaultValue={showName}
						value={showName}
						onChange={(e) => {
							setShowName(e.target.value);
							setInput(e.target.value);
						}}
						className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
					/>
					<IoIosArrowDown />
				</label>

				<div className="relative">
					{searchingData?.length ? (
						<div className="shadow-lg shadow-blue/20 p-3 bg-white rounded-lg absolute top-0 left-0 overflow-y-scroll max-h-[150px] z-50">
							<ul>
								{searchingData.map((item, idx) => (
									<li
										className="p-2 hover:!bg-blue/10 !cursor-pointer rounded-md capitalize"
										key={idx}
										onClick={() => handleSelectedNationality(item)}
									>
										{item?.name?.common}
									</li>
								))}
							</ul>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
}

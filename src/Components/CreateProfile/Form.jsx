import { useRouter } from "next/navigation";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Form = ({ setUserInfo }) => {
	const currentYear = new Date().getFullYear();
	const router = useRouter();

	let days = [];
	for (let i = 1; i <= 31; i++) {
		days.push(i);
	}

	let years = [];
	for (let i = 1950; i <= currentYear; i++) {
		years.push(i);
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();

		const form = e.target;

		const firstName = form.firstName.value;
		const lastName = form.lastName.value;
		const email = form.email.value;

		const date = form.date.value;
		const month = form.month.value;
		const year = form.year.value;
		const birthDate = date + ", " + month + ", " + year;

		const phoneNumber = form.phone.value;

		// const userInfo = { firstName, lastName, email, birthDate, phoneNumber };

		setUserInfo({ firstName, lastName, email, birthDate, phoneNumber });
		form.reset();
		router.push("/success");
	};

	return (
		<div className="">
			<form onSubmit={handleOnSubmit}>
				<div className="md:flex justify-between items-center gap-6 ">
					<div className="flex flex-col gap-3 w-full">
						<span className="text-lg font-semibold">
							<label htmlFor="First_Name">First Name</label>
						</span>
						<input
							name="firstName"
							id="First_Name"
							type="text"
							className="rounded-lg py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray italic"
						/>
					</div>
					<div className="flex flex-col gap-3 w-full">
						<span className="text-lg font-semibold">
							<label htmlFor="Last_Name">Last Name</label>
						</span>
						<input
							name="lastName"
							id="Last_Name"
							type="text"
							className="rounded-lg py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray italic"
						/>
					</div>
				</div>
				{/* Email */}
				<div className="flex flex-col gap-3 w-full mt-6">
					<span className="text-lg font-semibold">
						<label htmlFor="email">Email</label>
					</span>
					<input
						name="email"
						id="email"
						type="text"
						className="rounded-lg py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray italic"
					/>
					<p className="flex items-center gap-1 text-green-500">
						{" "}
						<MdOutlineVerifiedUser size={20} /> Verified
					</p>
				</div>
				{/* Birth Date */}
				<div>
					<div className="flex flex-col gap-3 w-full mt-6">
						<span className="text-lg font-semibold">
							<label htmlFor="birth-date">Birth Date</label>
						</span>
						<div className="md:flex items-center justify-between gap-5">
							<select
								name="date"
								id="date"
								className="rounded-lg py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray w-full"
							>
								<option disabled>Day</option>
								{days?.map((day, index) => (
									<option key={index} value={day}>
										{day}
									</option>
								))}
							</select>
							<select
								name="month"
								id="month"
								className="rounded-lg py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray w-full"
							>
								<option disabled>Month</option>
								<option value="January">January</option>
								<option value="February">February</option>
								<option value="March">March</option>
								<option value="April">April</option>
								<option value="May">May</option>
								<option value="June">June</option>
								<option value="July">July</option>
								<option value="August">August</option>
								<option value="September">September</option>
								<option value="October">October</option>
								<option value="November">November</option>
								<option value="December">December</option>
							</select>
							<select
								name="year"
								id="year"
								className="rounded-lg py-[18px] px-5 border border-[#E4E4E4] focus:outline-none bg-[#F7F7F7] text-darkGray w-full"
							>
								<option disabled>Year</option>
								{years?.map((year, index) => (
									<option key={index} value={year}>
										{year}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Phone */}
				<div className="flex flex-col gap-3 w-full mt-6">
					<span className="text-lg font-semibold">
						<label htmlFor="phone">Phone Number</label>
					</span>
					<div className="flex gap-2 rounded-lg border border-[#E4E4E4] text-darkGray divide-x-2">
						<select
							name="country"
							id="country"
							className="py-[18px] px-2 rounded-l-lg"
						>
							<option value="US">US</option>
							<option value="UK">UK</option>
							<option value="AUS">AUS</option>
							<option value="CA">CA</option>
							<option value="UAE">UAE</option>
						</select>
						<input
							name="phone"
							id="phone"
							type="number"
							className="py-[18px] px-5 focus:outline-none w-full rounded-r-lg"
						/>
					</div>
				</div>

				{/* submit button */}
				<input
					type="submit"
					value="Continue"
					className="font-semibold text-white bg-primary w-full py-3.5 mt-6 rounded-lg cursor-pointer"
				/>
			</form>
		</div>
	);
};

export default Form;

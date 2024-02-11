import React from "react";
import ApartmentCard from "../Regular/ApartmentCard/ApartmentCard";

export default function WishlistDetailsMobile() {
	const apartment = {
		image: "",
		location: "Lenox Hill",
		title: "The Somerset #15M ",
		price: 4495,
		bed: 1,
		bath: 1,
		squareFit: 800,
	};
	return (
		<div>
			<div className="flex justify-between items-center">
				<div className="flex gap-5 items-center py-5">
					<span
						style={{
							boxShadow: "0px 2px 10px 0px #00000014",
						}}
						className="w-[24px] h-[24px] p-2 flex justify-center items-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="6"
							height="12"
							viewBox="0 0 6 12"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M1.04674 5.9357C2.44481 4.35007 3.81129 2.80225 5.14615 1.29361C5.21602 1.21056 5.25498 1.10032 5.25498 0.985691C5.25498 0.871066 5.21602 0.760826 5.14615 0.677776C4.9571 0.439966 4.65804 0.460586 4.52187 0.622791C3.13838 2.19123 1.69107 3.83047 0.179927 5.54118C0.0601782 5.65253 0 5.78449 0 5.9357C0 6.08759 0.0601782 6.22299 0.179927 6.34259L4.72855 11.3641C4.8158 11.4548 4.93092 11.5035 5.04943 11.4998C5.16794 11.4961 5.28049 11.4402 5.36315 11.3441C5.58077 11.0974 5.49688 10.8541 5.39841 10.7386C3.94557 9.14006 2.49542 7.53908 1.04674 5.9357Z"
								fill="#222222"
							/>
						</svg>
					</span>
					<h1 className="font-semibold text-[20px] leading-6 text-blackText">
						Units
					</h1>
				</div>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="21"
						viewBox="0 0 20 21"
						fill="none"
					>
						<path
							d="M18.9999 9.23825H11V1.23822C11 0.686339 10.552 0.238281 9.99991 0.238281C9.44803 0.238281 8.99997 0.686339 8.99997 1.23822V9.23825H0.999936C0.448058 9.23825 0 9.68631 0 10.2382C0 10.7903 0.448058 11.2383 0.999936 11.2383H8.99997V19.2382C8.99997 19.7902 9.44803 20.2383 9.99991 20.2383C10.552 20.2383 11 19.7902 11 19.2382V11.2383H18.9999C19.5519 11.2383 20 10.7903 20 10.2382C20 9.68631 19.5519 9.23825 18.9999 9.23825Z"
							fill="#2AB7DD"
						/>
					</svg>
				</span>
			</div>
			<hr />
			<div className="flex flex-col gap-6 pt-5">
				<ApartmentCard apartment={apartment} />
				<ApartmentCard apartment={apartment} />
				<ApartmentCard apartment={apartment} />
				<ApartmentCard apartment={apartment} />
			</div>
		</div>
	);
}

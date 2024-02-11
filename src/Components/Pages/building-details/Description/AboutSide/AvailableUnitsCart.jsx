import Image from "next/image";

export default function AvailableUnitsCart({ cart }) {
	return (
		<>
			<div className="flex items-start justify-between gap-5 py-6">
				<div className="space-y-2.5 flex-1">
					<strong className="text-[1.375rem] font-normal text-primary">
						{`#${cart?.unitsNumber}`}
					</strong>
					<p className="text-xl font-semibold text-blackText">
						{`$${cart?.amount?.price}`}/
						<span className="text-base">{cart?.amount?.type}</span>
					</p>
					<p className="text-base font-normal"> {cart?.offer} </p>
					<h6 className="text-[0.938rem] font-semibold">
						{" "}
						{cart?.available}{" "}
					</h6>
					<p className="flex items-center justify-start gap-2 text-blackText text-base capitalize">
						{cart?.roomSize?.map((item, idx) => (
							<div
								className="flex items-center justify-start gap-2"
								key={idx}
							>
								<span> {item} </span>
								{idx === cart?.roomSize?.length - 1 ? null : (
									<span className="inline-block w-2 h-2 rounded-full bg-blackText"></span>
								)}
							</div>
						))}
					</p>
				</div>

				<figure className="w-full max-w-48 h-full max-h-[184px] border border-softGray">
					<Image
						className="w-full h-full"
						src={cart?.ArchitectImage}
						width="100"
						height="100"
						alt={cart?.offer}
					/>
				</figure>
			</div>
		</>
	);
}

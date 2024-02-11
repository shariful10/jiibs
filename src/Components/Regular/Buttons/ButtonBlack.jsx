export default function ButtonBlack({
	children,
	className = "",
	styleReverse = false,
	onClick,
}) {
	return (
		<>
			{children ? (
				<>
					<button
						onClick={onClick}
						className={`py-4 px-6 rounded-md min-w-max w-full inline-block text-base font-semibold leading-5 transition duration-300 border-[1.5px] ${
							styleReverse
								? `text-black hover:text-white bg-white hover:bg-black border-black`
								: `text-white hover:text-black bg-black hover:bg-white border-black`
						} ${className ? className : null}`}
					>
						{children}
					</button>
				</>
			) : null}
		</>
	);
}

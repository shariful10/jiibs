export default function ButtonWhite({
  children,
  className,
  icons = false,
  onclick,
}) {
  return (
    <>
      {children ? (
        <>
          <button
            onClick={onclick}
            className={`py-4 px-6 rounded-md min-w-max inline-flex items-center justify-center text-base font-semibold leading-5 transition duration-300 text-black hover:bg-black/5 border gap-4 ${
              className ? className : null
            }`}
          >
            <span>{children}</span>
            {icons ? <span>{arrowIcons}</span> : null}
          </button>
        </>
      ) : null}
    </>
  );
}

// icons
var arrowIcons = (
  <svg
    width={12}
    height={10}
    viewBox="0 0 13 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.99479 8.28781L0.209273 2.42106C-0.0697577 2.13811 -0.0697577 1.67938 0.209273 1.39646L0.884062 0.712204C1.16262 0.429739 1.61407 0.429196 1.89328 0.710996L6.50001 5.3605L11.1067 0.710996C11.3859 0.429196 11.8374 0.429739 12.1159 0.712204L12.7907 1.39646C13.0698 1.67941 13.0698 2.13814 12.7907 2.42106L7.00524 8.28781C6.7262 8.57073 6.27383 8.57073 5.99479 8.28781Z"
      fill="#222222"
    />
  </svg>
);

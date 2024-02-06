export default function ButtonPrimary({
  children = null,
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
            className={`py-4 px-6 rounded-md min-w-max w-full inline-block text-base font-semibold leading-5 transition duration-300  border-[1.5px] ${
              styleReverse
                ? `text-primary hover:text-white bg-white hover:bg-primary border-primary`
                : `text-white hover:text-primary bg-primary hover:bg-white border-primary`
            } ${className ? className : null}`}
          >
            {children}
          </button>
        </>
      ) : null}
    </>
  );
}

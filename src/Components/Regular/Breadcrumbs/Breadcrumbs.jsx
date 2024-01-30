export default function Breadcrumbs({ paths = [] }) {
  return (
    <>
      {paths.length ? (
        <div className="flex gap-[14px] items-center">
          {paths?.map((name, idx) => (
            <>
              <p className="text-base font-normal capitalize" key={idx}>
                {name}
              </p>
              {idx === paths?.length - 1 ? null : (
                <figure className="text-primary">{arrowIcon}</figure>
              )}
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}

// icons
var arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={15}
    viewBox="0 0 10 15"
    fill="none"
  >
    <path
      d="M8.80951 8.04407L2.27608 14.2746C1.96098 14.5751 1.45012 14.5751 1.13505 14.2746L0.373036 13.5479C0.0584736 13.248 0.0578686 12.7618 0.371692 12.4611L5.54955 7.49998L0.371692 2.53892C0.0578686 2.23823 0.0584736 1.75205 0.373036 1.45207L1.13505 0.725371C1.45015 0.424876 1.96101 0.424876 2.27608 0.725371L8.80948 6.95593C9.12458 7.25639 9.12458 7.74357 8.80951 8.04407Z"
      fill="currentColor"
    />
  </svg>
);

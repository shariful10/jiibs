export default function StudioBed({ betData = [] }) {
  return (
    <>
      {betData?.length ? (
        <>
          {betData.map((bet, idx) => (
            <BetStudio key={idx} studio={bet} />
          ))}
        </>
      ) : null}
    </>
  );
}

// mini components
function BetStudio({ studio }) {
  return (
    <div className="capitalize border rounded-lg p-3 w-full">
      <h4 className="text-[21px] font-normal"> {studio?.space}</h4>
      <strong className="text-base font-normal">
        ${studio?.price?.min} - ${studio?.price?.max}
      </strong>
      <p className="text-[15px] font-semibold leading-[22px] text-primary">
        {studio?.available} Available
      </p>
    </div>
  );
}

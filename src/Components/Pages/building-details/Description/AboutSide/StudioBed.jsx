export default function StudioBed({ betData = [] }) {
  return (
    <>
      {betData?.length ? (
        <>
          <div className="flex items-center justify-start gap-3 md:gap-4 lg:gap-6 flex-wrap">
            {betData.map((bet, idx) => (
              <BetStudio key={idx} studio={bet} />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

// mini components
function BetStudio({ studio }) {
  return (
    <div className="capitalize border rounded-lg p-3 min-w-min">
      <h4 className="text-xl md:text-[21px] font-normal"> {studio?.space}</h4>
      <strong className="md:text-base text-xs font-normal">
        ${studio?.price?.min} - ${studio?.price?.max}
      </strong>
      <p className="text-[8px] md:text-[15px] font-semibold leading-[22px] text-primary">
        {studio?.available} Available
      </p>
    </div>
  );
}

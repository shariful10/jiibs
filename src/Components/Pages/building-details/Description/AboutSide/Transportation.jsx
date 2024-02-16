export default function Transportation() {
  return (
    <>
      <div>
        <h2 className="md:text-[26px] xxl:text-3xl font-semibold">
          Transportation
        </h2>
        <div className="mt-5 space-y-6">
          <TableRow
            dots={
              <>
                <RedDot text={1} />
                <RedDot text={2} />
                <RedDot text={3} />
              </>
            }
            wall="Wall St"
            runningTimes="2 minutes"
          />
          <TableRow
            dots={
              <>
                <YellowDot text="N" />
                <YellowDot text="Q" />
                <YellowDot text="R" />
                <YellowDot text="W" />
              </>
            }
            wall="Wall St 2"
            runningTimes="10 minutes"
          />
        </div>
      </div>
    </>
  );
}

// similar components
function TableRow({ wall = null, runningTimes = null, dots = null }) {
  return (
    <div className="flex items-center justify-between gap-3.5">
      {dots ? (
        <div className="flex items-center justify-start gap-3.5"> {dots} </div>
      ) : null}
      {wall ? <div className="text-base"> {wall} </div> : null}
      {runningTimes ? <div> {runningTimes} </div> : null}
    </div>
  );
}
function RedDot({ text }) {
  return (
    <strong className="w-6 h-6 flex items-center justify-center rounded-full bg-red text-white">
      <span> {text} </span>
    </strong>
  );
}
function YellowDot({ text }) {
  return (
    <strong className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow text-black">
      <span> {text} </span>
    </strong>
  );
}

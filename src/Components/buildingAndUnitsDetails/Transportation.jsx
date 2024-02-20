export default function Transportation() {
  return (
    <>
      <div>
        <h2 className="text-xl md:text-[26px] xxl:text-3xl font-semibold">
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
    <div className="grid grid-cols-3 justify-between gap-3.5">
      {dots ? (
        <div className="grid grid-cols-4 lg:grid-cols-6 justify-start gap-3.5 md:gap-1 flex-1">
          {dots}
        </div>
      ) : null}
      {wall ? (
        <div className="text-base flex-1 flex justify-center"> {wall} </div>
      ) : null}
      {runningTimes ? (
        <div className="flex-1 flex justify-end"> {runningTimes} </div>
      ) : null}
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

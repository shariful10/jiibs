import Image from "next/image";

export default function AvailableUnitsCart({ cart }) {
  return (
    <>
      <div className="flex items-start justify-between gap-5 py-6">
        <div className="space-y-2.5 flex-1">
          <strong className="text-lg xxl:text-xl font-bold text-primary">
            {`#${cart?.unitsNumber}`}
          </strong>
          <div className="flex">
            <span className="text-lg xxl:text-xl font-semibold text-blackText">{`$${cart?.amount?.price}`}</span>
            /<span className="text-base">{cart?.amount?.type}</span>
          </div>
          <p className="text-sm xxl:text-base font-normal">{cart?.offer}</p>
          <h6 className="text-sm xxl:text-base font-semibold">
            {cart?.available}
          </h6>
          <p className="flex items-center justify-start gap-2 text-blackText text-base capitalize">
            {cart?.roomSize?.map((item, idx) => (
              <div className="flex items-center justify-start gap-2" key={idx}>
                <span className="text-sm xxl:text-base"> {item} </span>
                {idx === cart?.roomSize?.length - 1 ? null : (
                  <span className="w-[5px] h-[5px] bg-darkGray rounded-full" />
                )}
              </div>
            ))}
          </p>
        </div>

        <figure className="w-full max-w-[140px] h-full max-h-[120px] border border-softGray rounded-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover rounded-lg"
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

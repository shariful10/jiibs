import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="flex text-[32px] leading-[47px] font-semibold text-primary">
        <Link href="/">JIBBS.</Link>
      </div>
    </>
  );
}

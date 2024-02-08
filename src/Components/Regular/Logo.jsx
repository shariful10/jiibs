import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="flex text-[38px] font-semibold text-primary py-3">
        <Link href="/">JIBBS.</Link>
      </div>
    </>
  );
}

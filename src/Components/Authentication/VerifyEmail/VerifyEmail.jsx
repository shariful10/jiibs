import Image from "next/image";
import VerifyEmailImg from "@/assets/verifyEmail.png";
import Link from "next/link";

export default function VerifyEmail() {
  return (
    <div className="p-6">
      <h3 className="hidden sm:block font-semibold text-[36px] leading-[45px] text-blackText text-center mb-5">
        Login to JIBBS
      </h3>
      <div className="flex justify-center ">
        <div className="max-w-[270px] h-[200px]">
          <Image
            src={VerifyEmailImg}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="mb-8 flex flex-col justify-center">
        <h3 className="text-center font-normal text-[24px] leading-6 text-black mb-6">
          Please verify your email
        </h3>
        <p className="text-center font-normal text-base leading-6 text-black">
          We sent an email to :
        </p>
        <p className="text-center mb-5">koolmusicdood@gmail.com</p>
        <p className="font-normal text-base leading-6 text-[#565656]">
          To verify, Please check your inbox and follow the links. For your
          safety, we may also need to verify your phone number
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={"/optimised-mobile"}
          className="w-full font-semibold text-base leading-5 bg-primary py-3 px-8 outline-none border-none rounded-md text-white text-center"
        >
          Change Email
        </Link>

        <button className="text-[#2AB7DD] py-3 px-10 border rounded-md border-[#2AB7DD]">
          Resend Verification Email
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";

const CategoryBox = ({ label, icon }) => {
  return (
    <div className="flex flex-col items-center flex-nowrap justify-start gap-2 cursor-pointer border-b-2 border-b-transparent hover:border-b-black pb-2">
      <Image width={28} src={icon} alt={label} />
      <div className="text-base font-normal leading-6 text-blackText ">
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;

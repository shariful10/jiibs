import Image from "next/image";

const CategoryBox = ({ label, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 border-b-2 border-transparent cursor-pointer focus:border-black">
      <Image width={28} src={icon} alt={label} />
      <div className="text-base font-normal leading-6 text-blackText">
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;

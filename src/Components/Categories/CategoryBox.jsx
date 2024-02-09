import Image from "next/image";

const CategoryBox = ({ label, icon }) => {
  return (
    <div className="flex flex-col items-center flex-nowrap justify-start gap-2 cursor-pointer border-b-[3.5px] border-b-transparent hover:border-b-black pb-2 group">
      <Image width={28} src={icon} alt={label} />
      <div className="text-base font-normal leading-6 text-blackText group-hover:text-black">
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;

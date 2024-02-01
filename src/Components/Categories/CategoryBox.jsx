import Image from "next/image";

const CategoryBox = ({ label, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer">
      <Image width={28} src={icon} alt={label} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
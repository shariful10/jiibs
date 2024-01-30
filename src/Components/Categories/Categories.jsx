import filter from "@/assets/images/categories/filter.svg";
import Image from "next/image";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <div className="container py-9 mx-auto w-full max-w-[1520px]">
      <div className="flex items-center justify-between w-full gap-12">
        <div className="pt-4 flex items-center overflow-x-auto gap-7 justify-between md:gap-0 flex-1">
          {categories.map((category) => (
            <CategoryBox
              key={category.label}
              label={category.label}
              icon={category.icon}
            />
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <button className="px-5 py-4 rounded-[7px] border-[2px] border-softGray flex gap-2 items-center text-[17px] font-semibold">
            <Image src={filter} alt="Filter" />
            Filters
          </button>
          <button className="px-5 py-4 rounded-[7px] border-[2px] border-softGray flex gap-2 items-center text-[17px] font-semibold">
            Optimize
          </button>
          <button className="px-5 py-4 rounded-[7px] border-[2px] border-softGray flex gap-2 items-center text-[17px] font-semibold">
            Sort By
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <div className="w-full flex items-center overflow-x-auto flex-wrap md:gap-7 gap-5">
      {categories.map((category) => (
        <CategoryBox
          key={category.label}
          label={category.label}
          icon={category.icon}
        />
      ))}
    </div>
  );
};

export default Categories;

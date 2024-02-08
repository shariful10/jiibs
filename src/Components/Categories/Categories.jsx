import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <div className="flex items-center overflow-x-auto overflow-y-hidden gap-7 md:gap-5">
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

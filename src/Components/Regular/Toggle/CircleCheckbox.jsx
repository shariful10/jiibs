const Checkbox = (props) => {
  const { isChecked, onChecked } = props;
  return (
    <div className={`flex items-center cursor-pointer`} onClick={onChecked}>
      <div
        className={`relative w-[24px] h-[24px] border rounded-full p-[2px] transition overflow-hidden cursor-pointer ${
          isChecked
            ? "bg-primary border-[#2AB7DD]"
            : "border-[#D1D5DB] bg-transparent"
        } `}
      >
        {isChecked && (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[8px] h-[8px] bg-white rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default Checkbox;

import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const InputProfileCard = ({
  image,
  title,
  subTitle,
  selectValue,
  setSelectValue,
}) => {
  return (
    <div
      className={`border border-gray-300 rounded-lg p-6 bg-white relative ${
        selectValue === title && "border-primary border"
      }`}
      onClick={() => {
        setSelectValue(title);
      }}
    >
      {selectValue === title && (
        <div className="absolute right-5 top-5 text-primary">
          <MdCheckCircle size={25} />
        </div>
      )}
      <Image src={image} alt={title} width={50} height={50} />
      <h3 className="text-xl font-semibold text-blackText my-2">{title}</h3>
      <p className="text-darkGray text-lg">{subTitle}</p>
    </div>
  );
};

export default InputProfileCard;

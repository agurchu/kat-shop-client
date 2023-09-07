import React from "react";
import { useNavigate } from "react-router-dom";

export default function DropDown({ categoriesData, setDropDown }) {
  const navigate = useNavigate();
  const handleSubmit = (item) => {
    navigate(`/products?category=${item.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="pb-4 w-[270px] bg-white absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((item, index) => (
          <div
            key={index}
            className="normalFlex"
            onClick={() => handleSubmit(item)}
          >
            <img
              src={item.image_Url}
              className="w-6 h-6 object-contain ml-3 select-none"
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none">{item.title}</h3>
          </div>
        ))}
    </div>
  );
}

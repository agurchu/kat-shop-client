import React from "react";
import { brandingData, categoriesData } from "../../../static/data";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const handleSubmit = (item) => {
    navigate(`/products?category=${item.title}`);
  };
  return (
    <>
      <div className="section hidden sm:block">
        <div className="bg-white flex justify-between branding my-12 shadow-sm w-full p-5 rounded-md">
          {brandingData &&
            brandingData.map((item, index) => (
              <div key={index} className="flex items-start">
                {item.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm">{item.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div id="categories" className="bg-white p-6 mb-12 rounded-lg section">
        <div className="mainGrid">
          {categoriesData &&
            categoriesData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSubmit(item)}
                className="w-full justify-between normalFlex h-[100px] overflow-hidden cursor-pointer"
              >
                <h5 className="text-lg leading-snug">{item.title}</h5>
                <img
                  src={item.image_Url}
                  alt=""
                  className="w-[120px] object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
